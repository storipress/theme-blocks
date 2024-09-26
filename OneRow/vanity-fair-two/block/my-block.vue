<template>
  <Block class="pt-4 pb-8 md:pt-8 md:pb-16" :block="block" backgroundColor="f6f6f6">
    <DeskSection class="my-desk" :order="0" v-slot="{ desk }">
      <div class="flex items-center justify-center">
        <div class="decoration-line h-0.5 grow bg-black" />
        <TextInput
          bg-white
          component="h4"
          kind="desk-title"
          fontFamily="Jost"
          :fontSize="{ xs: 30 }"
          align="center"
          :defaultValue="desk"
        />
        <div class="decoration-line h-0.5 grow bg-black" />
      </div>

      <div class="mt-8 lg:flex lg:justify-between">
        <ArticleBlock class="article" v-slot="{ article }">
          <LinkElement class="link" :href="article.url">
            <div>
              <div class="article-headline relative overflow-hidden">
                <ResponsiveImage
                  class="absolute inset-0 h-full w-full object-cover"
                  :src="article.headline"
                  :alt="article.headlineAlt"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1060px) 45vw, 25vw"
                />
              </div>
            </div>
          </LinkElement>
          <div>
            <LinkElement :href="article.deskUrl">
              <TextElement
                component="h4"
                kind="article-desk"
                fontFamily="Jost"
                :fontSize="{ xs: 10, md: 12 }"
                :align="{ xs: 'center', md: 'left', lg: 'center' }"
                color="e7212c"
              >
                {{ article.desk }}
              </TextElement>
            </LinkElement>
            <LinkElement class="link" :href="article.url">
              <TextElement
                component="h3"
                kind="article-title"
                fontFamily="Jost"
                :fontSize="{ xs: 20, md: 26 }"
                :lineHeight="{ xs: 1.3, md: 1.2 }"
                :align="{ xs: 'center', md: 'left', lg: 'center' }"
              >
                {{ article.title }}
              </TextElement>

              <TextElement
                component="p"
                kind="article-blurb"
                fontFamily="Jost"
                :fontSize="{ xs: 13, md: 17, lg: 15 }"
                :lineHeight="1.3"
                :align="{ xs: 'center', md: 'left', lg: 'center' }"
              >
                {{ article.blurb }}
              </TextElement>
            </LinkElement>
            <div class="flex items-end justify-center md:justify-start lg:justify-center">
              <TextElement component="div" class="by" kind="article-author">By</TextElement>
              <Authors
                :authors="article.authors"
                kind="article-author"
                fontFamily="Jost"
                :fontSize="{ xs: 11, md: 14, lg: 13 }"
                separator=", "
              />
            </div>
          </div>
        </ArticleBlock>

        <ArticleBlock class="article" v-slot="{ article }">
          <LinkElement class="link" :href="article.url">
            <div>
              <div class="article-headline relative overflow-hidden">
                <ResponsiveImage
                  class="absolute inset-0 h-full w-full object-cover"
                  :src="article.headline"
                  :alt="article.headlineAlt"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1060px) 45vw, 25vw"
                />
              </div>
            </div>
          </LinkElement>
          <div>
            <LinkElement :href="article.deskUrl">
              <TextElement component="h4" kind="article-desk">
                {{ article.desk }}
              </TextElement>
            </LinkElement>
            <LinkElement class="link" :href="article.url">
              <TextElement component="h3" kind="article-title">
                {{ article.title }}
              </TextElement>

              <TextElement component="p" kind="article-blurb">
                {{ article.blurb }}
              </TextElement>
            </LinkElement>
            <div class="flex items-end justify-center md:justify-start lg:justify-center">
              <TextElement component="div" class="by" kind="article-author">By</TextElement>
              <Authors :authors="article.authors" kind="article-author" separator=", " />
            </div>
          </div>
        </ArticleBlock>

        <ArticleBlock class="article" v-slot="{ article }">
          <LinkElement class="link" :href="article.url">
            <div>
              <div class="article-headline relative overflow-hidden">
                <ResponsiveImage
                  class="absolute inset-0 h-full w-full object-cover"
                  :src="article.headline"
                  :alt="article.headlineAlt"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1060px) 45vw, 25vw"
                />
              </div>
            </div>
          </LinkElement>
          <div>
            <LinkElement :href="article.deskUrl">
              <TextElement component="h4" kind="article-desk">
                {{ article.desk }}
              </TextElement>
            </LinkElement>
            <LinkElement class="link" :href="article.url">
              <TextElement component="h3" kind="article-title">
                {{ article.title }}
              </TextElement>

              <TextElement component="p" kind="article-blurb">
                {{ article.blurb }}
              </TextElement>
            </LinkElement>
            <div class="flex items-end justify-center md:justify-start lg:justify-center">
              <TextElement component="div" class="by" kind="article-author">By</TextElement>
              <Authors :authors="article.authors" kind="article-author" separator=", " />
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
  DeskSection,
  LinkElement,
  ResponsiveImage,
  TextElement,
  TextInput,
} from '@storipress/block'

export default {
  components: {
    ArticleBlock,
    Authors,
    Block,
    DeskSection,
    LinkElement,
    TextElement,
    TextInput,
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
.my-desk {
  @apply relative lg:mx-auto;
}

.desk-title {
  @apply px-4;
}

.article {
  @apply mb-8 border-t pt-8  lg:relative lg:w-1/3 lg:border-t-0 lg:px-12;

  border-color: #9ca3af;
}

.link {
  @apply md:flex md:justify-between lg:block;
}

.article:first-child {
  @apply border-t-0 pt-0 lg:pt-8;
}

.article-headline {
  @apply w-full transition-opacity;

  background-blend-mode: hard-light;
  padding-top: 56.5%;
}

.article-desk {
  @apply my-3 tracking-widest md:mt-0 lg:mt-3;
}

.article-title {
  @apply mb-3 transition-opacity line-clamp-3;
}

.article-blurb {
  @apply mb-4 line-clamp-3;
}

.by {
  font-family: Jost, serif;
  font-style: italic;
  font-size: 12px;
  margin-right: 0.15rem;
}

.link:hover .article-headline {
  background: #9ca3af;
  background-size: cover;
  background-position: center;
  background-blend-mode: hard-light;
}

.link:hover .article-title {
  opacity: 75%;
}

@screen md {
  .article-headline {
    @apply mr-10;

    width: 32vw;
  }

  .by {
    @apply mr-[0.3em];

    font-style: normal;
    font-size: 15px;
  }
}

@screen lg {
  .article:first-child::after,
  .article:nth-child(2)::after {
    @apply absolute top-0 block h-full bg-repeat-y;

    content: '';
    right: -5px;
    width: 8px;
  }

  .article-headline {
    @apply w-full;
  }
}
</style>
