<template>
  <DeskSection :order="2" class="order-1 col-[2] md:col-[1] lg:col-[2]">
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
            kind="deskSection-three__desk-title"
            color="54457a"
            :font-size="{ xs: 15, lg: 12 }"
            font-family="Sinkin Sans"
            class="hover:underline"
            bold
          >
            {{ article.desk }}
          </TextElement>
        </LinkElement>
        <div>
          <TextElement
            component="span"
            kind="deskSection-three__article-author"
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
            kind="deskSection-three__article-author"
            separator=", "
          />
        </div>
      </div>
      <!-- article title -->
      <TextElement
        component="h2"
        kind="deskSection-three__article-title"
        :font-size="{ xs: 20, md: 24, lg: 36 }"
        font-family="BNBrick-House"
        color="54457a"
        :line-height="1"
        class="col-[1/-1] mb-3 tracking-tight"
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
