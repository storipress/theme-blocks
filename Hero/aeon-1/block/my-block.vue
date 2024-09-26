<template>
  <HeroBlock :block="block" backgroundColor="fff">
    <Navbar />

    <DeskSection v-slot="{ desk }" :order="0">
      <ArticleBlock
        class="relative block h-auto w-full items-center justify-center pb-4 md:flex md:pb-8"
        v-slot="{ article }"
      >
        <!-- image -->
        <div class="image-sizing-wrapper">
          <LinkElement :href="article.url">
            <ResponsiveImage
              class="absolute top-0 left-0 h-full w-full object-cover md:brightness-90"
              :src="article.headline"
              :alt="article.headlineAlt"
              sizes="100vw"
            />
          </LinkElement>
        </div>
        <!-- content -->
        <div class="relative md:absolute md:flex md:p-0">
          <div class="flex w-full flex-col p-6 md:my-auto">
            <!-- desk title -->
            <TextElement
              class="mt-5 mb-3 max-w-full tracking-wider md:hidden"
              fontFamily="Jost"
              :fontSize="{ xs: 13 }"
              kind="main-article-desk-title"
              component="h4"
              :color="{ xs: '000' }"
              :lineHeight="1.0"
            >
              <LinkElement :href="article.deskUrl">
                {{ desk }}
              </LinkElement>
            </TextElement>
            <LinkElement :href="article.url">
              <TextElement
                class="mb-3.5 md:drop-shadow-xl md:filter"
                fontFamily="Jost"
                bold
                component="h2"
                kind="main-article-title-kind"
                :fontSize="{ xs: 26, md: 56, lg: 72 }"
                :lineHeight="{ xs: 1.2, md: 1.0 }"
                :color="{ xs: '000', md: 'fff' }"
                :align="{ xs: 'left', md: 'center' }"
              >
                {{ article.title }}
              </TextElement>

              <TextElement
                class="main-article-blurb"
                fontFamily="Jost"
                component="p"
                kind="main-article-blurb-kind"
                :fontSize="{ xs: 15, md: 16 }"
                :lineHeight="1.4"
                :color="{ xs: '000', md: 'fff' }"
                :align="{ xs: 'left', md: 'center' }"
              >
                {{ article.blurb }}
              </TextElement>
            </LinkElement>

            <TextElement
              class="main-article-authors"
              fontFamily="Jost"
              component="p"
              kind="main-article-authors-kind"
              :fontSize="{ xs: 15, md: 16 }"
              :lineHeight="1.4"
              :color="{ xs: '4B5563', md: 'fff' }"
              :align="{ xs: 'left', md: 'center' }"
            >
              <span v-for="(author, index) in article.authors" :key="index + author.name">
                <LinkElement class="author-link" :href="author.url">
                  <TextElement kind="author-text" component="span">
                    {{ author.name }}
                  </TextElement>
                </LinkElement>
                <span v-if="index < article.authors.length - 2">,&nbsp;</span>
                <span v-if="index === article.authors.length - 2">&amp;&nbsp;</span>
              </span>
            </TextElement>
          </div>
        </div>
      </ArticleBlock>
    </DeskSection>
    <SpacingProvider :width="{ xs: '90%', md: 'calc(95% - 72px)' }" />
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
}
</script>

<style lang="scss" scoped>
.main-article-blurb,
.main-article-authors {
  @apply md:mx-auto md:drop-shadow-xl md:filter;

  margin-bottom: 12.6px;
}

.image-sizing-wrapper {
  @apply relative w-full;

  padding-top: 56.25%;
}

@media (min-width: 768px) {
  .main-article-blurb {
    margin-bottom: 14px;
    max-width: 600px;
  }

  .main-article-authors {
    margin-bottom: 14px;
  }
}

@media (min-width: 1070px) {
  .image-sizing-wrapper {
    padding-top: calc(100% * 1 / 2.3);
  }
}
</style>
