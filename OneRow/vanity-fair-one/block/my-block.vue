<template>
  <Block class="py-8 md:pb-16" :block="block" backgroundColor="f6f6f6">
    <DeskSection class="my-desk" v-slot="{ desk }">
      <div>
        <TextInput
          component="h4"
          kind="desk-title"
          fontFamily="Jost"
          :fontSize="{ xs: 30 }"
          align="center"
          :defaultValue="desk"
        />
      </div>

      <div class="md:grid md:grid-cols-2 lg:flex lg:justify-between">
        <ArticleBlock class="article justify-self-center" v-slot="{ article }" v-for="i in 4" :key="`article_${i}`">
          <LinkElement :href="article.url">
            <div class="mx-auto h-32 w-32 overflow-hidden rounded-full md:h-40 md:w-40">
              <ResponsiveImage
                class="article-headline h-full w-full object-cover"
                :src="article.headline"
                :alt="article.headlineAlt"
                :width="300"
                :height="300"
              />
            </div>
          </LinkElement>
          <LinkElement :href="article.deskUrl">
            <TextElement
              component="h4"
              kind="article-desk"
              fontFamily="Jost"
              :fontSize="{ xs: 12 }"
              align="center"
              color="e7212c"
            >
              {{ article.desk }}
            </TextElement>
          </LinkElement>
          <LinkElement :href="article.url">
            <TextElement
              component="h3"
              kind="article-title"
              fontFamily="Jost"
              :fontSize="{ xs: 24, md: 16 }"
              align="center"
            >
              {{ article.title }}
            </TextElement>
          </LinkElement>
          <div class="flex items-end justify-center tracking-wider">
            <TextElement
              class="mr-[0.4em]"
              component="span"
              kind="article-author"
              fontFamily="Jost"
              :fontSize="{ xs: 10 }"
              >By
            </TextElement>
            <Authors
              :authors="article.authors"
              kind="article-author"
              fontFamily="Jost"
              :fontSize="{ xs: 10 }"
              separator=", "
            />
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
  DeskSection,
  LinkElement,
  ResponsiveImage,
  TextElement,
  TextInput,
} from '@storipress/block'

export default {
  components: {
    ArticleBlock,
    Authors,
    Block,
    DeskSection,
    LinkElement,
    TextElement,
    TextInput,
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
.my-desk {
  @apply relative mx-auto md:mt-8;
}

.desk-title {
  @apply py-1;
}

// .desk-title::before,
// .desk-title::after {
//   @apply bg-contain bg-no-repeat h-3 inline-block my-auto mx-1 -top-1 w-4 relative;

//   background-position: 50%;
//   content: '';
// }

.article {
  @apply py-8 md:w-6/12 lg:w-3/12;
}

.article-headline {
  @apply object-cover;
}

.article-desk {
  @apply my-5;
}

.article-title {
  @apply mb-2 px-8 md:line-clamp-2;
}

.by {
  @apply mr-1;

  font-family: Tuffy, sans-serif;
  font-size: 12px;
}

@screen md {
  .desk-title {
    @apply absolute left-1/2 -top-6 -translate-x-2/4;
  }

  .by {
    @apply pb-0.5;

    font-size: 10px;
  }
}
</style>
