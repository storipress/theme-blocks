<template>
  <ArticleBlock v-slot="{ article }">
    <div
      class="mb-4 grid grid-cols-3 items-start gap-4 border-b border-solid border-gray-300 pb-4 md:mx-0 md:flex md:flex-col md:items-stretch md:gap-0 lg:border-0 lg:pb-0"
    >
      <div>
        <div class="aspect-w-2 aspect-h-2 relative w-full bg-gray-300" :class="{ 'md:aspect-h-3': imageExpanded }">
          <LinkElement :href="article.url">
            <ResponsiveImage
              class="absolute left-0 h-full object-cover md:absolute md:top-0"
              :src="article.headline"
              :alt="article.headlineAlt"
              sizes="(max-width: 768px) 25vw, (max-width: 1060px) 25vw, 25vw"
            />
          </LinkElement>
        </div>
      </div>
      <div class="col-span-2 flex flex-col md:pt-4 lg:pb-10">
        <!-- article desk title -->
        <LinkElement :href="article.deskUrl">
          <TextElement
            kind="article-desk-title"
            class="mb-2 tracking-wider"
            component="h4"
            color="000"
            :fontSize="11"
            fontFamily="Aileron"
          >
            {{ article.desk }}
          </TextElement>
        </LinkElement>
        <div class="mb-2 lg:mb-4">
          <LinkElement :href="article.url">
            <TextElement
              class="hover:opacity-75"
              component="h3"
              kind="article-title"
              color="000"
              :fontSize="{ xs: 18, md: 22 }"
              :lineHeight="1.2"
              fontFamily="Aileron"
              bold
            >
              {{ article.title }}
            </TextElement>
          </LinkElement>
        </div>
        <ul class="mb-0.5 flex list-none flex-row flex-wrap items-center justify-start">
          <li v-for="(author, index) in article.authors" class="flex" :key="index">
            <TextElement
              v-if="index === 0"
              class="flex"
              component="div"
              kind="article-author-by-line"
              color="757776"
              font-family="Aileron"
              :font-size="{ xs: 11 }"
              :lineHeight="1.2"
              >By&nbsp;</TextElement
            >
            <LinkElement :href="author.url">
              <TextElement class="flex" component="div" kind="article-author-by-line">{{ author.name }}</TextElement>
            </LinkElement>
            <TextElement
              v-if="index < article.authors.length - 2"
              class="flex"
              component="div"
              kind="article-author-by-line"
              color="fff"
              >,&nbsp;</TextElement
            >
            <TextElement
              v-else-if="index < article.authors.length - 1"
              class="flex"
              component="div"
              kind="article-author-by-line"
              color="fff"
              >&nbsp;and&nbsp;</TextElement
            >
          </li>
        </ul>
        <TextElement
          class="flex w-full"
          v-if="article.time"
          component="time"
          kind="article-time"
          color="757776"
          font-family="Aileron"
          :font-size="{ xs: 11 }"
          >{{ format(article.time, 'd MMMM yyyy') }}</TextElement
        >
      </div>
    </div>
  </ArticleBlock>
</template>

<script>
import { ArticleBlock, LinkElement, ResponsiveImage, TextElement } from '@storipress/block'
import { format } from 'date-fns'

export default {
  components: {
    ArticleBlock,
    LinkElement,
    ResponsiveImage,
    TextElement,
  },

  props: {
    imageExpanded: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      format,
    }
  },
}
</script>
