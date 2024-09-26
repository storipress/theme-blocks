<template>
  <Block class="pt-8 md:pt-16 md:pb-8" :block="block" backgroundColor="f6f6f6">
    <DeskSection class="my-desk" :order="0" v-slot="{ desk }">
      <TextInput
        component="h2"
        kind="desk-title"
        :defaultValue="desk"
        fontFamily="Jost"
        :fontSize="{ xs: 32, md: 22, lg: 30 }"
        bold
      />

      <div class="md:flex md:justify-end">
        <ArticleBlock class="article group" v-slot="{ article }" v-for="i in 2" :key="i">
          <LinkElement :href="article.url">
            <div class="w-full">
              <div class="article-headline relative overflow-hidden">
                <ResponsiveImage
                  class="absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover group-hover:opacity-80"
                  :src="article.headline"
                  :alt="article.headlineAlt"
                  sizes="(max-width: 768px) 100vw, (max-width: 1060px) 35vw, 35vw"
                />
              </div>
            </div>
          </LinkElement>

          <div class="my-3 flex items-center justify-start">
            <LinkElement :href="article.deskUrl">
              <TextElement
                component="h4"
                kind="article-desk"
                :fontSize="{ xs: 12, md: 10, lg: 16 }"
                :lineHeight="1.2"
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
              color="595959"
              :fontSize="{ xs: 12, md: 10, lg: 16 }"
              :lineHeight="1.2"
            />
          </div>

          <LinkElement :href="article.url">
            <TextElement
              component="h3"
              kind="article-title"
              fontFamily="Jost"
              :fontSize="{ xs: 30, md: 24, lg: 34 }"
              :lineHeight="1.0"
            >
              {{ article.title }}
            </TextElement>

            <TextElement
              component="p"
              kind="article-blurb"
              color="595959"
              :lineHeight="1.2"
              :fontSize="{ xs: 18, md: 14, lg: 18 }"
            >
              {{ article.blurb }}
            </TextElement>
          </LinkElement>
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
  @screen lg {
    @apply mx-auto;
  }
}

.desk-title {
  @apply mb-6 max-w-full md:mb-4 lg:mb-6;
}

.article {
  @apply mb-10 border-b border-gray-500 md:ml-6 md:w-1/3 md:border-b-0 lg:ml-10;
}

.article-headline {
  @apply w-full bg-cover bg-center;

  padding-top: 62.5%;

  > img {
    transition: opacity 0.15s ease;
  }
}

.article-desk {
  @apply mr-3 inline-block px-1 py-0.5 md:px-0.5 md:py-0 lg:px-1 lg:py-0.5;
}

.article-author {
  @apply inline-block pl-2;
}

.article-title {
  @apply mb-2 line-clamp-3;
}

.article-blurb {
  @apply mb-6 line-clamp-3;
}
</style>
