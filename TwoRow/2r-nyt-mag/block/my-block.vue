<template>
  <Block :block="block" class="py-10 md:pb-16" backgroundColor="f6f6f6">
    <DeskSection :order="0" class="my-desk divide-lightgray-500">
      <ArticleBlock class="article-container article-item" v-slot="{ article }">
        <div class="article-inner-part">
          <div class="aspect-w-16 aspect-h-10 overflow-hidden">
            <LinkElement :href="article.url">
              <ResponsiveImage
                class="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
                :alt="article.headlineAlt"
                :src="article.headline"
              />
            </LinkElement>
          </div>
          <LinkElement :href="article.deskUrl">
            <TextElement
              class="py-5"
              component="h4"
              kind="article-desk"
              :fontSize="11"
              fontFamily="Jost"
              :lineHeight="1"
            >
              {{ article.desk }}
            </TextElement>
          </LinkElement>
          <LinkElement :href="article.url">
            <TextElement
              class="pb-[3px] line-clamp-3"
              component="h3"
              kind="article-title"
              :fontSize="{ xs: 30, md: 42 }"
              fontFamily="Jost"
              :lineHeight="1"
            >
              {{ article.title }}
            </TextElement>
          </LinkElement>
          <TextElement
            class="pt-5 pb-2"
            component="p"
            kind="article-blurb"
            :fontSize="15"
            fontFamily="Jost"
            :lineHeight="1"
          >
            {{ article.blurb }}
          </TextElement>
          <TextElement
            kind="article-author"
            component="div"
            class="hidden md:block"
            color="b3b3b3"
            :fontSize="10"
            :lineHeight="1"
          >
            <span class="author-by">By</span>
            <span v-for="(author, index) of article.authors" :key="index">
              <span class="author-by" v-if="index != 0 && article.authors.length - 1 != index">, </span>
              <span class="author-by" v-if="index != 0 && article.authors.length - 1 == index">& </span>
              <LinkElement :href="author.url" class="mt-6">
                <span>{{ author.name }}</span>
              </LinkElement>
            </span>
          </TextElement>
        </div>
      </ArticleBlock>
      <ArticleBlock class="article-container article-item" v-slot="{ article }">
        <div class="article-inner-part">
          <div class="aspect-w-16 aspect-h-10 overflow-hidden">
            <LinkElement :href="article.url">
              <ResponsiveImage
                class="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
                :alt="article.headlineAlt"
                :src="article.headline"
              />
            </LinkElement>
          </div>
          <LinkElement :href="article.deskUrl">
            <TextElement class="py-5" component="h4" kind="article-desk">
              {{ article.desk }}
            </TextElement>
          </LinkElement>
          <LinkElement :href="article.url">
            <TextElement class="pb-[3px] line-clamp-3" component="h3" kind="article-title">
              {{ article.title }}
            </TextElement>
          </LinkElement>
          <TextElement class="pt-5 pb-2" component="p" kind="article-blurb">
            {{ article.blurb }}
          </TextElement>
          <TextElement kind="article-author" component="div" class="hidden md:block">
            <span class="author-by">By</span>
            <span v-for="(author, index) of article.authors" :key="index">
              <span class="author-by" v-if="index != 0 && article.authors.length - 1 != index">, </span>
              <span class="author-by" v-if="index != 0 && article.authors.length - 1 == index">& </span>
              <LinkElement :href="author.url" class="mt-6">
                <span>{{ author.name }}</span>
              </LinkElement>
            </span>
          </TextElement>
        </div>
      </ArticleBlock>
      <ArticleBlock
        class="article-container article-item sm:col-span-1 md:col-span-2 lg:col-span-1"
        v-slot="{ article }"
      >
        <div class="article-inner-part">
          <div class="aspect-w-16 aspect-h-10 overflow-hidden">
            <LinkElement :href="article.url">
              <ResponsiveImage
                class="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 100vw, 30vw"
                :alt="article.headlineAlt"
                :src="article.headline"
              />
            </LinkElement>
          </div>
          <LinkElement :href="article.deskUrl">
            <TextElement class="py-5" component="h4" kind="article-desk">
              {{ article.desk }}
            </TextElement>
          </LinkElement>
          <LinkElement :href="article.url">
            <TextElement class="pb-[3px] line-clamp-3" component="h3" kind="article-title">
              {{ article.title }}
            </TextElement>
          </LinkElement>
          <TextElement class="pt-5 pb-2" component="p" kind="article-blurb">
            {{ article.blurb }}
          </TextElement>
          <TextElement kind="article-author" component="div" class="hidden md:block">
            <span class="author-by">By</span>
            <span v-for="(author, index) of article.authors" :key="index">
              <span class="author-by" v-if="index != 0 && article.authors.length - 1 != index">, </span>
              <span class="author-by" v-if="index != 0 && article.authors.length - 1 == index">& </span>
              <LinkElement :href="author.url" class="mt-6">
                <span>{{ author.name }}</span>
              </LinkElement>
            </span>
          </TextElement>
        </div>
      </ArticleBlock>
    </DeskSection>
    <DeskSection :order="1" class="my-desk2">
      <div class="articles-container">
        <ArticleBlock
          v-for="i in 5"
          :key="i"
          class="box-content w-full grow border-t border-[#e2e2e2] pt-[31px] pb-[19px] md:w-[16%] md:border-t-0 md:border-r md:py-0 md:px-[15px] md:first:pl-0 md:last:border-r-0 md:last:pr-0"
          v-slot="{ article }"
        >
          <div class="flex md:flex-col md:gap-2">
            <div class="order-2 w-[48%] shrink-0 md:order-none md:w-full">
              <LinkElement :href="article.deskUrl">
                <TextElement class="mt-[-15px] hidden md:block" component="h4" kind="article-desk">
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
              <div class="mb-1 ml-6 md:ml-0 md:mb-0">
                <div class="aspect-w-16 aspect-h-11 overflow-hidden">
                  <LinkElement :href="article.url">
                    <ResponsiveImage
                      class="mt-4 h-full w-full object-cover"
                      sizes="(max-width: 768px) 40vw, (max-width: 1060px) 20vw, 20vw"
                      :alt="article.headlineAlt"
                      :src="article.headline"
                    />
                  </LinkElement>
                </div>
              </div>
            </div>
            <div class="mt-6 overflow-hidden pt-3 md:mt-0">
              <LinkElement :href="article.deskUrl">
                <TextElement class="block pb-3 md:hidden" component="h4" kind="article-desk">
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
              <LinkElement :href="article.url">
                <TextElement
                  class="block pb-2 md:hidden"
                  component="h3"
                  kind="desk-article-title"
                  :fontSize="{ xs: 30, md: 17 }"
                  fontFamily="Jost"
                  :lineHeight="1"
                >
                  {{ article.title }}
                </TextElement>
                <TextElement
                  class="hidden md:block lg:block"
                  component="h3"
                  kind="article-title2"
                  :fontSize="{ xs: 30, md: 17 }"
                  fontFamily="Jost"
                  :lineHeight="1"
                >
                  {{ article.title }}
                </TextElement>
                <TextElement class="block break-words py-5 md:hidden" component="p" kind="article-blurb">
                  {{ article.blurb }}
                </TextElement>
              </LinkElement>
            </div>
          </div>
        </ArticleBlock>
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
}
</script>

<style lang="scss" scoped>
.article-inner-part {
  margin-top: 20px;
}

.article-container {
  border-top: 1px solid #e2e2e2;
  padding-top: 21px;
  padding-bottom: 19px;
}

.my-desk {
  border-top: 1px solid #e2e2e2;
}

.articles-container {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.author-by {
  font-weight: 700;
  font-size: 10px;
  line-height: 1;
  color: #b3b3b3;
}

.article-title:hover,
.desk-article-title:hover,
.article-title2:hover {
  text-decoration: underline;
}

.desk2-article-title:hover {
  text-decoration: underline;
}

.article-item {
  border-top: 1px solid #e2e2e2;
  padding-top: 21px;
  padding-bottom: 19px;
}

@screen lg {
  .article-item {
    margin-top: 20px;
    padding: 0 20px 20px;
    width: 30.4% !important;
  }

  .article-item:nth-child(3) {
    border: 0 none;
    padding-right: 0;
    padding-left: 15px !important;
  }

  .article-item:nth-child(1) {
    padding-left: 0;
  }

  .article-item:nth-child(2) {
    padding-right: 15px !important;
    border-right: 1px solid #e2e2e2 !important;
  }
}

@screen md {
  .article-item:nth-child(2) {
    border: 0 none;
    padding-right: 0;
  }

  .article-item:nth-child(1) {
    padding-left: 0;
  }

  .article-item {
    border: none;
    border-right: 1px solid #e2e2e2;
    box-sizing: content-box;
    flex-grow: 1;
    margin-top: 15px;
    padding: 0 15px 15px;
    width: 35%;
  }

  .my-desk {
    border-top: 1px solid #e2e2e2;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .article-item:nth-child(3) {
    padding-right: 0;
    padding-left: 0;
  }

  .my-desk2 {
    border-top: 1px solid #e2e2e2;
    padding-top: 29px;
    margin-top: 30px;
  }
}
</style>
