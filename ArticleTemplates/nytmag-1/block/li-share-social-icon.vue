<template>
  <li class="mr-4 inline">
    <LinkElement :href="url" rel="noopener" target="_blank" class="social-inline-link">
      <ColorArea kind="social-bg-hover" class="absolute inset-0 h-full w-full" backgroundColor="FFFFFF" />
      <ColorArea kind="social-bg" class="absolute inset-0 h-full w-full" backgroundColor="E4E4E7" />
      <svg style="width: 28px; height: 28px" class="relative p-1.5" viewBox="0 0 24 24">
        <path fill="#7c7c7c" :d="svgPath" />
      </svg>
    </LinkElement>
  </li>
</template>

<script>
import { ColorArea, Template, LinkElement } from '@storipress/article'

export default Template.extend({
  components: { ColorArea, LinkElement },
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
})
</script>

<style lang="scss" scoped>
.social-inline-link {
  @apply relative inline-block overflow-hidden rounded-full border border-gray-200 hover:opacity-75;

  &:hover .social-bg {
    @apply opacity-0;
  }
}
</style>
