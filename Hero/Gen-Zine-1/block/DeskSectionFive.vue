<template>
  <DeskSection :order="4" class="order-3 col-[1/-1] lg:col-[1] lg:row-[2/4]">
    <div class="-mb-5 flex gap-x-3 overflow-x-scroll px-3 pb-5 lg:flex-col lg:overflow-auto lg:p-0">
      <ArticleBlock
        v-for="i in 5"
        :key="i"
        class="max-w-[15rem] flex-[1_0_15rem] lg:mr-16 lg:mb-8 lg:flex-[0]"
        v-slot="{ article }"
      >
        <!-- article time -->
        <TextElement
          component="p"
          kind="article-time"
          color="54457a"
          :font-size="{ xs: 13 }"
          font-family="system-ui"
          class="flex-[0_0_4.7rem] pb-4"
        >
          {{ format(article.time, 'd MMMM yyyy') }}
        </TextElement>
        <!-- article title -->
        <TextElement
          component="h2"
          kind="deskSection-five__article-title"
          color="54457a"
          :font-size="{ xs: 15 }"
          font-family="Sinkin Sans"
          :line-height="1"
          class="ml-4"
        >
          <LinkElement :href="article.url">
            {{ article.title }}
          </LinkElement>
        </TextElement>
      </ArticleBlock>
    </div>
  </DeskSection>
</template>

<script>
import { ArticleBlock, DeskSection, LinkElement, TextElement } from '@storipress/block'
import { format } from 'date-fns'

export default {
  components: {
    ArticleBlock,
    DeskSection,
    LinkElement,
    TextElement,
  },

  data() {
    return {
      format,
    }
  },
}
</script>
