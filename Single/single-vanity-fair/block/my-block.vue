<template>
  <Block :block="block" backgroundColor="f6f6f6">
    <DeskSection :order="0" v-slot="{ desk }">
      <ArticleBlock v-slot="{ article }">
        <div class="relative block w-full py-0 md:py-16">
          <LinkElement :href="article.url">
            <div class="absolute z-10 flex w-full items-center justify-center pt-12 md:relative md:pt-0">
              <div class="decoration-line hidden h-0.5 grow bg-black md:block" />
              <div class="header-text-container inline-flex items-center justify-center px-2">
                <TextInput
                  component="h4"
                  class="relative h-8"
                  :color="{ xs: 'FFFFFF', md: '1A1818' }"
                  kind="desk-title"
                  fontFamily="Jost"
                  :fontSize="{ xs: 32, md: 34 }"
                  align="center"
                  :lineHeight="1"
                  :defaultValue="desk"
                />
              </div>
              <div class="decoration-line hidden h-0.5 grow bg-black md:block" />
            </div>
            <!-- End of header -->
            <div class="h-screen max-h-[37rem] md:aspect-w-16 md:aspect-h-7 md:mt-12 md:h-auto md:max-h-full">
              <ResponsiveImage
                :src="article.headline"
                class="block h-full w-full object-cover brightness-50 md:brightness-100"
                :alt="article.headlineAlt"
                sizes="100vw"
              />
            </div>
          </LinkElement>
          <!-- End of color area containing image -->
          <div
            class="content absolute inset-0 mt-4 flex h-full w-full flex-col items-center justify-center px-8 md:relative md:mt-0 md:px-0"
          >
            <LinkElement :href="article.deskUrl">
              <TextElement
                component="h4"
                class="hidden md:block"
                color="e7212c"
                kind="article-desk"
                align="center"
                :fontSize="12"
                fontFamily="Jost"
              >
                {{ article.desk }}
              </TextElement>
            </LinkElement>
            <LinkElement :href="article.url">
              <div class="relative">
                <TextElement
                  component="h3"
                  class="relative pt-3.5"
                  :color="{ xs: 'FFFFFF', md: '1A1818' }"
                  kind="article-title"
                  fontFamily="Jost"
                  align="center"
                  :lineHeight="1.3"
                  :fontSize="{ xs: 22, md: 44 }"
                >
                  {{ article.title }}
                </TextElement>
              </div>

              <TextElement
                component="p"
                class="blurb hidden md:block"
                :color="{ xs: 'FFFFFF', md: '1A1818' }"
                kind="article-blurb"
                align="center"
                :fontSize="22"
                :lineHeight="1.2"
                fontFamily="Jost"
              >
                {{ article.blurb }}
              </TextElement>
              <TextElement
                class="z-10 mr-1.5 hidden h-2 w-5 md:block"
                color="7C7C7C"
                component="span"
                kind="arrow-icon"
              >
              </TextElement>
            </LinkElement>
            <div class="mt-7">
              <TextElement
                component="span"
                kind="article-author"
                :italic="{ xs: false, md: true }"
                :bold="{ xs: false, md: true }"
                :color="{ xs: 'FFFFFF', md: '1A1818' }"
                align="center"
                fontFamily="Jost"
                :fontSize="{ xs: 10, md: 12 }"
                >by</TextElement
              >
              <TextElement
                component="span"
                fontFamily="Jost"
                align="center"
                :color="{ xs: 'FFFFFF', md: '1A1818' }"
                kind="article-authors"
                :fontSize="{ xs: 10, md: 12 }"
                v-for="(author, index) in article.authors"
                :key="index"
              >
                <LinkElement class="author-link" :href="author.url">
                  {{
                    article.authors.length === 1
                      ? `${author.name}`
                      : index !== article.authors.length - 1 && index !== article.authors.length - 2
                      ? `${author.name}, `
                      : index === article.authors.length - 2
                      ? `${author.name} `
                      : `& ${author.name}`
                  }}
                </LinkElement>
              </TextElement>
            </div>
          </div>
          <!-- End of content -->
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
    TextInput,
    ColorArea,
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
.bg {
  padding-top: 133.3%;

  @screen md {
    padding-top: 42.86%;
  }
}

.article-author {
  padding: 0 5px 0 0;
}

.blurb {
  margin: 0 83.5px;
  padding-top: 15px;

  @screen md {
    max-width: 432px;
  }

  @screen lg {
    max-width: 650px;
  }
}

.arrow-icon {
  margin: 15px auto 0;
}

.article-authors {
  letter-spacing: 3px;
}

.header-text-container {
  @screen md {
    top: -17px;
  }
}

.article-title {
  @screen md {
    max-width: 479px;
  }

  @screen lg {
    max-width: 817px;
  }
}

.content {
  @screen md {
    @apply py-10 px-5;
  }

  @screen lg {
    @apply px-5 pt-5 pb-0;
  }
}

@screen md {
  .header-text-subcontainer {
    padding: 0 15px;
  }

  .article-authors {
    letter-spacing: 1.5px;
  }
}
</style>
