<template>
  <Block class="py-6 md:py-12" :block="block" backgroundColor="f6f6f6">
    <DeskSection class="my-desk">
      <ArticleBlock class="article" v-slot="{ article }" v-for="i in 3" :key="`article_${i}`">
        <div class="link">
          <div class="headline-container">
            <div class="article-headline relative overflow-hidden">
              <LinkElement :href="article.url">
                <ResponsiveImage
                  class="absolute inset-0 h-full w-full object-cover"
                  :src="article.headline"
                  :alt="article.headlineAlt"
                  sizes="(max-width: 768px) 15vw, (max-width: 1060px) 20vw, 20vw"
                />
              </LinkElement>
            </div>
          </div>
          <div class="max-h-14 w-2/3 md:max-h-full md:w-full md:line-clamp-3">
            <LinkElement :href="article.deskUrl">
              <TextElement component="h4" kind="article-desk" :fontSize="{ md: 14 }" fontFamily="Jost">
                {{ article.desk }}
              </TextElement>
            </LinkElement>
            <LinkElement :href="article.url">
              <TextElement
                component="h3"
                kind="article-title"
                fontFamily="Jost"
                :fontSize="{ xs: 16 }"
                :lineHeight="1.1"
                bold
                class="pb-4 line-clamp-3 md:pb-10"
              >
                {{ article.title }}
              </TextElement>
            </LinkElement>
          </div>
        </div>
      </ArticleBlock>
    </DeskSection>
  </Block>
</template>

<script>
import { ArticleBlock, Block, DeskSection, LinkElement, ResponsiveImage, TextElement } from '@storipress/block'

export default {
  components: {
    ArticleBlock,
    Block,
    DeskSection,
    LinkElement,
    TextElement,
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
  @apply md:flex md:justify-between;
}

.article {
  @apply md:flex md:flex-1;
}

.article:first-child {
  @apply md:justify-start;
}

.article:nth-child(2) {
  @apply md:justify-center;
}

.article:nth-child(3) {
  @apply md:justify-end;
}

.headline-container {
  @apply w-1/4 md:w-full;
}

.link {
  @apply mb-4 flex gap-5 border-b border-dotted border-black md:block md:w-3/4;
}

.article-headline {
  @apply min-w-full border-gray-400 bg-cover bg-center;

  padding-top: 75%;
}

.article-desk {
  @apply hidden md:mt-2 md:block;
}
</style>
