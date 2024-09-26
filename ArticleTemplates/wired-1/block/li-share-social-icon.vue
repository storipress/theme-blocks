<template>
  <li v-if="url" class="flex h-full w-auto pr-4">
    <LinkElement
      :href="url"
      target="_blank"
      rel="noopener"
      class="flex h-12 w-12 items-center justify-start py-2 hover:opacity-90"
    >
      <svg style="width: 24px; height: 24px" class="text-black" viewBox="0 0 24 24">
        <path fill="#fff" :d="svgPath" />
      </svg>
    </LinkElement>
  </li>
</template>

<script>
import { LinkElement } from '@storipress/article'

export default {
  components: { LinkElement },
  props: {
    url: {
      type: String,
      required: true,
    },
    svgPath: {
      type: String,
      required: true,
    },
  },
}
</script>
