<template>
  <HeroBlock :block="block" class="pb-8 md:pb-16" backgroundColor="fff">
    <Navbar />

    <SpacingProvider width="90%" :max="{ lg: '1440px' }">
      <!-- hero section -->
      <DeskSection class="main-desk-wrapper" :order="0">
        <div
          kind="main-article-bg-0"
          @mouseover="showcaseArticle = 0"
          :class="{ 'lg:w-1/2': showcaseArticle === 0, 'lg:w-1/4': showcaseArticle !== 0 }"
          class="width-transition-effect"
        >
          <ArticleBlock class="main-article-wrapper" v-slot="{ article }">
            <!-- article image -->
            <LinkElement :href="article.url" class="absolute inset-0 z-0 h-full w-full">
              <ResponsiveImage
                :alt="article.headlineAlt"
                :src="article.headline"
                class="relative z-0 block h-full w-full bg-black/20 object-cover brightness-75"
                style="filter: brightness(0.75)"
                sizes="(max-width: 768px) 90vw, (max-width: 1060px) 90vw, 40vw"
              />
            </LinkElement>
            <!-- article description -->
            <div class="main-article-info-wrapper">
              <!-- desk title -->
              <TextElement
                class="my-6"
                fontFamily="Jost"
                :fontSize="{ xs: 15, md: 17 }"
                kind="article-desk-title-kind"
                component="div"
                color="fff"
                :lineHeight="1.4"
              >
                <LinkElement :href="article.deskUrl">
                  {{ article.desk }}
                </LinkElement>
              </TextElement>
              <!-- article title -->
              <LinkElement :href="article.url">
                <TextElement
                  fontFamily="Jost"
                  :fontSize="{ xs: 31, md: 40 }"
                  kind="article-title-kind"
                  class="lg:line-clamp-5"
                  component="div"
                  color="fff"
                  :lineHeight="1.4"
                >
                  {{ article.title }}
                </TextElement>
              </LinkElement>
              <!-- authors line -->
              <TextElement
                class="mt-6"
                fontFamily="Jost"
                :fontSize="{ xs: 16, md: 18 }"
                kind="article-authors-kind"
                component="div"
                color="fff"
                :lineHeight="1.4"
                >By
                <span v-for="(author, index) in article.authors" :key="index + author.name">
                  <LinkElement class="author-link" :href="author.url"
                    ><TextElement kind="author-text" component="span">{{ author.name }}</TextElement></LinkElement
                  ><span v-if="!(article.authors.length - index === 1)">{{
                    authorsSeparator(index, article.authors.length)
                  }}</span>
                </span>
              </TextElement>
            </div>
          </ArticleBlock>
        </div>
        <div
          kind="main-article-bg-1"
          @mouseover="showcaseArticle = 1"
          :class="{ 'lg:w-1/2': showcaseArticle === 1, 'lg:w-1/4': showcaseArticle !== 1 }"
          class="width-transition-effect"
        >
          <ArticleBlock v-slot="{ article }" class="main-article-wrapper">
            <!-- article image -->
            <LinkElement :href="article.url" class="absolute inset-0 z-0 h-full w-full">
              <ResponsiveImage
                :alt="article.headlineAlt"
                :src="article.headline"
                class="relative z-0 block h-full w-full bg-black/20 object-cover brightness-75"
                style="filter: brightness(0.75)"
                sizes="(max-width: 768px) 90vw, (max-width: 1060px) 90vw, 40vw"
              />
            </LinkElement>
            <!-- article description -->
            <div class="main-article-info-wrapper">
              <!-- desk title -->
              <TextElement
                class="my-6"
                fontFamily="Jost"
                :fontSize="{ xs: 15, md: 17 }"
                kind="article-desk-title-kind"
                component="div"
                color="fff"
                :lineHeight="1.4"
              >
                <LinkElement :href="article.deskUrl">
                  {{ article.desk }}
                </LinkElement>
              </TextElement>
              <!-- article title -->
              <LinkElement :href="article.url">
                <TextElement
                  fontFamily="Jost"
                  :fontSize="{ xs: 31, md: 40 }"
                  kind="article-title-kind"
                  class="lg:line-clamp-5"
                  component="div"
                  color="fff"
                  :lineHeight="1.4"
                >
                  {{ article.title }}
                </TextElement>
              </LinkElement>
              <!-- authors line -->
              <TextElement
                class="mt-6"
                fontFamily="Jost"
                :fontSize="{ xs: 16, md: 18 }"
                kind="article-authors-kind"
                component="div"
                color="fff"
                :lineHeight="1.4"
                >By
                <span v-for="(author, index) in article.authors" :key="index + author.name">
                  <LinkElement class="author-link" :href="author.url"
                    ><TextElement kind="author-text" component="span">{{ author.name }}</TextElement></LinkElement
                  ><span v-if="!(article.authors.length - index === 1)">{{
                    authorsSeparator(index, article.authors.length)
                  }}</span>
                </span>
              </TextElement>
            </div>
          </ArticleBlock>
        </div>
        <div
          kind="main-article-bg-1"
          @mouseover="showcaseArticle = 2"
          :class="{ 'lg:w-1/2': showcaseArticle === 2, 'lg:w-1/4': showcaseArticle !== 2 }"
          class="width-transition-effect"
        >
          <ArticleBlock v-slot="{ article }" class="main-article-wrapper">
            <!-- article image -->
            <LinkElement :href="article.url" class="absolute inset-0 z-0 h-full w-full">
              <ResponsiveImage
                :alt="article.headlineAlt"
                :src="article.headline"
                class="relative z-0 block h-full w-full bg-black/20 object-cover brightness-75"
                style="filter: brightness(0.75)"
                sizes="(max-width: 768px) 90vw, (max-width: 1060px) 90vw, 40vw"
              />
            </LinkElement>
            <!-- article description -->
            <div class="main-article-info-wrapper">
              <!-- desk title -->
              <TextElement
                class="my-6"
                fontFamily="Jost"
                :fontSize="{ xs: 15, md: 17 }"
                kind="article-desk-title-kind"
                component="div"
                color="fff"
                :lineHeight="1.4"
              >
                <LinkElement :href="article.deskUrl">
                  {{ article.desk }}
                </LinkElement>
              </TextElement>
              <!-- article title -->
              <LinkElement :href="article.url">
                <TextElement
                  fontFamily="Jost"
                  :fontSize="{ xs: 31, md: 40 }"
                  kind="article-title-kind"
                  class="lg:line-clamp-5"
                  component="div"
                  color="fff"
                  :lineHeight="1.4"
                >
                  {{ article.title }}
                </TextElement>
              </LinkElement>
              <!-- authors line -->
              <TextElement
                class="mt-6"
                fontFamily="Jost"
                :fontSize="{ xs: 16, md: 18 }"
                kind="article-authors-kind"
                component="div"
                color="fff"
                :lineHeight="1.4"
                >By
                <span v-for="(author, index) in article.authors" :key="index + author.name">
                  <LinkElement class="author-link" :href="author.url"
                    ><TextElement kind="author-text" component="span">{{ author.name }}</TextElement></LinkElement
                  ><span v-if="!(article.authors.length - index === 1)">{{
                    authorsSeparator(index, article.authors.length)
                  }}</span>
                </span>
              </TextElement>
            </div>
          </ArticleBlock>
        </div>
      </DeskSection>
    </SpacingProvider>
  </HeroBlock>
</template>

<script>
import {
  ArticleBlock,
  DeskSection,
  HeroBlock,
  LinkElement,
  ResponsiveImage,
  SpacingProvider,
  TextElement,
} from '@storipress/block'

import Navbar from './navbar.vue'

export default {
  components: {
    ArticleBlock,
    HeroBlock,
    DeskSection,
    TextElement,
    SpacingProvider,
    Navbar,
    LinkElement,
    ResponsiveImage,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      showcaseArticle: 0,
    }
  },
  methods: {
    authorsSeparator(index, length) {
      if (index < length - 2) return ', '
      if (index === length - 2) return ' & '
    },
  },
}
</script>

<style lang="scss" scoped>
.main-article-wrapper {
  @apply relative mb-3 w-full lg:mb-0;

  padding: 21.6px;
  overflow: hidden;
  min-height: 420px;
}

.main-desk-wrapper {
  @apply lg:-mx-1.5 lg:flex lg:flex-row lg:justify-between lg:gap-x-3;
}

.main-article-info-wrapper {
  @apply relative z-10 flex flex-col pb-6 md:w-1/2;
}

@screen md {
  .main-article-wrapper {
    padding: 24px;
  }
}

@screen lg {
  .main-article-wrapper {
    height: 714px;
    padding-top: 110px;
  }

  .main-article-info-wrapper {
    width: calc(25vw - 64px);
  }

  .width-transition-effect {
    will-change: width, content;
    transition: width 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
}
</style>
