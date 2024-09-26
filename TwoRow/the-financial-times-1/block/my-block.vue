<template>
  <Block :block="block" class="py-6 md:py-12" backgroundColor="f6f6f6">
    <DeskSection class="desk" :order="0" v-slot="{ desk, deskUrl }">
      <LinkElement :href="deskUrl">
        <TextInput
          component="h4"
          kind="desk__title"
          :fontSize="24"
          :lineHeight="1.2"
          class="relative pt-3 pb-5"
          fontFamily="Jost"
          :defaultValue="desk"
        />
      </LinkElement>

      <div class="articles-section">
        <ArticleBlock class="cursor-pointer grid-cols-1 pb-4" v-slot="{ article }" v-for="i in 2" :key="i">
          <LinkElement :href="article.url">
            <div class="aspect-w-16 aspect-h-9 mb-4 w-full">
              <ResponsiveImage
                class="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 50vw, 50vw"
                :src="article.headline"
                :alt="article.headlineAlt"
              />
            </div>

            <TextElement
              component="h3"
              kind="article-card__title--active"
              :fontSize="16"
              :lineHeight="1.25"
              color="0f5499"
              class="mb-1 hover:opacity-75"
              bold
              fontFamily="Jost"
            >
              {{ article.title }}
            </TextElement>

            <TextElement
              component="h4"
              kind="article-card__blurb"
              :fontSize="20"
              :lineHeight="1.3"
              class="py-[2px] hover:opacity-75"
              fontFamily="Jost"
            >
              {{ article.blurb }}
            </TextElement>
          </LinkElement>
        </ArticleBlock>
      </div>

      <div class="articles-section articles-section--three">
        <ArticleBlock class="cursor-pointer grid-cols-1 pb-4" v-slot="{ article }" v-for="i in 3" :key="i">
          <LinkElement :href="article.url">
            <div class="aspect-w-16 aspect-h-9 mb-4 w-full">
              <ResponsiveImage
                class="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 50vw, 30vw"
                :src="article.headline"
                :alt="article.headlineAlt"
              />
            </div>

            <TextElement
              component="h3"
              kind="article-card__title"
              :fontSize="16"
              :lineHeight="1.25"
              color="990f3d"
              class="mb-1 hover:opacity-75"
              bold
              fontFamily="Jost"
            >
              {{ article.title }}
            </TextElement>

            <TextElement
              component="h4"
              kind="article-card__blurb"
              class="py-[2px]"
              :fontSize="20"
              :lineHeight="1.3"
              fontFamily="Jost"
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
    Block,
    DeskSection,
    TextElement,
    LinkElement,
    ResponsiveImage,
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
.articles-section {
  @apply grid gap-y-4;

  @screen md {
    @apply grid-cols-2 gap-x-5 gap-y-0;
  }

  @screen lg {
    @apply grid-cols-2;
  }

  &--three {
    @apply pt-4;

    @screen md {
      @apply grid-cols-2 gap-x-5 gap-y-0 pt-0;
    }

    @screen lg {
      @apply grid-cols-3;
    }
  }
}
</style>
