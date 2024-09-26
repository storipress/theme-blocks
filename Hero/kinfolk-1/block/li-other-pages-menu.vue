<template>
  <li class="mb-1 w-1/2 md:mb-0 md:w-full">
    <LinkElement :key="text" :href="url" class="p-2 hover:opacity-70">
      <TextElement
        style="height: max-content"
        class="max-w-full"
        kind="side-menu-page"
        :fontSize="{ xs: 20, md: 35 }"
        component="span"
        fontFamily="Jost"
        color="000"
        :lineHeight="1.1"
        >{{ text }}</TextElement
      >
    </LinkElement>
  </li>
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
  },
}
</script>
