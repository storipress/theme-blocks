<template>
  <ArticleBlock v-slot="{ article }" class="my-4 md:mb-8">
    <div class="image flex-1">
      <div class="aspect-w-11 aspect-h-6 mb-2" :class="{ 'md:mr-4': index !== 1 }">
        <LinkElement class="overflow-hidden" :href="article.url">
          <ResponsiveImage
            class="h-full object-cover transition duration-500 ease-in hover:scale-105 hover:transform"
            sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
            :src="article.headline"
          />
        </LinkElement>
      </div>
    </div>
    <div class="details flex-1">
      <LinkElement :href="article.url" class="block">
        <TextElement
          component="h2"
          :kind="`deskSection-${deskSection}__article-title`"
          :fontSize="{ xs: 20, md: 24 }"
          :lineHeight="1.2"
          class=""
        >
          {{ article.title }}
        </TextElement>
      </LinkElement>
      <div class="metadata flex items-center pt-2 pb-1">
        <LinkElement :href="article.deskUrl" class="">
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
    </div>
  </ArticleBlock>
</template>

<script>
import { ArticleBlock, Authors, LinkElement, ResponsiveImage, TextElement } from '@storipress/block'

export default {
  name: 'ImageItem',

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
