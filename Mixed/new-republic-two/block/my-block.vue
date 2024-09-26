<template>
  <Block :block="block" class="py-6 md:py-12" backgroundColor="f6f6f6">
    <DeskSection class="my-desk" :order="0" v-slot="{ desk }">
      <TextInput
        component="h4"
        kind="desk-title"
        :defaultValue="desk"
        fontFamily="Jost"
        :fontSize="{ xs: 34, md: 22, lg: 30 }"
        bold
      />

      <div class="md:grid md:grid-cols-12 md:gap-8">
        <div class="md:col-span-5">
          <ArticleBlock class="hero-article" v-slot="{ article }">
            <div class="aspect-h-11 aspect-w-16 overflow-hidden">
              <LinkElement :href="article.url">
                <ResponsiveImage
                  class="object-cover"
                  :alt="article.headlineAlt"
                  :src="article.headline"
                  sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
                />
              </LinkElement>
            </div>
            <div class="my-4 flex items-center">
              <LinkElement :href="article.deskUrl">
                <TextElement
                  component="h4"
                  kind="desk-name"
                  :fontSize="{ md: 11, lg: 15 }"
                  :lineHeight="{ md: 1.1, lg: 1.2 }"
                  bold
                >
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
              <Authors
                authorComponent="span"
                :authors="article.authors"
                kind="article-author"
                separator=" & "
                :fontSize="{ md: 11, lg: 15 }"
                :lineHeight="{ md: 1.1, lg: 1.2 }"
              />
            </div>
            <div class="border-gray-500 pb-2 md:border-b-0">
              <LinkElement :href="article.url">
                <TextElement
                  component="h3"
                  kind="article-title"
                  class="line-clamp-3"
                  :fontSize="{ xs: 30, md: 24, lg: 34 }"
                  fontFamily="Jost"
                  :lineHeight="1.2"
                >
                  {{ article.title }}
                </TextElement>
                <TextElement
                  component="p"
                  kind="article-blurb"
                  :lineHeight="1.2"
                  :fontSize="{ xs: 18, md: 14, lg: 18 }"
                >
                  {{ article.blurb }}
                </TextElement>
              </LinkElement>
            </div>
          </ArticleBlock>
        </div>

        <div class="slash md:col-span-1">
          <svg width="100%"><line x1="10%" y1="100%" x2="90%" y2="0"></line></svg>
        </div>

        <div class="my-8 md:col-span-6 lg:my-0">
          <ArticleBlock class="article" v-slot="{ article }" v-for="i in 3" :key="`article_${i}`">
            <div>
              <div class="aspect-h-11 aspect-w-16 overflow-hidden md:h-24 md:w-28 lg:h-40 lg:w-52">
                <LinkElement :href="article.url">
                  <ResponsiveImage
                    class="object-cover"
                    :alt="article.headlineAlt"
                    :src="article.headline"
                    sizes="(max-width: 768px) 100vw, (max-width: 1060px) 10vw, 15vw"
                  />
                </LinkElement>
              </div>
            </div>
            <div class="md:ml-4">
              <div class="my-4 flex items-center md:mt-0">
                <LinkElement :href="article.deskUrl">
                  <TextElement component="h4" kind="desk-name">
                    {{ article.desk }}
                  </TextElement>
                </LinkElement>
                <Authors authorComponent="span" :authors="article.authors" kind="article-author" />
              </div>
              <div>
                <LinkElement :href="article.url">
                  <TextElement component="h3" kind="article-title" class="pr-6 line-clamp-3">
                    {{ article.title }}
                  </TextElement>
                </LinkElement>
              </div>
            </div>
          </ArticleBlock>
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
  TextElement,
  TextInput,
  ResponsiveImage,
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
.desk-title {
  @apply mb-1 max-w-full;
}

.hero-article {
  @apply mt-8;
}

.article {
  @apply mb-10 pb-2 md:mb-8 md:flex md:flex-row-reverse md:justify-between md:border-b md:border-gray-300 md:pb-6 lg:mt-10;
}

.desk-name {
  @apply mr-2;
}

.article-author {
  @apply ml-2;
}

.slash {
  @apply hidden md:flex;
}

line {
  stroke: #d1d1d1;
}
</style>
