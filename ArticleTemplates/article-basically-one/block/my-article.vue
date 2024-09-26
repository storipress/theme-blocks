<template>
  <ArticleBlock class="lg:mx-auto lg:max-w-[1600px]" :backgroundColor="{ xs: 'fff' }">
    <HeaderBlock>
      <div class="mx-6 pt-12 pb-4 md:mx-12 md:mb-8 lg:mx-auto lg:w-1/2">
        <!---desk indicator--->
        <ArticleInfo class="flex justify-center" v-slot="{ article }">
          <LinkElement :href="article.deskUrl">
            <ColorArea kind="desk-background" backgroundColor="000000">
              <Desk
                class="px-2.5 pt-2.5 pb-2 tracking-[0.15em]"
                fontFamily="Jost"
                :fontSize="{ xs: 12 }"
                :lineHeight="1"
                align="center"
                color="ffffff"
              />
            </ColorArea>
          </LinkElement>
        </ArticleInfo>

        <TitleElement
          fontFamily="Jost"
          :fontSize="{ xs: 40, lg: 50 }"
          align="center"
          color="000000"
          :lineHeight="1.2"
          class="mt-4"
        />
        <Description fontFamily="Jost" :fontSize="{ xs: 16 }" align="center" color="000000" class="mt-4 md:mt-8" />
        <AuthorList class="author-list hover:opacity-75" :fontSize="12" fontFamily="Jost" align="center" color="000000">
          By
          <Authors authorClass="focus:underline hover:underline" />
        </AuthorList>
        <Date
          format="MMMM d, yyyy"
          fontFamily="Jost"
          :fontSize="{ xs: 12 }"
          align="center"
          color="000000"
          class="pt-2"
        />
      </div>

      <!---headline image--->
      <HeadlineImage
        class="h-[100vw] max-h-[57rem] min-h-[15rem] md:h-[45vw] md:min-h-[30rem] md:w-full"
        :sizes="'100vw'"
      />
      <HeadlineCaption fontFamily="Jost" :fontSize="12" :lineHeight="1.25" class="mx-6 mt-2 md:ml-16" />
    </HeaderBlock>

    <!---content--->
    <Content class="mx-6 mt-12 md:mx-auto md:mt-16 md:w-3/5 lg:ml-48 lg:w-[45%]">
      <!-- Below is the content of demo article, you should not add or remove any element below -->
      <Paragraph :order="0" fontFamily="Jost" :fontSize="17" :lineHeight="1.6" />
      <Header1 fontFamily="Jost" :fontSize="28" :lineHeight="2" />
      <Paragraph :order="1" />
      <Blockquote fontFamily="Jost" :lineHeight="1.7" />
      <Paragraph :order="2" />
      <Header2 fontFamily="Jost" :fontSize="24" :lineHeight="2" />
      <Paragraph :order="3" />
    </Content>
  </ArticleBlock>
</template>

<script>
import { Template } from '@storipress/article'

export default Template.extend({})
</script>

<style lang="scss" scoped>
.author-list {
  @apply mt-8 flex justify-center gap-1 tracking-widest;

  font-family: Jost, helvetica, sans-serif;
  font-size: 12px;
}
</style>
