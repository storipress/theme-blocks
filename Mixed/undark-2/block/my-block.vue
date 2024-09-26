<template>
  <Block :block="block" class="py-6 md:py-12" backgroundColor="f6f6f6">
    <DeskSection v-slot="{ desk }" :order="0">
      <div class="relative mb-1 flex flex-row">
        <div class="mr-2">
          <TextInput
            component="h4"
            kind="desk-name"
            :lineHeight="1.0"
            :fontSize="13"
            color="CBA17D"
            bold
            fontFamily="HK Grotesk"
            class="desk-name--darky"
            :defaultValue="desk"
          />
        </div>
        <div class="relative grow self-stretch">
          <ColorArea class="absolute top-1/2 h-px w-full" backgroundColor="bfbfbf" kind="desk-title-divider" />
        </div>
      </div>

      <ArticleBlock v-slot="{ article }" class="articles-grid">
        <!-- feature-text -->
        <div style="grid-area: feature-text" class="py-6 md:py-12 lg:py-16">
          <TextInput
            kind="feature-text"
            color="0a0a0a"
            component="p"
            fontFamily="Cormorant Garamond"
            :fontSize="{ xs: 20, md: 30, lg: 40 }"
            :lineHeight="1.1"
            defaultValue="This is editable text. Click me type in me."
          />
        </div>
        <!-- feature-article text -->
        <div class="border--darky article-wrapper border-t" style="grid-area: feature-article">
          <div class="flex shrink">
            <LinkElement :href="article.url">
              <TextElement
                class="line-clamp-1"
                component="h3"
                kind="article-title"
                :fontSize="15"
                bold
                fontFamily="HK Grotesk"
                color="0A0A0A"
              >
                {{ article.title }}
              </TextElement>
            </LinkElement>

            <!---author tag--->
            <TextElement
              component="p"
              kind="article-authors"
              fontFamily="HK Grotesk"
              color="cba17d"
              class="grow py-4 pl-4"
              bold
              :fontSize="13"
              ><span class="inline-block" v-for="(author, index) in article.authors" :key="index + author.name">
                <LinkElement class="author-link" :key="index" :href="author.url">{{ author.name }}</LinkElement
                ><span v-if="index < article.authors.length - 2">,&nbsp;</span>
                <span v-if="index === article.authors.length - 2">&amp;&nbsp;</span>
              </span></TextElement
            >
          </div>
          <!---featured photo--->
          <LinkElement :href="article.url"
            ><ResponsiveImage
              class="article-img"
              sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 60vw"
              :src="article.headline"
              :alt="article.headlineAlt"
          /></LinkElement>
        </div>
        <!-- all-articles-text -->
        <div style="grid-area: all-articles-text" class="pt-4 md:pt-8 lg:pt-16">
          <TextInput
            kind="all-articles-text"
            color="0a0a0a"
            component="p"
            fontFamily="Cormorant Garamond"
            :fontSize="{ xs: 18, md: 21, lg: 25 }"
            :lineHeight="1.2"
            class="mb-2 break-words"
            defaultValue="Occaecat dolore ut consectetur fugiat mollit nostrud lorem dolore ut consectetur."
          />
          <LinkElement :href="article.deskUrl">
            <TextInput
              kind="article-desk-link"
              class="pt-4 md:pt-0"
              color="CBA17D"
              component="p"
              fontFamily="HK Grotesk"
              :fontSize="13"
              :lineHeight="1.5"
              bold
              defaultValue="All Articles"
            />
          </LinkElement>
        </div>
        <!-- small-articles -->
        <div
          style="grid-area: small-articles"
          class="border--darky article-section--list flex flex-1 flex-col gap-y-16 border-t pt-8 lg:justify-between lg:gap-y-4"
        >
          <ArticleBlock
            class="article-wrapper grid grid-cols-2"
            v-for="articleIndex in 3"
            v-slot="{ article }"
            :key="articleIndex"
          >
            <LinkElement :href="article.url"
              ><ResponsiveImage
                class="article-img col-span-1"
                sizes="(max-width: 768px) 45vw, (max-width: 1060px) 25vw, 15vw"
                :src="article.headline"
                :alt="article.headlineAlt"
            /></LinkElement>

            <div class="col-span-1 px-3">
              <LinkElement :href="article.url">
                <TextElement
                  component="h3"
                  kind="article-title--sm"
                  color="0A0A0A"
                  :fontSize="15"
                  fontFamily="HK Grotesk"
                  bold
                  class="mb-1 cursor-pointer"
                  :lineHeight="1.2"
                >
                  {{ article.title }}
                </TextElement>
              </LinkElement>
              <TextElement component="p" kind="article-authors"
                ><div class="inline-block" v-for="(author, index) in article.authors" :key="index + author.name">
                  <LinkElement class="author-link" :key="index" :href="author.url">{{ author.name }}</LinkElement
                  ><span v-if="index < article.authors.length - 2">,&nbsp;</span>
                  <span v-if="index === article.authors.length - 2">&amp;&nbsp;</span>
                </div></TextElement
              >
            </div>
          </ArticleBlock>
        </div>
      </ArticleBlock>
    </DeskSection>
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
    ColorArea,
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
      const year = article.time.getFullYear().toString()
      return date + '.' + month + '.' + year
    },
  },
}
</script>

<style lang="scss" scoped>
.desk-name--darky {
  @apply inline-flex;

  letter-spacing: 0.5px;
}

.articles-grid {
  @apply grid gap-x-7;

  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;
  grid-template-areas: 'feature-text' 'feature-article' 'all-articles-text' 'small-articles';

  @screen md {
    @apply grid-cols-2;

    grid-template-rows: auto auto;
    grid-template-areas: 'feature-text all-articles-text' 'feature-article small-articles';
  }

  @screen lg {
    @apply grid-cols-3;

    grid-template-rows: auto auto;
    grid-template-areas: 'feature-text feature-text all-articles-text' 'feature-article feature-article small-articles';
  }
}

.border--darky {
  border-color: #bfbfbf;
}

.article-img {
  @apply h-auto w-full max-w-full object-cover;

  transition:
    filter 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    -webkit-filter 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.article-section--list {
  @screen md {
    padding-top: 51px;
  }
}

// hover effects

.article-title {
  @apply border-r py-4 pr-4;

  @extend .border--darky;
}

.article-wrapper {
  .article-title {
    @apply block;
  }
}

.article-wrapper:hover {
  .article-img {
    filter: grayscale(0.5) contrast(1.2);
  }
}
</style>
