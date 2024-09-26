<template>
  <Block :block="block" class="py-6 md:py-12" backgroundColor="f6f6f6">
    <DeskSection class="my-desk" :order="0">
      <ArticleBlock v-slot="{ article }">
        <LinkElement class="flex flex-col md:flex-row" :href="article.url">
          <!--- hero photo --->
          <div class="image-container">
            <div class="aspect-w-3 aspect-h-2 relative overflow-hidden">
              <ResponsiveImage
                class="top-0 bottom-0 left-0 right-0 h-full w-full object-cover"
                :src="article.headline"
                :alt="article.headlineAlt"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 45vw, 70vw"
              />
            </div>
          </div>
          <!--- article container --->
          <div class="article-container">
            <div class="flex flex-col md:mr-4 md:flex-1 md:justify-end lg:mr-0">
              <div class="mt-2">
                <TextElement
                  component="h2"
                  class="pb-2; pt-4"
                  kind="article-title"
                  fontFamily="Jost"
                  :fontSize="{ xs: 36, md: 28, lg: 36 }"
                  :lineHeight="{ xs: 1.1, md: 1.0, lg: 1.1 }"
                >
                  {{ article.title }}
                </TextElement>
                <TextElement component="span" kind="article-blurb" :fontSize="{ xs: 16, md: 18 }" fontFamily="Jost">
                  {{ article.blurb }}
                </TextElement>
              </div>
            </div>
          </div>
        </LinkElement>
      </ArticleBlock>
    </DeskSection>
  </Block>
</template>

<script>
import {
  ArticleBlock,
  Block,
  ColorArea,
  DeskSection,
  LinkElement,
  ResponsiveImage,
  TextElement,
  TextInput,
} from '@storipress/block'

export default {
  components: {
    ArticleBlock,
    Block,
    DeskSection,
    LinkElement,
    TextElement,
    TextInput,
    ColorArea,
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
.desk-name {
  @apply px-2 py-1;
}

.image-container {
  @screen md {
    @apply mr-10 w-9/12 overflow-hidden;
  }
}

.article-container {
  @screen md {
    @apply w-3/12;
  }
}
</style>
