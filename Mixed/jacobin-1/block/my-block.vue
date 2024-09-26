<template>
  <Block class="py-6 md:py-12" backgroundColor="f6f6f6" :block="block">
    <!-- FEATURED ARTICLE DESK -->
    <DeskSection :order="0">
      <!-- TOP ARTICLE BLOCK -->
      <ArticleBlock v-slot="{ article }" class="flex flex-col-reverse md:flex-row-reverse lg:flex-row">
        <!-- TITLE, TIME, AUTHER + BLURB -->
        <div class="mx-4 flex md:mx-0 md:ml-8 md:w-1/2 lg:mr-8 lg:ml-0 lg:items-center">
          <div class="flex flex-col">
            <TextElement
              component="h2"
              kind="featured-article-title"
              :fontSize="{ lg: 42, md: 31, xs: 31 }"
              fontFamily="Jost"
              color="191919"
              :lineHeight="1.3"
              class="mt-8 duration-200 hover:text-opacity-50 lg:mt-0"
            >
              <LinkElement :href="article.url" class="title">{{ article.title }}</LinkElement>
            </TextElement>
            <!-- TIME + AUTHER INFO -->
            <div class="author mt-8 flex lg:mt-12">
              <TextElement
                component="p"
                kind="featured-article-date"
                :fontSize="{ lg: 22, md: 17, xs: 17 }"
                fontFamily="Jost"
                color="b3b3b3"
                class="mr-8"
              >
                <!-- APPENDING 0 AT THE START + SLICING LAST TO DIGITS, SO WHENEVER THERE IS A SINGLE DIGIT IT SHOWS 0 AT THE START -->
                {{ getDate(article) }}
              </TextElement>

              <!-- Looping Through List of Authers -->
              <ul class="block">
                <TextElement
                  component="li"
                  kind="featured-article-auther"
                  :fontSize="{ lg: 22, md: 17, xs: 17 }"
                  fontFamily="Jost"
                  v-for="(author, index) in article.authors"
                  :key="index"
                  class="inline"
                  color="191919"
                >
                  <LinkElement :href="author.url" class="mr-1 cursor-pointer duration-200 hover:opacity-75">
                    {{ author.name }}
                  </LinkElement>
                  <span v-if="index != article.authors.length - 1">/</span>
                </TextElement>
              </ul>
            </div>
            <TextElement
              component="p"
              kind="featured-article-blurb"
              :fontSize="{ lg: 22, md: 17, xs: 17 }"
              fontFamily="Jost"
              color="191919"
              class="mt-8 lg:mt-12"
            >
              {{ article.blurb }}
            </TextElement>
          </div>
        </div>

        <!---Hero Photo--->
        <LinkElement
          :href="article.url"
          class="relative block h-96 overflow-hidden transition-opacity hover:opacity-75 md:h-[32rem] md:w-1/2 lg:h-[38rem]"
        >
          <ResponsiveImage
            class="absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover"
            :src="article.headline"
            :alt="article.headlineAlt"
            sizes="(max-width: 768px) 100vw, (max-width: 1060px) 50vw, 50vw"
          />
        </LinkElement>
      </ArticleBlock>
    </DeskSection>

    <!-- 2nd Desk -->
    <DeskSection :order="1" class="mx-auto w-full">
      <!-- CONTAINER FOR 4 ARTICLES
      DESKTOP -> 1 ROW 4 COLUMNS
      TABLET -> 2 ROW 2 COLUMNS
      MOBILE -> 4 ROWS 1 COLUMN -->
      <div class="flex w-full flex-col gap-5 lg:flex-row">
        <div class="flex flex-col gap-5 md:flex-row lg:mb-0 lg:w-1/2" v-for="i in 2" :key="`group-${i}`">
          <ArticleBlock
            v-slot="{ article }"
            class="mt-16 flex flex-col-reverse justify-between md:w-1/2 md:flex-col"
            v-for="j in 2"
            :key="`article-${j}`"
          >
            <div class="mt-8 md:my-0">
              <TextElement
                component="h3"
                kind="latest-article-title"
                :fontSize="23"
                fontFamily="Jost"
                color="191919"
                :lineHeight="1.3"
                class="w-full duration-200"
              >
                <LinkElement :href="article.url" class="title">{{ article.title }}</LinkElement>
              </TextElement>
              <!-- DATE + AUTHER -->
              <div class="author mt-8 flex">
                <TextElement
                  component="p"
                  kind="latest-article-time"
                  :fontSize="17"
                  fontFamily="Jost"
                  color="b3b3b3"
                  class="mr-8"
                >
                  {{ getDate(article) }}
                </TextElement>
                <ul class="block">
                  <TextElement
                    component="li"
                    kind="latest-article-auther"
                    :fontSize="17"
                    fontFamily="Jost"
                    v-for="(author, index) in article.authors"
                    :key="index"
                    class="inline"
                  >
                    <LinkElement :href="author.url" class="mr-1 cursor-pointer duration-200 hover:opacity-75">
                      {{ author.name }}
                    </LinkElement>
                    <span v-if="index != article.authors.length - 1">/</span>
                  </TextElement>
                </ul>
              </div>
              <TextElement
                component="p"
                kind="latest-article-blurb"
                :fontSize="17"
                fontFamily="Jost"
                color="191919"
                class="mt-8"
              >
                {{ article.blurb }}
              </TextElement>
            </div>

            <LinkElement
              :href="article.url"
              class="aspect-w-16 aspect-h-8 relative mx-[10%] block overflow-hidden transition-opacity hover:opacity-75 md:aspect-h-12 md:mx-0 md:mt-8"
            >
              <ResponsiveImage
                class="object-cover"
                :src="article.headline"
                :alt="article.headlineAlt"
                sizes="(max-width: 768px) 75vw, (max-width: 1060px) 40vw, 20vw"
              />
            </LinkElement>
          </ArticleBlock>
        </div>
      </div>
    </DeskSection>
  </Block>
</template>

<script>
import { ArticleBlock, Block, DeskSection, LinkElement, ResponsiveImage, TextElement } from '@storipress/block'

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
  methods: {
    getDate(article) {
      const month = (article.time.getMonth() + 1).toString().padStart(2, '0')
      const date = article.time.getDate().toString().padStart(2, '0')
      return month + '.' + date
    },
  },
}
</script>

<style lang="scss" scoped>
.author {
  margin-left: 10vw;

  @screen md {
    margin-left: 0;
  }
}
</style>
