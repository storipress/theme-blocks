<template>
  <Block :block="block" class="py-6 md:py-12" backgroundColor="f6f6f6">
    <DeskSection class="mb-4 md:mb-8" :order="0" v-slot="{ desk }">
      <div class="desk-title-container mt-1 pt-1">
        <div class="flex justify-center">
          <TextInput
            class="tracking-widest"
            component="h4"
            kind="desk-title"
            :fontSize="45"
            :lineHeight="1"
            fontFamily="Jost"
            align="center"
            :defaultValue="desk"
          />
        </div>
      </div>
      <div class="article-items">
        <div class="article-group grid grid-cols-1 gap-x-10 lg:grid-cols-2" v-for="i in 2" :key="`container_${i}`">
          <template v-for="j in 2">
            <ArticleBlock class="article-grid py-5 lg:py-0" v-slot="{ article }" :key="`article_${j}`">
              <div class="flex items-start pb-2 lg:flex-col">
                <div class="article-content lg:order-last">
                  <LinkElement :href="article.deskUrl">
                    <TextElement
                      class="pb-1"
                      component="h4"
                      kind="article-desk"
                      :fontSize="13"
                      :lineHeight="1"
                      fontFamily="Jost"
                      :bold="true"
                      color="6b7280"
                    >
                      {{ article.desk }}
                    </TextElement>
                  </LinkElement>
                  <div class="article-title-item">
                    <LinkElement :href="article.url">
                      <TextElement
                        class="pb-1"
                        component="h3"
                        kind="article-title"
                        :fontSize="{ xs: 16, md: 28, lg: 26 }"
                        :lineHeight="1"
                        fontFamily="Jost"
                      >
                        {{ article.title }}
                      </TextElement>
                    </LinkElement>
                  </div>
                </div>
                <div class="image-container w-full">
                  <LinkElement :href="article.url">
                    <div class="article-image aspect-w-16 aspect-h-9 w-full">
                      <ResponsiveImage
                        class="object-cover"
                        sizes="50vw"
                        :src="article.headline"
                        :alt="article.headlineAlt"
                      />
                    </div>
                  </LinkElement>
                </div>
              </div>
            </ArticleBlock>
          </template>
        </div>
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
  TextInput,
} from '@storipress/block'

export default {
  components: {
    ArticleBlock,
    Block,
    DeskSection,
    TextElement,
    LinkElement,
    TextInput,
    ColorArea,
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
.article-title {
  letter-spacing: 0.03rem;

  @apply overflow-visible lg:line-clamp-2;
}

.article-desk {
  margin-bottom: 5px;
}

.article-grid {
  border-top: 0.0625rem solid #ccc;
}

.article-content {
  flex: 1 1 100%;
}

.desk-title {
  padding-bottom: 10px;
}

@screen md {
  .article-title-item {
    margin-bottom: 1.7rem;
  }
}

@screen lg {
  .article-grid {
    border-top: none;
  }

  .article-image {
    @apply ml-0 mb-5;
  }

  .article-items {
    margin: 1.375rem auto 0;
  }

  .article-group {
    @apply pt-6;
  }

  .desk-title {
    @apply pb-0;
  }

  .article-title {
    @apply mb-7;
  }
}
</style>
