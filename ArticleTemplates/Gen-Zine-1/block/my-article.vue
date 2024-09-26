<template>
  <ArticleBlock>
    <HeaderBlock background-color="edebeb" class="h-fit w-full overflow-hidden lg:px-16">
      <ArticleInfo
        class="relative mx-auto grid h-full min-h-screen w-full grid-cols-[1fr] grid-rows-[1fr_5.5rem_repeat(3,_auto)] px-4 pt-20 pb-2 md:grid-rows-[1fr_9.5rem_repeat(2,_auto)_1.75rem_auto] md:px-5 md:pb-4 lg:max-w-[1600px] lg:grid-cols-[3fr_2fr] lg:grid-rows-[0fr_1fr_6rem_auto] lg:gap-x-8 lg:pt-[100px]"
      >
        <div
          class="static col-[1] row-[2] mt-[-2rem] ml-6 h-[6rem] md:mt-[-3.75rem] md:ml-[3.75rem] md:h-[11rem] lg:absolute lg:-right-[200px] lg:bottom-[22px] lg:row-[unset] lg:m-0 lg:h-[17rem] lg:max-w-[78rem]"
        >
          <Logo class="h-full object-cover object-left" />
        </div>
        <div class="z-[1] col-[1] row-[3] lg:col-[2] lg:row-[2]">
          <TitleElement
            class="mb-4 lg:my-6"
            :font-size="{ xs: 36, md: 44, lg: 50 }"
            :color="{ xs: '54457a' }"
            :line-height="{ xs: 1 }"
            font-family="Sinkin Sans"
            bold
            uppercase
          />
          <Description :font-size="{ xs: 14, lg: 18 }" color="54457a" font-family="Sinkin Sans" />
        </div>

        <HeadlineImage class="col-[1] row-[1] h-full lg:row-[1/3] lg:mx-auto lg:aspect-[3/4]" sizes="100vw" />
        <HeadlineCaption
          :font-size="{ xs: 12 }"
          :line-height="{ xs: 1.5 }"
          font-family="system-ui"
          color="54457a"
          class="headline-caption col-[1] row-[1] ml-[calc(-1rem_*_0.7)] mb-1 min-h-[14rem] rotate-180 md:ml-[calc(-1.25rem_*_0.7)] lg:row-[1/3] lg:ml-[calc(-1.5rem_*_1)]"
        />

        <div class="relative col-[1] row-[5] mt-4 grid grid-cols-3 pt-6 md:row-[6] lg:col-[1/-1] lg:row-[4]">
          <AuthorList
            :font-size="{ xs: 20, md: 32, lg: 36 }"
            :color="{ xs: '54457a' }"
            :line-height="{ xs: 1.0, md: 1.1 }"
            font-family="Junicode Condensed"
            :align="{ xs: 'left' }"
            class="self-end"
            uppercase
          >
            <Authors />
          </AuthorList>

          <Desk
            :font-size="{ xs: 20, md: 32, lg: 36 }"
            :color="{ xs: '54457a' }"
            :line-height="{ xs: 1.0, md: 1.1 }"
            font-family="Junicode Condensed"
            :align="{ xs: 'center' }"
            class="self-end"
            uppercase
          />

          <Date
            :font-size="{ xs: 20, md: 32, lg: 36 }"
            :color="{ xs: '54457a' }"
            :line-height="{ xs: 1.0, md: 1.1 }"
            font-family="Junicode Condensed"
            :align="{ xs: 'right' }"
            format="M.d.yyyy"
            class="self-end"
          />
        </div>
      </ArticleInfo>
    </HeaderBlock>

    <Content class="mx-5 max-w-[45rem] pt-12 md:mx-auto lg:ml-[8%]">
      <!-- Below is the content of demo article, you should not add or remove any element below -->
      <Paragraph :order="0" font-family="Jost" :font-size="20" :line-height="1.6" color="333" />
      <Header1 font-family="Jost" :font-size="28" :line-height="2" />
      <Paragraph :order="1" font-family="Jost" :font-size="20" :line-height="1.6" color="333" />
      <Blockquote
        font-family="Jost"
        :font-size="{ xs: 35, md: 35 }"
        :line-height="1.4"
        :align="{ xs: 'center', lg: 'center' }"
        color="121212"
        bold
      />
      <Paragraph :order="2" font-family="Jost" :font-size="20" :line-height="1.6" color="333" />
      <Header2 font-family="Jost" :font-size="24" :line-height="2" />
      <Paragraph :order="3" font-family="Jost" :font-size="20" :line-height="1.6" color="333" />
    </Content>
  </ArticleBlock>
</template>

<script>
import { ColorArea, Logo, Template } from '@storipress/article'

export default Template.extend({
  components: { ColorArea, Logo },
})
</script>

<style lang="scss" scoped>
.headline-caption {
  writing-mode: vertical-rl;
}
</style>
