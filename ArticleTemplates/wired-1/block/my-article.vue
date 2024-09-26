<template>
  <ArticleBlock :backgroundColor="{ xs: '1A1A1A' }">
    <HeaderBlock class="flex flex-col items-center justify-center md:pb-8">
      <!---article title + meta parent--->
      <div class="w-full max-w-[92rem] px-6 py-8 pb-10 md:px-12 md:pb-16 md:pt-10 lg:px-16">
        <AuthorList class="inline-flex">
          <ColorArea
            class="mb-1 mr-4 flex flex-row flex-wrap px-2 pb-1.5 pt-2 md:mb-4 md:inline-flex"
            backgroundColor="fff"
            kind="authors-wrapper"
          >
            <Authors
              :fontSize="{ xs: 11 }"
              fontFamily="AnkaCoder"
              :color="{ xs: '000' }"
              separatorClass="flex flex-col justify-center mx-[0.5em]"
              authorClass="flex flex-col justify-center mx-0.5"
              :lineHeight="{ xs: 1.0 }"
            />
          </ColorArea>
        </AuthorList>
        <!-- added tracking-widest no corresponding TextElement props -->
        <ArticleInfo class="inline-flex" v-slot="{ article }">
          <LinkElement :href="article.deskUrl">
            <Desk
              class="mr-4 mt-2 inline-block tracking-widest"
              :fontSize="{ xs: 11 }"
              fontFamily="AnkaCoder"
              :color="{ xs: 'fff' }"
              :lineHeight="{ xs: 1.0 }"
            />
          </LinkElement>
        </ArticleInfo>
        <!-- added tracking-widest no corresponding TextElement props -->
        <Date
          format="MM.dd.yyyy hh:mm aaa"
          class="mr-4 mt-2 inline-block tracking-wider"
          :fontSize="{ xs: 11 }"
          :color="{ xs: 'fff' }"
          :lineHeight="{ xs: 1.0 }"
          font-family="AnkaCoder"
        />

        <TitleElement
          font-family="Jost"
          :lineHeight="1.1"
          class="mt-4 pb-4 md:mt-6"
          :fontSize="{ xs: 36, md: 43, lg: 47 }"
          bold
          :color="{ xs: 'fff' }"
        />

        <Description font-family="Jost" :lineHeight="{ xs: 1.2 }" :fontSize="{ xs: 20 }" bold :color="{ xs: 'fff' }" />

        <!---social share icons--->
        <div class="mt-6">
          <ArticleInfo v-slot="{ socials }">
            <ul class="flex list-none flex-row justify-start">
              <LiShareSocialIcon
                v-if="socials.facebook"
                :url="socials.facebook"
                svgPath="M14.25 4.5h3.75v-4.5h-3.75c-2.895 0-5.25 2.355-5.25 5.25v2.25h-3v4.5h3v12h4.5v-12h3.75l0.75-4.5h-4.5v-2.25c0-0.407 0.343-0.75 0.75-0.75z"
              />
              <LiShareSocialIcon
                v-if="socials.twitter"
                :url="socials.twitter"
                svgPath="M24 5.306c-0.881 0.394-1.833 0.656-2.827 0.773 1.017-0.609 1.795-1.575 2.166-2.723-0.952 0.563-2.006 0.975-3.127 1.195-0.9-0.956-2.18-1.552-3.595-1.552-2.719 0-4.922 2.203-4.922 4.922 0 0.384 0.042 0.759 0.127 1.12-4.092-0.206-7.72-2.166-10.148-5.147-0.422 0.727-0.666 1.575-0.666 2.475 0 1.706 0.867 3.216 2.189 4.097-0.806-0.023-1.566-0.248-2.231-0.614 0 0.019 0 0.042 0 0.061 0 2.386 1.697 4.378 3.952 4.828-0.412 0.112-0.848 0.173-1.298 0.173-0.319 0-0.623-0.033-0.928-0.089 0.628 1.955 2.447 3.38 4.598 3.422-1.688 1.322-3.806 2.109-6.117 2.109-0.398 0-0.788-0.023-1.177-0.070 2.184 1.402 4.772 2.212 7.552 2.212 9.056 0 14.011-7.505 14.011-14.011 0-0.216-0.005-0.427-0.014-0.637 0.961-0.689 1.795-1.556 2.456-2.545z"
              />
              <LiShareSocialIcon
                v-if="socials.instagram"
                :url="socials.instagram"
                svgPath=" M 6.96 0 L 17.04 0 C 20.88 0 24 3.12 24 6.96 L 24 17.04 C 24 18.886 23.267 20.656 21.961 21.961 C 20.656 23.267 18.886 24 17.04 24 L 6.96 24 C 3.12 24 0 20.88 0 17.04 L 0 6.96 C 0 3.116 3.116 0 6.96 0 Z  M 6.72 2.4 C 4.334 2.4 2.4 4.334 2.4 6.72 L 2.4 17.28 C 2.4 19.668 4.332 21.6 6.72 21.6 L 17.28 21.6 C 18.426 21.6 19.525 21.145 20.335 20.335 C 21.145 19.525 21.6 18.426 21.6 17.28 L 21.6 6.72 C 21.6 4.332 19.668 2.4 17.28 2.4 L 6.72 2.4 Z  M 18.3 4.2 C 19.128 4.2 19.8 4.872 19.8 5.7 C 19.8 6.528 19.128 7.2 18.3 7.2 C 17.472 7.2 16.8 6.528 16.8 5.7 C 16.8 4.872 17.472 4.2 18.3 4.2 Z  M 12 6 C 15.314 6 18 8.686 18 12 C 18 15.314 15.314 18 12 18 C 8.686 18 6 15.314 6 12 C 6 8.686 8.686 6 12 6 Z  M 12 8.4 C 10.012 8.4 8.4 10.012 8.4 12 C 8.4 13.988 10.012 15.6 12 15.6 C 13.988 15.6 15.6 13.988 15.6 12 C 15.6 10.012 13.988 8.4 12 8.4 Z "
              />
            </ul>
          </ArticleInfo>
        </div>
      </div>
      <!---hero photo--->
      <figure class="mt-1 w-full max-w-[92rem] md:px-12 lg:px-16">
        <HeadlineImage
          class="md:max-[h-85rem] headline-image-wrapper h-screen max-h-[36rem] lg:max-h-[120rem]"
          sizes="(max-width: 768px) 100vw, 90vw"
        />
        <HeadlineCaption
          class="break-words px-6 pt-2 md:px-0"
          :align="{ xs: 'left' }"
          font-family="AnkaCoder"
          :fontSize="{ xs: 11 }"
          :color="{ xs: 'fff' }"
        />
      </figure>
    </HeaderBlock>

    <!---content wrappers--->
    <div class="flex flex-col items-center justify-center">
      <div class="flex w-full max-w-[92rem] flex-col items-center justify-center lg:items-start lg:justify-start">
        <!---content--->
        <Content class="mx-6 mt-12 max-w-screen-sm md:mx-[35vw] md:w-full lg:mx-[calc(4rem+8vw)] lg:w-6/12">
          <!-- Below is the content of demo article, you should not add or remove any element below -->
          <Paragraph :order="0" font-family="Jost" :fontSize="{ xs: 20 }" :lineHeight="{ xs: 1.6 }" color="fff" />
          <Header1 font-family="Jost" :fontSize="28" color="fff" :lineHeight="2" />
          <Paragraph :order="1" />
          <Blockquote
            font-family="Jost"
            :fontSize="{ xs: 20, md: 24 }"
            :lineHeight="{ xs: 1.4, md: 1.3 }"
            color="fff"
            bold
          />
          <Paragraph :order="2" />
          <Header2 font-family="Jost" color="fff" :fontSize="24" :lineHeight="2" />
          <Paragraph :order="3" />
        </Content>
      </div>
    </div>
  </ArticleBlock>
</template>

<script>
import { ColorArea, Template } from '@storipress/article'

import LiShareSocialIcon from './li-share-social-icon.vue'

export default Template.extend({
  components: { LiShareSocialIcon, ColorArea },
})
</script>

<style lang="scss" scoped>
.headline-image-wrapper > div {
  padding-top: 56.25%;
}

.article-content {
  h1 {
    // for Header1
    margin-bottom: 18px;
  }

  h2 {
    // for Header2
    margin-bottom: 18px;
  }

  p {
    // for Paragraph
    margin-bottom: 18px;
  }
}
</style>
