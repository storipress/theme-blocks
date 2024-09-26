<template>
  <Block class="py-6 md:py-12" :block="block">
    <DeskSection class="my-desk" :order="0" v-slot="{ desk }">
      <div class="pt-2">
        <TextInput
          component="h4"
          kind="desk-title"
          :defaultValue="desk"
          fontFamily="Cooper Hewitt Heavy"
          :fontSize="{ xs: 32, lg: 50 }"
          bold
        />

        <div class="lg:flex lg:justify-between">
          <div class="hero">
            <ArticleBlock class="article" v-slot="{ article }">
              <div>
                <div class="article-headline relative overflow-hidden">
                  <LinkElement class="link" :href="article.url">
                    <ResponsiveImage
                      class="absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover"
                      :src="article.headline"
                      :alt="article.headlineAlt"
                      ratio="16:9"
                    />
                  </LinkElement>
                </div>

                <div>
                  <LinkElement :href="article.deskUrl">
                    <TextElement
                      component="h4"
                      kind="article-desk"
                      fontFamily="Cooper Hewitt Heavy"
                      :fontSize="{ xs: 20 }"
                      color="6653ff"
                      bold
                    >
                      {{ article.desk }}
                    </TextElement>
                  </LinkElement>

                  <LinkElement class="link" :href="article.url">
                    <TextElement
                      component="h3"
                      kind="article-title"
                      fontFamily="Cooper Hewitt Heavy"
                      :fontSize="{ xs: 22, md: 28 }"
                      :lineHeight="1.2"
                    >
                      {{ article.title }}
                    </TextElement>
                  </LinkElement>

                  <Authors
                    authorComponent="span"
                    :authors="article.authors"
                    kind="article-author"
                    fontFamily="Roboto Mono"
                    :fontSize="13"
                    color="6653ff"
                    separator=", "
                  />
                </div>
              </div>
            </ArticleBlock>
          </div>

          <div class="list">
            <ArticleBlock class="article" v-slot="{ article }" v-for="i in 3" :key="`article_${i}`">
              <div class="grid grid-cols-2 gap-10 lg:flex lg:justify-start">
                <div>
                  <div class="article-headline relative w-2/5 overflow-hidden">
                    <LinkElement class="link" :href="article.url">
                      <ResponsiveImage
                        class="absolute inset-0 h-full w-full object-cover"
                        :src="article.headline"
                        :alt="article.headlineAlt"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </LinkElement>
                  </div>
                </div>

                <div>
                  <LinkElement :href="article.deskUrl">
                    <TextElement component="h4" kind="article-desk">
                      {{ article.desk }}
                    </TextElement>
                  </LinkElement>

                  <LinkElement class="link" :href="article.url">
                    <TextElement component="h3" kind="list-article-title">
                      {{ article.title }}
                    </TextElement>
                  </LinkElement>

                  <Authors authorComponent="span" :authors="article.authors" kind="article-author" />
                </div>
              </div>
            </ArticleBlock>
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

.desk-title {
  @apply mb-8 max-w-full lg:mb-10;
}

.article {
  @apply border-t border-gray-600 pt-5 pb-10 lg:border-gray-200;
}

.article-headline {
  @apply mb-4 w-full;
}

.article-title {
  @apply mb-1 transition-opacity ease-in-out;
}

.article-author {
  @apply transition-opacity ease-in-out;
}

.link:hover .article-title,
.link:hover .article-author,
.link:hover .list-article-title {
  opacity: 75%;
}

.link:hover .article-headline {
  @apply bg-purple-50;

  background-blend-mode: multiply;
}

.hero {
  @apply w-full lg:w-4/6;
}

.hero .article {
  @apply lg:mr-10;
}

.hero .article-headline {
  padding-top: 56.5%;
}

.list .article-headline {
  padding-top: 100%;

  @screen lg {
    width: 11vw;
  }
}

.list-article-title {
  @apply line-clamp-3 md:mb-3 lg:line-clamp-2;
}

.list {
  @screen lg {
    max-width: 33.33%;
  }
}
</style>
