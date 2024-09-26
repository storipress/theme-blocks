import slugify from '@sindresorhus/slugify'

import { collectBlocksSync } from '../../scripts/generate-index'

const paths = collectBlocksSync()

export const blocks = paths.map((path) => {
  const [category, name] = path.split('/')
  const fullName = `${category}/${name}`
  const url = `http://localhost:8080/#/${slugify(category)}/${slugify(name)}`
  return [fullName, { url, fullPath: require.resolve(`../../${fullName}/block`) }]
})
