<template>
  <FooterBlock :block="block">
    <Logo />
  </FooterBlock>
</template>

<script>
import { DeskList, FooterBlock, Logo, PageList, Site, TextElement, TextInput } from '@storipress/block'

export default {
  components: {
    FooterBlock,
    TextElement,
    TextInput,
    PageList,
    DeskList,
    Site,
    Logo,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },
}
</script>
