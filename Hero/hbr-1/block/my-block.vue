<template>
  <HeroBlock :block="block" class="pb-8 md:pb-12">
    <Navbar />
    <div class="pb-6 pt-24 md:flex md:pt-36">
      <DeskSection :order="0" class="mb-8 md:mb-0 md:w-2/3">
        <ArticleBlock v-slot="{ article }" class="flex flex-col-reverse items-stretch md:flex-col">
          <div class="main-article-meta-wrapper">
            <TextElement
              component="h2"
              :bold="true"
              kind="article-title"
              fontFamily="Jost"
              :fontSize="{ xs: 32, md: 40, lg: 46 }"
              color="000"
              :lineHeight="{ xs: 1.1, md: 1.2 }"
              align="center"
              class="mb-4 mt-12 hover:opacity-75 md:mt-0"
            >
              <LinkElement :href="article.url">
                {{ article.title }}
              </LinkElement>
            </TextElement>
            <TextElement
              component="p"
              kind="article-blurb"
              fontFamily="Jost"
              :fontSize="17"
              color="282828"
              :lineHeight="{ xs: 1.2 }"
              align="center"
              class="mb-3"
            >
              {{ article.blurb }}
            </TextElement>
            <TextElement
              color="282828"
              :fontSize="14"
              :bold="true"
              align="center"
              component="div"
              class="flex justify-center md:mb-9"
              kind="article-authors"
              fontFamily="Jost"
              :lineHeight="1.4"
              >by&nbsp;<Authors authorComponent="span" :authors="article.authors" kind="article-authors" separator=", "
            /></TextElement>
          </div>
          <LinkElement class="aspect-h-1 aspect-w-1 relative min-h-[480px] md:mx-6 md:pb-0" :href="article.url">
            <ResponsiveImage
              :alt="article.headlineAlt"
              class="object-cover"
              :src="article.headline"
              sizes="(max-width: 768px) 100vw, (max-width: 1060px) 60vw, 60vw"
            />
          </LinkElement>
        </ArticleBlock>
      </DeskSection>
      <div class="border-color--hbr flex-col px-9 md:flex md:w-1/3 md:border-l md:pt-0">
        <DeskSection
          v-for="n in 3"
          :key="n"
          :order="n"
          class="article-item-desk-wrapper border-color--hbr--alt border-t py-6 md:py-11"
          :class="{
            'md:border-t-0 md:pt-0': n === 1,
          }"
        >
          <ArticleBlock v-slot="{ article }">
            <article-item :article="article" />
          </ArticleBlock>
        </DeskSection>
      </div>
    </div>
    <SpacingProvider :width="{ xs: '90%', md: 'calc(95% - 48px)' }" />
  </HeroBlock>
</template>

<script>
import {
  ArticleBlock,
  Authors,
  DeskSection,
  HeroBlock,
  LinkElement,
  ResponsiveImage,
  SpacingProvider,
  TextElement,
} from '@storipress/block'

import ArticleItem from './article-item.vue'
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
    ArticleItem,
    Authors,
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

<style scoped lang="scss">
.main-article-meta-wrapper {
  @apply px-5 pb-5;

  @screen md {
    padding-right: 110px;
    padding-left: 110px;
    padding-bottom: 0;
  }
}

.article-title-mock {
  @apply mb-6;
}
</style>

<style lang="scss">
.border-color--hbr {
  border-color: #c5c8c9;

  &--alt {
    border-color: #d5d7d8;
  }

  &--side-menu {
    border-color: #c8c8c8;
  }

  &--top-menu-md {
    border-color: #a4a4a4;
  }
}
</style>
