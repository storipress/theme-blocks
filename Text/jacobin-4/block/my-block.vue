<template>
  <Block :block="block" class="pt-4 pb-8 md:pt-8 md:pb-16" backgroundColor="f6f6f6">
    <DeskSection class="main-section">
      <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-4 lg:gap-6">
        <ArticleBlock
          v-slot="{ article }"
          v-for="i in 8"
          :key="`article_${i}`"
          class="small-article mx-auto mt-4 border-t border-solid md:mx-0 md:mt-8"
        >
          <TextElement
            component="p"
            kind="latest-article-time"
            :fontSize="17"
            fontFamily="Jost"
            color="b3b3b3"
            class="my-4"
          >
            {{ getDate(article) }}
          </TextElement>

          <TextElement
            component="h3"
            kind="latest-article-title"
            :fontSize="17"
            fontFamily="Jost"
            :lineHeight="1.2"
            class="duration-200 line-clamp-3 hover:opacity-75 md:w-11/12"
          >
            <LinkElement :href="article.url" class="title">{{ article.title }}</LinkElement>
          </TextElement>
        </ArticleBlock>
      </div>
    </DeskSection>
  </Block>
</template>

<script>
import { ArticleBlock, Block, DeskSection, LinkElement, TextElement } from '@storipress/block'
export default {
  components: {
    ArticleBlock,
    Block,
    DeskSection,
    TextElement,
    LinkElement,
  },
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getDate(article) {
      const month = (article.time.getMonth() + 1).toString().padStart(2, '0')
      const date = article.time.getDate().toString().padStart(2, '0')
      return month + '.' + date
    },
  },
}
</script>

<style lang="scss" scoped>
.small-article {
  border-top: 1px solid #b3b3b3;
  width: 100%;
}
</style>
