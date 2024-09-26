<template>
  <Block :block="block" class="py-6 md:py-12" backgroundColor="f6f6f6">
    <!--md:w-11/12 -->
    <div class="mx-auto flex flex-col justify-evenly lg:flex-row">
      <!-- FEATURED ART. DESK SECTION -->
      <DeskSection class="lg:w-1/2" :order="0">
        <ArticleBlock v-slot="{ article }" class="flex flex-col-reverse justify-between lg:flex-col">
          <!-- ARTICLE INFO -->
          <div class="w-100% featuredContainer flex flex-col justify-end md:mx-0 md:w-full lg:my-8 lg:flex-row">
            <!-- HEADING,AUTHER + TIME  -->
            <div class="mt-8 flex flex-col-reverse lg:mt-0 lg:w-1/2 lg:flex-col lg:pr-3">
              <div
                class="article-time-name my-8 flex items-center md:pl-0 lg:my-0 lg:mb-4 lg:ml-0 lg:justify-self-start"
              >
                <TextElement
                  component="p"
                  kind="featured-article-date"
                  :fontSize="17"
                  fontFamily="Jost"
                  color="b3b3b3"
                  class="mr-8"
                >
                  {{ getDate(article) }}
                </TextElement>
                <!-- Authors -->
                <div class="block cursor-pointer transition-opacity duration-200 hover:opacity-75">
                  <TextElement
                    component="span"
                    kind="featured-article-authors"
                    font-family="Jost"
                    :fontSize="17"
                    color="191919"
                  >
                    By
                  </TextElement>
                  <Authors author-component="span" :authors="article.authors" kind="featured-article-authors" />
                </div>
              </div>
              <div class="mt-8 md:mt-0 lg:w-full">
                <TextElement
                  component="h3"
                  kind="featured-article-title"
                  :fontSize="31"
                  fontFamily="Jost"
                  class="duration-200 hover:opacity-75"
                  :lineHeight="1.2"
                >
                  <LinkElement :href="article.url" class="title transition-opacity hover:opacity-75">{{
                    article.title
                  }}</LinkElement>
                </TextElement>
              </div>
            </div>
            <!-- BLURB -->
            <LinkElement :href="article.url" class="mt-0 block transition-opacity hover:opacity-75 lg:w-1/2 lg:pl-3">
              <TextElement component="p" kind="latest-article-blurb" :fontSize="17" fontFamily="Jost">
                {{ article.blurb }}
              </TextElement>
            </LinkElement>
          </div>
          <!-- IMAGE -->
          <LinkElement :href="article.url" class="aspect-h-10 aspect-w-16 block transition-opacity hover:opacity-75">
            <ResponsiveImage
              :src="article.headline"
              class="object-cover"
              :alt="article.headlineAlt"
              sizes="(max-width: 768px) 100vw, (max-width: 1060px) 100vw, 40vw"
            />
          </LinkElement>
        </ArticleBlock>
      </DeskSection>

      <!-- Psuedo div for a line in between -->
      <div class="mx-3 w-px"></div>

      <!-- LATEST ARTICLES'S DESK SECTION -->
      <DeskSection class="flex flex-col justify-between lg:mt-0 lg:w-1/2 lg:flex-col" :order="1">
        <!-- GRID OF 4 x 2 Articles -->
        <div
          class="flex flex-col justify-between gap-14 lg:mt-0 lg:flex-row lg:gap-0"
          v-for="i in 4"
          :key="`group_${i}`"
        >
          <ArticleBlock
            v-slot="{ article }"
            class="side-article mx-auto md:mx-0 lg:w-1/2"
            v-for="j in 2"
            :key="`article_${j}`"
          >
            <LinkElement :href="article.url" class="title block pt-14 transition-opacity hover:opacity-75 lg:hidden">
              <div class="article-content">
                <ResponsiveImage
                  :src="article.headline"
                  class="object-cover"
                  :alt="article.headlineAlt"
                  sizes="(max-width: 768px) 50vw, (max-width: 1060px) 60vw, 10vw"
                />
              </div>

              <TextElement
                component="h3"
                kind="featured-article-title2"
                :fontSize="23"
                fontFamily="Jost"
                :lineHeight="1.3"
                class="mt-8 block pb-10 duration-200 md:w-11/12 lg:hidden"
              >
                {{ article.title }}
              </TextElement>
            </LinkElement>
            <div class="article-time-name flex py-0 lg:py-4">
              <TextElement component="p" kind="featured-article-date" class="mr-8">
                {{ getDate(article) }}
              </TextElement>
              <ul class="block lg:hidden">
                <TextElement
                  component="li"
                  kind="featured-article-auther"
                  v-for="(author, index) in article.authors"
                  :key="index"
                  class="inline"
                >
                  <span v-if="index == 0">By</span>
                  <span v-if="index != 0 && index != article.authors.length - 1">,</span>
                  <span v-if="index != 0 && index == article.authors.length - 1">&</span>
                  <LinkElement
                    :href="author.url"
                    class="mr-1 cursor-pointer transition-opacity duration-200 hover:opacity-75"
                  >
                    {{ author.name }}
                  </LinkElement>
                </TextElement>
              </ul>
            </div>
            <LinkElement :href="article.url" class="block transition-opacity hover:opacity-75">
              <TextElement
                component="h3"
                kind="latest-article-title"
                :fontSize="17"
                :lineHeight="1.2"
                fontFamily="Jost"
                class="hidden pb-10 duration-200 md:w-11/12 lg:block"
              >
                {{ article.title }}
              </TextElement>
              <TextElement class="block pt-8 lg:hidden" component="p" kind="latest-article-blurb">
                {{ article.blurb }}
              </TextElement>
            </LinkElement>
          </ArticleBlock>
        </div>
      </DeskSection>
    </div>
    <!-- </div> -->
  </Block>
</template>

<script>
import { ArticleBlock, Authors, Block, DeskSection, LinkElement, ResponsiveImage, TextElement } from '@storipress/block'

export default {
  components: {
    ArticleBlock,
    Authors,
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
.article-time-name {
  width: auto;

  @screen lg {
    width: auto;
    margin-left: 0;
    margin-right: 0;
  }
}

.article-content {
  margin-left: auto;
  margin-right: auto;
  width: 67.5vw;

  @screen lg {
    width: auto;
  }
}

/* .w-1/2 {
  width: 67.5vw;
} */

@screen md {
  .featuredContainer {
    /* width: 44.25vw; */
    width: auto;
  }

  /* .w-1/2 {
    width: 21.5vw;
  } */
}
</style>
