<template>
  <ArticleBlock v-slot="{ article }" class="image-article">
    <LinkElement :href="article.url">
      <div class="aspect-w-1 aspect-h-1 mb-4">
        <ResponsiveImage
          class="h-full w-full object-cover"
          :src="article.headline"
          :alt="article.headlineAlt"
          sizes="(max-width: 768px) 80vw, (max-width: 1060px) 40vw, 40vw"
        />
      </div>
    </LinkElement>
    <div class="image-article-info-wrapper">
      <LinkElement :href="article.deskUrl">
        <TextElement
          class="mb-1.5 tracking-widest"
          component="h4"
          kind="image-desk-title"
          fontFamily="Jost"
          :fontSize="{ xs: 12, md: 12, lg: 12 }"
          :bold="true"
        >
          {{ desk }}
        </TextElement>
      </LinkElement>
      <LinkElement :href="article.url">
        <div class="mt-4 mb-2 md:mt-0">
          <TextElement
            component="h3"
            class="underline-effect inline"
            kind="image-article-title"
            fontFamily="Jost"
            :fontSize="{ xs: 24, md: 24, lg: 24 }"
            :lineHeight="1.0"
            :bold="true"
          >
            {{ article.title }}
          </TextElement>
          <TextElement
            component="p"
            class="underline-effect inline"
            kind="image-article-blurb"
            fontFamily="Jost"
            :fontSize="{ xs: 24, md: 24, lg: 24 }"
            :lineHeight="1.0"
          >
            {{ article.blurb }}
          </TextElement>
        </div>
      </LinkElement>
      <span>
        <TextElement component="span" class="mr-[0.05em]" kind="article-author"> By </TextElement>
        <Authors
          authorComponent="span"
          :authors="article.authors"
          kind="article-author"
          separator=", "
          class="inline"
        />
      </span>
    </div>
  </ArticleBlock>
</template>

<script>
import { ArticleBlock, Authors, LinkElement, ResponsiveImage, TextElement } from '@storipress/block'

export default {
  components: {
    ArticleBlock,
    TextElement,
    Authors,
    LinkElement,
    ResponsiveImage,
  },
  props: {
    desk: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.image-box {
  @screen md {
    flex: 6;
  }
}

.image-article:hover .image-hover-effect {
  @apply transition-opacity;

  opacity: 0.9;
}

.image-article:hover .underline-effect {
  @apply hover:opacity-75;
}

.image-article {
  @apply mb-12;
}

.image-wrapper {
  @apply mb-4;

  padding-bottom: 100%;
}
</style>
