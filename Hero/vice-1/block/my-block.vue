<template>
  <HeroBlock :block="block" backgroundColor="fff">
    <NavBar />
    <!-- nav-spacer -->
    <div class="h-12 md:h-20" />
    <DeskSection :order="0">
      <ArticleBlock class="inset-x-0 mx-auto my-0 flex w-full flex-col lg:flex-row" v-slot="{ article }"
        ><!--mb-14-->
        <div
          class="flex flex-col justify-center border-t border-solid border-white border-opacity-20 px-5 py-10 md:px-10 lg:order-2 lg:flex-1"
        >
          <LinkElement :href="article.deskUrl">
            <TextElement
              component="h4"
              kind="desk-title"
              color="000"
              :font-size="{ xs: 13, md: 16 }"
              underline
              font-family="Jost"
            >
              {{ article.desk }}
            </TextElement>
          </LinkElement>
          <LinkElement :href="article.url">
            <TextElement
              class="pt-1.5 hover:opacity-75"
              component="h2"
              kind="article-title"
              color="000"
              :lineHeight="1.3"
              font-family="Jost"
              bold
              :font-size="{ xs: 32 }"
              >{{ article.title }}
            </TextElement>
          </LinkElement>
          <TextElement
            class="pt-2.5 line-clamp-2"
            component="p"
            kind="article-blurb"
            color="000"
            :font-size="{ xs: 16 }"
            font-family="Jost"
            :lineHeight="1.7"
          >
            {{ article.blurb }}
          </TextElement>
          <!-- add multiple authors here -->
          <ul class="flex flex-row items-center justify-start pt-3">
            <li v-for="(author, index) in article.authors" class="flex" :key="index">
              <LinkElement class="author-link" :href="author.url">
                <TextElement
                  class="flex"
                  component="div"
                  kind="article-author"
                  color="000"
                  :font-size="{ xs: 11 }"
                  font-family="Jost"
                >
                  {{ author.name }}
                </TextElement>
              </LinkElement>
              <TextElement
                v-if="index < article.authors.length - 1"
                class="flex"
                component="div"
                kind="article-author-seperator"
                color="000"
                :font-size="{ xs: 11 }"
                font-family="Jost"
              >
                ,&nbsp;
              </TextElement>
            </li>
          </ul>
          <TextElement
            class="pt-2.5"
            component="p"
            kind="article-time"
            color="000"
            :font-size="{ xs: 11 }"
            font-family="Jost"
          >
            {{ getFormattedDate(article.time) }}
          </TextElement>
        </div>
        <ColorArea
          class="relative z-10 m-5 mt-0 mb-5 md:m-10 lg:order-1 lg:m-0 lg:w-2/3"
          backgroundColor="1F2937"
          kind="main-article-image-sizer-kind"
        >
          <LinkElement class="relative block h-full w-full" :href="article.url"
            ><div class="image-placeholder">
              <div class="absolute inset-0 flex h-full w-full justify-center">
                <ResponsiveImage
                  :alt="article.headlineAlt"
                  class="h-full w-auto object-cover"
                  :src="article.headline"
                  sizes="(max-width: 768px) 90vw, (max-width: 1060px) 90vw, 65vw"
                />
              </div>
            </div>
          </LinkElement>
        </ColorArea>
      </ArticleBlock>
    </DeskSection>
    <SpacingProvider :width="{ xs: '80%', md: 'calc(100% - 80px)' }" />
  </HeroBlock>
</template>

<script>
import {
  ArticleBlock,
  ColorArea,
  DeskSection,
  HeroBlock,
  LinkElement,
  ResponsiveImage,
  SpacingProvider,
  TextElement,
} from '@storipress/block'
import { format } from 'date-fns'

import NavBar from './navbar.vue'

export default {
  components: {
    ArticleBlock,
    DeskSection,
    TextElement,
    LinkElement,
    HeroBlock,
    NavBar,
    SpacingProvider,
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
    getFormattedDate(date) {
      return format(date, 'd.M.yy')
    },
  },
}
</script>

<style lang="scss" scoped>
.image-placeholder {
  padding-top: 56.25%;

  @apply relative h-full;
}
</style>
