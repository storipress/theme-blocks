<template>
  <Block :block="block" class="pt-6 pb-8 md:pb-16" backgroundColor="f6f6f6">
    <DeskSection v-slot="{ desk }">
      <!-- CONTAINS THE DESK NAME -->
      <TextInput component="h2" kind="desk-title" class="mb-4" :fontSize="28" fontFamily="Jost" :defaultValue="desk" />
      <div class="md:flex">
        <!-- THE FIRST ARTICLE -->
        <ArticleBlock
          v-slot="{ article }"
          class="article mb-4 flex border-b border-dotted border-black md:mr-3 md:w-1/4 md:flex-col lg:mr-4"
        >
          <!-- ARTICLE IMAGE -->
          <LinkElement :href="article.url">
            <!-- Image Goes Here -->
            <div class="aspect-w-16 aspect-h-12 mb-4 overflow-hidden">
              <ResponsiveImage
                :alt="article.headlineAlt"
                :src="article.headline"
                class="mx-auto min-h-full min-w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 20vw, 20vw"
              />
            </div>
          </LinkElement>
          <!-- ARTICLE CATEGORY -->
          <TextElement
            component="p"
            kind="article-category"
            :fontSize="14"
            class="hidden md:mb-1 md:block"
            :lineHeight="1.1"
            fontFamily="Jost"
          >
            {{ article.category }}
          </TextElement>
          <!-- ARTICLE TITLE -->
          <TextElement
            component="h1"
            kind="article-title"
            :fontSize="{ xs: 16, md: 16, lg: 18 }"
            class="h-20 flex-1 overflow-hidden md:mb-6 md:ml-0 md:h-auto md:line-clamp-2"
            :lineHeight="1.1"
            fontFamily="Jost"
          >
            <LinkElement :href="article.url" class="hover:underline">{{ article.title }}</LinkElement>
          </TextElement>
          <!-- ARTICLE TIME -->
          <TextElement
            component="p"
            kind="article-time"
            :fontSize="12"
            class="hidden md:mb-4 md:block"
            :lineHeight="1.1"
            fontFamily="Jost"
          >
            {{ getTime(article) }}
          </TextElement>
        </ArticleBlock>
        <ArticleBlock
          v-slot="{ article }"
          class="article mb-4 flex border-b border-dotted border-black md:mx-3 md:w-1/4 md:flex-col lg:mx-4"
        >
          <!-- ARTICLE IMAGE -->
          <LinkElement :href="article.url">
            <!-- Image Goes Here -->
            <div class="aspect-w-16 aspect-h-12 mb-4 overflow-hidden">
              <ResponsiveImage
                :alt="article.headlineAlt"
                :src="article.headline"
                class="mx-auto min-h-full min-w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 20vw, 20vw"
              />
            </div>
          </LinkElement>
          <!-- ARTICLE CATEGORY -->
          <TextElement
            component="p"
            kind="article-category"
            :fontSize="14"
            class="hidden md:mb-1 md:block"
            :lineHeight="1.1"
            fontFamily="Jost"
          >
            {{ article.category }}
          </TextElement>
          <!-- ARTICLE TITLE -->
          <TextElement
            component="h1"
            kind="article-title"
            :fontSize="{ xs: 16, md: 16, lg: 18 }"
            class="h-20 flex-1 overflow-hidden md:mb-6 md:ml-0 md:h-auto md:line-clamp-2"
            :lineHeight="1.1"
            fontFamily="Jost"
          >
            <LinkElement :href="article.url" class="hover:underline">{{ article.title }}</LinkElement>
          </TextElement>
          <!-- ARTICLE TIME -->
          <TextElement
            component="p"
            kind="article-time"
            :fontSize="12"
            class="hidden md:mb-4 md:block"
            :lineHeight="1.1"
            fontFamily="Jost"
          >
            {{ getTime(article) }}
          </TextElement>
        </ArticleBlock>
        <ArticleBlock
          v-slot="{ article }"
          class="article mb-4 flex border-b border-dotted border-black md:mx-3 md:w-1/4 md:flex-col lg:mx-4"
        >
          <!-- ARTICLE IMAGE -->
          <LinkElement :href="article.url">
            <!-- Image Goes Here -->
            <div class="aspect-w-16 aspect-h-12 mb-4 overflow-hidden">
              <ResponsiveImage
                :alt="article.headlineAlt"
                :src="article.headline"
                class="mx-auto min-h-full min-w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 20vw, 20vw"
              />
            </div>
          </LinkElement>
          <!-- ARTICLE CATEGORY -->
          <TextElement
            component="p"
            kind="article-category"
            :fontSize="14"
            class="hidden md:mb-1 md:block"
            :lineHeight="1.1"
            fontFamily="Jost"
          >
            {{ article.category }}
          </TextElement>
          <!-- ARTICLE TITLE -->
          <TextElement
            component="h1"
            kind="article-title"
            :fontSize="{ xs: 16, md: 16, lg: 18 }"
            class="h-20 flex-1 overflow-hidden md:mb-6 md:ml-0 md:h-auto md:line-clamp-2"
            :lineHeight="1.1"
            fontFamily="Jost"
          >
            <LinkElement :href="article.url" class="hover:underline">{{ article.title }}</LinkElement>
          </TextElement>
          <!-- ARTICLE TIME -->
          <TextElement
            component="p"
            kind="article-time"
            :fontSize="12"
            class="hidden md:mb-4 md:block"
            :lineHeight="1.1"
            fontFamily="Jost"
          >
            {{ getTime(article) }}
          </TextElement>
        </ArticleBlock>
        <ArticleBlock
          v-slot="{ article }"
          class="article mb-4 flex border-b border-dotted border-black md:ml-3 md:w-1/4 md:flex-col lg:ml-4"
        >
          <!-- ARTICLE IMAGE -->
          <LinkElement :href="article.url">
            <!-- Image Goes Here -->
            <div class="aspect-w-16 aspect-h-12 mb-4 overflow-hidden">
              <ResponsiveImage
                :alt="article.headlineAlt"
                :src="article.headline"
                class="mx-auto min-h-full min-w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 20vw, 20vw"
              />
            </div>
          </LinkElement>
          <!-- ARTICLE CATEGORY -->
          <TextElement
            component="p"
            kind="article-category"
            :fontSize="14"
            class="hidden md:mb-1 md:block"
            :lineHeight="1.1"
            fontFamily="Jost"
          >
            {{ article.category }}
          </TextElement>
          <!-- ARTICLE TITLE -->
          <TextElement
            component="h1"
            kind="article-title"
            :fontSize="{ xs: 16, md: 16, lg: 18 }"
            class="h-20 flex-1 overflow-hidden md:mb-6 md:ml-0 md:h-auto md:line-clamp-2"
            :lineHeight="1.1"
            fontFamily="Jost"
          >
            <LinkElement :href="article.url" class="hover:underline">{{ article.title }}</LinkElement>
          </TextElement>
          <!-- ARTICLE TIME -->
          <TextElement
            component="p"
            kind="article-time"
            :fontSize="12"
            class="hidden md:mb-4 md:block"
            :lineHeight="1.1"
            fontFamily="Jost"
          >
            {{ getTime(article) }}
          </TextElement>
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
    TextInput,
    LinkElement,
    ResponsiveImage,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getTime(article) {
      const diffTime = Math.abs(article.time - Date.now()) / 36e5 // Finding Difference Between Time
      if (Math.round(diffTime) === 1) return 'Updated an hour ago'
      else if (diffTime > 1 && diffTime <= 12) return 'Updated ' + Math.round(diffTime).toString() + ' hours ago'
      else if (diffTime * 60 > 1 && diffTime * 60 < 60)
        return 'Updated ' + Math.round(diffTime * 60).toString() + ' minutes ago'
      else return ''
    },
  },
}
</script>

<style lang="scss" scoped>
.article {
  min-height: 90px;
}
</style>
