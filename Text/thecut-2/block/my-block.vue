<template>
  <Block :block="block" class="py-6 md:py-12" backgroundColor="f6f6f6">
    <DeskSection class="my-desk" v-slot="{ desk }">
      <div class="heading">
        <TextInput
          component="h2"
          kind="desk-title"
          :fontSize="{ xs: 18, md: 18, lg: 18 }"
          :bold="true"
          fontFamily="Jost"
          class="tracking-widest"
          :defaultValue="desk"
        />
      </div>
      <ArticleBlock v-slot="{ article }" v-for="index in 5" :key="index" class="md:p-0">
        <LinkElement :href="article.url" class="article-container">
          <TextElement
            component="p"
            kind="article-index"
            fontFamily="Jost"
            :fontSize="{ xs: 11, md: 11, lg: 16 }"
            :bold="true"
            class="w-8 lg:w-16"
          >
            {{ index }}.
          </TextElement>
          <TextElement
            component="h1"
            kind="article-title"
            :fontSize="{ xs: 22, md: 22, lg: 36 }"
            fontFamily="Jost"
            class="w-full tracking-wide"
          >
            {{ article.title }}
          </TextElement>
        </LinkElement>
      </ArticleBlock>
    </DeskSection>
  </Block>
</template>

<script>
import { ArticleBlock, Block, DeskSection, LinkElement, TextElement, TextInput } from '@storipress/block'

export default {
  components: {
    ArticleBlock,
    Block,
    DeskSection,
    TextElement,
    TextInput,
    LinkElement,
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
  @apply w-full border-t border-black;

  max-width: 1100px;
}

.heading {
  @apply mt-5 ml-9;
}

.article-container {
  @apply flex items-baseline justify-start pt-5 pl-2;
}

.border-color {
  border-color: rgb(189, 189, 189, 0.5);
}

@screen md {
  .my-desk {
    @apply mx-auto border-none;
  }

  .heading {
    @apply mt-5 mb-2 flex justify-center;
  }

  .article-container {
    @apply mx-auto border-t;

    padding: 8px 0 6px 1rem;
    width: 700px;
  }
}

@screen lg {
  .heading {
    @apply mb-4 ml-32 block;
  }

  .article-container {
    max-width: 1000px;
    width: 100%;
  }
}
</style>
