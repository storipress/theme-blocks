<template>
  <ArticleBlock class="flex justify-center pt-8 pb-16 md:pt-16 md:pb-52">
    <div class="main-content">
      <HeaderBlock class="mb-12">
        <TitleElement
          class="mb-12"
          fontFamily="Jost"
          :fontSize="{ xs: 48 }"
          :fontWeight="{ xs: 600 }"
          :lineHeight="1.2"
        />
      </HeaderBlock>

      <Content>
        <Paragraph :order="0" fontFamily="Jost" :fontSize="{ xs: 18 }" :lineHeight="1.5" />
        <Header1 fontFamily="Jost" :fontSize="30" :lineHeight="1.5" underline />
        <Paragraph :order="1" />
        <Blockquote fontFamily="Jost" :fontSize="{ xs: 18 }" :lineHeight="1.5" />
        <Paragraph :order="2" />
        <Header2 fontFamily="Jost" :fontSize="26" :lineHeight="1.5" />
        <Paragraph :order="3" />
      </Content>
    </div>
  </ArticleBlock>
</template>

<script>
import { Template } from '@storipress/article'

export default Template.extend({
  name: 'spare-page-3',
})
</script>

<style lang="scss" scoped>
.main-content {
  @apply w-full;

  margin-inline: 5%;
  max-width: 45rem;
}

.headline-image {
  height: 60vw;
  max-height: 40rem;
}
</style>
