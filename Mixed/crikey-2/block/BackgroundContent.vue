<template>
  <div>
    <LinkElement :href="article.url">
      <TextElement
        component="h2"
        :kind="`deskSection-${deskSection}__article-title`"
        :fontSize="{ xs: 16 }"
        :lineHeight="1.2"
        class="mb-1 hover:opacity-70"
        bold
      >
        {{ article.title }}
      </TextElement>
    </LinkElement>
    <LinkElement :href="article.url">
      <TextElement
        component="h4"
        :kind="`deskSection-${deskSection}__article-blurb`"
        :fontSize="{ xs: 16 }"
        :lineHeight="1.2"
        class="pb-4 hover:opacity-70"
      >
        {{ article.blurb }}
      </TextElement>
    </LinkElement>
  </div>
</template>

<script>
import { LinkElement, TextElement } from '@storipress/block'

export default {
  name: 'BackgroundItem',

  components: {
    LinkElement,
    TextElement,
  },

  props: {
    deskSection: {
      type: String,
    },
    article: {
      type: Object,
    },
  },
}
</script>
