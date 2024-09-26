<template>
  <Block :block="block" class="pt-4 pb-8" background-color="f6f6f6">
    <DeskSection v-slot="{ desk }" class="aeon-one" :order="0">
      <div class="main-container">
        <div class="flex justify-center">
          <TextInput
            component="h4"
            kind="desk-title"
            font-family="Jost"
            :default-value="desk"
            :font-size="20"
            bold
            class="my-4 tracking-wide"
          />
        </div>

        <div class="article-list">
          <ArticleBlock
            v-for="i in 4"
            :key="i"
            v-slot="{ article }"
            class="my-10 first:mt-4 md:my-4 lg:my-0 lg:flex-1 lg:first:my-0"
          >
            <LinkElement :href="article.url">
              <div class="image relative overflow-hidden">
                <ResponsiveImage
                  class="absolute inset-0 h-full w-full object-cover"
                  :src="article.headline"
                  :alt="article.headlineAlt"
                  sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 20vw"
                />
              </div>
            </LinkElement>
            <div>
              <LinkElement :href="article.deskUrl">
                <div class="my-4 flex justify-start text-sm">
                  <TextElement component="h4" kind="article-desk" :font-size="{ lg: 12 }" font-family="Jost">
                    {{ article.desk }}
                  </TextElement>
                </div>
              </LinkElement>
              <LinkElement :href="article.url">
                <TextElement
                  class="line-clamp-2"
                  component="h3"
                  kind="article-title"
                  bold
                  font-family="Jost"
                  :font-size="{ xs: 24, lg: 20 }"
                >
                  {{ article.title }}
                </TextElement>
                <TextElement component="p" kind="article-blurb" class="my-4 line-clamp-2" :font-size="{ lg: 14 }">
                  {{ article.blurb }}
                </TextElement>
              </LinkElement>
              <span v-for="(author, index) in article.authors" :key="index">
                <LinkElement :href="author.url">
                  <TextElement component="span" kind="article-author" :font-size="{ lg: 14 }" color="909090">
                    {{ author.name }}
                  </TextElement>
                  <span
                    v-if="article.authors.length > 1 && index !== article.authors.length - 1"
                    class="article-author"
                  >
                    &
                  </span>
                </LinkElement>
              </span>
            </div>
          </ArticleBlock>
        </div>
      </div>
    </DeskSection>
  </Block>
</template>

<script>
import {
  ArticleBlock,
  Block,
  DeskSection,
  HeadlineImage,
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
    ResponsiveImage,
    HeadlineImage,
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
.image {
  @apply w-full bg-cover bg-center transition-opacity ease-in-out;

  padding-top: 62.5%;
  background: #bfdbfe;
  background-blend-mode: multiply;
}

.article-list {
  @apply md:grid md:grid-cols-2 md:gap-8 lg:mb-8 lg:flex lg:justify-between;

  @screen lg {
    padding-right: 0;
    padding-left: 0;
  }
}

.article-blurb {
  @apply my-4;
}
</style>
