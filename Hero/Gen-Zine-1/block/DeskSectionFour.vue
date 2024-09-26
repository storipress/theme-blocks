<template>
  <DeskSection :order="3" class="order-1 col-[2] md:col-[3] lg:col-[4]">
    <ArticleBlock v-slot="{ article }">
      <!-- article image -->
      <div class="col-[1/3] row-[1] mb-3 aspect-[20/11]">
        <LinkElement class="overflow-hidden" :href="article.url">
          <ResponsiveImage
            class="h-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
            :src="article.headline"
          />
        </LinkElement>
      </div>
      <!-- article desk -->
      <div class="col-[2] row-[2] mt-[0.6rem] mb-2 flex flex-row items-start justify-between gap-2">
        <LinkElement :href="article.deskUrl">
          <TextElement
            component="h2"
            kind="deskSection-four__desk-title"
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
            kind="deskSection-four__article-author"
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
            kind="deskSection-four__article-author"
            separator=", "
          />
        </div>
      </div>
      <!-- article title -->
      <TextElement
        component="h2"
        kind="deskSection-four__article-title"
        color="54457a"
        :font-size="{ xs: 20, md: 24, lg: 36 }"
        font-family="Sinkin Sans"
        :line-height="1"
        class="col-[1/-1] mb-3 tracking-tighter"
      >
        <LinkElement :href="article.url">
          {{ article.title }}
        </LinkElement>
      </TextElement>
    </ArticleBlock>
  </DeskSection>
</template>

<script>
import { ArticleBlock, Authors, DeskSection, LinkElement, ResponsiveImage, TextElement } from '@storipress/block'

export default {
  components: {
    ArticleBlock,
    Authors,
    DeskSection,
    LinkElement,
    ResponsiveImage,
    TextElement,
  },
}
</script>
