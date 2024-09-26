<template>
  <Block :block="block">
    <DeskSection :order="0" v-slot="{ desk }">
      <TextInput kind="desk-title" component="h4" :defaultValue="desk" />
      <ArticleBlock v-slot="{ article }">
        <TextElement kind="article-title" component="h1" bold>
          {{ article.title }}
        </TextElement>
      </ArticleBlock>
    </DeskSection>
  </Block>
</template>

<script>
import { ArticleBlock, Block, DeskSection, TextElement, TextInput } from '@jraft/block'

export default {
  components: { Block, DeskSection, ArticleBlock, TextElement, TextInput },

  props: {
    block: Object,
  },
}
</script>
