<template>
  <Block :block="block" backgroundColor="fff8ee" class="py-16 lg:pb-[4.5rem]">
    <DeskSection v-slot="{ desk }" :order="0" class="m-auto w-full max-w-[90rem] lg:pl-[8.125rem]">
      <TextInput
        component="h4"
        kind="text-element"
        :default-value="desk"
        :line-height="1"
        :font-size="{ xs: 80, md: 149, lg: 176 }"
        font-family="BNBrick-House"
        color="3c6b55"
        class="mb-6 md:mb-10 lg:mx-auto lg:mb-4"
      />
      <div class="flex gap-3 overflow-scroll lg:flex-col lg:gap-0 lg:overflow-auto">
        <ArticleBlock
          v-for="i in 5"
          :key="i"
          v-slot="{ article }"
          class="article-item mb-4 grid w-full flex-[0_0_15.625rem] grid-cols-[2.8rem_1fr] md:flex-[0_0_31rem] md:grid-cols-[4rem_1fr] lg:m-0 lg:flex-[0] lg:gap-x-3 lg:odd:self-end lg:even:self-start"
        >
          <div class="col-[1/-1] mb-4 md:mb-7 lg:row-[1/4] lg:mb-0" :class="i % 2 === 0 ? 'lg:col-[2]' : 'lg:col-[1]'">
            <LinkElement class="overflow-hidden" :href="article.url">
              <ResponsiveImage
                class="aspect-[25/14] h-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
                :src="article.headline"
              />
            </LinkElement>
          </div>
          <div
            class="col-[2] grid grid-cols-[1fr_1fr] items-end lg:row-[1] lg:grid-rows-[auto_2.5rem_auto] lg:gap-y-3"
            :class="{ 'lg:col-[1]': i % 2 === 0 }"
          >
            <TextElement
              component="p"
              kind="article-index"
              color="3c6b55"
              :font-size="{ xs: 44, lg: 72 }"
              font-family="Lack Line"
              class="col-[2] mr-1 self-end text-right lg:-mb-14"
              :class="i % 2 === 0 ? 'lg:col-[1/-1] lg:text-left' : 'lg:text-right'"
            >
              {{ '0' + i }}
            </TextElement>

            <TextElement
              component="p"
              kind="article-desk"
              color="3c6b55"
              :font-size="{ xs: 15, lg: 18 }"
              font-family="BNBrick-House"
              italic
              class="col-[1/-1] mb-[0.2rem] lg:row-[3] lg:m-0 lg:mt-3"
              :class="i % 2 === 0 ? 'lg:col-[1] lg:text-left' : 'lg:col-[2] lg:text-right'"
            >
              <LinkElement :href="article.deskUrl">{{ article.desk }}</LinkElement>
            </TextElement>
            <div
              class="col-[1/-1] mr-4 md:mx-0 lg:row-[3] lg:mt-3"
              :class="i % 2 === 0 ? 'lg:col-[2] lg:text-right' : 'lg:col-[1]'"
            >
              <TextElement
                kind="article-author"
                component="span"
                :font-size="{ xs: 12, lg: 14 }"
                font-family="system-ui"
                color="3c6b55"
                uppercase
              >
                BY
              </TextElement>
              <Authors
                kind="article-author"
                component="span"
                author-component="span"
                :authors="article.authors"
                class="hover:underline"
                separator=", "
              />
            </div>

            <!-- desktop arrow -->
            <TextElement
              kind="article-arrow"
              color="3c6b55"
              component="div"
              class="relative row-[2] -mt-[0.188rem] hidden h-[0.125rem] w-full lg:col-[1/-1] lg:block"
            >
              <svg
                viewBox="0 0 46 25"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute h-5 w-10"
                :class="
                  i % 2 === 0
                    ? '-right-3 -top-[1.875rem] translate-y-[1.313rem] rotate-90'
                    : '-left-3 -top-[1.813rem] translate-y-full -rotate-90'
                "
              >
                <path
                  d="m210.932895 157.94717.166847.985983.097445.545098c.954148 5.064522 3.159071 9.483648 6.623425 13.276635 3.438149 3.764296 7.741327 5.862087 12.957498 6.311028l.476714.036271.997815.066065-.132129 1.99563-.997816-.066065-.492812-.037282c-5.722503-.487464-10.500575-2.81233-14.28601-6.956855-3.064609-3.355322-5.216245-7.179978-6.450047-11.463157-1.232693 4.283179-3.384328 8.107835-6.448938 11.463157-3.785434 4.144525-8.563507 6.469391-14.28601 6.956855l-.492812.037282-.997815.066065-.13213-1.99563.997815-.066065c5.431293-.359604 9.891877-2.468934 13.434212-6.347299 3.464354-3.792987 5.669277-8.212113 6.623426-13.276635l.097444-.545098.166847-.985983z"
                  fill="currentColor"
                  transform="translate(-187 -157)"
                />
              </svg>
            </TextElement>
          </div>

          <TextElement
            component="h3"
            kind="article-title"
            color="3c6b55"
            :font-size="{ xs: 18, lg: 26 }"
            font-family="system-ui"
            :line-height="1.05"
            class="col-[1/-1] mt-2.5 lg:mt-8"
            :class="i % 2 === 0 ? 'lg:col-[1]' : 'lg:col-[2]'"
          >
            <LinkElement :href="article.url">
              {{ article.title }}
            </LinkElement>
          </TextElement>

          <!-- mobile arrow -->
          <div class="col-[1] row-[2] -mt-[0.188rem] w-[1.875rem] lg:hidden">
            <TextElement kind="article-arrow" color="3c6b55" component="span">
              <svg viewBox="0 0 46 25" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m210.932895 157.94717.166847.985983.097445.545098c.954148 5.064522 3.159071 9.483648 6.623425 13.276635 3.438149 3.764296 7.741327 5.862087 12.957498 6.311028l.476714.036271.997815.066065-.132129 1.99563-.997816-.066065-.492812-.037282c-5.722503-.487464-10.500575-2.81233-14.28601-6.956855-3.064609-3.355322-5.216245-7.179978-6.450047-11.463157-1.232693 4.283179-3.384328 8.107835-6.448938 11.463157-3.785434 4.144525-8.563507 6.469391-14.28601 6.956855l-.492812.037282-.997815.066065-.13213-1.99563.997815-.066065c5.431293-.359604 9.891877-2.468934 13.434212-6.347299 3.464354-3.792987 5.669277-8.212113 6.623426-13.276635l.097444-.545098.166847-.985983z"
                  fill="currentColor"
                  transform="translate(-187 -157)"
                />
              </svg>
            </TextElement>
            <ColorArea backgroundColor="3c6b55" kind="article-arrow" class="ml-3.5 -mt-3 h-[95%] w-0.5" />
          </div>
        </ArticleBlock>
      </div>
    </DeskSection>
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

export default {
  components: {
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

<style lang="scss" scoped>
@screen lg {
  .article-item:nth-child(1) {
    @apply max-w-[65rem] grid-cols-[35.25rem_1fr];
    .responsive-image {
      @apply aspect-[16/9];
    }
  }
  .article-item:nth-child(2),
  .article-item:nth-child(4) {
    @apply max-w-[66.25rem] grid-cols-[1fr_36.45rem];
    .responsive-image {
      @apply aspect-[53/30];
    }
  }
  .article-item:nth-child(3) {
    @apply max-w-[73.625rem] grid-cols-[43.875rem_1fr];
    .responsive-image {
      @apply aspect-[39/22];
    }
  }
  .article-item:nth-child(5) {
    @apply max-w-[66.25rem] grid-cols-[36.45rem_1fr];
    .responsive-image {
      @apply aspect-[53/30];
    }
  }
}
</style>
