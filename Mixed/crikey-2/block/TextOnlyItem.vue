<template>
  <ArticleBlock class="details" v-slot="{ article }">
    <LinkElement :href="article.url" class="block">
      <TextElement
        component="h2"
        :kind="`deskSection-${deskSection}__article-title`"
        :fontSize="{ xs: 20, md: 24 }"
        :lineHeight="1.2"
      >
        {{ article.title }}
      </TextElement>
    </LinkElement>
    <div class="metadata flex items-center pt-2 pb-1">
      <LinkElement :href="article.deskUrl">
        <TextElement
          component="h2"
          :kind="`deskSection-${deskSection}__desk-title`"
          color="000"
          :fontSize="14"
          bold
          class="hover:underline"
        >
          {{ article.desk }}
        </TextElement>
      </LinkElement>
      <div class="before:content-['\00a0\2022']">
        <Authors
          :authors="article.authors"
          authorComponent="span"
          color="000"
          class="hover:underline"
          :fontSize="14"
          :kind="`deskSection-${deskSection}__article-author`"
          separator=", "
        />
      </div>
    </div>
  </ArticleBlock>
</template>

<script>
import { ArticleBlock, Authors, LinkElement, TextElement } from '@storipress/block'

export default {
  name: 'TextOnlyItem',

  components: {
    ArticleBlock,
    Authors,
    LinkElement,
    TextElement,
  },

  props: {
    deskSection: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.details a:hover {
  @apply opacity-70 transition duration-300;
}

.details a:hover + .metadata * {
  @apply opacity-70 transition duration-300;
}
</style>
