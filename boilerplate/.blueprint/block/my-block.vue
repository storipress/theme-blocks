<template>
  <Block class="border-t border-black" :block="block">
    <DeskSection class="my-desk" v-slot="{ desk }">
      <TextInput component="h2" kind="desk-title" :defaultValue="desk" />
      <ArticleBlock v-slot="{ article }">
        <TextElement component="h1" kind="article-title" :fontSize="36">
          {{ article.title }}
        </TextElement>
      </ArticleBlock>
    </DeskSection>
  </Block>
</template>

<script>
import { ArticleBlock, Block, DeskSection, TextElement, TextInput } from '@storipress/block'

export default {
  components: {
    ArticleBlock,
    Block,
    DeskSection,
    TextElement,
    TextInput,
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
  @apply mx-auto my-4 w-4/5;

  box-shadow: 2px 2px 5px 0 hsla(0, 100%, 0%, 0.4);
}
</style>
