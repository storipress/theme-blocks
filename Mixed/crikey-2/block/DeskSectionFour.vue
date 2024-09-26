<template>
  <DeskSection v-slot="{ desk }" :order="3" class="mt-12 md:mb-4 md:mt-0">
    <ColorArea kind="deskSection-four" backgroundColor="eef0f2">
      <ArticleBlock v-slot="{ article }" class="px-5 py-4">
        <div class="mb-4">
          <div class="flex gap-x-2">
            <Logo class="mr-2 max-w-[30%]" />
            <TextInput
              component="h1"
              kind="deskSection-four__desk-title"
              :lineHeight="1.5"
              :fontSize="{ xs: 24 }"
              color="000"
              bold
              :defaultValue="desk"
            />
          </div>
          <ColorArea kind="deskSection-four__desk-divider" class="h-px w-full" backgroundColor="000" />
        </div>
        <div class="aspect-w-11 aspect-h-6 mb-2">
          <LinkElement :href="article.url">
            <ResponsiveImage
              class="h-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1060px) 40vw, 30vw"
              :src="article.headline"
            />
          </LinkElement>
        </div>
        <BackgroundContent deskSection="four" :article="article" />
        <ColorArea kind="deskSection-four__desk-button" class="inline-block rounded-md" backgroundColor="ff2828">
          <LinkElement :href="article.deskUrl" class="block rounded-md px-6 py-2">
            <TextInput
              component="span"
              kind="deskSection-three__desk-button-text"
              :fontSize="{ xs: 17 }"
              :lineHeight="1.2"
              color="fff"
              :defaultValue="`Watch ${article.desk}`"
            />
          </LinkElement>
        </ColorArea>
      </ArticleBlock>
    </ColorArea>
  </DeskSection>
</template>

<script>
import { ArticleBlock, ColorArea, DeskSection, LinkElement, Logo, ResponsiveImage, TextInput } from '@storipress/block'

import BackgroundContent from './BackgroundContent.vue'

export default {
  components: {
    ArticleBlock,
    ColorArea,
    DeskSection,
    LinkElement,
    Logo,
    ResponsiveImage,
    TextInput,
    BackgroundContent,
  },
}
</script>
