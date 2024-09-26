<template>
  <Block :block="block" backgroundColor="f6f6f6" class="py-16">
    <DeskSection :order="0" v-slot="{ desk }" class="block-grid overflow-hidden">
      <div class="w-full">
        <TextInput
          component="h4"
          kind="desk-1-heading-input"
          style="letter-spacing: -0.09em"
          fontFamily="Archivo"
          color="000"
          :fontSize="{ xs: 75, md: 210 }"
          :defaultValue="desk"
          :lineHeight="1"
        />
      </div>
      <div style="grid-area: desk-1" class="overflow-hidden lg:pr-6">
        <div class="flex flex-col md:flex-row">
          <ArticleBlock v-slot="{ article }" class="feature-article-container">
            <div>
              <LinkElement :href="article.deskUrl">
                <TextElement
                  component="h4"
                  align="left"
                  class="my-4"
                  kind="article-desk"
                  fontFamily="Jost"
                  :fontSize="12"
                >
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
              <LinkElement :href="article.url">
                <TextElement
                  component="h3"
                  :fontSize="{ xs: 32, md: 40 }"
                  align="left"
                  fontFamily="Archivo"
                  :lineHeight="1.1"
                  class="line-clamp-7 -tracking-0_04em mt-4 mb-6 mr-auto w-4/5"
                  kind="article-title-feature"
                >
                  {{ article.title }}
                </TextElement>
              </LinkElement>
            </div>
            <div>
              <LinkElement :href="article.url">
                <div class="pt-full relative">
                  <ResponsiveImage
                    class="absolute top-0 left-0 h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 40vw"
                    :src="article.headline"
                    :alt="article.headlineAlt"
                  />
                </div>
              </LinkElement>
            </div>
          </ArticleBlock>
          <div class="small-article-container">
            <ArticleBlock v-for="n in 4" v-slot="{ article }" :key="n + '-article-small'" class="small-article">
              <div class="small-article-wrapper-link">
                <div>
                  <LinkElement :href="article.deskUrl">
                    <TextElement component="h4" class="my-4" kind="article-desk">
                      {{ article.desk }}
                    </TextElement>
                  </LinkElement>
                  <LinkElement :href="article.url">
                    <TextElement
                      component="h3"
                      :fontSize="{ xs: 24, md: 16 }"
                      align="right"
                      fontFamily="Archivo"
                      :lineHeight="1"
                      class="line-clamp-7 -tracking-0_04em my-6 ml-auto w-4/5 overflow-visible md:w-full"
                      kind="article-title"
                    >
                      {{ article.title }}
                    </TextElement>
                  </LinkElement>
                </div>
                <div>
                  <div :style="{ paddingTop: small_article_image_paddings[n - 1] }" class="relative">
                    <LinkElement :href="article.url">
                      <ResponsiveImage
                        class="absolute top-0 left-0 h-full w-full object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1060px) 20vw, 15vw"
                        :src="article.headline"
                        :alt="article.headlineAlt"
                      />
                    </LinkElement>
                  </div>
                </div>
              </div>
            </ArticleBlock>
          </div>
        </div>
      </div>
      <DeskSection :order="1" class="overflow-hidden" v-slot="{ desk }" style="grid-area: desk-2">
        <div class="relative overflow-hidden md:mt-16 lg:mt-0">
          <div class="absolute top-0 left-0 ml-9" />
          <div class="w-full pt-10 pb-8">
            <TextInput
              component="h4"
              :fontSize="{ xs: 37 }"
              align="left"
              :lineHeight="1"
              fontFamily="Archivo"
              class="tracking-tight"
              kind="desk-2-title"
              style="letter-spacing: -1px"
              :defaultValue="desk"
            />
          </div>
          <div class="overflow-hidden">
            <div class="mini-article-container">
              <ArticleBlock v-for="n in 5" v-slot="{ article }" :key="n + '-article-side'" class="mini-article">
                <LinkElement :href="article.url">
                  <TextElement
                    component="p"
                    kind="article-time"
                    align="left"
                    :font-size="11"
                    display="Article Time"
                    class="mt-3"
                    fontFamily="Jost"
                    >{{ format(article.time, 'MMMM d,yyyy') }}</TextElement
                  >
                  <TextElement
                    component="h3"
                    :fontSize="{ xs: 16, md: 16 }"
                    align="right"
                    fontFamily="Archivo"
                    :lineHeight="1"
                    style="margin-left: 10%"
                    class="-tracking-0_04em my-4 ml-auto lg:mb-8"
                    kind="article-title-mini"
                  >
                    {{ article.title }}
                  </TextElement>
                </LinkElement>
              </ArticleBlock>
            </div>
          </div>
        </div>
      </DeskSection>
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
import { format } from 'date-fns'

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
  data() {
    return {
      format,
      small_article_image_paddings: ['150%', '146%', '148%', '100%'],
    }
  },
}
</script>

<style lang="scss" scoped>
.block-grid {
  @apply relative grid;

  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'desk-1-heading'
    'desk-1'
    'desk-2';

  @screen lg {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      'desk-1-heading .'
      'desk-1 desk-2';
  }
}

.-tracking-0_04em {
  letter-spacing: -0.04em;
}

.pt-full {
  padding-top: 100%;
}

.small-article {
  @apply mb-8 border-t border-black;

  @screen md {
    @apply ml-6 border-t-0 p-0;

    flex: 1 0 calc(50% - 1.5rem);
  }
}

.small-article-wrapper-link {
  @screen md {
    @apply flex flex-col-reverse justify-center;
  }
}

.feature-article-container {
  @apply mb-8 border-t border-black;

  @screen md {
    @apply mb-0;

    flex: 1 0 53%;
  }
}

.small-article-container {
  @screen md {
    @apply flex flex-wrap items-baseline;

    flex: 1 0 40%;
  }
}

.mini-article-container {
  @apply flex overflow-x-scroll lg:flex-col;

  scrollbar-width: none;
  // @apply overflow-x-auto lg:overflow-visible lg:px-4 pb-5 flex lg:flex lg:flex-col;
}

.mini-article {
  @apply mr-5 border-t border-black lg:mr-0;

  max-width: 250px;
  flex: 1 0 65%;
}
</style>
