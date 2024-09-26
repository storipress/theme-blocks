<template>
  <Block class="py-6 md:py-12" :block="block" backgroundColor="f6f6f6">
    <div class="my-desk">
      <div class="lg:flex lg:justify-between lg:gap-10">
        <DeskSection class="desk-one" :order="0" v-slot="{ desk }">
          <div class="w-full pt-4">
            <TextInput
              component="h4"
              kind="desk-title"
              fontFamily="Jost"
              :fontSize="{ xs: 26 }"
              :align="{ xs: 'center', md: 'left', lg: 'center' }"
              bold
              :defaultValue="desk"
            />
          </div>
          <div class="side-articles">
            <ArticleBlock class="side-article" v-slot="{ article }">
              <div class="flex justify-start">
                <div class="index">1.</div>
                <LinkElement class="link" :href="article.url">
                  <TextElement
                    component="h3"
                    kind="side-article-title"
                    :fontSize="{ xs: 20, lg: 19 }"
                    fontFamily="Jost"
                    :lineHeight="1.2"
                  >
                    {{ article.title }}
                  </TextElement>
                </LinkElement>
              </div>
            </ArticleBlock>

            <ArticleBlock class="side-article" v-slot="{ article }">
              <div class="flex justify-start">
                <div class="index">2.</div>
                <LinkElement class="link" :href="article.url">
                  <TextElement component="h3" kind="side-article-title">
                    {{ article.title }}
                  </TextElement>
                </LinkElement>
              </div>
            </ArticleBlock>

            <ArticleBlock class="side-article" v-slot="{ article }">
              <div class="flex justify-start">
                <div class="index">3.</div>
                <LinkElement class="link" :href="article.url">
                  <TextElement component="h3" kind="side-article-title">
                    {{ article.title }}
                  </TextElement>
                </LinkElement>
              </div>
            </ArticleBlock>

            <ArticleBlock class="side-article" v-slot="{ article }">
              <div class="flex justify-start">
                <div class="index">4.</div>
                <LinkElement class="link" :href="article.url">
                  <TextElement component="h3" kind="side-article-title">
                    {{ article.title }}
                  </TextElement>
                </LinkElement>
              </div>
            </ArticleBlock>

            <ArticleBlock class="side-article" v-slot="{ article }">
              <div class="flex justify-start">
                <div class="index">5.</div>
                <LinkElement class="link" :href="article.url">
                  <TextElement component="h3" kind="side-article-title">
                    {{ article.title }}
                  </TextElement>
                </LinkElement>
              </div>
            </ArticleBlock>
          </div>
        </DeskSection>

        <DeskSection class="desk-two" :order="1" v-slot="{ desk }">
          <div class="pt-6">
            <div class="lg:flex lg:justify-center">
              <TextInput
                component="h4"
                kind="desk-title-two"
                fontFamily="Jost"
                :fontSize="{ xs: 26 }"
                :align="{ xs: 'center', md: 'left', lg: 'center' }"
                bold
                :defaultValue="desk"
              />
            </div>

            <div class="mt-4 md:flex md:justify-between md:gap-8">
              <ArticleBlock class="main-article" v-slot="{ article }" v-for="i in 3" :key="`article_${i}`">
                <div class="article-headline relative overflow-hidden">
                  <LinkElement class="link" :href="article.url">
                    <ResponsiveImage
                      class="absolute inset-0 h-full w-full object-cover"
                      :src="article.headline"
                      :alt="article.headlineAlt"
                      sizes="(max-width: 768px) 100vw, (max-width: 1060px) 30vw, 20vw"
                    />
                  </LinkElement>
                </div>
                <LinkElement class="link" :href="article.url">
                  <TextElement
                    component="h3"
                    kind="main-article-title"
                    fontFamily="Jost"
                    :fontSize="{ xs: 24 }"
                    :lineHeight="1.0"
                    :align="{ xs: 'center', md: 'left' }"
                    bold
                  >
                    {{ article.title }}
                  </TextElement>
                  <TextElement
                    component="p"
                    kind="main-article-blurb"
                    fontFamily="Jost"
                    :fontSize="{ xs: 18, md: 19, lg: 22 }"
                    :lineHeight="1.2"
                    :align="{ xs: 'center', md: 'left' }"
                    color="303030"
                  >
                    {{ article.blurb }}
                  </TextElement>
                </LinkElement>
                <div class="by-line">
                  <TextElement component="div" kind="main-article-author" class="mr-2">BY</TextElement>
                  <Authors
                    authorComponent="span"
                    :authors="article.authors"
                    kind="main-article-author"
                    fontFamily="Caladea"
                    :fontSize="12"
                    separator=" & "
                  />
                </div>
              </ArticleBlock>
            </div>
          </div>
        </DeskSection>
      </div>
    </div>
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
  @apply mx-auto;
}

.side-articles {
  @apply pt-8 md:pt-6 lg:mx-0;
}

.side-article {
  @apply mb-4 border-gray-200 pb-4 md:border-b md:px-4;
}

.side-article:last-child {
  @apply border-b-0;
}

.index {
  @apply text-xl font-bold;

  font-family: 'Jost', Arial, sans-serif;
}

.side-article-title {
  @apply ml-4 overflow-hidden line-clamp-3;
}

.side-article .link:hover h3 {
  @apply hover:opacity-75;
}

.main-article .link:hover h3 {
  @apply opacity-75;
}

.main-article .link:hover .article-headline {
  @apply bg-gray-400;

  background-blend-mode: hard-light;
}

.desk-title {
  @apply mb-3 w-full md:mb-4;
}

.main-article {
  @apply mb-8 w-full;
}

.article-headline {
  @apply w-full object-cover;

  padding-top: 62.5%;
}

.main-article-title {
  @apply mt-3 mb-2;
}

.main-article-blurb {
  @apply mt-1 line-clamp-3 lg:mt-2;
}

.by-line {
  @apply mt-1 flex items-end justify-center tracking-widest md:justify-start;

  font-family: Caladea, serif;
}

@screen md {
  .main-article {
    max-width: 95%;
  }
}

@screen lg {
  .desk-one {
    width: 30%;
  }

  .desk-two {
    width: 70%;
  }
}
</style>
