<template>
  <Block :block="block" class="py-6 md:py-12" backgroundColor="f6f6f6">
    <DeskSection class="w-full">
      <div class="flex w-full flex-col lg:flex-row">
        <!-- first 2 articles -->
        <div class="flex flex-col md:mb-16 md:flex-row lg:mb-0 lg:w-1/2">
          <ArticleBlock
            v-slot="{ article }"
            class="flex flex-col-reverse justify-end md:w-1/2 md:px-2.5 lg:flex-col lg:justify-between lg:px-3"
          >
            <!---article 1 text parent--->
            <div class="mt-8 mb-16 md:mb-0 lg:mt-0">
              <TextElement
                component="h3"
                kind="latest-article-title"
                :fontSize="23"
                fontFamily="Jost"
                color="191919"
                class="w-11/12 leading-tight duration-200 line-clamp-3 hover:opacity-75"
              >
                <LinkElement :href="article.url" class="title">{{ article.title }}</LinkElement>
              </TextElement>
              <!-- date + author -->
              <div class="my-8 ml-16 flex md:ml-0">
                <TextElement
                  component="p"
                  kind="latest-article-time"
                  :fontSize="17"
                  fontFamily="Jost"
                  color="b3b3b3"
                  class="mr-8"
                >
                  {{ getDate(article) }}
                </TextElement>
                <ul class="block">
                  <TextElement
                    component="li"
                    kind="featured-article-author"
                    :fontSize="17"
                    fontFamily="Jost"
                    v-for="(author, index) in article.authors"
                    :key="index"
                    class="inline"
                    color="191919"
                  >
                    <LinkElement
                      :href="author.url"
                      class="mr-1 cursor-pointer transition-all duration-200 hover:opacity-75"
                    >
                      {{ author.name }}
                    </LinkElement>
                    <span v-if="index != article.authors.length - 1">/</span>
                  </TextElement>
                </ul>
              </div>
              <TextElement component="p" kind="latest-article-blurb" :fontSize="17" fontFamily="Jost">
                {{ article.blurb }}
              </TextElement>
            </div>
            <div class="mx-auto w-8/12 md:w-full">
              <LinkElement
                :href="article.url"
                class="aspect-w-16 aspect-h-12 block transition-opacity hover:opacity-75"
              >
                <ResponsiveImage
                  :alt="article.headlineAlt"
                  :src="article.headline"
                  class="object-cover"
                  sizes="(max-width: 768px) 70vw, (max-width: 1060px) 45vw, 25vw"
                />
              </LinkElement>
            </div>
          </ArticleBlock>
          <ArticleBlock
            v-slot="{ article }"
            class="flex flex-col-reverse justify-end md:w-1/2 md:flex-col-reverse md:px-2.5 lg:px-3"
          >
            <!---article 2 text parent--->
            <div class="mt-8 mb-16 md:mb-0">
              <TextElement
                component="h3"
                kind="latest-article-title"
                class="w-11/12 leading-tight duration-200 hover:opacity-75"
              >
                <LinkElement :href="article.url" class="title">{{ article.title }}</LinkElement>
              </TextElement>
              <!-- date + author -->
              <div class="my-8 ml-16 flex md:ml-0">
                <TextElement component="p" kind="latest-article-time" class="mr-8">
                  {{ getDate(article) }}
                </TextElement>
                <ul class="block">
                  <TextElement
                    component="li"
                    kind="featured-article-author"
                    v-for="(author, index) in article.authors"
                    :key="index"
                    class="inline"
                  >
                    <LinkElement
                      :href="author.url"
                      class="mr-1 cursor-pointer transition-all duration-200 hover:opacity-75"
                    >
                      {{ author.name }}
                    </LinkElement>
                    <span v-if="index != article.authors.length - 1">/</span>
                  </TextElement>
                </ul>
              </div>
              <TextElement component="p" kind="latest-article-blurb" class="lg:pb-12">
                {{ article.blurb }}
              </TextElement>
            </div>
            <div class="mx-auto w-8/12 md:w-full">
              <LinkElement
                :href="article.url"
                class="aspect-w-16 aspect-h-12 block transition-opacity hover:opacity-75"
              >
                <ResponsiveImage
                  :alt="article.headlineAlt"
                  :src="article.headline"
                  class="object-cover"
                  sizes="(max-width: 768px) 70vw, (max-width: 1060px) 45vw, 25vw"
                />
              </LinkElement>
            </div>
          </ArticleBlock>
        </div>
        <!-- last two articles -->
        <div class="flex flex-col md:mb-16 md:flex-row lg:mb-0 lg:w-1/2">
          <!---article 3--->
          <ArticleBlock
            v-slot="{ article }"
            class="flex flex-col-reverse justify-end md:w-1/2 md:px-2.5 lg:flex-col lg:justify-between lg:px-3"
          >
            <!---article 3 text parent--->
            <div class="mt-8 mb-16 md:mb-0 lg:mt-0">
              <TextElement
                component="h3"
                kind="latest-article-title"
                class="w-11/12 leading-tight duration-200 hover:opacity-75"
              >
                <LinkElement :href="article.url" class="title">{{ article.title }}</LinkElement>
              </TextElement>
              <!-- date + author -->
              <div class="my-8 ml-16 flex md:ml-0">
                <TextElement component="p" kind="latest-article-time" class="mr-8">
                  {{ getDate(article) }}
                </TextElement>
                <ul class="block">
                  <TextElement
                    component="li"
                    kind="featured-article-author"
                    v-for="(author, index) in article.authors"
                    :key="index"
                    class="inline"
                  >
                    <LinkElement
                      :href="author.url"
                      class="mr-1 cursor-pointer transition-all duration-200 hover:opacity-75"
                    >
                      {{ author.name }}
                    </LinkElement>
                    <span v-if="index != article.authors.length - 1">/</span>
                  </TextElement>
                </ul>
              </div>
              <TextElement component="p" kind="latest-article-blurb">
                {{ article.blurb }}
              </TextElement>
            </div>
            <div class="mx-auto w-8/12 md:w-full">
              <LinkElement
                :href="article.url"
                class="aspect-w-16 aspect-h-12 block transition-opacity hover:opacity-75"
              >
                <ResponsiveImage
                  :alt="article.headlineAlt"
                  :src="article.headline"
                  class="object-cover"
                  sizes="(max-width: 768px) 70vw, (max-width: 1060px) 45vw, 25vw"
                />
              </LinkElement>
            </div>
          </ArticleBlock>

          <!--- article 4 text parent --->
          <ArticleBlock
            v-slot="{ article }"
            class="flex flex-col-reverse justify-end md:w-1/2 md:flex-col-reverse md:px-2.5 lg:px-3"
          >
            <div class="mt-8 mb-16 md:mb-0">
              <TextElement
                component="h3"
                kind="latest-article-title"
                class="w-11/12 leading-tight duration-200 hover:opacity-75"
              >
                <LinkElement :href="article.url" class="title">{{ article.title }}</LinkElement>
              </TextElement>
              <!-- date + author -->
              <div class="my-8 ml-16 flex md:ml-0">
                <TextElement component="p" kind="latest-article-time" class="mr-8">
                  {{ getDate(article) }}
                </TextElement>
                <ul class="block">
                  <TextElement
                    component="li"
                    kind="featured-article-author"
                    v-for="(author, index) in article.authors"
                    :key="index"
                    class="inline"
                  >
                    <LinkElement
                      :href="author.url"
                      class="mr-1 cursor-pointer transition-all duration-200 hover:opacity-75"
                    >
                      {{ author.name }}
                    </LinkElement>
                    <span v-if="index != article.authors.length - 1">/</span>
                  </TextElement>
                </ul>
              </div>
              <TextElement component="p" kind="latest-article-blurb" class="lg:pb-12">
                {{ article.blurb }}
              </TextElement>
            </div>
            <div class="mx-auto w-8/12 md:w-full">
              <LinkElement
                :href="article.url"
                class="aspect-w-16 aspect-h-12 block transition-opacity hover:opacity-75"
              >
                <ResponsiveImage
                  :alt="article.headlineAlt"
                  :src="article.headline"
                  class="object-cover"
                  sizes="(max-width: 768px) 70vw, (max-width: 1060px) 45vw, 25vw"
                />
              </LinkElement>
            </div>
          </ArticleBlock>
        </div>
      </div>
    </DeskSection>
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
      return month + '.' + date
    },
  },
}
</script>
