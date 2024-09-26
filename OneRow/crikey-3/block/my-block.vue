<template>
  <Block :block="block" backgroundColor="fff">
    <DeskSection v-slot="{ desk }" :order="0">
      <div class="relative mb-6 font-medium md:mb-10">
        <div class="flex pt-2 pb-6">
          <TextInput
            component="h1"
            kind="desk-title"
            :lineHeight="1.5"
            :fontSize="{ xs: 24 }"
            color="000"
            :defaultValue="desk"
          />
        </div>
        <ColorArea class="absolute h-px w-full" backgroundColor="000" kind="desk-title-divider" />
      </div>
      <div class="md:grid md:grid-cols-3 md:gap-x-7 lg:gap-x-9">
        <ArticleBlock v-for="i in 3" :key="i" v-slot="{ article }" class="mb-4 md:mb-8">
          <div class="image aspect-w-11 aspect-h-6 mb-2 hidden md:block">
            <LinkElement class="overflow-hidden" :href="article.url">
              <ResponsiveImage
                class="h-full object-cover transition duration-500 ease-in hover:scale-105 hover:transform"
                sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
                :src="article.headline"
              />
            </LinkElement>
          </div>
          <div class="details">
            <LinkElement :href="article.url" class="block">
              <TextElement
                component="h2"
                kind="article-title"
                :fontSize="{ xs: 20, md: 24 }"
                :lineHeight="1.2"
                class="font-medium"
              >
                {{ article.title }}
              </TextElement>
            </LinkElement>
            <div class="metadata flex items-center gap-x-2 pt-2 pb-1">
              <LinkElement :href="article.deskUrl">
                <TextElement component="h2" kind="article-desk" color="000" :fontSize="14" bold class="hover:underline">
                  {{ article.desk }}
                </TextElement>
              </LinkElement>
              <Authors
                :authors="article.authors"
                authorComponent="span"
                color="000"
                class="hover:underline"
                :fontSize="14"
                kind="article-author"
                separator=", "
              />
            </div>
            <div class="pt-4 md:pt-0">
              <TextElement component="h4" kind="article-blurb" :fontSize="{ xs: 16 }" class="hidden pb-4 md:block">
                {{ article.blurb }}
              </TextElement>
              <ColorArea kind="article-divider" class="absolute h-px w-full md:hidden" backgroundColor="d4d8da" />
            </div>
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
}
</script>

<style lang="scss" scoped>
.image:hover + .details * {
  @apply opacity-80 transition-all duration-300 ease-in-out;
}
.details a:hover {
  @apply opacity-70 transition-all duration-300  ease-in-out;
}
.details a:hover + .metadata * {
  @apply opacity-70 transition-all duration-300 ease-in-out;
}
</style>
