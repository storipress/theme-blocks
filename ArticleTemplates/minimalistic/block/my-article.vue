<template>
  <ArticleBlock>
    <div class="mx-5 max-w-screen-sm pt-16 md:mx-auto md:pt-28">
      <div class="relative flex flex-col content-center">
        <div class="post-head flex flex-col justify-center">
          <ArticleInfo v-slot="{ article }">
            <LinkElement :href="article.deskUrl">
              <Desk component="div" class="inline-block" />
            </LinkElement>
          </ArticleInfo>
          <TitleElement
            kind="content-title"
            class="mb-2.5"
            fontFamily="Jost"
            bold
            color="000"
            :fontSize="{ xs: 40, md: 48 }"
            :lineHeight="1.2"
          />
          <Description
            kind="content-description"
            class="mb-5"
            fontFamily="Jost"
            :fontSize="{ xs: 17, md: 21 }"
            color="000"
          />
          <HeaderBlock>
            <HeadlineWrapper class="hero-wrapper flex h-screen max-h-[20rem] md:max-h-[30rem]">
              <HeadlineImage
                class="absolute inset-0 w-full"
                :sizes="'(max-width: 768px) 95vw, (max-width: 1060px) 80vw, 60vw'"
              />
            </HeadlineWrapper>
          </HeaderBlock>
          <AuthorList
            class="mt-16"
            font-family="Jost"
            :fontSize="{ xs: 14, md: 15 }"
            :lineHeight="1.1"
            bold
            color="000"
          >
            By&nbsp;
            <Authors />
          </AuthorList>
          <div class="flex flex-row pb-8 font-medium md:mb-8">
            <!-- <div class="label-published-article">Published&nbsp;</div> -->
            <Date font-family="Jost" :fontSize="13" :lineHeight="1.0" color="444" format="MMMM d, yyyy" />
          </div>
        </div>
      </div>
    </div>
    <Content class="mx-5 max-w-screen-sm md:mx-auto">
      <!-- Below is the content of demo article, you should not add or remove any element below -->
      <Paragraph :order="0" font-family="Jost" :fontSize="20" :lineHeight="1.6" color="333" />
      <Header1 font-family="Jost" :fontSize="28" :lineHeight="2" />
      <Paragraph :order="1" font-family="Jost" :fontSize="20" :lineHeight="1.6" color="333" />
      <Blockquote
        font-family="Jost"
        :fontSize="{ xs: 35, md: 35 }"
        :lineHeight="1.6"
        :align="{ xs: 'center', lg: 'center' }"
        color="121212"
        bold
      />
      <Paragraph :order="2" font-family="Jost" :fontSize="20" :lineHeight="1.6" color="333" />
      <Header2 font-family="Jost" :fontSize="24" :lineHeight="2" />
      <Paragraph :order="3" font-family="Jost" :fontSize="20" :lineHeight="1.6" color="333" />
    </Content>
  </ArticleBlock>
</template>

<script>
import { Template } from '@storipress/article'

export default Template.extend({
  data() {
    return {
      isSocialShareOpen: false,
    }
  },
  methods: {
    toggleSocialShare() {
      this.isSocialShareOpen = !this.isSocialShareOpen
    },
  },
})
</script>

<style lang="scss" scoped>
.hero-wrapper {
  @apply relative;
}

.show .social-items {
  display: block;
}

.social-items {
  display: none;
}

.social-share {
  transition:
    transform 0.1s 0.7s,
    -webkit-transform 0.1s 0.7s;
  transition-delay: 400ms;

  .social-items {
    color: #fff;
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 100%;
    pointer-events: none;

    li {
      @apply opacity-80 transition-opacity hover:opacity-100;

      margin-top: 30px;
      transition: all 0.1s cubic-bezier(1, -0.13, 0, 0.82) 0s;

      svg {
        // stylelint-disable-next-line declaration-no-important
        width: 20px !important;
        // stylelint-disable-next-line declaration-no-important
        height: 20px !important;
      }
    }
  }

  &.show {
    transform: translateY(-100px);
    transition-delay: 0s;

    .social-items {
      pointer-events: auto;

      li {
        transform: translateY(0);
      }
    }
  }
}
</style>
