<template>
  <div>
    <!-- <Inspector :enable="enable"> -->
    <template v-if="componentName">
      <div>
        <select v-model="mode">
          <option value="blockquote">Blockquote</option>
          <option value="dropcap">Drop cap</option>
        </select>
      </div>
      <div class="article-content container mx-auto">
        <div :class="`${mode}--${componentName}`">
          <div class="main-content">
            <Paragraph :order="0" />
            <Blockquote />
            <Paragraph :order="1" />
          </div>
        </div>
      </div>
    </template>
    <component v-else :is="Block" :block="{}" />

    <PortalTarget />
    <!-- </Inspector> -->
  </div>
</template>

<script lang="ts">
import '@storipress/block-inspector/inspector.css'

import { Blockquote, Paragraph } from '@storipress/article'
import { PortalTarget } from '@storipress/block'
import { Inspector } from '@storipress/block-inspector'
import Vue from 'vue'

import * as block from './block'

const sty = 'sty'
const le = 'le'

// HACK: make webpack don't generate a hard error when we try to import a non-existing file
import(
  /* webpackMode: "eager" */
  `./block/${sty + le}.scss`
).catch(() => {})

export default Vue.extend({
  components: { PortalTarget, Inspector, Paragraph, Blockquote },

  data() {
    // @ts-expect-error dynamic check for module export
    return { enable: false, Block: block.default, componentName: block.name, mode: 'blockquote' }
  },

  mounted() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'b' && event.ctrlKey) {
        event.preventDefault()
        this.enable = !this.enable
      }
    })
  },
})
</script>

<style lang="scss" src="./article-default.scss" />
