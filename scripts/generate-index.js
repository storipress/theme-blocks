import slugify from '@sindresorhus/slugify'
import { ensureDir, stat, statSync, writeFile } from 'fs-extra'
import glob from 'globby'
import { format } from 'prettier'
import { joinSafe, normalizeSafe, resolve } from 'upath'

export function isFileSync(path) {
  try {
    const s = statSync(path)
    return s.isFile()
  } catch {
    return false
  }
}

export async function isFile(path) {
  try {
    const s = await stat(path)
    return s.isFile()
  } catch {
    return false
  }
}

export function collectBlocksSync() {
  const blocks = glob
    .sync(['*/*', '!boilerplate', '!ArticleComponents', '!node_modules', '!scripts', '!tests', '!build', '!dist'], {
      cwd: resolve(__dirname, '..'),
      onlyDirectories: true,
    })
    .map((path) => joinSafe(path, 'block'))
  return blocks.filter((path) => isFile(resolve(__dirname, '..', path, 'index.js')))
}

export async function collectBlocks() {
  const blocks = (
    await glob(['*/*', '!boilerplate', '!scripts', '!tests', '!build', '!dist'], {
      cwd: resolve(__dirname, '..'),
      onlyDirectories: true,
    })
  ).map((path) => normalizeSafe(joinSafe(path, 'block')))
  const missing = new Set()
  for (const block of blocks) {
    if (!(await isFile(resolve(__dirname, '..', block, 'index.js')))) {
      missing.add(block)
    }
  }
  return { blocks, missing }
}

export async function generate() {
  const { blocks, missing } = await collectBlocks()
  const blocksMap = blocks.reduce((map, block) => {
    const [category, name] = block.split('/')
    map[category] ??= []
    map[category].push(name)
    return map
  }, {})

  return format(
    `
    import '../../boilerplate/src/assets/tailwind.css'
    import '../inspector/style.css'
    import '../bootstrap.js'


    import Vue from 'vue'
    import { PortalTarget } from '@storipress/block'
    import Router from 'vue-router'
    import * as inspector from '../inspector/block-inspector.mjs'
    import {Inspector} from '../inspector/block-inspector.mjs'
    

    console.log(inspector)

    window.TestUtils = require('../test-utils.js')

    ${blocks
      .map((block, i) =>
        missing.has(block) ? '' : `import _block${i} from '${resolve(__dirname, './inject-loader')}!../../${block}'`
      )
      .join('\n')}

    Vue.use(Router)

    const Missing = {
      props: ['block'],
      render(h) {
        const parts = this.$route.path.split('/')
        return h('div', \`\${parts[parts.length - 1]} not found or invalid\`)
      }
    }

    function createWrapper(name, component) {
      return {
        name,
        render(h) {
          return h(Inspector, {props: {enable: true}}, [h(component, {props: {block: {id: 'my-block'}}})])
        }
      }
    }

    const blocks = {
      ${Array.from(Object.entries(blocksMap))
        .map(([category, blocks]) => `'${slugify(category)}': ${JSON.stringify(blocks)},`)
        .join('\n')}
    }

    const routes = [
      ${blocks.map((block, i) => {
        const [category, name] = block.split('/')
        return `
      {
        path: '/${slugify(category)}/${name}',
        component: createWrapper(${JSON.stringify(name.replace(/-/g, ''))}, ${
          missing.has(block) ? 'Missing' : `_block${i}`
        }),
      },
      `
      })}
      {
        path: '/:category',
        component: {
          mounted() {
            document.title = this.$route.params.category
          },

          render(h) {
            const {category} = this.$route.params
            const group = blocks[category]

            return h(
              'div',
              [
                h(
                  'ul',
                  { class: 'ml-4 pl-4 list-disc' },
                  group.map((block) => h(
                    'li',
                    {key: block},
                    [
                      h(
                        'router-link',
                        {  props: { to: \`/\${category}/\${block}\` } },
                        [block]
                      ),
                    ]
                  ))
                )
              ]
            )
          }
        }
      },
      {
        path: '/',
        component: {
          mounted() {
            document.title = 'Blocks'
          },

          render(h) {
            const categories = Object.keys(blocks)
            return h(
              'div',
              [
                h(
                  'ul',
                  { class: 'ml-4 pl-4 list-disc' },
                  categories.map((category) => h(
                    'li',
                    { key: category },
                    [
                      h(
                        'router-link',
                        {  props: { to: \`/\${category}\` } },
                        [category]
                      ),
                    ]
                  ))
                )
              ]
            )
          }
        }
      },

    ]

    const router = new Router({routes})

    const app = new Vue({
      router,
      render(h) {
        return h('div', {attrs: {id: 'root'}}, [h('router-view'), h(PortalTarget)])
      }
    })

    app.$mount('#root')
  `,
    { parser: 'babel' }
  )
}

async function writeIndex() {
  await ensureDir(resolve(__dirname, '.tmp'))
  await writeFile(resolve(__dirname, '.tmp/index.js'), await generate())
}

if (require.main === module) {
  writeIndex()
}
