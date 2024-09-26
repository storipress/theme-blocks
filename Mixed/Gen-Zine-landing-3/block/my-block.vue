<template>
  <Block :block="block" backgroundColor="f9ce60" class="py-16 lg:pb-[4.5rem] lg:pl-[8.125rem]">
    <div class="grid gap-y-8">
      <DeskSection v-slot="{ desk }" :order="0" class="w-full">
        <TextInput
          component="h4"
          kind="desk"
          :default-value="desk"
          :line-height="1"
          :font-size="{ xs: 80, md: 149, lg: 176 }"
          font-family="BNBrick-House"
          color="402d23"
          class="mb-6 md:mb-10 lg:mb-4"
        />

        <div class="col-[main] grid grid-cols-[1fr] gap-y-8 lg:grid-cols-[45%_1fr] lg:gap-4">
          <ArticleBlock
            v-slot="{ article }"
            class="col-[2] row-[2] grid grid-cols-[2.8rem_1fr] md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto_1fr] md:gap-3 lg:col-[1/-1] lg:grid-cols-[45%_1fr] lg:gap-x-4"
          >
            <div class="col-[1/-1] row-[1] mb-3 md:col-[2] md:row-[1/5] md:m-0">
              <LinkElement class="overflow-hidden" :href="article.url">
                <ResponsiveImage
                  class="aspect-[1/1] h-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
                  :src="article.headline"
                />
              </LinkElement>
            </div>
            <div
              class="col-[2] row-[2] flex h-[4.5rem] flex-col items-end justify-end gap-2 md:col-[1] md:row-[2] md:mt-2 md:h-auto md:flex-row md:justify-between md:gap-4"
            >
              <LinkElement :href="article.deskUrl">
                <TextElement
                  component="p"
                  kind="article-one__desk"
                  color="402d23"
                  :font-size="{ xs: 13 }"
                  font-family="Sinkin Sans"
                >
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
              <div>
                <TextElement
                  kind="article-one__author"
                  component="span"
                  :font-size="{ xs: 12 }"
                  font-family="system-ui"
                  color="402d23"
                  uppercase
                >
                  BY
                </TextElement>
                <Authors
                  kind="article-one__author"
                  component="span"
                  author-component="span"
                  :authors="article.authors"
                  class="hover:underline"
                  separator=", "
                />
              </div>
            </div>

            <LinkElement
              :href="article.url"
              class="col-[1/-1] mt-6 mb-3 line-clamp-3 md:col-[1] md:row-[3] md:mt-6 md:mb-3 md:self-end"
            >
              <TextElement
                component="h3"
                kind="article-one__title"
                color="402d23"
                :font-size="{ xs: 30, md: 36, lg: 60 }"
                font-family="BNBrick-House"
                :line-height="1.05"
              >
                {{ article.title }}
              </TextElement>
            </LinkElement>
            <TextElement
              component="p"
              kind="article-one__blurb"
              :font-size="{ xs: 12 }"
              font-family="Sinkin Sans"
              color="402d23"
              class="col-[1/-1] m-0 md:col-[1] md:row-[4]"
            >
              <LinkElement :href="article.url">
                {{ article.blurb }}
              </LinkElement>
            </TextElement>
            <!-- article arrow -->
            <div
              class="relative col-[1] row-[2] -mt-0.5 h-full w-[1.875rem] md:row-[1] md:flex md:h-fit md:w-full md:items-center"
            >
              <TextElement kind="article-one__arrow" color="402d23" component="span">
                <ArrowSvg class="absolute h-4 w-[1.875rem] md:-right-3 md:-translate-y-px md:rotate-90" />
              </TextElement>
              <ColorArea
                backgroundColor="402d23"
                kind="article-one__arrow"
                class="ml-3.5 h-[110%] w-0.5 md:mx-0 md:mt-3.5 md:h-px md:w-full"
              />
            </div>
          </ArticleBlock>

          <ArticleBlock
            v-slot="{ article }"
            class="order-1 col-[2] grid grid-cols-[1fr_1fr] gap-3 md:grid-rows-[auto_auto_1fr] md:items-end"
          >
            <div class="row-[1/3] md:row-[1/4]">
              <LinkElement class="overflow-hidden" :href="article.url">
                <ResponsiveImage
                  class="aspect-[57/74] h-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
                  :src="article.headline"
                />
              </LinkElement>
            </div>
            <div
              class="col-[2] row-[2] flex flex-col items-end justify-end gap-2 md:mt-2 md:flex-row md:justify-between md:gap-4"
            >
              <LinkElement :href="article.deskUrl">
                <TextElement
                  component="h4"
                  kind="article-two__desk"
                  color="402d23"
                  :font-size="{ xs: 15, lg: 18 }"
                  font-family="BNBrick-House"
                  italic
                >
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
              <div>
                <TextElement
                  kind="article-two__author"
                  component="span"
                  :font-size="{ xs: 12, lg: 13 }"
                  font-family="system-ui"
                  color="402d23"
                  uppercase
                >
                  BY
                </TextElement>
                <Authors
                  kind="article-two__author"
                  component="span"
                  author-component="span"
                  :authors="article.authors"
                  class="hover:underline"
                  separator=", "
                />
              </div>
            </div>
            <LinkElement :href="article.url" class="col-[1/-1] m-0 line-clamp-3 md:col-[2] md:row-[3]">
              <TextElement
                component="h3"
                kind="article-two__title"
                color="402d23"
                :font-size="{ xs: 20, md: 30 }"
                font-family="Sinkin Sans"
                :line-height="1.05"
              >
                {{ article.title }}
              </TextElement>
            </LinkElement>
            <!-- article arrow -->
            <div class="relative col-[2] row-[1] flex h-fit w-full items-center">
              <TextElement kind="article-two__arrow" color="402d23" component="span">
                <ArrowSvg class="absolute -left-3 h-4 w-[1.875rem] -translate-y-px -rotate-90" />
              </TextElement>
              <ColorArea backgroundColor="402d23" kind="article-two__arrow" class="mt-3.5 h-px w-full" />
            </div>
          </ArticleBlock>

          <ArticleBlock v-slot="{ article }" class="order-3 col-[2] lg:col-[1] lg:row-[1] lg:grid-cols-[1fr]">
            <div class="mb-6 flex lg:mx-0">
              <!-- article arrow -->
              <div class="relative -mt-0.5 h-auto w-[1.875rem]">
                <TextElement kind="article-three__arrow" color="402d23" component="span">
                  <ArrowSvg class="absolute bottom-0 w-[1.875rem] rotate-180" />
                </TextElement>
                <ColorArea backgroundColor="402d23" kind="article-three__arrow" class="ml-3.5 h-full w-0.5" />
              </div>
              <TextElement
                component="p"
                kind="article-three__desk"
                :line-height="1"
                :font-size="{ xs: 32, md: 36 }"
                font-family="BNBrick-House"
                color="402d23"
                class="pt-4 pl-5 lg:max-w-[18.75rem]"
              >
                {{ desk }}
              </TextElement>
            </div>

            <div
              class="-mb-5 flex max-w-[100vw] gap-x-3 overflow-x-scroll pb-5 lg:max-w-[28.125rem] lg:flex-col lg:p-0"
            >
              <div
                v-for="i in 3"
                :key="i"
                class="max-w-[15rem] flex-[1_0_15rem] lg:mb-8 lg:flex lg:w-full lg:max-w-none lg:flex-[1] lg:gap-y-11"
              >
                <TextElement
                  component="p"
                  kind="article-three__time"
                  color="402d23"
                  :font-size="{ xs: 13 }"
                  font-family="system-ui"
                  class="flex-[0_0_5rem] pb-4"
                >
                  {{ format(article.time, 'd MMMM yyyy') }}
                </TextElement>
                <TextElement
                  component="h3"
                  kind="article-three__title"
                  color="402d23"
                  :font-size="{ xs: 15 }"
                  font-family="Sinkin Sans"
                  :line-height="1"
                  class="ml-12"
                >
                  <LinkElement :href="article.url">
                    {{ article.title }}
                  </LinkElement>
                </TextElement>
              </div>
            </div>
          </ArticleBlock>
        </div>
      </DeskSection>
    </div>
  </Block>
</template>

<script>
import {
  ArticleBlock,
  Authors,
  Block,
  ColorArea,
  DeskSection,
  LinkElement,
  ResponsiveImage,
  TextElement,
  TextInput,
} from '@storipress/block'
import { format } from 'date-fns'

import ArrowSvg from './ArrowSvg.vue'

export default {
  components: {
    ArrowSvg,
    ArticleBlock,
    Authors,
    Block,
    ColorArea,
    DeskSection,
    LinkElement,
    ResponsiveImage,
    TextElement,
    TextInput,
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
    }
  },
}
</script>

<style lang="scss" scoped></style>
