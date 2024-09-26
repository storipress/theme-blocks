<template>
  <ArticleBlock v-slot="{ article }" class="px-5 py-4">
    <div class="mb-4 flex gap-x-4">
      <Logo class="mr-2 max-w-[30%]" />
      <div class="self-end">
        <div class="mt-8 flex">
          <TextInput
            component="h1"
            :kind="`deskSection-${deskSection}__desk-title`"
            :lineHeight="1.5"
            :fontSize="{ xs: 24 }"
            color="000"
            bold
            :defaultValue="desk"
          />
        </div>
        <Authors
          :authors="article.authors"
          authorComponent="div"
          color="000"
          class="mb-[0.2rem]"
          :fontSize="24"
          :lineHeight="1"
          :kind="`deskSection-${deskSection}__article-author`"
          separator=", "
        />
      </div>
    </div>
    <BackgroundContent :deskSection="deskSection" :article="article" />
  </ArticleBlock>
</template>

<script>
import { ArticleBlock, Authors, Logo, TextInput } from '@storipress/block'

import BackgroundContent from './BackgroundContent.vue'

export default {
  name: 'BackgroundItem',

  components: {
    ArticleBlock,
    Authors,
    Logo,
    BackgroundContent,
    TextInput,
  },

  props: {
    desk: {
      type: String,
    },
    kind: {
      type: String,
      default: 'logo',
    },
    deskSection: {
      type: String,
    },
  },

  data() {
    return {
      logo: 'https://assets.stori.press/storipress/sp-placeholder.svg',
    }
  },
}
</script>

<style></style>
