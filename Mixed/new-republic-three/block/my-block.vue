<template>
  <Block class="py-6 md:py-12" :block="block" backgroundColor="f6f6f6">
    <DeskSection v-slot="{ desk }">
      <TextInput
        component="h4"
        kind="desk-title"
        :defaultValue="desk"
        :fontSize="{ xs: 32, md: 22, lg: 30 }"
        fontFamily="Jost"
        bold
      />

      <div class="md:flex md:justify-between">
        <div class="flex w-full flex-col md:flex-row md:justify-between md:pr-8">
          <!---hero article 1--->
          <ArticleBlock class="hero-article" v-slot="{ article }">
            <LinkElement :href="article.url">
              <div class="aspect-w-16 aspect-h-9 relative">
                <ResponsiveImage
                  class="object-cover"
                  :src="article.headline"
                  :alt="article.headlineAlt"
                  sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
                />
              </div>
            </LinkElement>

            <div class="mt-4 mb-6 flex items-center justify-start">
              <LinkElement :href="article.deskUrl">
                <TextElement component="h4" kind="article-desk" :fontSize="{ md: 12, lg: 16 }" :lineHeight="1.4" bold>
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
              <Authors
                authorComponent="span"
                :authors="article.authors"
                kind="article-author"
                separator=" & "
                color="595959"
                :fontSize="{ md: 12, lg: 16 }"
                :lineHeight="{ xs: 1.2 }"
              />
            </div>

            <LinkElement :href="article.url">
              <div class="mb-2">
                <TextElement
                  component="h3"
                  kind="hero-title"
                  class="md:line-clamp-2"
                  fontFamily="Jost"
                  :fontSize="{ xs: 30, md: 26, lg: 34 }"
                  :lineHeight="1.0"
                >
                  {{ article.title }}
                </TextElement>

                <TextElement
                  component="p"
                  kind="article-blurb"
                  color="595959"
                  :fontSize="{ xs: 18, md: 14, lg: 18 }"
                  :lineHeight="1.5"
                >
                  {{ article.blurb }}
                </TextElement>
              </div>
            </LinkElement>
          </ArticleBlock>
          <div class="hidden md:block md:w-8"></div>
          <!---hero article 2--->
          <ArticleBlock class="hero-article" v-slot="{ article }">
            <LinkElement :href="article.url">
              <div class="aspect-w-16 aspect-h-9 relative">
                <ResponsiveImage
                  class="object-cover"
                  :src="article.headline"
                  :alt="article.headlineAlt"
                  sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
                />
              </div>
            </LinkElement>

            <div class="mt-4 mb-6 flex items-center justify-start">
              <LinkElement :href="article.deskUrl">
                <TextElement component="h4" kind="article-desk">
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
              <Authors authorComponent="span" :authors="article.authors" kind="article-author" />
            </div>

            <LinkElement :href="article.url">
              <div class="mb-2">
                <TextElement component="h3" kind="hero-title" class="md:line-clamp-2">
                  {{ article.title }}
                </TextElement>

                <TextElement component="p" kind="article-blurb">
                  {{ article.blurb }}
                </TextElement>
              </div>
            </LinkElement>
          </ArticleBlock>
        </div>

        <div class="md:w-52">
          <ArticleBlock class="other-article" v-slot="{ article }">
            <div class="hidden md:flex md:flex-auto">
              <LinkElement :href="article.deskUrl">
                <TextElement
                  component="h4"
                  kind="other-article-desk"
                  :fontSize="{ xs: 10, md: 8, lg: 10 }"
                  :lineHeight="1.4"
                  bold
                >
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
            </div>
            <LinkElement :href="article.url">
              <div class="relative">
                <div class="mt-4 md:aspect-w-16 md:aspect-h-12">
                  <ResponsiveImage
                    class="object-cover"
                    :src="article.headline"
                    :alt="article.headlineAlt"
                    sizes="(max-width: 768px) 100vw, (max-width: 1060px) 10vw, 15vw"
                  />
                </div>
              </div>
            </LinkElement>

            <div class="my-3 flex items-center justify-start md:hidden">
              <LinkElement :href="article.deskUrl">
                <TextElement component="h4" kind="article-desk">
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
              <Authors authorComponent="span" :authors="article.authors" kind="article-author" />
            </div>

            <LinkElement :href="article.url">
              <div class="mb-2 line-clamp-4">
                <TextElement
                  component="h3"
                  kind="other-title"
                  md:bold
                  fontFamily="Jost"
                  :fontSize="{ xs: 30, md: 16, lg: 18 }"
                  :lineHeight="{ xs: 1.1 }"
                >
                  {{ article.title }}
                </TextElement>
              </div>
            </LinkElement>

            <Authors
              authorComponent="span"
              :authors="article.authors"
              kind="other-article-author"
              separator=" & "
              color="595959"
              :fontSize="{ md: 12, lg: 16 }"
              :lineHeight="{ xs: 1.2, md: 1.1 }"
            />
          </ArticleBlock>

          <ArticleBlock class="other-article" v-slot="{ article }">
            <div class="hidden md:flex md:flex-auto">
              <LinkElement :href="article.deskUrl">
                <TextElement component="h4" kind="other-article-desk">
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
            </div>
            <div class="my-3 flex items-center justify-start md:hidden">
              <LinkElement :href="article.deskUrl">
                <TextElement component="h4" kind="article-desk">
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
              <Authors authorComponent="span" :authors="article.authors" kind="article-author" />
            </div>

            <LinkElement :href="article.url">
              <div class="mb-2 line-clamp-4">
                <TextElement
                  component="h3"
                  kind="second-title"
                  fontFamily="Jost"
                  :fontSize="{ xs: 30, md: 20, lg: 28 }"
                  :lineHeight="1.2"
                >
                  {{ article.title }}
                </TextElement>
              </div>
            </LinkElement>

            <Authors authorComponent="span" :authors="article.authors" kind="other-article-author" />
          </ArticleBlock>
        </div>
      </div>
    </DeskSection>
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
.desk-title {
  @apply mb-5 max-w-full;
}

.hero-article,
.other-article {
  @apply mb-12 pb-1;
}

.hero-article {
  @apply md:w-3/6;
}

.other-article-author {
  @apply hidden md:block;
}

.article-desk,
.other-article-desk {
  @apply mr-4;
}

.second-title {
  @apply md:mt-2;
}

.other-title {
  @apply md:mt-1 lg:mt-4;
}

.article-blurb {
  @apply mt-1 md:line-clamp-3;
}
</style>
