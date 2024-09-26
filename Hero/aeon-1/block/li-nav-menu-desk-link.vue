<template>
  <div class="flex flex-row flex-nowrap">
    <LinkElement :href="url">
      <TextElement
        class="whitespace-nowrap tracking-widest"
        fontFamily="Jost"
        :fontSize="{ xs: 13, md: 15 }"
        kind="nav-desk-link"
        component="div"
        color="000"
        :lineHeight="1.0"
        >{{ text }}</TextElement
      >
    </LinkElement>
    <!---slash / spacer--->
    <TextElement
      v-show="showEndSeparator"
      class="flex w-9 justify-center md:w-10"
      fontFamily="Standard"
      :fontSize="{ xs: 10, md: 12 }"
      kind="menu-text-seperator"
      component="div"
      color="00000059"
      align="center"
      :lineHeight="1.0"
      >/</TextElement
    >
  </div>
</template>

<script>
import { LinkElement, TextElement } from '@storipress/block'
export default {
  components: { LinkElement, TextElement },
  props: {
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    showEndSeparator: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
