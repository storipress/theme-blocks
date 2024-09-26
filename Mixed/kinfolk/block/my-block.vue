<template>
  <Block :block="block">
    <div class="md:py-16 lg:flex lg:flex-wrap">
      <!-- left -->
      <DeskSection :order="0" class="mx-auto md:w-10/12 lg:w-1/2 lg:pr-5">
        <ArticleBlock v-slot="{ article }" class="mb-10 lg:sticky lg:top-0">
          <div class="aspect-w-1 aspect-h-1 mb-5">
            <LinkElement :href="article.url">
              <ResponsiveImage :src="article.headline" :alt="article.headlineAlt" class="h-full w-full object-cover" />
            </LinkElement>
          </div>
          <div class="mx-auto pb-8 text-center md:max-w-[80%] lg:pb-0">
            <TextElement
              component="h3"
              kind="article-title"
              :fontSize="{ xs: 25, md: 35, lg: 70 }"
              color="000"
              :lineHeight="1.3"
              class="mb-4 pt-8 md:mb-10 md:pt-16"
              fontFamily="Jost"
            >
              <LinkElement :href="article.url">
                {{ article.title }}
              </LinkElement>
            </TextElement>
            <TextElement
              component="p"
              kind="article-blurb"
              :fontSize="{ xs: 14, md: 15, lg: 18 }"
              color="4D4D4D"
              fontFamily="Jost"
              class="mb-4 md:mb-7"
            >
              {{ article.blurb }}
            </TextElement>
          </div>
        </ArticleBlock>
      </DeskSection>
      <!-- right -->
      <DeskSection :order="1" class="gap-x-10 md:grid md:grid-cols-3 lg:w-1/2 lg:pl-5">
        <template v-for="i in 9">
          <ArticleBlock :key="i" class="aspect mb-10 md:mb-20" v-slot="{ article }">
            <LinkElement :href="article.url" class="block max-h-full overflow-hidden">
              <ResponsiveImage class="max-h-[500px] object-cover" :src="article.headline" :alt="article.headlineAlt" />
            </LinkElement>
            <div class="pb-7 lg:pb-0">
              <LinkElement :href="article.deskUrl">
                <TextElement
                  component="h4"
                  kind="article-desk-right"
                  :fontSize="{ xs: 11 }"
                  class="mb-1 mt-2.5 lg:mb-4"
                  color="000"
                  fontFamily="Jost"
                >
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
              <LinkElement :href="article.url">
                <TextElement
                  component="h3"
                  kind="article-title-right"
                  :fontSize="{ xs: 21 }"
                  class="mb-3"
                  color="000"
                  fontFamily="Jost"
                >
                  {{ article.title }}
                </TextElement>
              </LinkElement>
              <TextElement
                component="p"
                kind="article-blurb-right"
                :fontSize="{ xs: 16 }"
                color="4D4D4D"
                class="line-clamp-3"
                fontFamily="Jost"
              >
                {{ article.blurb }}
              </TextElement>
            </div>
          </ArticleBlock>
        </template>
      </DeskSection>
    </div>
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
    ResponsiveImage,
    TextElement,
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
.aspect {
  @screen md {
    aspect-ratio: 2 / 3;
  }
}
</style>
