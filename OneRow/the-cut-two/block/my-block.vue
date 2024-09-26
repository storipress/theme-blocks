<template>
  <Block class="py-6 md:py-12" :block="block" backgroundColor="f6f6f6">
    <DeskSection class="mx-auto" :order="0" v-slot="{ desk }">
      <div class="relative">
        <TextInput
          component="h2"
          kind="desk-title"
          :defaultValue="desk"
          fontFamily="Jost"
          :fontSize="{ xs: 60, md: 120, lg: 280 }"
          align="center"
          class="desk-clip"
        />
      </div>

      <div class="articles-container">
        <ArticleBlock class="article" v-slot="{ article }">
          <LinkElement class="link" :href="article.url">
            <div class="main-headline-container md:w-full">
              <div class="article-headline relative overflow-hidden">
                <ResponsiveImage
                  class="absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover"
                  :src="article.headline"
                  :alt="article.headlineAlt"
                  sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 50vw"
                />
              </div>
            </div>
          </LinkElement>
          <div class="main-content">
            <TextElement component="h3" kind="article-desk" fontFamily="Jost" :fontSize="{ xs: 12 }">
              <LinkElement :href="article.deskUrl">
                {{ article.desk }}
              </LinkElement>
            </TextElement>

            <span>
              <LinkElement class="link" :href="article.url">
                <TextElement
                  component="h3"
                  kind="article-title"
                  fontFamily="Jost"
                  :fontSize="{ xs: 28 }"
                  :lineHeight="1"
                  bold
                  >{{ article.title }}</TextElement
                >
                <TextElement
                  component="p"
                  kind="article-blurb"
                  fontFamily="Jost"
                  :fontSize="{ xs: 28 }"
                  :lineHeight="1"
                >
                  {{ article.blurb }}
                </TextElement>
              </LinkElement>
            </span>

            <TextElement component="p" kind="article-author" fontFamily="Jost" :fontSize="{ xs: 12 }"
              >By
              <template v-for="(author, index) in article.authors">
                <span :key="index">
                  <LinkElement :href="author.url">
                    {{ author.name }}
                  </LinkElement>
                </span>
              </template>
            </TextElement>
          </div>
        </ArticleBlock>

        <ArticleBlock class="other-article" v-slot="{ article }">
          <div>
            <LinkElement class="link" :href="article.url">
              <div class="other-headline-container md:w-full">
                <div class="article-headline relative overflow-hidden">
                  <ResponsiveImage
                    class="absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover"
                    :src="article.headline"
                    :alt="article.headlineAlt"
                    sizes="(max-width: 768px) 80w, (max-width: 1060px) 45vw, 40vw"
                  />
                </div>
              </div>
            </LinkElement>
            <div class="other-content">
              <TextElement component="h3" kind="article-desk">
                <LinkElement :href="article.deskUrl">
                  {{ article.desk }}
                </LinkElement>
              </TextElement>

              <span>
                <LinkElement class="link" :href="article.url">
                  <TextElement component="h3" kind="article-title">{{ article.title }}</TextElement>
                  <TextElement component="p" kind="article-blurb">
                    {{ article.blurb }}
                  </TextElement>
                </LinkElement>
              </span>
              <TextElement component="p" kind="article-author"
                >By
                <template v-for="(author, index) in article.authors">
                  <span :key="index">
                    <LinkElement :href="author.url">
                      {{ author.name }}
                    </LinkElement>
                  </span>
                </template>
              </TextElement>
            </div>
          </div>
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
  @apply mb-4 max-w-full tracking-widest lg:mb-0 lg:w-full;

  @screen lg {
    clip-path: polygon(100% 0, 100% 100%, 50% 100%, 50% 52%, 0 52%, 0 0);
  }
}

.articles-container {
  @apply flex flex-col gap-10 md:flex-row md:justify-center md:gap-12 lg:gap-24;
}

.article {
  @apply relative pb-24 md:block md:w-full md:pb-0;
}

.other-article {
  @apply pb-12 md:w-full md:pb-0 lg:flex lg:items-center;
}

.link {
  @apply transition;
}

.link:hover .article-headline > img,
.link:hover .other-article-headline > img {
  @apply opacity-80;
}

.link:hover .article-title,
.link:hover .article-blurb {
  @apply hover:opacity-75;
}

.main-headline-container {
  @apply md:mx-0;
}

.other-headline-container {
  @apply mx-12 md:mx-0;
}

.article-headline {
  @apply w-full;

  padding-top: 133.33%;
}

.other-article-headline {
  @apply w-full;

  padding-top: 100%;
}

.article-headline,
.other-article-headline {
  > img {
    transition: opacity 0.15s ease;
  }
}

.main-content {
  @apply absolute bottom-0 right-8 left-8 p-4 md:static md:px-0;
}

.other-content {
  @apply ml-12 mr-4 mt-2 md:m-0 md:py-4;
}

.article-desk {
  @apply tracking-widest;
}

.article-title {
  @apply inline capitalize;
}

.article-blurb {
  @apply inline;
}

.article-author {
  @apply mt-2 tracking-widest;
}

@screen md {
  .article-headline {
    padding-top: 100%;
  }
}

@screen lg {
  .article {
    width: 55%;
  }

  .other-article {
    width: 45%;
  }
}
</style>
