<template>
  <DeskSection :order="1" class="col-[2] md:col-[1/-1] lg:col-[2/-1]">
    <ArticleBlock
      v-slot="{ article }"
      class="grid grid-cols-[2.8rem_1fr] md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto_1fr] md:gap-3 lg:grid-cols-[1fr_0.75fr]"
    >
      <!-- article image -->
      <div class="col-[1/-1] row-[1] mb-3 aspect-[21/23] overflow-hidden md:col-[2] md:row-[1/5] md:m-0">
        <LinkElement :href="article.url">
          <ResponsiveImage
            class="h-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
            :src="article.headline"
          />
        </LinkElement>
      </div>
      <!-- article desk -->
      <div
        class="col-[2] row-[2] flex h-[4.5rem] flex-col items-start justify-end gap-2 md:col-[1] md:row-[2] md:mt-2 md:h-auto md:flex-row md:items-end md:justify-between"
      >
        <LinkElement :href="article.deskUrl">
          <TextElement
            component="h2"
            kind="deskSection-two__desk-title"
            color="54457a"
            :font-size="{ xs: 15, lg: 18 }"
            font-family="BNBrick-House"
            italic
            class="hover:underline"
          >
            {{ article.desk }}
          </TextElement>
        </LinkElement>
        <div>
          <TextElement
            component="span"
            kind="deskSection-two__article-author"
            :font-size="{ xs: 12 }"
            font-family="system-ui"
            color="54457a"
            uppercase
          >
            BY
          </TextElement>
          <Authors
            :authors="article.authors"
            component="span"
            author-component="span"
            class="hover:underline"
            kind="deskSection-two__article-author"
            separator=", "
          />
        </div>
      </div>
      <!-- article title -->
      <TextElement
        component="h2"
        kind="deskSection-two__article-title"
        color="54457a"
        :font-size="{ xs: 30, lg: 42 }"
        font-family="Sinkin Sans"
        :line-height="1.1"
        class="col-[1/-1] mt-6 mb-3 tracking-tighter md:col-[1] md:row-[3] md:self-end"
      >
        <LinkElement :href="article.url">
          {{ article.title }}
        </LinkElement>
      </TextElement>
      <!-- article dek -->
      <TextElement
        component="h4"
        kind="deskSection-two__article-blurb"
        color="54457a"
        :font-size="{ xs: 14 }"
        font-family="system-ui"
        class="col-[1/-1] md:col-[1] md:row-[4]"
      >
        <LinkElement :href="article.url">
          {{ article.blurb }}
        </LinkElement>
      </TextElement>
      <!-- article arrow -->
      <div class="relative col-[1] row-[2] -mt-0.5 h-full w-[1.875rem] md:row-[1] md:flex md:w-full md:items-center">
        <TextElement kind="article-two__arrow" color="484ca7" component="div" class="md:mt-5 md:flex md:items-center">
          <ArrowSvg class="absolute h-4 w-[1.875rem] md:-right-2.5 md:-translate-y-px md:rotate-90" />
          <VerticalLineSvg class="absolute mt-1 md:hidden" />
          <HorizontalLineSvg class="absolute hidden w-full md:block" />
        </TextElement>
      </div>
    </ArticleBlock>
  </DeskSection>
</template>

<script>
import { ArticleBlock, Authors, DeskSection, LinkElement, ResponsiveImage, TextElement } from '@storipress/block'

import ArrowSvg from './ArrowSvg.vue'
import HorizontalLineSvg from './HorizontalLineSvg.vue'
import VerticalLineSvg from './VerticalLineSvg.vue'

export default {
  components: {
    ArrowSvg,
    ArticleBlock,
    Authors,
    DeskSection,
    LinkElement,
    VerticalLineSvg,
    HorizontalLineSvg,
    ResponsiveImage,
    TextElement,
  },
}
</script>
