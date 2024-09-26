<template>
  <ArticleBlock v-slot="{ article }" class="mb-4 md:mb-8 md:mt-0">
    <div class="image flex-1">
      <div class="aspect-w-11 aspect-h-6 mb-2">
        <LinkElement class="overflow-hidden" :href="article.url">
          <ResponsiveImage
            class="h-full object-cover transition duration-500 ease-in hover:scale-105 hover:transform"
            sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
            :src="article.headline"
          />
        </LinkElement>
      </div>
    </div>
    <div class="details flex-1 pt-2 md:pt-0">
      <LinkElement :href="article.url" class="block">
        <TextElement
          component="h2"
          :kind="`deskSection-${deskSection}__article-title`"
          :font-size="{ xs: 20, md: 24 }"
          :line-height="1.2"
        >
          {{ article.title }}
        </TextElement>
      </LinkElement>
      <div class="metadata flex flex-wrap items-center gap-x-2 pt-2 pb-1">
        <LinkElement :href="article.deskUrl">
          <TextElement
            component="h2"
            :kind="`deskSection-${deskSection}__desk-title`"
            color="000"
            :font-size="14"
            bold
            class="hover:underline"
          >
            {{ article.desk }}
          </TextElement>
        </LinkElement>
        <Authors
          :authors="article.authors"
          author-component="span"
          color="000"
          class="hover:underline"
          :font-size="14"
          :kind="`deskSection-${deskSection}__article-author`"
          separator=", "
        />
      </div>
      <div class="blurb">
        <TextElement
          component="h4"
          :kind="`deskSection-${deskSection}__article-blurb`"
          :font-size="{ xs: 16 }"
          class="pb-4"
        >
          {{ article.blurb }}
        </TextElement>
      </div>
    </div>
  </ArticleBlock>
</template>

<script>
import { ArticleBlock, Authors, LinkElement, ResponsiveImage, TextElement } from '@storipress/block'

export default {
  components: {
    ArticleBlock,
    Authors,
    LinkElement,
    ResponsiveImage,
    TextElement,
  },

  props: {
    index: {
      type: Number,
    },
    deskSection: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.image:hover + .details * {
  @apply opacity-80 transition-all duration-300 ease-in-out;
}
.details a:hover {
  @apply opacity-70 transition-all duration-300  ease-in-out;
}
.details a:hover + .metadata * {
  @apply opacity-70 transition-all duration-300 ease-in-out;
}
</style>
