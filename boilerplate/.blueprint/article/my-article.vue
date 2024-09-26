<template>
  <ArticleBlock>
    <HeaderBlock class="mb-8">
      <HeadlineImage class="h-96 w-full" />
      <div class="mx-auto w-96">
        <TitleElement :fontSize="32" />
        <Description />
      </div>
    </HeaderBlock>
    <Content class="mx-auto w-96">
      <!-- Below is the content of demo article, you should not add or remove any element below -->
      <Paragraph :order="0" />
      <Header1 :fontSize="28" underline />
      <Paragraph :order="1" />
      <Blockquote />
      <Paragraph :order="2" />
      <Header2 :fontSize="24" />
      <Paragraph :order="3" />
    </Content>
  </ArticleBlock>
</template>

<script>
import { Template } from '@storipress/article'

export default Template.extend({})
</script>
