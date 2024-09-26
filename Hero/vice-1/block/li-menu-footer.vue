<template>
  <li :class="{ 'pb-2.5 md:py-2.5': index === 0, 'py-2.5': index != 0 }" class="mr-4 flex">
    <LinkElement :href="url" class="flex"
      ><TextElement
        class="w-max hover:opacity-75"
        component="span"
        kind="menu-footer-link"
        color="000"
        :font-size="{ xs: 11 }"
        font-family="Jost"
        :lineHeight="1.3"
        underline
        >{{ text }}</TextElement
      ></LinkElement
    >
  </li>
</template>

<script>
import { LinkElement, TextElement } from '@storipress/block'

export default {
  components: {
    LinkElement,
    TextElement,
  },

  props: {
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
}
</script>
