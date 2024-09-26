<template>
  <Block :block="block" class="pt-8 md:pt-12" backgroundColor="f6f6f6">
    <DeskSection class="my-desk" :order="0" v-slot="{ desk }">
      <div class="desk-title-container px-2.5 md:px-5 lg:px-5">
        <TextInput
          class="w-full"
          component="h4"
          kind="desk-title"
          fontFamily="Jost"
          :fontSize="20"
          :defaultValue="desk"
          align="center"
        >
          {{ desk }}
        </TextInput>
      </div>
      <div class="article-container">
        <template v-for="i in 3">
          <ArticleBlock :key="`left-${i}`" class="article-section-1-col" v-slot="{ article }">
            <div class="article-image fade-in-image flex-none">
              <LinkElement :href="article.url">
                <figure>
                  <div class="aspect-w-16 aspect-h-10">
                    <ResponsiveImage
                      class="object-cover"
                      :src="article.headline"
                      :alt="article.headlineAlt"
                      sizes="(max-width: 768px) 100vw, (max-width: 1060px) 220px, 15vw"
                    />
                  </div>
                </figure>
              </LinkElement>
            </div>
            <div class="article-content">
              <!---article desk--->
              <LinkElement :href="article.deskUrl">
                <TextElement
                  component="h4"
                  kind="article-desk"
                  fontFamily="Jost"
                  :fontSize="{ xs: 10, md: 10, lg: 12 }"
                  :lineHeight="1.4"
                >
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
              <!---article title--->
              <LinkElement :href="article.url">
                <TextElement component="h3" kind="article-title" fontFamily="Jost" :fontSize="18" :lineHeight="1.1">
                  {{ article.title }}
                </TextElement>
              </LinkElement>
              <!---article description--->
              <TextElement
                class="hidden lg:block"
                component="p"
                kind="article-blurb"
                display="Article Blurb"
                :fontSize="15"
                fontFamily="Jost"
                :lineHeight="1.7"
                color="4D4D4D"
              >
                {{ article.blurb }}
              </TextElement>
            </div>
          </ArticleBlock>
          <ArticleBlock :key="`right-${i}`" class="article-section-2-col" v-slot="{ article }">
            <div class="article-image fade-in-image flex-none">
              <LinkElement :href="article.url">
                <figure>
                  <div class="aspect-w-16 aspect-h-10">
                    <ResponsiveImage
                      class="object-cover"
                      :src="article.headline"
                      :alt="article.headlineAlt"
                      sizes="(max-width: 768px) 70vw, (max-width: 1060px) 220px, 15vw"
                    />
                  </div>
                </figure>
              </LinkElement>
            </div>
            <div class="article-content">
              <LinkElement :href="article.deskUrl">
                <TextElement component="h4" kind="article-desk">
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
              <LinkElement :href="article.url">
                <TextElement component="h3" kind="article-title">
                  {{ article.title }}
                </TextElement>
              </LinkElement>
              <TextElement class="hidde md:block" component="p" kind="article-blurb" display="Article Blurb">
                {{ article.blurb }}
              </TextElement>
            </div>
          </ArticleBlock>
        </template>
      </div>
    </DeskSection>
  </Block>
</template>

<script>
import {
  ArticleBlock,
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
    Block,
    DeskSection,
    TextElement,
    LinkElement,
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
.article-desk {
  letter-spacing: 1.4px;
}

.article-blurb {
  @apply hidden line-clamp-3 md:block;
}

.desk-title-container {
  @apply flex justify-center;

  padding-bottom: 35px;
}

.article-container {
  @apply grid grid-cols-1 lg:grid-cols-2;
}

%article-section {
  @apply flex flex-col md:flex-row lg:flex-row;

  margin-bottom: 40px;
}

.article-section-1-col {
  @extend %article-section;

  @apply lg:pr-5;
}

.article-section-2-col {
  @extend %article-section;

  @apply lg:pl-5;
}

.article-content {
  @apply grow md:pl-9 lg:pl-9;
}

.article-title {
  @apply mt-4 pb-3 pr-6 line-clamp-2;
}

.article-image {
  margin-bottom: 7px;
  width: 100%;
}

@media (min-width: 768px) {
  .article-image {
    max-width: 220px;
  }

  .article-section {
    margin-bottom: 80px;
  }

  .desk-title-container {
    padding-bottom: calc(0.00937 * 100vw + 35px);
  }
}

@media (min-width: 1070px) {
  .article-section {
    margin-bottom: 95px;
  }
}
</style>
