<template>
  <ArticleBlock>
    <HeaderBlock
      class="grid h-screen grid-cols-[1fr] grid-rows-[minmax(20vh,30vh)_auto_1fr] px-3 pt-[108px] pb-8 md:grid-cols-[1fr] md:grid-rows-[minmax(30vh,44vh)_auto_1fr] md:px-3 md:pt-[160px] md:pb-8 lg:grid-cols-[345px_1fr] lg:grid-rows-[150px_1fr_repeat(2,auto)_2fr] lg:gap-3 lg:p-3"
      backgroundColor="edebeb"
    >
      <TitleElement
        :fontSize="{ lg: 40, md: 36, xs: 36 }"
        fontFamily="Sinkin Sans"
        color="54457a"
        class="col-start-1 row-start-2 mt-6 pb-4 font-normal uppercase leading-none md:col-start-1 md:row-start-2 lg:col-start-1 lg:row-start-3 lg:mr-2 lg:pb-0"
      />
      <Description
        :fontSize="{ lg: 20, md: 20, xs: 18 }"
        fontFamily="Sinkin Sans"
        color="54457a"
        class="leading-tight' col-start-1 row-start-3 mt-0 max-w-[80%] md:col-start-1 md:row-start-3 lg:col-start-1 lg:row-start-4 lg:mr-2 lg:max-w-none"
      />
      <HeadlineImage class="col-start-1 row-start-1 md:col-start-1 md:row-start-1 lg:col-start-2 lg:row-span-full" />
    </HeaderBlock>
    <div
      class="m-[0_0.75rem] flex justify-between pt-8 pb-6 uppercase md:m-[0_0.75rem_0_5rem] md:pt-8 md:pb-10 lg:m-[0_0.75rem_0_37%] lg:pt-10 lg:pb-10"
      fontFamily="system-ui"
    >
      <div class="w-1/3 text-left">
        <AuthorList>By <Authors fontSize="16" lineHeight="1.3" /> </AuthorList>
      </div>
      <div class="w-1/3 text-center">
        <Desk fontSize="16" lineHeight="1.3" />
      </div>
      <div class="flex w-1/3 items-start justify-end text-right">
        <Date format="d.M.yyyy" fontSize="16" lineHeight="0.9" />
      </div>
    </div>
    <Content class="m-[0_0.75rem] md:m-[0_0.75rem_0_5rem] lg:m-[0_0.75rem_0_37%]">
      <Paragraph :order="0" class="my-8 first:mt-0" />
      <Header1 :fontSize="28" underline />
      <Paragraph :order="1" class="my-8 first:mt-0" />
      <Blockquote />
      <Paragraph :order="2" class="my-8 first:mt-0" />
      <Header2 :fontSize="24" class="m-[2.25rem_0_calc(1.5rem*.75)]" />
      <Paragraph :order="3" class="my-8 first:mt-0" />
    </Content>
  </ArticleBlock>
</template>

<script>
import { Template } from '@storipress/article'

export default Template.extend({})
</script>

<style scoped></style>
