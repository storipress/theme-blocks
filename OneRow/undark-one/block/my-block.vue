<template>
  <Block class="border-t border-black" :block="block" backgroundColor="0a0a0a">
    <DeskSection class="my-desk" :order="0" v-slot="{ desk }">
      <div class="relative mb-1 flex flex-row">
        <div class="mr-2">
          <TextElement
            component="h4"
            kind="desk-name"
            :lineHeight="1.0"
            :fontSize="13"
            color="fff"
            bold
            fontFamily="Jost"
            class="desk-name--undark"
          >
            {{ desk }}
          </TextElement>
        </div>
        <div class="relative grow self-stretch">
          <ColorArea class="absolute top-1/2 h-px w-full" backgroundColor="3a4441" kind="desk-title-divider" />
        </div>
      </div>

      <div class="mb-8 block">
        <TextInput
          component="h4"
          kind="desk-title"
          :defaultValue="desk"
          fontFamily="Jost"
          :fontSize="{ xs: 64 }"
          :lineHeight="1.2"
          color="ffffff"
        />
      </div>
      <div class="md:flex md:gap-x-8">
        <ArticleBlock v-for="n in 2" :key="`article-${n}`" class="article" v-slot="{ article }">
          <div class="pb-8">
            <LinkElement :href="article.url">
              <div class="article-headline-wrapper">
                <ResponsiveImage
                  class="absolute inset-0 h-full w-full object-cover object-center"
                  :src="article.headline"
                  :alt="article.headlineAlt"
                  sizes="(max-width: 768px) 100vw, (max-width: 1060px) 45vw, 45vw"
                />
              </div>
            </LinkElement>
          </div>

          <div>
            <TextElement
              component="h3"
              kind="article-title"
              :fontSize="20"
              :lineHeight="1.0"
              color="ffffff"
              bold
              fontFamily="Jost"
            >
              <LinkElement :href="article.url">{{ article.title }}</LinkElement>
            </TextElement>

            <TextElement
              component="p"
              kind="article-blurb"
              fontFamily="Jost"
              :fontSize="18"
              :lineHeight="1.6"
              color="ffffff"
            >
              {{ article.blurb }}
            </TextElement>

            <div class="flex">
              <div class="flex items-center justify-between gap-x-1 border-t border-gray-400 py-4 pr-4">
                <TextElement
                  component="span"
                  kind="article-authors"
                  :fontSize="{ xs: 13 }"
                  font-family="Jost"
                  color="cba17d"
                  bold
                >
                  By
                </TextElement>
                <Authors author-component="span" :authors="article.authors" kind="article-authors" />
              </div>
              <div class="inline-block border-t border-l border-gray-400 py-4 pl-4">
                <TextElement
                  component="p"
                  kind="article-time"
                  fontFamily="Jost"
                  color="cba17d"
                  :fontSize="{ xs: 13 }"
                  bold
                  >{{ formatDate(article.time) }}</TextElement
                >
              </div>
            </div>
          </div>
        </ArticleBlock>
      </div>
    </DeskSection>
  </Block>
</template>

<script>
import {
  ArticleBlock,
  Authors,
  Block,
  ColorArea,
  DeskSection,
  LinkElement,
  ResponsiveImage,
  TextElement,
  TextInput,
} from '@storipress/block'
import { format } from 'date-fns'

export default {
  components: {
    ArticleBlock,
    Authors,
    Block,
    DeskSection,
    LinkElement,
    TextElement,
    TextInput,
    ColorArea,
    ResponsiveImage,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      return format(date, 'MM.dd.yyy')
    },
  },
}
</script>

<style lang="scss" scoped>
.my-desk {
  @apply mx-auto pt-16 pb-8;
}

.desk-name--undark {
  @apply inline-flex;

  letter-spacing: 0.5px;
}

.article-authors {
  letter-spacing: 0.5px;
}

.author-text {
  @apply inline whitespace-nowrap;
}

.article {
  @apply pb-4 md:flex-1;
}

.article-headline-wrapper {
  @apply relative w-full;

  transition: filter 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  filter: grayscale(0) contrast(1);
  padding-top: 56.04%;
}

.article:hover .article-headline-wrapper {
  filter: grayscale(0.5) contrast(1.2);
}

.article-title {
  @apply mb-2;
}

.article-blurb {
  @apply mb-5;
}
</style>
