<template>
  <Block class="relative block py-6 md:py-12" :block="block">
    <DeskSection :order="0">
      <ArticleBlock v-slot="{ article }">
        <div class="polygon-desk mx-auto flex w-full flex-col gap-x-2 gap-y-6">
          <div class="single-article">
            <LinkElement :href="article.url" class="min-w-max md:min-w-min lg:min-w-max">
              <ResponsiveImage
                sizes="(min-width: 768px) 30vw, 100vw"
                :alt="article.headlineAlt"
                :src="article.headline"
              />
            </LinkElement>
            <div class="px-2 pt-1 sm:pt-0 md:w-3/4 md:pt-2 lg:px-4 lg:pt-4">
              <TextElement
                component="h3"
                kind="article-title"
                :bold="true"
                color="000"
                class="hover:opacity-75"
                fontFamily="Public Sans"
                :lineHeight="1.1"
                :fontSize="{ xs: 14, md: 17, lg: 19 }"
              >
                <LinkElement :href="article.url">
                  {{ article.title }}
                </LinkElement>
              </TextElement>

              <TextElement
                component="p"
                kind="article-authors"
                fontFamily="Amiri"
                :fontSize="{ xs: 14, lg: 15 }"
                color="727275"
                >By
                <span v-for="(author, index) in article.authors" :key="index + author.name">
                  <LinkElement class="author-link" :key="index" :href="author.url"
                    ><TextElement kind="article-authors" component="span" color="da0050" class="hover:opacity-75">{{
                      author.name
                    }}</TextElement></LinkElement
                  ><span v-if="index < article.authors.length - 2">,&nbsp;</span>
                  <span v-if="index === article.authors.length - 2">&amp;&nbsp;</span>
                </span></TextElement
              >
            </div>
          </div>
          <ArticleBlock class="single-article" v-slot="{ article }">
            <LinkElement :href="article.url" class="min-w-max md:min-w-min lg:min-w-max">
              <ResponsiveImage
                sizes="(min-width: 768px) 30vw, 100vw"
                :alt="article.headlineAlt"
                :src="article.headline"
              />
            </LinkElement>
            <div class="px-2 pt-1 md:w-3/4 lg:px-4 lg:pt-4">
              <TextElement component="h3" kind="article-title">
                <LinkElement :href="article.url">
                  {{ article.title }}
                </LinkElement>
              </TextElement>
              <TextElement component="p" kind="article-authors"
                >By
                <span v-for="(author, index) in article.authors" :key="index + author.name">
                  <LinkElement class="author-link" :key="index" :href="author.url"
                    ><TextElement kind="article-authors" component="span">{{ author.name }}</TextElement></LinkElement
                  ><span v-if="index < article.authors.length - 2">,&nbsp;</span>
                  <span v-if="index === article.authors.length - 2">&amp;&nbsp;</span>
                </span></TextElement
              >
            </div>
          </ArticleBlock>
          <ArticleBlock class="relative w-1/3 md:w-1/5 md:min-w-0 lg:w-1/6 lg:min-w-max" v-slot="{ article }">
            <TextElement component="span" kind="decoration-svg" color="fff">
              <svg class="absolute top-0 right-0 z-10 fill-current" viewBox="0 0 15 15" width="45px" height="45px">
                <path d=" M 0 0 L 15 0 L 15 15 L 0 0 Z " /></svg
            ></TextElement>
            <ResponsiveImage :src="article.headline" :alt="article.headlineAlt" class="absolute z-0 h-full w-full" />
            <div
              class="absolute bottom-1.5 left-0 z-10 flex w-full flex-col items-center justify-center overflow-hidden p-2 lg:p-4"
            >
              <TextElement
                :bold="true"
                component="h3"
                fontFamily="Public Sans"
                kind="article-title-free"
                class="hover:opacity-75"
                color="fefbfc"
                align="center"
                :lineHeight="1.2"
                :fontSize="{ xs: 12, lg: 16 }"
                ><LinkElement :href="article.url">{{ article.title }}</LinkElement></TextElement
              >
            </div>
          </ArticleBlock>
        </div>
        <div class="mt-4 flex w-full justify-end">
          <LinkElement :href="article.deskUrl" class="flex">
            <TextInput
              color="727275"
              class="hover:opacity-75"
              kind="desk-link"
              component="div"
              :fontSize="{ xs: 14, md: 15, lg: 16 }"
              defaultValue="More from Desk" />
            <TextElement color="7c7c7c" kind="desk-link-svg" component="div"
              ><svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg></TextElement
          ></LinkElement>
        </div>
      </ArticleBlock>
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
.polygon-desk {
  flex-flow: row;
}

.article-title,
.article-title-free,
.author-text,
.desk-link,
.desk-link-svg {
  @apply transition-opacity;
}

.single-article {
  @apply block flex-1 md:flex;
}

.article-title {
  margin-top: 8px;
  margin-bottom: 4.8px;

  @screen md {
    margin-top: 0;
    margin-bottom: 5.1px;
  }

  @screen lg {
    margin-top: 0;
    margin-bottom: 5.7px;
  }
}

.article-title-free {
  word-break: normal;
  overflow-wrap: anywhere;
}
</style>
