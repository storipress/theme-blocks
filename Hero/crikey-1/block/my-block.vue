<template>
  <HeroBlock :block="block">
    <Navbar />
    <SpacingProvider
      class="pt-[80px] md:pt-0"
      :width="{ xs: '90%', md: 'calc(100% - 2.2rem)' }"
      :max="{ lg: '1440px' }"
    >
      <div class="md:grid md:grid-cols-4 md:gap-x-[3%]">
        <div class="md:col-span-3">
          <!-- DeskSection one -->
          <DeskSection :order="0" class="desk-section pt-8 md:py-10">
            <div class="desk-section-container md:grid md:grid-cols-2 md:gap-x-[4%]">
              <ListItem v-for="i in 2" :key="i" class="article col-span-1" desk-section="one" />
            </div>
            <div class="desk-section-container md:grid md:grid-cols-3 md:gap-x-[4%]">
              <div v-for="i in 3" :key="i">
                <ColorArea kind="article-divider" class="h-px w-full md:hidden" background-color="d4d8da" />
                <ListItem class="article col-span-1" desk-section="one" />
              </div>
            </div>
            <div class="desk-section-container md:grid md:grid-cols-3 md:gap-x-[3.7%]">
              <div v-for="i in 3" :key="i">
                <div class="hidden pb-2 md:block">
                  <ColorArea class="h-px" background-color="000" kind="desk-title-divider" />
                </div>
                <ColorArea kind="article-divider" class="h-px w-full md:hidden" background-color="d4d8da" />
                <ListItem class="article col-span-1" desk-section="one" />
              </div>
            </div>
          </DeskSection>
        </div>

        <div class="md:col-span-1">
          <!-- DeskSection two -->
          <DeskSection :order="1" class="mt-10 mb-8 md:mb-0">
            <ColorArea kind="deskSection-two" background-color="d4d8da">
              <ArticleBlock v-slot="{ article }" class="p-4">
                <div class="swappable-image flex max-h-80 justify-between pb-4">
                  <div class="max-w-[60%] pb-4">
                    <TextInput
                      component="div"
                      kind="deskSection-two__desk-title"
                      :font-size="{ xs: 44 }"
                      :line-height="1.2"
                      color="000"
                      default-value="Today's Worm"
                    />
                    <TextElement component="div" kind="deskSection-two__with" :font-size="{ xs: 15 }" color="000">
                      WITH
                      <Authors
                        :authors="article.authors"
                        author-component="span"
                        color="000"
                        class="hover:underline"
                        :font-size="15"
                        kind="deskSection-two__article-author"
                        separator=", "
                        bold
                      />
                    </TextElement>
                  </div>
                  <SwappableImage
                    :kind="kind"
                    :default-value="logo"
                    alt="logo"
                    class="flex h-full max-h-[inherit] w-[30%] justify-center self-center"
                  />
                </div>
                <ColorArea kind="deskSection-two__desk-divider" class="h-px w-full" background-color="000" />
                <div class="pt-4">
                  <LinkElement :href="article.url">
                    <TextElement
                      component="h2"
                      kind="deskSection-two__article-title"
                      :font-size="{ xs: 28 }"
                      class="pb-1 hover:underline"
                      bold
                    >
                      {{ article.title }}
                    </TextElement>
                  </LinkElement>
                  <LinkElement :href="article.url">
                    <TextElement
                      component="h4"
                      kind="deskSection-two__article-blurb"
                      :font-size="{ xs: 16 }"
                      :line-height="1.5"
                      class="pb-4"
                    >
                      {{ article.blurb }}
                    </TextElement>
                  </LinkElement>
                </div>
              </ArticleBlock>
            </ColorArea>
          </DeskSection>

          <!-- DeskSection three -->
          <DeskSection v-slot="{ desk }" :order="2" class="py-[1.2rem] md:py-10">
            <div class="flex pb-6">
              <TextInput
                component="h1"
                kind="desk-title"
                data-id="1"
                :line-height="1.5"
                :font-size="{ xs: 24 }"
                color="000"
                :defaultValue="desk"
              />
            </div>
            <ColorArea kind="article-divider" class="h-px w-full" background-color="d4d8da" />
            <ArticleBlock v-for="i in 3" :key="i" class="details pt-2" v-slot="{ article }">
              <LinkElement :href="article.url" class="block">
                <TextElement
                  component="h2"
                  kind="deskSection-three__article-title"
                  :font-size="{ xs: 18 }"
                  :line-height="1.2"
                >
                  {{ article.title }}
                </TextElement>
              </LinkElement>
              <div class="metadata flex flex-wrap items-center gap-x-2 pt-2 pb-1">
                <LinkElement :href="article.deskUrl">
                  <TextElement
                    component="h2"
                    kind="deskSection-three__desk-title"
                    color="000"
                    :font-size="14"
                    bold
                    class="hover:underline"
                  >
                    {{ article.desk }}
                  </TextElement>
                </LinkElement>
                <Authors
                  :authors="article.authors"
                  author-component="span"
                  color="000"
                  class="hover:underline"
                  :font-size="14"
                  kind="deskSection-three__article-author"
                  separator=", "
                />
              </div>
              <div class="pt-2">
                <ColorArea kind="article-divider" class="h-px w-full" background-color="d4d8da" />
              </div>
            </ArticleBlock>
          </DeskSection>

          <!-- DeskSection four -->
          <DeskSection v-slot="{ desk }" :order="3" class="py-[1.2rem] md:pb-10 md:pt-0">
            <div class="flex pb-6">
              <TextInput
                component="h1"
                kind="desk-title"
                data-id="2"
                :line-height="1.5"
                :font-size="{ xs: 24 }"
                color="000"
                :defaultValue="desk"
              />
            </div>
            <ColorArea kind="article-divider" class="h-px w-full" background-color="d4d8da" />
            <ArticleBlock class="details pt-2" v-slot="{ article }">
              <LinkElement :href="article.url" class="block">
                <TextElement
                  component="h2"
                  kind="deskSection-four__article-title"
                  :font-size="{ xs: 18 }"
                  :line-height="1.2"
                >
                  {{ article.title }}
                </TextElement>
              </LinkElement>
              <div class="metadata flex flex-wrap items-center gap-x-2 pt-2 pb-1">
                <LinkElement :href="article.deskUrl">
                  <TextElement
                    component="h2"
                    kind="deskSection-four__desk-title"
                    color="000"
                    :font-size="14"
                    bold
                    class="hover:underline"
                  >
                    {{ article.desk }}
                  </TextElement>
                </LinkElement>
                <Authors
                  :authors="article.authors"
                  author-component="span"
                  color="000"
                  class="hover:underline"
                  :font-size="14"
                  kind="deskSection-four__article-author"
                  separator=", "
                />
              </div>
              <div class="pt-2">
                <ColorArea kind="article-divider" class="h-px w-full" background-color="d4d8da" />
              </div>
            </ArticleBlock>
          </DeskSection>
        </div>
      </div>
    </SpacingProvider>
  </HeroBlock>
</template>

<script>
import {
  ArticleBlock,
  Authors,
  ColorArea,
  DeskSection,
  HeroBlock,
  LinkElement,
  SpacingProvider,
  SwappableImage,
  TextElement,
  TextInput,
} from '@storipress/block'

import ListItem from './list-item.vue'
import Navbar from './navbar.vue'

export default {
  components: {
    ArticleBlock,
    Authors,
    ColorArea,
    HeroBlock,
    DeskSection,
    TextElement,
    TextInput,
    SpacingProvider,
    SwappableImage,
    LinkElement,
    Navbar,
    ListItem,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
    kind: {
      type: String,
      default: 'logo',
    },
  },

  data() {
    return {
      logo: 'https://assets.stori.press/storipress/sp-placeholder.svg',
    }
  },
}
</script>

<style lang="scss">
.desk-section {
  .desk-section-container:nth-child(2) .article {
    .image {
      @apply hidden md:block;
    }

    .blurb {
      @apply hidden;
    }
  }

  .desk-section-container:nth-child(3) .article {
    .image {
      @apply hidden;
    }

    .blurb {
      @apply hidden md:block;
    }
  }
}

.swappable-image img {
  @apply max-h-[inherit];
}
</style>
