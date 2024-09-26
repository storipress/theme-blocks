<template>
  <div>
    <ArticleBlock
      class="article mb-5 flex flex-col items-center justify-center grayscale filter transition duration-300 hover:filter-none md:flex-row md:justify-start"
      v-slot="{ article }"
    >
      <div class="mr-0 mb-4 min-w-[140px] md:mr-5 md:mb-0 md:min-w-[80px]">
        <div class="aspect-w-1 aspect-h-1">
          <LinkElement :href="article.url">
            <ResponsiveImage
              class="h-full rounded-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
              :src="article.headline"
            />
          </LinkElement>
        </div>
      </div>
      <div class="overflow-hidden text-center md:text-left">
        <LinkElement :href="article.url">
          <TextElement
            component="h2"
            kind="deskSection-one__article-title"
            color="000"
            :fontSize="22"
            :lineHeight="1"
            bold
            class="overflow-hidden text-ellipsis"
          >
            {{ article.title }}
          </TextElement>
        </LinkElement>
        <LinkElement :href="article.deskUrl">
          <TextElement component="h2" kind="deskSection-one__desk-title" color="000" :fontSize="15">
            {{ article.desk }}
          </TextElement>
        </LinkElement>
        <Authors
          :authors="article.authors"
          authorComponent="div"
          color="000"
          :fontSize="12"
          kind="deskSection-one__article-author"
          separator=", "
          class="mt-[0.3rem]"
        />
      </div>
    </ArticleBlock>
  </div>
</template>

<script>
import { ArticleBlock, Authors, LinkElement, ResponsiveImage, TextElement } from '@storipress/block'

export default {
  name: 'ImageCircleItem',

  components: {
    ArticleBlock,
    Authors,
    LinkElement,
    ResponsiveImage,
    TextElement,
  },
}
</script>

<style lang="scss" scoped>
.deskSection-one__article-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
