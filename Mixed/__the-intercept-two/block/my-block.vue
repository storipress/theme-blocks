<template>
  <Block class="background-container py-8 md:py-16" :block="block" :backgroundColor="{ xs: '000', lg: 'fff' }">
    <DeskSection class="my-desk" :order="0" v-slot="{ desk }">
      <div class="mx-4 md:mx-0">
        <TextInput
          component="h4"
          kind="desk-title"
          :color="{ xs: 'fff', lg: '000' }"
          fontFamily="Cooper Hewitt Heavy"
          :fontSize="{ xs: 32, lg: 50 }"
          :defaultValue="desk"
        />
      </div>

      <div class="lg:grid lg:grid-cols-12 lg:gap-10">
        <div class="hero">
          <ArticleBlock class="article mb-10" v-slot="{ article }" v-for="i in 3" :key="`article-${i}`">
            <div class="link flex md:gap-10">
              <div class="md:h-auto md:flex-1">
                <div class="article-headline overflow-hidden">
                  <LinkElement :href="article.url">
                    <ResponsiveImage
                      class="absolute inset-0 h-full w-full object-cover"
                      :src="article.headline"
                      :alt="article.headlineAlt"
                      sizes="(max-width: 768px) 95vw, 50vw"
                    />
                  </LinkElement>
                </div>
              </div>
              <div class="mx-4 md:mx-0 md:flex-1">
                <LinkElement :href="article.url">
                  <TextElement
                    component="h3"
                    kind="article-title"
                    :color="{ xs: 'fff', lg: '000' }"
                    fontFamily="Cooper Hewitt Heavy"
                    :fontSize="{ xs: 22, md: 28 }"
                    :lineHeight="1.2"
                  >
                    {{ article.title }}
                  </TextElement>
                </LinkElement>

                <Authors
                  authorComponent="span"
                  :authors="article.authors"
                  kind="article-author"
                  fontFamily="Roboto Mono"
                  :fontSize="13"
                  color="8280ff"
                  separator=", "
                />

                <TextElement component="p" kind="article-blurb" :lineHeight="1.5" color="aaa">
                  {{ article.blurb }}
                </TextElement>
              </div>
            </div>
          </ArticleBlock>
        </div>

        <div class="list">
          <ArticleBlock class="article" v-slot="{ article }" v-for="i in 4" :key="`article-${i}`">
            <div class="link">
              <div class="content">
                <div>
                  <div class="article-headline overflow-hidden">
                    <LinkElement :href="article.url">
                      <ResponsiveImage
                        class="absolute inset-0 h-full w-full object-cover"
                        :src="article.headline"
                        :alt="article.headlineAlt"
                        sizes="(max-width: 768px) 95vw, 50vw"
                      />
                    </LinkElement>
                  </div>
                </div>
                <div>
                  <LinkElement :href="article.url">
                    <TextElement
                      component="h3"
                      kind="list-article-title"
                      fontFamily="Cooper Hewitt"
                      :color="{ xs: 'fff', lg: '000' }"
                      :fontSize="{ xs: 18, md: 20 }"
                      :lineHeight="{ xs: 1.1, md: 1.2 }"
                    >
                      {{ article.title }}
                    </TextElement>
                  </LinkElement>
                  <Authors authorComponent="span" :authors="article.authors" kind="article-author" separator=", " />
                </div>
              </div>
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
.my-desk {
  @apply mx-auto;
}

.desk-title {
  @apply mb-8 w-full border-t-8 border-white pt-2 md:mb-10;
}

.hero {
  @apply lg:col-span-9;
}

.article {
  @apply transition-opacity;
}

.hero .article .link {
  @apply md:flex md:justify-between;
}

.hero .article:nth-child(2) .link {
  @apply md:flex-row-reverse md:text-right;
}

.article-headline {
  @apply relative w-full bg-cover bg-center;

  padding-top: 100%;
}

.hero .article-headline::after {
  @apply absolute left-0 bottom-0 z-20 block h-14 w-full bg-repeat-x md:hidden;

  content: '';
  background: linear-gradient(180deg, transparent 0, #000);
  background-position: 0 100%;
}

.hero .article-title {
  @apply -mt-8 md:mt-0;
}

.hero .article-title::before {
  @apply mb-6 block h-2 w-20;

  /* bg-white lg:bg-black */

  content: '';
  background: #fff;

  @screen lg {
    background: #000;
  }
}

.hero .article:nth-child(even) .link .article-title::before {
  @apply md:ml-auto;
}

.article-blurb {
  @apply mt-4;
}

.list {
  @apply mx-4 md:mx-0 lg:col-span-3;
}

.list .article .link .content {
  @apply grid grid-cols-2 gap-8 border-t border-gray-700 pb-12 pt-4 md:gap-10 md:pt-6 md:pb-16 lg:block lg:border-t-0 lg:pt-0;
}

.list-article-title {
  @apply mb-2;
}

.list .article-headline {
  @apply lg:mb-3 lg:w-1/2;
}

.link:hover,
.link:hover .article-blurb {
  opacity: 75%;
}

.link:hover .article-title::before,
.list .link:hover .content::before {
  background: #000;
}

.link:hover .article-headline {
  /* @apply bg-black; */
  background: #ede9fe;
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
}

@screen md {
  .list .article-headline {
    padding-top: 56.5%;
  }
}

@screen lg {
  .list .article .content::before {
    @apply mb-6 block h-2 w-20;

    /* bg-black */
    background: #000;
    content: '';
  }
}
</style>
