<template>
  <div>
    <TextElement
      component="h2"
      kind="article-item-title"
      color="070707"
      :fontSize="{ xs: 17, md: 21 }"
      :bold="true"
      :lineHeight="1.2"
      class="mb-3 hover:opacity-75"
      fontFamily="Jost"
    >
      <LinkElement :href="article.url">
        {{ article.title }}
      </LinkElement>
    </TextElement>
    <TextElement
      component="div"
      kind="article-meta-info"
      fontFamily="Jost"
      :fontSize="14"
      color="282828"
      :line-height="1.3"
    >
      <TextElement
        component="h4"
        class="inline-flex hover:opacity-75"
        kind="article-item-desk"
        color="0787b1"
        fontFamily="Jost"
      >
        <LinkElement :href="article.deskUrl">{{ article.desk }}</LinkElement>
      </TextElement>
      <div class="flex items-center gap-x-1">
        <TextElement :bold="true" class="inline-flex" component="span" kind="article-authors">by</TextElement>
        <Authors authorComponent="span" :authors="article.authors" kind="article-authors" separator=", " />
      </div>
    </TextElement>
  </div>
</template>

<script>
import { Authors, LinkElement, TextElement } from '@storipress/block'

export default {
  components: {
    TextElement,
    LinkElement,
    Authors,
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>
