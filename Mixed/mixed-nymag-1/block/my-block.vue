<template>
  <Block :block="block" background-color="f6f6f6">
    <div class="flex flex-col gap-x-8 py-8 md:flex-row md:py-16">
      <div class="w-full lg:w-1/3">
        <DeskSection :order="0">
          <ArticleBlock v-slot="{ article }">
            <div class="aspect-w-1 aspect-h-1 overflow-hidden">
              <LinkElement :href="article.url" class="t-link">
                <ResponsiveImage
                  :src="article.headline"
                  :alt="article.headlineAlt"
                  class="border border-black object-cover p-5"
                  sizes="(max-width: 768px) 80vw, (max-width: 1060px) 40vw, 25vw"
                />
              </LinkElement>
            </div>
            <LinkElement :href="article.deskUrl" class="t-link">
              <TextElement
                component="h4"
                kind="article-hero-desk"
                class="mt-3"
                font-family="League Gothic"
                align="center"
                :fontsize="14"
                bold
              >
                <span>{{ article.desk }}</span>
              </TextElement>
            </LinkElement>
            <LinkElement :href="article.url" class="t-link">
              <TextElement
                component="h3"
                kind="article-hero-title"
                class="onmouseover mt-1 line-clamp-4"
                font-family="League Gothic"
                :line-height="1"
                bold
                align="center"
                :font-size="{ xs: 36, lg: 55 }"
              >
                {{ article.title }}
              </TextElement>

              <TextElement
                component="p"
                kind="article-blurb-medium"
                class="mt-1 md:line-clamp-3"
                font-family="Jost"
                align="center"
                :line-height="1.1"
                :font-size="{ xs: 24, lg: 30 }"
              >
                {{ article.blurb }}
              </TextElement>
            </LinkElement>

            <div class="mb-5 mt-2 text-center">
              <TextElement
                component="span"
                kind="article-author-hero"
                font-family="Jost"
                :font-size="{ xs: 13, lg: 14 }"
              >
                By
              </TextElement>
              <Authors author-component="span" :authors="article.authors" kind="article-author-hero" />
            </div>
          </ArticleBlock>
        </DeskSection>
      </div>
      <div class="mx-auto flex w-full flex-col gap-x-8 lg:w-2/3 lg:flex-row">
        <div class="w-full lg:w-4/12">
          <DeskSection :order="1">
            <ArticleBlock v-for="i of 3" :key="i" v-slot="{ article }" class="mb-2 border-t border-black py-3">
              <LinkElement :href="article.deskUrl" class="t-link">
                <TextElement
                  component="h4"
                  kind="article-desk"
                  class="my-2 lg:hidden"
                  font-family="Jost"
                  :fontsize="14"
                  >{{ article.desk }}</TextElement
                >
              </LinkElement>
              <LinkElement :href="article.url" class="t-link">
                <TextElement
                  component="h3"
                  kind="article-title"
                  font-family="Jost"
                  class="onmouseover"
                  :bold="{ lg: true }"
                  :line-height="1.25"
                  :font-size="17"
                >
                  {{ article.title }}
                </TextElement>
                <TextElement
                  component="p"
                  kind="article-blurb"
                  class="mt-1 hidden lg:line-clamp-5"
                  font-family="Jost"
                  color="8f8f8f"
                  :line-height="1.1"
                  :font-size="17"
                >
                  {{ article.blurb }}
                </TextElement>
              </LinkElement>
              <div class="hidden lg:block">
                <TextElement component="span" color="8f8f8f" :font-size="14" kind="article-author" font-family="Jost">
                  By
                </TextElement>
                <Authors author-component="span" :authors="article.authors" kind="article-author" />
              </div>
            </ArticleBlock>
          </DeskSection>
        </div>
        <div class="w-full lg:w-8/12">
          <DeskSection :order="2">
            <ArticleBlock v-slot="{ article }">
              <div class="flex flex-row items-center border-t border-black pt-2 lg:flex-col lg:border-t-0 lg:px-8">
                <div class="t-link flex w-9/12 flex-col items-start pr-4 lg:w-full lg:items-center lg:pr-0">
                  <LinkElement :href="article.deskUrl">
                    <TextElement
                      component="h4"
                      kind="article-medium-desk"
                      class="lg:mt-3"
                      :align="{ xs: 'left', lg: 'center' }"
                      font-family="League Gothic"
                      :fontsize="14"
                      bold
                    >
                      <span>{{ article.desk }}</span>
                    </TextElement>
                  </LinkElement>
                  <LinkElement :href="article.url">
                    <TextElement
                      component="h3"
                      kind="article-medium-title"
                      class="onmouseover mt-1 line-clamp-2 lg:line-clamp-none"
                      :align="{ xs: 'left', lg: 'center' }"
                      :bold="{ lg: true }"
                      font-family="League Gothic"
                      :line-height="1.1"
                      :font-size="{ xs: 20, lg: 45 }"
                    >
                      {{ article.title }}
                    </TextElement>
                    <!-- Blurb Text hidden on sm -->
                    <TextElement
                      component="p"
                      kind="article-blurb-medium"
                      class="mt-3 hidden lg:block"
                      font-family="Jost"
                      align="center"
                      :line-height="1.1"
                      :font-size="34"
                    >
                      {{ article.blurb }}
                    </TextElement>
                  </LinkElement>
                </div>

                <!-- Author hidden on sm -->
                <div class="hidden pt-2 text-center lg:block">
                  <TextElement component="span" :font-size="{ xs: 14 }" kind="article-author-medium" font-family="Jost">
                    By
                  </TextElement>
                  <Authors
                    author-component="span"
                    :authors="article.authors"
                    kind="article-author-medium"
                    font-family="Jost"
                    :font-size="{ xs: 14 }"
                  />
                </div>

                <LinkElement class="w-3/12 lg:hidden" :href="article.url">
                  <div class="aspect-w-1 aspect-h-1 lg:aspect-w-16 lg:aspect-h-9">
                    <ResponsiveImage
                      :src="article.headline"
                      :alt="article.headlineAlt"
                      class="object-cover"
                      sizes="(max-width: 768px) 10vw, (max-width: 1060px) 10vw, 20vw"
                    />
                  </div>
                </LinkElement>
              </div>
            </ArticleBlock>
          </DeskSection>

          <div class="mx-auto mt-12 hidden w-6/12 border-t-2 lg:block"></div>

          <div class="mt-4 flex flex-col gap-4 lg:flex-row">
            <DeskSection :order="3" class="w-full lg:w-6/12">
              <ArticleBlock v-slot="{ article }">
                <div class="t-link flex flex-row items-center border-t border-black pt-3 lg:flex-col lg:border-t-0">
                  <div class="image-container order-2 w-3/12 lg:order-1 lg:w-full">
                    <LinkElement :href="article.url">
                      <div class="aspect-w-1 aspect-h-1 lg:aspect-w-16 lg:aspect-h-10">
                        <ResponsiveImage
                          :src="article.headline"
                          :alt="article.headlineAlt"
                          class="object-cover"
                          sizes="(max-width: 768px) 10vw, (max-width: 1060px) 10vw, 20vw"
                        />
                      </div>
                    </LinkElement>
                  </div>
                  <div class="order-1 w-9/12 pr-4 lg:order-2 lg:w-full lg:pr-0">
                    <LinkElement :href="article.deskUrl">
                      <TextElement
                        component="h4"
                        kind="article-medium-desk"
                        class="mt-3"
                        :align="{ xs: 'left', lg: 'center' }"
                        font-family="League Gothic"
                        :fontsize="14"
                        bold
                      >
                        <span>{{ article.desk }}</span>
                      </TextElement>
                    </LinkElement>
                    <LinkElement :href="article.url">
                      <TextElement
                        component="p"
                        kind="article-title-medium"
                        class="onmouseover mt-1 pb-0.5 line-clamp-2 lg:line-clamp-4"
                        :align="{ xs: 'left', lg: 'center' }"
                        font-family="Jost"
                        :line-height="1.05"
                        :font-size="{ xs: 20, lg: 26 }"
                      >
                        {{ article.title }}
                      </TextElement>
                    </LinkElement>
                  </div>
                </div>
              </ArticleBlock>
            </DeskSection>
            <DeskSection :order="4" class="w-full lg:w-6/12">
              <ArticleBlock v-slot="{ article }">
                <div class="t-link flex flex-row items-center border-t border-black pt-3 lg:flex-col lg:border-t-0">
                  <div class="image-container order-2 w-3/12 lg:order-1 lg:w-full">
                    <LinkElement :href="article.url">
                      <div class="aspect-w-1 aspect-h-1 lg:aspect-w-16 lg:aspect-h-10">
                        <ResponsiveImage
                          :src="article.headline"
                          :alt="article.headlineAlt"
                          class="object-cover"
                          sizes="(max-width: 768px) 10vw, (max-width: 1060px) 10vw, 20vw"
                        />
                      </div>
                    </LinkElement>
                  </div>
                  <div class="order-1 w-9/12 pr-4 lg:order-2 lg:w-full lg:pr-0">
                    <LinkElement :href="article.deskUrl">
                      <TextElement
                        component="h4"
                        kind="article-medium-desk"
                        class="mt-3"
                        :align="{ xs: 'left', lg: 'center' }"
                        font-family="League Gothic"
                        :fontsize="14"
                        bold
                      >
                        <span>{{ article.desk }}</span>
                      </TextElement>
                    </LinkElement>
                    <LinkElement :href="article.url">
                      <TextElement
                        component="p"
                        kind="article-title-medium"
                        class="onmouseover mt-1 pb-0.5 line-clamp-2 lg:line-clamp-4"
                        :align="{ xs: 'left', lg: 'center' }"
                        font-family="Jost"
                        :line-height="1.05"
                        :font-size="{ xs: 20, lg: 26 }"
                      >
                        {{ article.title }}
                      </TextElement>
                    </LinkElement>
                  </div>
                </div>
              </ArticleBlock>
            </DeskSection>
          </div>
        </div>
      </div>
    </div>
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
}
</script>

<style lang="scss" scoped>
.t-link:hover {
  &::v-deep {
    img {
      @apply opacity-75;
    }
  }
}
</style>
