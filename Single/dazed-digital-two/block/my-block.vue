<template>
  <Block :block="block" backgroundColor="f6f6f6" class="pb-8 md:pb-0">
    <DeskSection :order="0" class="my-desk">
      <ArticleBlock v-slot="{ article }">
        <div class="md:flex md:items-center md:justify-between">
          <div class="w-full pt-6 md:pr-24 lg:w-3/5 lg:pt-0">
            <div class="title">
              <LinkElement :href="article.deskUrl">
                <TextElement
                  component="h4"
                  kind="desk-title"
                  fontFamily="Jost"
                  :fontSize="{ xs: 22, md: 26 }"
                  color="000"
                >
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
            </div>
            <LinkElement :href="article.url">
              <TextElement
                component="h3"
                kind="article-title"
                fontFamily="Jost"
                :fontSize="{ xs: 26, md: 36 }"
                :lineHeight="1.2"
                color="000"
                bold
              >
                {{ article.title }}
              </TextElement>

              <TextElement component="p" kind="article-blurb" fontFamily="Jost" color="000" :lineHeight="2.0">
                {{ article.blurb }}
              </TextElement>
            </LinkElement>
          </div>
          <div class="relative h-56 overflow-hidden md:w-full" style="padding-top: 56.25%">
            <LinkElement :href="article.url">
              <ResponsiveImage
                class="absolute inset-0 min-h-full min-w-full object-cover"
                :src="article.headline"
                :alt="article.headlineAlt"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 65vw"
              />
            </LinkElement>
          </div>
        </div>
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
} from '@storipress/block'

export default {
  components: {
    ArticleBlock,
    Block,
    DeskSection,
    ColorArea,
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
  @apply mx-auto;
}

.desk-title {
  @apply mb-14 inline-block;
}

.article-title {
  @apply mb-8 line-clamp-4;
}

.article-blurb {
  @apply pb-6 text-xs;
}

@screen md {
  .desk-title {
    @apply relative z-10 mb-6 pr-4;
  }

  .title {
    @apply relative;
  }
}

@screen lg {
  .title::after {
    @apply -mr-28;
  }
}
</style>
