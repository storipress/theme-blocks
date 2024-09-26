<template>
  <Block :block="block" full>
    <RawHtml kind="code" />
  </Block>
</template>

<script>
import { Block, RawHtml } from '@storipress/block'

export default {
  components: { Block, RawHtml },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },
}
</script>
