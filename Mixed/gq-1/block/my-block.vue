<template>
  <Block class="py-8 md:py-12" backgroundColor="f6f6f6" :block="block">
    <DeskSection :order="0" v-slot="{ desk }">
      <div class="mb-8 flex py-4">
        <TextInput
          class="flex max-w-full tracking-wide"
          component="h4"
          :lineHeight="1.0"
          kind="desk-title"
          :fontSize="{ xs: 40, md: 72 }"
          bold
          color="000"
          :defaultValue="desk"
          fontFamily="Aileron Black"
        />
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <!-- main article -->
        <div class="sticky-image lg:sticky lg:top-0 lg:mb-auto lg:max-h-screen">
          <ArticleBlock v-slot="{ article }" class="relative">
            <LinkElement :href="article.url">
              <div class="main-article-image-wrapper">
                <ResponsiveImage
                  class="absolute top-0 left-0 h-full w-full object-cover object-center"
                  :src="article.headline"
                  :alt="article.headlineAlt"
                  sizes="(max-width: 768px) 100vw, (max-width: 1060px) 100vw, 50vw"
                />
                <div class="image-overlay-custom" />
              </div>
            </LinkElement>
            <!-- article description -->
            <div class="absolute bottom-0 h-auto w-full px-4 pb-6">
              <LinkElement :href="article.deskUrl">
                <TextElement
                  class="py-2.5 tracking-wider"
                  component="h4"
                  kind="main-article-desk-title"
                  color="fff"
                  :fontSize="11"
                  fontFamily="Aileron"
                  align="center"
                >
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
              <!-- article title -->
              <LinkElement :href="article.url">
                <TextElement
                  class="mt-6 mb-4 md:mx-auto md:mt-4 md:mb-6 md:max-w-lg"
                  component="h3"
                  kind="main-article-title"
                  color="fff"
                  :fontSize="22"
                  :lineHeight="1.3"
                  fontFamily="Aileron"
                  align="center"
                  bold
                >
                  {{ article.title }}
                </TextElement>
              </LinkElement>
              <div class="my-4 text-center">
                <TextElement
                  component="span"
                  kind="main-article-author"
                  font-family="Aileron"
                  color="fff"
                  :font-size="{ xs: 11 }"
                >
                  By
                </TextElement>
                <Authors author-component="span" :authors="article.authors" kind="main-article-author" />
              </div>
              <TextElement
                class="mt-4 block w-full"
                v-if="article.time"
                component="time"
                kind="main-article-time"
                color="fff"
                font-family="Aileron"
                align="center"
                :font-size="{ xs: 11 }"
                >{{ format(article.time, 'd MMMM yyyy') }}</TextElement
              >
            </div>
          </ArticleBlock>
        </div>
        <!-- secondary scrolling articles -->
        <div class="grid grid-cols-1 py-4 md:grid md:grid-cols-2 md:gap-x-6 md:py-6 lg:p-0">
          <div>
            <ArticleTile />
            <ArticleTile imageExpanded />
          </div>
          <div>
            <ArticleTile imageExpanded />
            <ArticleTile />
          </div>
          <div>
            <ArticleTile imageExpanded />
          </div>
        </div>
      </div>
    </DeskSection>
  </Block>
</template>

<script>
import {
  ArticleBlock,
  Authors,
  Block,
  DeskSection,
  LinkElement,
  ResponsiveImage,
  TextElement,
  TextInput,
} from '@storipress/block'
import { format } from 'date-fns'

import ArticleTile from './article-tile.vue'

export default {
  components: {
    ArticleBlock,
    Authors,
    Block,
    DeskSection,
    ResponsiveImage,
    TextElement,
    TextInput,
    LinkElement,
    ArticleTile,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      format,
    }
  },
}
</script>

<style lang="scss" scoped>
.main-article-image-wrapper {
  @apply relative w-full bg-gray-300;

  padding-top: 100%;

  @screen md {
    padding-top: 56.25%;
  }

  @screen lg {
    padding-top: min(150%, 100vh);
  }
}

.article-image-wrapper {
  @apply relative w-full bg-gray-300;

  padding-top: 100%;
}

.image-overlay-custom {
  @apply absolute left-0 top-0 h-full w-full transition-opacity duration-300 hover:opacity-70;

  background-image: linear-gradient(to top, #000, transparent 65%);
}
</style>
