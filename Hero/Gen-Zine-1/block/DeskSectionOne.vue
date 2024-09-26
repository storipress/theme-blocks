<template>
  <DeskSection :order="0" class="col-[2] md:col-[1/-1] lg:col-[1/-1]">
    <ArticleBlock
      v-slot="{ article }"
      class="grid grid-cols-[2.8rem_1fr] md:grid-cols-[2.5rem_1fr_15rem] md:gap-3 lg:grid-cols-[1fr_21.875rem] lg:grid-rows-[1fr]"
    >
      <!-- article image -->
      <div
        class="col-[1/-1] row-[1] mb-3 aspect-[20/11] overflow-hidden md:m-0 lg:col-[1] lg:row-[1/5] lg:aspect-[3/2]"
      >
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
        class="col-[2] row-[2] flex h-[4.5rem] flex-col items-start justify-end gap-2 md:col-[2/4] md:flex-row md:items-end md:justify-between lg:row-[1] lg:flex-col lg:items-start lg:justify-end lg:self-end"
      >
        <LinkElement :href="article.deskUrl" class="tracking-wider">
          <TextElement
            component="h2"
            kind="deskSection-one__desk-title"
            color="54457a"
            :font-size="{ xs: 13 }"
            font-family="Sinkin Sans"
            bold
          >
            {{ article.desk }}
          </TextElement>
        </LinkElement>
        <div>
          <TextElement
            component="span"
            kind="deskSection-one__article-author"
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
            author-class="hover:underline"
            kind="deskSection-one__article-author"
            separator=", "
          />
        </div>
      </div>
      <!-- article title -->
      <TextElement
        component="h2"
        kind="deskSection-one__article-title"
        :font-size="{ xs: 30, md: 40, lg: 52 }"
        font-family="BNBrick-House"
        color="54457a"
        :line-height="1"
        class="col-[1/-1] my-6 tracking-tight md:col-[1/3] md:mb-2 md:mt-0 lg:col-[2] lg:self-end"
      >
        <LinkElement :href="article.url">
          {{ article.title }}
        </LinkElement>
      </TextElement>
      <!-- article dek -->
      <TextElement
        component="h4"
        kind="deskSection-one__article-blurb"
        :font-size="{ xs: 14 }"
        font-family="Sinkin Sans"
        color="54457a"
        class="col-[1/-1] md:col-[3] lg:col-[2]"
      >
        <LinkElement :href="article.url">
          {{ article.blurb }}
        </LinkElement>
      </TextElement>
      <!-- article arrow -->
      <div class="relative col-[1] row-[2] -mt-0.5 h-full w-[1.875rem] lg:hidden">
        <TextElement kind="article-one__arrow" color="484ca7" component="span">
          <ArrowSvg class="absolute w-[1.875rem]" />
          <VerticalLineSvg class="absolute mt-1" />
        </TextElement>
      </div>
    </ArticleBlock>
  </DeskSection>
</template>

<script>
import { ArticleBlock, Authors, DeskSection, LinkElement, ResponsiveImage, TextElement } from '@storipress/block'

import ArrowSvg from './ArrowSvg.vue'
import VerticalLineSvg from './VerticalLineSvg.vue'

export default {
  components: {
    ArrowSvg,
    ArticleBlock,
    Authors,
    DeskSection,
    LinkElement,
    VerticalLineSvg,
    ResponsiveImage,
    TextElement,
  },
}
</script>
