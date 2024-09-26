<template>
  <Block class="py-6 md:py-12" :block="block" backgroundColor="f6f6f6">
    <!-- <div class="flex flex-col mx-1 md:mx-10 lg:flex-row lg:justify-between lg:mx-auto"> -->
    <div class="main-container">
      <DeskSection class="mb-12 flex flex-col lg:mb-0" :order="0">
        <!-- CONTAINS THE ARTICLES lg:justify-between-->
        <div class="md:flex md:flex-col lg:h-full lg:justify-between">
          <div class="lg:w-full lg:flex-row lg:border-t lg:pt-4">
            <ArticleBlock v-slot="{ article }" class="mb-6 flex pb-8">
              <LinkElement :href="article.url" class="w-1/2">
                <div class="aspect-w-16 aspect-h-9">
                  <ResponsiveImage
                    :src="article.headline"
                    class="image-hover-effect object-cover duration-200 hover:opacity-75"
                    :alt="article.headlineAlt"
                    sizes="(max-width: 768px) 50vw, (max-width: 1060px) 50vw, 15vw"
                  />
                </div>
              </LinkElement>
              <div class="flex w-1/2 flex-col items-start px-3">
                <TextElement
                  component="h3"
                  kind="bottom-article-title"
                  fontFamily="Jost"
                  class="mb-2 duration-200 line-clamp-4 hover:opacity-75"
                  :fontSize="15"
                  :lineHeight="1.1"
                  bold
                >
                  <LinkElement :href="article.url">{{ article.title }}</LinkElement>
                </TextElement>
                <TextElement component="p" kind="bottom-article-date" fontFamily="Jost" :fontSize="13" color="bfbfbf">
                  {{ getDate(article) }}
                </TextElement>
              </div>
            </ArticleBlock>
            <ArticleBlock v-slot="{ article }" class="flex">
              <LinkElement :href="article.url" class="w-1/2">
                <div class="aspect-w-16 aspect-h-9">
                  <ResponsiveImage
                    :src="article.headline"
                    class="image-hover-effect object-cover duration-200 hover:opacity-75"
                    :alt="article.headlineAlt"
                    sizes="(max-width: 768px) 50vw, (max-width: 1060px) 50vw, 15vw"
                  />
                </div>
              </LinkElement>
              <div class="flex w-1/2 flex-col items-start px-3">
                <TextElement
                  component="h3"
                  kind="bottom-article-title"
                  class="mb-2 duration-200 line-clamp-4 hover:opacity-75"
                >
                  <LinkElement :href="article.url">{{ article.title }}</LinkElement>
                </TextElement>
                <TextElement component="p" kind="bottom-article-date">
                  {{ getDate(article) }}
                </TextElement>
              </div>
            </ArticleBlock>
          </div>
        </div>
      </DeskSection>
      <DeskSection class="mb-12 flex flex-col lg:mb-0" :order="1">
        <!-- CONTAINS THE ARTICLES lg:justify-between-->
        <div class="md:flex md:flex-col lg:h-full lg:justify-between">
          <!-- CONTAINS 2nd and 3rd Articles -->
          <div class="lg:w-full lg:flex-row lg:border-t lg:pt-4">
            <ArticleBlock v-slot="{ article }" class="mb-6 flex pb-8">
              <LinkElement :href="article.url" class="w-1/2">
                <div class="aspect-w-16 aspect-h-9">
                  <ResponsiveImage
                    :src="article.headline"
                    class="image-hover-effect object-cover duration-200 hover:opacity-75"
                    :alt="article.headlineAlt"
                    sizes="(max-width: 768px) 50vw, (max-width: 1060px) 50vw, 15vw"
                  />
                </div>
              </LinkElement>
              <div class="flex w-1/2 flex-col items-start px-3">
                <TextElement
                  component="h3"
                  kind="bottom-article-title"
                  class="mb-2 duration-200 line-clamp-4 hover:opacity-75"
                >
                  <LinkElement :href="article.url">{{ article.title }}</LinkElement>
                </TextElement>
                <TextElement component="p" kind="bottom-article-date">
                  {{ getDate(article) }}
                </TextElement>
              </div>
            </ArticleBlock>
            <ArticleBlock v-slot="{ article }" class="flex">
              <LinkElement :href="article.url" class="w-1/2">
                <div class="aspect-w-16 aspect-h-9">
                  <ResponsiveImage
                    :src="article.headline"
                    class="image-hover-effect object-cover duration-200 hover:opacity-75"
                    :alt="article.headlineAlt"
                    sizes="(max-width: 768px) 50vw, (max-width: 1060px) 50vw, 15vw"
                  />
                </div>
              </LinkElement>
              <div class="flex w-1/2 flex-col items-start px-3">
                <TextElement
                  component="h3"
                  kind="bottom-article-title"
                  class="mb-2 duration-200 line-clamp-4 hover:opacity-75"
                >
                  <LinkElement :href="article.url">{{ article.title }}</LinkElement>
                </TextElement>
                <TextElement component="p" kind="bottom-article-date">
                  {{ getDate(article) }}
                </TextElement>
              </div>
            </ArticleBlock>
          </div>
        </div>
      </DeskSection>
      <DeskSection class="mb-12 flex flex-col lg:mb-0" :order="2">
        <div class="md:flex md:flex-col lg:h-full lg:justify-between">
          <div class="lg:w-full lg:flex-row lg:border-t lg:pt-4">
            <ArticleBlock v-slot="{ article }" class="mb-6 flex pb-8">
              <LinkElement :href="article.url" class="w-1/2">
                <div class="aspect-w-16 aspect-h-9">
                  <ResponsiveImage
                    :src="article.headline"
                    class="image-hover-effect object-cover duration-200 hover:opacity-75"
                    :alt="article.headlineAlt"
                    sizes="(max-width: 768px) 50vw, (max-width: 1060px) 50vw, 15vw"
                  />
                </div>
              </LinkElement>
              <div class="flex w-1/2 flex-col items-start px-3">
                <TextElement
                  component="h3"
                  kind="bottom-article-title"
                  class="mb-2 duration-200 line-clamp-4 hover:opacity-75"
                >
                  <LinkElement :href="article.url">{{ article.title }}</LinkElement>
                </TextElement>
                <TextElement component="p" kind="bottom-article-date">
                  {{ getDate(article) }}
                </TextElement>
              </div>
            </ArticleBlock>
            <ArticleBlock v-slot="{ article }" class="flex">
              <LinkElement :href="article.url" class="w-1/2">
                <div class="aspect-w-16 aspect-h-9">
                  <ResponsiveImage
                    :src="article.headline"
                    class="image-hover-effect object-cover duration-200 hover:opacity-75"
                    :alt="article.headlineAlt"
                    sizes="(max-width: 768px) 50vw, (max-width: 1060px) 50vw, 15vw"
                  />
                </div>
              </LinkElement>
              <div class="flex w-1/2 flex-col items-start px-3">
                <TextElement
                  component="h3"
                  kind="bottom-article-title"
                  class="mb-2 duration-200 line-clamp-4 hover:opacity-75"
                >
                  <LinkElement :href="article.url">{{ article.title }}</LinkElement>
                </TextElement>
                <TextElement component="p" kind="bottom-article-date">
                  {{ getDate(article) }}
                </TextElement>
              </div>
            </ArticleBlock>
          </div>
        </div>
      </DeskSection>
    </div>
  </Block>
</template>

<script>
import { ArticleBlock, Block, DeskSection, LinkElement, ResponsiveImage, TextElement } from '@storipress/block'

export default {
  components: {
    ArticleBlock,
    Block,
    DeskSection,
    TextElement,
    LinkElement,
    ResponsiveImage,
  },
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getDate(article) {
      const month = (article.time.getMonth() + 1).toString().padStart(2, '0')
      const date = article.time.getDate().toString().padStart(2, '0')
      const year = article.time.getFullYear().toString()
      return date + '.' + month + '.' + year
    },
  },
}
</script>

<style lang="scss" scoped>
.image-hover-effect:hover {
  filter: grayscale(0.5) contrast(1.2);
}

.main-container {
  @apply grid flex-col md:mx-auto lg:grid-cols-3 lg:justify-between;

  gap: 30px;
}
</style>
