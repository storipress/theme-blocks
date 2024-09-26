<template>
  <Block class="py-8 md:py-16" :block="block" backgroundColor="f6f6f6">
    <DeskSection class="my-desk flex flex-col gap-6 md:flex-row" :order="0">
      <div class="order-2 flex w-full flex-row gap-x-4 gap-y-6 md:order-1 md:w-3/12 md:flex-col lg:w-2/12">
        <ArticleBlock v-slot="{ article }" class="w-1/2 md:w-full">
          <div class="h-60 overflow-hidden md:h-auto">
            <LinkElement :href="article.url" class="mb-2 flex h-full items-end">
              <ResponsiveImage
                class="object-cover"
                :src="article.headline"
                :alt="article.headlineAlt"
                sizes="(max-width: 768px) 40vw, (max-width: 1060px) 30vw, 20vw"
              />
            </LinkElement>
          </div>
          <LinkElement :href="article.deskUrl">
            <TextElement component="h4" align="left" kind="article-desk-3" :fontSize="11">
              {{ article.desk }}
            </TextElement>
          </LinkElement>
          <LinkElement :href="article.url">
            <TextElement
              component="h3"
              class="mt-2 ml-auto w-11/12"
              fontFamily="Jost"
              align="right"
              :lineHeight="1.1"
              kind="article-title-3"
            >
              {{ article.title }}
            </TextElement>
          </LinkElement>
        </ArticleBlock>
        <ArticleBlock v-slot="{ article }" class="w-1/2 md:w-full">
          <div class="h-60 overflow-hidden md:h-auto">
            <LinkElement :href="article.url" class="mb-2 flex h-full items-end">
              <ResponsiveImage
                class="object-cover"
                :src="article.headline"
                :alt="article.headlineAlt"
                sizes="(max-width: 768px) 40vw, (max-width: 1060px) 30vw, 20vw"
              />
            </LinkElement>
          </div>
          <LinkElement :href="article.deskUrl">
            <TextElement component="h4" kind="article-desk-3">
              {{ article.desk }}
            </TextElement>
          </LinkElement>
          <LinkElement :href="article.url">
            <TextElement component="h3" class="mt-2 ml-auto w-11/12" kind="article-title-3">
              {{ article.title }}
            </TextElement>
          </LinkElement>
        </ArticleBlock>
      </div>
      <div class="order-1 flex w-full flex-row md:order-2 md:w-6/12 md:flex-col lg:w-8/12">
        <ArticleBlock
          v-slot="{ article }"
          class="col-span-6 col-start-1 row-start-2 row-end-2 w-full self-start md:col-span-3 md:row-start-1 md:mb-4 lg:col-span-2"
        >
          <div class="mb-5 flex flex-col md:flex-row">
            <LinkElement :href="article.deskUrl">
              <TextElement component="h4" align="left" class="mt-1 mb-3" kind="article-desk-2" :fontSize="11">
                {{ article.desk }}
              </TextElement>
            </LinkElement>
            <LinkElement :href="article.url">
              <TextElement
                component="h1"
                :fontSize="{ xs: 36, md: 40, lg: 46 }"
                align="right"
                fontFamily="Jost"
                :lineHeight="1"
                class="ml-auto md:ml-14"
                kind="article-title-2"
              >
                {{ article.title }}
              </TextElement>
            </LinkElement>
          </div>
          <!--hero photo--->
          <LinkElement :href="article.url">
            <div class="aspect-w-16 aspect-h-10 overflow-hidden">
              <ResponsiveImage
                :src="article.headline"
                class="object-cover"
                :alt="article.headlineAlt"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 50vw, 60vw"
              />
            </div>
          </LinkElement>
        </ArticleBlock>
      </div>
      <div class="order-3 flex w-full flex-row gap-x-4 gap-y-6 md:w-3/12 md:flex-col lg:w-2/12">
        <ArticleBlock v-slot="{ article }" class="w-1/2 md:w-full">
          <div class="h-60 overflow-hidden md:h-auto">
            <LinkElement :href="article.url" class="mb-2 flex h-full items-end">
              <ResponsiveImage
                class="object-cover"
                :src="article.headline"
                :alt="article.headlineAlt"
                sizes="(max-width: 768px) 40vw, (max-width: 1060px) 30vw, 20vw"
              />
            </LinkElement>
          </div>
          <LinkElement :href="article.deskUrl">
            <TextElement component="h4" kind="article-desk-3">
              {{ article.desk }}
            </TextElement>
          </LinkElement>
          <LinkElement :href="article.url">
            <TextElement component="h3" class="mt-2 ml-auto w-11/12" kind="article-title-3">
              {{ article.title }}
            </TextElement>
          </LinkElement>
        </ArticleBlock>
        <ArticleBlock v-slot="{ article }" class="w-1/2 md:w-full">
          <div class="h-60 overflow-hidden md:h-auto">
            <LinkElement :href="article.url" class="mb-2 flex h-full items-end">
              <ResponsiveImage
                class="object-cover"
                :src="article.headline"
                :alt="article.headlineAlt"
                sizes="(max-width: 768px) 40vw, (max-width: 1060px) 30vw, 20vw"
              />
            </LinkElement>
          </div>
          <LinkElement :href="article.deskUrl">
            <TextElement component="h4" kind="article-desk-3">
              {{ article.desk }}
            </TextElement>
          </LinkElement>
          <LinkElement :href="article.url">
            <TextElement component="h3" class="mt-2 ml-auto w-11/12" kind="article-title-3">
              {{ article.title }}
            </TextElement>
          </LinkElement>
        </ArticleBlock>
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
}
</script>
