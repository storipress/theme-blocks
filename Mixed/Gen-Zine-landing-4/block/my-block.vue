<template>
  <Block :block="block" backgroundColor="F4F2ED" class="pt-16 pb-24 lg:pt-[4.5rem] lg:pb-36">
    <DeskSection :order="0" class="w-full">
      <div class="grid gap-y-8 lg:pl-[8.125rem]">
        <ArticleBlock
          v-for="i in 9"
          :key="i"
          v-slot="{ article }"
          class="md:grid md:gap-x-3"
          :class="i === 1 ? 'md:grid-cols-[45%_1fr] md:grid-rows-[auto_auto_1fr]' : 'md:grid-cols-[21.56rem_auto]'"
        >
          <div :class="i === 1 ? 'md:row-[1/5]' : 'md:col-[1] md:row-[1/4]'">
            <LinkElement class="overflow-hidden" :href="article.url">
              <ResponsiveImage
                class="aspect-[7/4] h-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
                :src="article.headline"
              />
            </LinkElement>
          </div>
          <div class="my-3 flex justify-between gap-x-2 md:col-[2] md:row-[2] md:mt-5">
            <LinkElement :href="article.deskUrl">
              <TextElement
                component="h4"
                kind="article-desk"
                color="3D312E"
                :font-size="{ xs: 15, lg: 18 }"
                font-family="BNBrick-House"
                italic
              >
                {{ article.desk }}
              </TextElement>
            </LinkElement>
            <TextElement
              component="p"
              kind="article-time"
              color="3D312E"
              :font-size="{ xs: 16, lg: 15 }"
              font-family="system-ui"
            >
              {{ format(article.time, 'd MMMM yyyy') }}
            </TextElement>
          </div>

          <LinkElement :href="article.url" class="line-clamp-3 md:col-[2] md:row-[3] md:self-end">
            <TextElement
              component="h3"
              kind="article-title"
              color="3D312E"
              :font-size="{ xs: 20, md: 32 }"
              font-family="Sinkin Sans"
              :line-height="1.25"
            >
              {{ article.title }}
            </TextElement>
          </LinkElement>
          <!-- article arrow -->
          <div v-if="i === 1" class="relative col-[2] row-[1] hidden h-fit w-full items-center md:flex">
            <TextElement kind="article-arrow" color="fcb25b" component="span">
              <svg
                viewBox="0 0 46 25"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute -left-3 h-4 w-[1.875rem] -translate-y-px -rotate-90"
              >
                <path
                  d="m210.932895 157.94717.166847.985983.097445.545098c.954148 5.064522 3.159071 9.483648 6.623425 13.276635 3.438149 3.764296 7.741327 5.862087 12.957498 6.311028l.476714.036271.997815.066065-.132129 1.99563-.997816-.066065-.492812-.037282c-5.722503-.487464-10.500575-2.81233-14.28601-6.956855-3.064609-3.355322-5.216245-7.179978-6.450047-11.463157-1.232693 4.283179-3.384328 8.107835-6.448938 11.463157-3.785434 4.144525-8.563507 6.469391-14.28601 6.956855l-.492812.037282-.997815.066065-.13213-1.99563.997815-.066065c5.431293-.359604 9.891877-2.468934 13.434212-6.347299 3.464354-3.792987 5.669277-8.212113 6.623426-13.276635l.097444-.545098.166847-.985983z"
                  fill="currentColor"
                  transform="translate(-187 -157)"
                />
              </svg>
            </TextElement>
            <ColorArea backgroundColor="fcb25b" kind="article-arrow" class="mt-3.5 h-px w-full" />
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
  ColorArea,
  DeskSection,
  LinkElement,
  ResponsiveImage,
  TextElement,
} from '@storipress/block'
import { format } from 'date-fns'

export default {
  components: {
    ArticleBlock,
    Block,
    ColorArea,
    DeskSection,
    LinkElement,
    ResponsiveImage,
    TextElement,
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
