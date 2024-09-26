<template>
  <HeroBlock :block="block">
    <Navbar />
    <ColorArea kind="nav-bg" class="h-2 w-full lg:h-24" />
    <SpacingProvider
      :width="{ xs: 'calc(90% - 4px)', md: 'calc(95% - 40px)', lg: 'calc(95% - 90px)' }"
      :max="{ lg: '1342px' }"
    >
      <div class="desk-container">
        <DeskSection :order="0" class="section-one">
          <ArticleBlock class="article" v-slot="{ article }">
            <div class="relative z-20 flex flex-col">
              <LinkElement class="link justify-center md:flex" :href="article.url">
                <div class="headline-container">
                  <ResponsiveImage
                    class="article-headline brightness-filter"
                    :src="article.headline"
                    :alt="article.headlineAlt"
                    sizes="(max-width: 768px) 90vw, (max-width: 1060px) 40vw, 20vw"
                  />
                </div>
                <TextElement
                  component="h3"
                  kind="article-title"
                  fontFamily="Jost"
                  :fontSize="{ xs: 36, md: 48 }"
                  :lineHeight="1.1"
                  :color="{ xs: '000', md: 'ffffff', lg: 'ffffff' }"
                  align="center"
                  class="w-full flex-col justify-center"
                >
                  <div class="md:mb-2">{{ article.title }}</div>
                </TextElement>
              </LinkElement>

              <div class="content px-8 pb-8">
                <LinkElement class="link justify-center md:flex" :href="article.url">
                  <TextElement
                    component="p"
                    kind="article-blurb"
                    fontFamily="Jost"
                    :fontSize="{ xs: 22 }"
                    :lineHeight="1.3"
                    align="center"
                    color="0a0a0a"
                  >
                    {{ article.blurb }}
                  </TextElement>
                </LinkElement>

                <div class="max-w-full text-center">
                  <div class="by-line-element">
                    <div class="by-line-part-1">
                      <TextElement
                        component="p"
                        kind="article-text"
                        fontFamily="Jost"
                        color="000"
                        :fontSize="{ xs: 13 }"
                        bold
                        align="center"
                        style="letter-spacing: 0.5px"
                        >by
                        <span
                          class="inline-block"
                          v-for="(author, index) in article.authors"
                          :key="index + author.name"
                        >
                          <LinkElement class="author-link" :href="author.url">
                            <TextElement kind="author-text" component="span">{{ author.name }} </TextElement>
                          </LinkElement>
                          <span v-if="index < article.authors.length - 2">,&nbsp;</span>
                          <span v-if="index === article.authors.length - 2">&amp;&nbsp;</span>
                        </span></TextElement
                      >
                    </div>
                    <div class="by-line-part-2">
                      <TextElement
                        component="p"
                        kind="article-time"
                        fontFamily="Jost"
                        color="000"
                        :fontSize="{ xs: 13 }"
                        bold
                        align="center"
                        >{{ formatDate(article.time) }}</TextElement
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ColorArea
              kind="feature-article-background"
              class="absolute inset-0 z-10 h-full w-full"
              backgroundColor="f9f6f3"
            >
            </ColorArea>
          </ArticleBlock>
        </DeskSection>

        <div class="section-two lg:order-first">
          <div>
            <div class="mb-2">
              <TextInput
                style="letter-spacing: 1px"
                component="p"
                kind="editorial-mission-heading"
                fontFamily="Jost"
                :fontSize="{ xs: 13 }"
                color="000"
                defaultValue="Editorial Mission"
                bold
              />
            </div>
            <div class="mt-4 mb-16">
              <TextInput
                component="p"
                kind="editorial-mission-paragraph"
                fontFamily="Jost"
                :fontSize="{ xs: 16 }"
                :lineHeight="1.3"
                color="0a0a0a"
                defaultValue="Mollit elit ipsum culpa in occaecat sint aliquip ipsum et reprehenderit exercitation in nisi cillum. Commodo id sit nostrud anim dolore do id voluptate magna occaecat occaecat.Veniam aute sit laboris."
              />
            </div>
          </div>
          <DeskSection :order="1">
            <ArticleBlock class="article" v-slot="{ article }">
              <TextElement
                component="h4"
                kind="article-desk"
                fontFamily="Jost"
                :fontSize="{ xs: 13 }"
                bold
                :lineHeight="1.3"
                color="0a0a0a"
                class="mb-2"
              >
                <LinkElement :href="article.deskUrl">
                  {{ article.desk }}
                </LinkElement>
              </TextElement>
              <LinkElement class="link" :href="article.url">
                <div class="headline-container">
                  <ResponsiveImage
                    class="article-headline"
                    :src="article.headline"
                    :alt="article.headlineAlt"
                    sizes="(max-width: 768px) 90vw, (max-width: 1060px) 90vw, 45vw"
                  />
                  <ColorArea kind="article-headline-color-area" backgroundColor="0a0a0a4d" />
                </div>
              </LinkElement>

              <div class="content">
                <LinkElement class="link" :href="article.url">
                  <TextElement
                    component="h3"
                    kind="other-article-title"
                    fontFamily="Jost"
                    :fontSize="{ xs: 17, md: 18, lg: 20 }"
                    :lineHeight="1.1"
                    bold
                    color="0a0a0a"
                  >
                    {{ article.title }}
                  </TextElement>
                </LinkElement>

                <TextElement
                  component="p"
                  kind="article-authors"
                  fontFamily="Jost"
                  color="000"
                  :fontSize="{ xs: 13 }"
                  bold
                  >by
                  <span class="inline-block" v-for="(author, index) in article.authors" :key="index + author.name">
                    <LinkElement class="author-link" :key="index" :href="author.url"
                      ><TextElement kind="article-authors" component="span">{{ author.name }}</TextElement></LinkElement
                    ><span v-if="index < article.authors.length - 2">,&nbsp;</span>
                    <span v-if="index === article.authors.length - 2">&amp;&nbsp;</span>
                  </span></TextElement
                >

                <TextElement
                  component="p"
                  kind="other-article-time"
                  fontFamily="Jost"
                  color="bfbfbf"
                  :fontSize="{ xs: 13 }"
                  bold
                  >{{ formatDate(article.time) }}</TextElement
                >
              </div>
            </ArticleBlock>
          </DeskSection>
        </div>

        <DeskSection :order="2" class="section-three">
          <div class="mt-2">
            <ArticleBlock class="article" v-slot="{ article }">
              <TextElement component="h4" kind="article-desk" class="mb-2">
                <LinkElement :href="article.deskUrl">
                  {{ article.desk }}
                </LinkElement>
              </TextElement>
              <LinkElement class="link" :href="article.url">
                <div class="headline-container">
                  <ResponsiveImage
                    class="article-headline"
                    :src="article.headline"
                    :alt="article.headlineAlt"
                    sizes="(max-width: 768px) 90vw, (max-width: 1060px) 40vw, 20vw"
                  />
                  <ColorArea kind="article-headline-color-area" backgroundColor="0a0a0a4d" />
                </div>
              </LinkElement>

              <div class="content">
                <LinkElement class="link" :href="article.url">
                  <TextElement component="h3" kind="other-article-title">
                    {{ article.title }}
                  </TextElement>
                </LinkElement>

                <TextElement component="p" kind="article-authors"
                  >by
                  <span class="inline-block" v-for="(author, index) in article.authors" :key="index + author.name">
                    <LinkElement class="author-link" :key="index" :href="author.url"
                      ><TextElement kind="article-authors" component="span">{{ author.name }}</TextElement></LinkElement
                    ><span v-if="index < article.authors.length - 2">,&nbsp;</span>
                    <span v-if="index === article.authors.length - 2">&amp;&nbsp;</span>
                  </span></TextElement
                >

                <TextElement component="p" kind="other-article-time">{{ formatDate(article.time) }}</TextElement>
              </div>
            </ArticleBlock>

            <ArticleBlock class="article" v-slot="{ article }">
              <LinkElement class="link" :href="article.url">
                <div class="headline-container">
                  <ResponsiveImage
                    class="article-headline"
                    :src="article.headline"
                    :alt="article.headlineAlt"
                    sizes="(max-width: 768px) 90vw, (max-width: 1060px) 40vw, 20vw"
                  />
                  <ColorArea kind="article-headline-color-area" backgroundColor="0a0a0a4d" />
                </div>
              </LinkElement>

              <div class="content">
                <LinkElement class="link" :href="article.url">
                  <TextElement component="h3" kind="other-article-title">
                    {{ article.title }}
                  </TextElement>
                </LinkElement>

                <TextElement component="p" kind="article-authors"
                  >by
                  <span class="inline-block" v-for="(author, index) in article.authors" :key="index + author.name">
                    <LinkElement class="author-link" :key="index" :href="author.url"
                      ><TextElement kind="article-authors" component="span">{{ author.name }}</TextElement></LinkElement
                    ><span v-if="index < article.authors.length - 2">,&nbsp;</span>
                    <span v-if="index === article.authors.length - 2">&amp;&nbsp;</span>
                  </span></TextElement
                >

                <TextElement component="p" kind="other-article-time">{{ formatDate(article.time) }}</TextElement>
              </div>
            </ArticleBlock>
          </div>
        </DeskSection>
      </div>
    </SpacingProvider>
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
  TextInput,
} from '@storipress/block'
import { format } from 'date-fns'

import Navbar from './navbar.vue'

export default {
  components: {
    ArticleBlock,
    ColorArea,
    HeroBlock,
    DeskSection,
    LinkElement,
    TextElement,
    TextInput,
    SpacingProvider,
    ResponsiveImage,
    Navbar,
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
.desk-container {
  @apply py-8 md:flex md:flex-wrap lg:flex-nowrap;
}

.section-one {
  @apply relative mb-8 flex flex-col md:w-full lg:mb-0 lg:w-1/2;

  .article {
    @apply relative mb-0 pb-0 md:mt-0 lg:-mt-11;

    margin-top: -3.75rem;

    @screen lg {
      margin-top: -5.75rem;
    }

    .link {
      @apply md:relative md:block md:w-full;
    }

    .article-title {
      @apply flex px-8 pt-8 pb-4 md:pb-8;

      @screen md {
        @apply absolute top-0 h-full items-center;
      }
    }

    .article-blurb {
      @apply mb-4 block md:pt-8;
    }

    .author-text {
      @apply inline whitespace-nowrap;
    }

    .feature-article-background {
      @apply opacity-100;

      transition: opacity 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .by-line-element {
      @apply inline-flex flex-col items-center justify-center md:flex-row md:flex-wrap;

      border-top: 1px solid #bfbfbf;

      .by-line-part-1 {
        @apply inline-flex;

        padding: 15px;
      }

      .by-line-part-2 {
        @apply inline-flex;

        padding: 0 15px 15px 15px;

        @screen md {
          padding: 15px;
          border-left: 1px solid #bfbfbf;
        }
      }
    }
  }
}

.brightness-filter {
  @screen md {
    filter: brightness(0.5);
  }
}

.section-two {
  @apply mb-8 flex flex-col md:mb-0 md:w-1/2 md:pr-14 lg:w-1/4;
}

.section-three {
  @apply flex flex-col md:w-1/2 md:pl-14 lg:order-last lg:w-1/4;
}

.article {
  @apply mb-6 pb-8;

  .other-article-title {
    @apply block line-clamp-3;
  }
}

.desk-title {
  @apply mb-2;

  letter-spacing: 0.5px;
}

.article-authors {
  letter-spacing: 0.5px;
}

.headline-container {
  @apply relative z-0 w-full;

  transition: filter 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding-top: 56%;
}

.article:hover {
  .headline-container,
  .content {
    @apply opacity-75 transition-opacity;

    transition-duration: 300ms;
  }
}

.article-headline {
  @apply absolute inset-0 z-10 h-full w-full object-cover object-center;
}

.article-headline-color-area {
  @apply absolute inset-0 z-0 h-full w-full object-cover;
}

.other-article-time {
  letter-spacing: 0.5px;
}

.other-article-title {
  @apply mt-3 mb-1.5;
}

.nav-spacer-bg {
  @apply w-full;

  height: 2.25rem;

  @screen lg {
    height: 6.25rem;
  }
}

.article-title-mock {
  @apply mb-6;
}
</style>
