<template>
  <Block :block="block" class="py-6 md:py-12" backgroundColor="f6f6f6">
    <DeskSection class="my-desk" :order="0">
      <ArticleBlock v-slot="{ article }" class="article">
        <div class="article__content">
          <div class="col-span-1">
            <TextElement component="h4" kind="desk" :fontSize="13" fontFamily="Jost">
              <LinkElement :href="article.deskUrl">
                {{ article.desk }}
              </LinkElement>
            </TextElement>
            <LinkElement :href="article.url">
              <div class="flex h-full flex-col justify-between pb-5">
                <div>
                  <TextElement
                    component="h3"
                    kind="article__title"
                    :fontSize="{ xs: 30, md: 40, lg: 90 }"
                    :lineHeight="1.1"
                    fontFamily="Jost"
                  >
                    {{ article.title }}
                  </TextElement>
                </div>

                <div>
                  <TextElement
                    component="p"
                    kind="article__blurb"
                    :fontSize="{ xs: 15, lg: 18 }"
                    :lineHeight="1.7"
                    italic
                    fontFamily="Jost"
                  >
                    {{ article.blurb }}
                  </TextElement>
                </div>
              </div>
            </LinkElement>
          </div>
          <div class="col-span-1">
            <LinkElement :href="article.url">
              <ResponsiveImage
                :src="article.headline"
                :alt="article.headlineAlt"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 45vw, 45vw"
                class="article__img object-cover"
              />
            </LinkElement>
          </div>
        </div>
      </ArticleBlock>
    </DeskSection>
  </Block>
</template>

<script>
import { ArticleBlock, Block, DeskSection, LinkElement, TextElement, ResponsiveImage } from '@storipress/block'

export default {
  components: {
    ArticleBlock,
    Block,
    DeskSection,
    TextElement,
    LinkElement,
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
.article {
  &__content {
    @apply grid;

    @screen md {
      @apply grid-cols-2 gap-x-5;
    }
  }

  &__title {
    @apply mb-5 md:line-clamp-3 lg:line-clamp-2;
  }

  &__blurb {
    max-width: 620px;
  }

  &__img {
    @apply mt-10 ml-auto h-auto max-w-full;

    @screen md {
      @apply mt-0;

      max-height: 550px;
    }

    @screen lg {
      @apply h-auto;
    }
  }
}
</style>
