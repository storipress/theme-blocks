<template>
  <Block :block="block" backgroundColor="f6f6f6">
    <div class="grid grid-cols-1 lg:grid-cols-3">
      <DeskSection :order="0" class="col-span-1">
        <ColorArea class="color-area" kind="color-area--black" backgroundColor="046582">
          <ArticleBlock class="h-full" v-slot="{ article }">
            <TextElement
              component="h4"
              kind="article-desk"
              :fontSize="24"
              :lineHeight="1.0"
              color="F6F6F6"
              fontFamily="Jost"
              class="pt-10 pl-6 lg:pt-12 lg:pl-8"
            >
              <LinkElement :href="article.deskUrl">
                {{ article.desk }}
              </LinkElement>
            </TextElement>
            <LinkElement class="block" :href="article.url">
              <div class="article">
                <div class="article__info">
                  <TextElement
                    component="h3"
                    kind="article__title"
                    class="lg:line-clamp-4"
                    :fontSize="32"
                    :lineHeight="1.0"
                    color="F6F6F6"
                    fontFamily="Jost"
                  >
                    {{ article.title }}
                  </TextElement>
                </div>

                <div class="w-5/12 self-end">
                  <div class="aspect-h-16 aspect-w-13">
                    <ResponsiveImage
                      class="object-cover"
                      :src="article.headline"
                      :alt="article.headlineAlt"
                      sizes="(max-width: 768px) 30vw, (max-width: 1060px) 40vw, 10vw"
                    />
                  </div>
                </div>
              </div>
            </LinkElement>
          </ArticleBlock>
        </ColorArea>
      </DeskSection>
      <DeskSection :order="1" class="col-span-1">
        <ColorArea class="color-area" kind="color-area--white" backgroundColor="BB8082">
          <ArticleBlock class="h-full" v-slot="{ article }">
            <TextElement
              component="h4"
              kind="article-desk--dark"
              :fontSize="24"
              :lineHeight="1.0"
              color="000000"
              fontFamily="Jost"
              class="pt-10 pl-6 lg:pt-12 lg:pl-8"
            >
              <LinkElement :href="article.deskUrl">
                {{ article.desk }}
              </LinkElement>
            </TextElement>
            <LinkElement class="block" :href="article.url">
              <div class="article">
                <div class="article__info">
                  <TextElement
                    component="h3"
                    kind="article__title--dark"
                    :fontSize="32"
                    :lineHeight="1.0"
                    color="000000"
                    fontFamily="Jost"
                    class="article__title lg:line-clamp-4"
                  >
                    {{ article.title }}
                  </TextElement>
                </div>

                <div class="w-5/12 self-end">
                  <div class="aspect-h-16 aspect-w-13">
                    <ResponsiveImage class="object-cover" :src="article.headline" :alt="article.headlineAlt" />
                  </div>
                </div>
              </div>
            </LinkElement>
          </ArticleBlock>
        </ColorArea>
      </DeskSection>
      <DeskSection :order="2" class="col-span-1">
        <ColorArea class="color-area" kind="color-area--pink" backgroundColor="F39189">
          <ArticleBlock class="h-full" v-slot="{ article }">
            <TextElement component="h4" kind="article-desk--dark" class="pt-10 pl-6 lg:pt-12 lg:pl-8">
              <LinkElement :href="article.deskUrl">
                {{ article.desk }}
              </LinkElement>
            </TextElement>
            <LinkElement class="block" :href="article.url">
              <div class="article">
                <div class="article__info">
                  <TextElement component="h3" kind="article__title--dark" class="article__title lg:line-clamp-4">
                    {{ article.title }}
                  </TextElement>
                </div>

                <div class="w-5/12 self-end">
                  <div class="aspect-h-16 aspect-w-13">
                    <ResponsiveImage class="object-cover" :src="article.headline" :alt="article.headlineAlt" />
                  </div>
                </div>
              </div>
            </LinkElement>
          </ArticleBlock>
        </ColorArea>
      </DeskSection>
    </div>
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
    TextElement,
    LinkElement,
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
.color-area {
  @apply h-full overflow-hidden;
}

.article {
  @apply flex h-full flex-col justify-between pl-6;

  @screen md {
    @apply flex-row;
  }

  @screen lg {
    @apply h-[39vw] max-h-[40rem] flex-col pl-8;
  }

  &__title {
    @apply mt-2.5 mb-8 ml-0 mr-auto;

    margin-right: 10%;

    @screen md {
      margin-right: 25%;
    }
  }

  &__info {
    @screen md {
      flex-basis: 60%;
    }
  }

  &__img {
    @apply flex h-full grow items-end;

    @screen md {
      flex-basis: 40%;
    }

    @screen lg {
      @apply ml-auto;

      flex-basis: 0;
    }

    img {
      @apply ml-auto h-auto max-w-full;

      padding-left: 30%;

      @screen md {
        @apply mt-0 w-full pl-0;
      }

      @screen lg {
        @apply mt-8;
      }
    }
  }
}
</style>
