<template>
  <Block :block="block" :backgroundColor="{ xs: '000', lg: 'fff' }">
    <div class="ti-three py-8 md:py-16">
      <DeskSection class="desk-one" :order="0" v-slot="{ desk }">
        <TextInput
          kind="desk-title"
          data-id="1"
          :color="{ xs: 'fff', lg: '111' }"
          component="h2"
          fontFamily="Cooper Hewitt Heavy"
          :fontSize="{ xs: 32 }"
          :line-height="{ xs: 0.944 }"
          :defaultValue="desk"
        />

        <ArticleBlock class="article link" v-slot="{ article }" v-for="i in 2" :key="`article-${i}`">
          <div class="image">
            <LinkElement :href="article.url">
              <ResponsiveImage :alt="article.headlineAlt" :src="article.headline" sizes="25vw" />
            </LinkElement>
          </div>

          <div>
            <LinkElement :href="article.url">
              <TextElement
                :color="{ xs: 'fff', lg: '111' }"
                component="h4"
                fontFamily="Cooper Hewitt Heavy"
                :fontSize="{ xs: 18, lg: 20 }"
                kind="article-title-one"
                :lineHeight="1.1"
              >
                {{ article.title }}
              </TextElement>
            </LinkElement>

            <Authors
              authorComponent="span"
              :authors="article.authors"
              class="authors mt-2.5"
              color="6653ff"
              fontFamily="Roboto Mono"
              :fontSize="13"
              kind="article-author"
              :line-height="1.2"
              separator=", "
            />
          </div>
        </ArticleBlock>
      </DeskSection>

      <DeskSection class="desk-two" :order="1" v-slot="{ desk }">
        <TextInput kind="desk-title" data-id="2" component="h2" :defaultValue="desk" />

        <ArticleBlock class="article link" v-slot="{ article }">
          <div class="image">
            <LinkElement :href="article.url">
              <ResponsiveImage
                :alt="article.headlineAlt"
                :src="article.headline"
                sizes="(max-width: 768px) 95vw, 60vw"
              />
            </LinkElement>
          </div>

          <div>
            <LinkElement :href="article.url">
              <TextElement
                class="mt-3 line-clamp-2"
                :color="{ xs: 'fff', lg: '111' }"
                component="h3"
                fontFamily="Cooper Hewitt Heavy"
                :fontSize="{ xs: 22, lg: 32 }"
                kind="article-title-two"
                :lineHeight="1.2"
              >
                {{ article.title }}
              </TextElement>
            </LinkElement>

            <Authors
              authorComponent="span"
              :authors="article.authors"
              class="authors"
              kind="article-author"
              separator=", "
            />
          </div>
        </ArticleBlock>
      </DeskSection>

      <DeskSection class="desk-three" :order="2" v-slot="{ desk }">
        <TextInput kind="desk-title" data-id="3" component="h2" :defaultValue="desk" />

        <ArticleBlock v-for="i in 2" :key="`article-${i}`" class="article" v-slot="{ article }">
          <LinkElement class="link" :href="article.url">
            <ResponsiveImage :alt="article.headlineAlt" :src="article.headline" class="image" sizes="25vw" />
          </LinkElement>

          <div>
            <LinkElement class="link" :href="article.url">
              <TextElement
                :color="{ xs: 'fff', lg: '111' }"
                component="h3"
                kind="article-title-three"
                fontFamily="Cooper Hewitt Heavy"
                :fontSize="{ xs: 18, lg: 20 }"
                :lineHeight="1.1"
              >
                {{ article.title }}
              </TextElement>
            </LinkElement>
          </div>
        </ArticleBlock>
      </DeskSection>
    </div>
  </Block>
</template>

<script>
import {
  ArticleBlock,
  Authors,
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
    Authors,
    Block,
    DeskSection,
    LinkElement,
    TextElement,
    TextInput,
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
.ti-three {
  @apply lg:flex lg:flex-row lg:flex-wrap;

  .desk-one,
  .desk-two,
  .desk-three {
    @apply border-t pt-2.5;

    border-top-color: #fff;
    padding-bottom: 50px;

    @screen lg {
      @apply px-0 pb-0;

      border-top-color: #111;
    }

    .desk-title {
      @apply my-2 mb-5 capitalize;
    }

    .article {
      @apply border-t;
      @apply mb-10 pt-5;

      border-top-color: #444;

      @screen lg {
        border-top-color: #eee;
      }

      &:last-of-type {
        @apply mb-0;
      }

      &:hover {
        .article-title-one,
        .article-title-two,
        .article-title-three {
          opacity: 75%;
        }

        .image::before {
          @apply absolute inset-0;
          @apply h-full w-full;

          background-color: rgba(102, 83, 255, 0.15);
          content: '';
        }
      }

      .article-title-one,
      .article-title-two,
      .article-title-three {
        @apply transition-opacity;
      }

      .image {
        @apply relative transition-opacity;

        img {
          @apply h-full w-full;
        }
      }

      .authors {
        @apply leading-none;
      }
    }
  }

  .desk-one {
    @screen lg {
      width: 15rem;
    }

    .link {
      @apply flex;

      .image {
        aspect-ratio: 1 / 1;
        margin-right: 2.5rem;
        width: 5rem;
        height: 5rem;

        @screen lg {
          margin-right: 1.3125rem;
          width: 3.75rem;
          height: 3.75rem;
        }
      }
    }
  }

  .desk-two {
    @screen lg {
      width: calc(100% - 35rem);
      margin: 0 auto;
    }

    .image {
      @apply w-full;
      @apply mb-4;

      aspect-ratio: 2 / 1;
    }
  }

  .desk-three {
    @screen lg {
      width: 15rem;
    }

    .link {
      @apply flex;

      @screen lg {
        @apply block;
      }

      .image {
        aspect-ratio: 1 / 1;
        margin-bottom: 0;
        margin-right: 2.5rem;
        width: 7.5rem;
        height: 7.5rem;

        @screen lg {
          margin-bottom: 0.625rem;
          margin-right: 0;
        }
      }
    }
  }
}
</style>
