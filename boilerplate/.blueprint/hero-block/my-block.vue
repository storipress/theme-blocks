<template>
  <HeroBlock :block="block">
    <Navbar />
    <SpacingProvider width="80%">
      <DeskSection v-slot="{ desk }">
        <TextInput component="h2" kind="desk-title" :defaultValue="desk" />
        <ArticleBlock v-slot="{ article }">
          <TextElement component="h1" kind="article-title" :fontSize="36">
            {{ article.title }}
          </TextElement>
        </ArticleBlock>
      </DeskSection>
    </SpacingProvider>
  </HeroBlock>
</template>

<script>
import { ArticleBlock, DeskSection, HeroBlock, SpacingProvider, TextElement, TextInput } from '@storipress/block'

import Navbar from './navbar.vue'

export default {
  components: {
    ArticleBlock,
    HeroBlock,
    DeskSection,
    TextElement,
    TextInput,
    SpacingProvider,
    Navbar,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },
}
</script>
