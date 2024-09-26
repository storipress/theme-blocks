<template>
  <Block :block="block" class="flex w-full flex-col justify-center py-6 md:py-12" backgroundColor="f6f6f6">
    <DeskSection :order="0" v-slot="{ desk }">
      <!-- TOP ARTICLE -->
      <ArticleBlock v-slot="{ article }" class="top-article">
        <!-- Title and Blurb -->
        <LinkElement :href="article.url">
          <div class="mt-4 text-center">
            <TextElement
              component="h3"
              class="underline-effect mr-[0.1em] inline"
              kind="top-article-title"
              fontFamily="Jost"
              :lineHeight="1.2"
              :fontSize="{ xs: 44, md: 52, lg: 52 }"
              >{{ article.title }}</TextElement
            >&nbsp;
            <TextElement
              component="p"
              class="underline-effect hidden md:inline"
              kind="top-article-blurb"
              fontFamily="Jost"
              color="949494"
              :lineHeight="1.2"
              :fontSize="{ xs: 52, md: 52, lg: 52 }"
            >
              {{ article.blurb }}
            </TextElement>
          </div>
        </LinkElement>
        <!-- Desk Title & Author-->
        <div class="mt-6 flex flex-col items-center justify-center md:flex-row">
          <LinkElement :href="article.deskUrl">
            <!--DESK TITLE -->
            <TextElement
              component="span"
              class="inline border-black md:border-r md:pr-2"
              kind="top-desk-title"
              fontFamily="Jost"
              :fontSize="{ xs: 12, md: 12, lg: 12 }"
              :bold="true"
            >
              {{ desk }}
            </TextElement>
          </LinkElement>
          <!-- AUTHOR -->
          <div>
            <TextElement component="span" class="inline pr-[0.1em] md:ml-2" kind="main-article-author">
              By
            </TextElement>
            <Authors
              authorComponent="span"
              :authors="article.authors"
              kind="main-article-author"
              separator=", "
              fontFamily="Jost"
              class="inline"
            />
          </div>
        </div>
        <LinkElement :href="article.url" class="flex flex-col items-center"> </LinkElement>
      </ArticleBlock>
    </DeskSection>

    <div class="custom-wrapper">
      <!-- IMAGE ARTICLE -->
      <DeskSection class="image-box" :order="2" v-slot="{ desk }">
        <ImageDeskArticle :desk="desk" />
      </DeskSection>

      <DeskSection :class="[`box-${n}`]" v-for="n in 2" :order="n * 2 - 1" v-slot="{ desk }" :key="`desk-${n * 2 - 1}`">
        <div class="bordered-box-wrapper" :class="[`box-${n}`]">
          <ArticleBlock v-slot="{ article }" class="bordered-box flex flex-col">
            <div class="bordered-article grow">
              <LinkElement :href="article.deskUrl">
                <TextElement
                  component="h4"
                  kind="bordered-desk-title"
                  fontFamily="Jost"
                  :fontSize="{ xs: 13, md: 15, lg: 15 }"
                >
                  {{ desk }}
                </TextElement>
              </LinkElement>

              <LinkElement :href="article.url">
                <TextElement
                  component="h3"
                  class="line-clamp-5 lg:mx-3"
                  kind="bordered-article-title"
                  fontFamily="Jost"
                  :fontSize="{ xs: 20, md: 24, lg: 24 }"
                  :lineHeight="1.1"
                  :bold="true"
                  align="center"
                >
                  <span class="underline-effect inline">{{ article.title }}</span>
                </TextElement>
              </LinkElement>
              <div class="placeholder" />
            </div>
            <div class="z-10 pb-6 text-center">
              <TextElement component="span" class="article-author inline pr-[0.1em]" kind="article-author">
                By
              </TextElement>
              <Authors
                authorComponent="span"
                fontFamily="Jost"
                :authors="article.authors"
                kind="article-author"
                separator=", "
                class="inline"
              />
            </div>
          </ArticleBlock>
        </div>
      </DeskSection>
    </div>
  </Block>
</template>

<script>
import { ArticleBlock, Authors, Block, DeskSection, LinkElement, TextElement } from '@storipress/block'

import ImageDeskArticle from './image-desk-article.vue'

export default {
  components: {
    ArticleBlock,
    Block,
    DeskSection,
    TextElement,
    Authors,
    LinkElement,
    ImageDeskArticle,
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
.top-article:hover .underline-effect {
  @apply hover:opacity-75;
}

.bordered-article:hover .underline-effect {
  @apply hover:opacity-75;
}

.top-article {
  @apply mb-14 flex flex-col items-center justify-center;
}

.custom-wrapper {
  @apply grid justify-center;

  grid-template-areas:
    'first'
    'main'
    'last';

  @screen md {
    @apply mx-auto gap-12;

    grid-template-areas:
      'main first'
      'main last';
    max-width: 1000px;
  }

  .image-box {
    grid-area: main;

    @screen md {
      width: 50vw;
    }
  }

  .box-1 {
    grid-area: first;

    @screen md {
      width: 30vw;
    }
  }

  .box-2 {
    grid-area: last;

    @screen md {
      width: 30vw;
    }
  }

  .bordered-box-wrapper {
    @apply relative;
    padding-bottom: 50px;

    @screen md {
      @apply mb-12 p-0;
    }

    .bordered-box {
      @apply relative w-full;

      padding-top: 90%;

      .bordered-article {
        @apply absolute top-0 left-0 mb-12 flex h-full w-full flex-col items-center justify-between p-5 md:mb-0;

        border-width: 10px;
        border-color: black;
      }
    }
  }
}
</style>
