<template>
  <ArticleBlock>
    <HeaderBlock>
      <div class="lg:mb-11 lg:flex lg:flex-row lg:flex-wrap lg:justify-end">
        <figure class="w-full lg:order-2 lg:w-1/2">
          <HeadlineImage class="headline-image-box" sizes="100vw" />
        </figure>
        <HeadlineCaption
          class="mt-2.5 -mb-7 w-full px-5 lg:order-3 lg:mt-4 lg:ml-2 lg:mr-7 lg:mb-0 lg:px-0"
          :lineHeight="{ xs: 1.5 }"
          font-family="Jost"
          color="666"
          :fontSize="{ xs: 12 }"
          :align="{ xs: 'left', lg: 'right' }"
        />
        <ColorArea class="lg:w-1/2" :backgroundColor="{ xs: null, lg: '1D304E' }" kind="article-description-box-kind">
          <div class="content-wrapper">
            <ArticleInfo v-slot="{ article }">
              <LinkElement :href="article.deskUrl">
                <Desk
                  class="mt-4 mb-2.5 lg:block"
                  :fontSize="{ xs: 13, md: 15 }"
                  :color="{ xs: '121212', lg: 'fff' }"
                  :lineHeight="{ xs: 1.0, md: 1.1 }"
                  bold
                  fontFamily="Jost"
                  :align="{ xs: 'left', lg: 'center' }"
                />
              </LinkElement>
            </ArticleInfo>
            <TitleElement
              class="mb-2.5 md:mb-6 lg:mb-2.5 lg:w-11/12"
              :fontSize="{ xs: 54, md: 69 }"
              :color="{ xs: '121212', lg: 'fff' }"
              :lineHeight="{ xs: 1.0, md: 1.0 }"
              fontFamily="Jost"
              :align="{ xs: 'left', lg: 'center' }"
            />
            <Description
              class="mb-5 tracking-normal md:mb-6 lg:mb-8 lg:w-11/12"
              :fontSize="{ xs: 19, md: 21 }"
              fontFamily="Jost"
              :color="{ xs: '444', lg: 'fff' }"
              :lineHeight="1.4"
              :align="{ xs: 'left', lg: 'center' }"
            />
          </div>
        </ColorArea>
      </div>
      <div class="mx-5 md:mx-auto md:w-11/12 md:max-w-screen-sm">
        <!-- social icons here -->
        <div class="-mt-14 mb-6 border-gray-200 pb-6 lg:mt-0 lg:border-b">
          <ArticleInfo v-slot="{ socials }">
            <ul>
              <LiShareSocialIcon
                v-if="socials.facebook"
                :url="socials.facebook"
                svgPath=" M 12 0.048 C 5.4 0.048 0 5.436 0 12.072 C 0 18.072 4.392 23.052 10.128 23.952 L 10.128 15.552 L 7.08 15.552 L 7.08 12.072 L 10.128 12.072 L 10.128 9.42 C 10.128 6.408 11.916 4.752 14.664 4.752 C 15.972 4.752 17.34 4.98 17.34 4.98 L 17.34 7.944 L 15.828 7.944 C 14.34 7.944 13.872 8.868 13.872 9.816 L 13.872 12.072 L 17.208 12.072 L 16.668 15.552 L 13.872 15.552 L 13.872 23.952 C 19.714 23.029 24.013 17.987 24 12.072 C 24 5.436 18.6 0.048 12 0.048 Z "
              />
              <LiShareSocialIcon
                v-if="socials.twitter"
                :url="socials.twitter"
                svgPath=" M 24 5.043 C 23.117 5.445 22.164 5.708 21.178 5.835 C 22.187 5.227 22.967 4.263 23.335 3.104 C 22.382 3.678 21.327 4.079 20.214 4.309 C 19.308 3.322 18.034 2.749 16.589 2.749 C 13.893 2.749 11.69 4.951 11.69 7.67 C 11.69 8.06 11.736 8.439 11.816 8.794 C 7.732 8.588 4.096 6.626 1.675 3.655 C 1.25 4.378 1.01 5.227 1.01 6.121 C 1.01 7.831 1.87 9.345 3.201 10.206 C 2.386 10.206 1.629 9.976 0.964 9.632 C 0.964 9.632 0.964 9.632 0.964 9.666 C 0.964 12.053 2.662 14.049 4.91 14.496 C 4.497 14.611 4.061 14.668 3.614 14.668 C 3.304 14.668 2.994 14.634 2.696 14.576 C 3.315 16.515 5.117 17.961 7.285 17.995 C 5.61 19.326 3.488 20.106 1.17 20.106 C 0.78 20.106 0.39 20.083 0 20.037 C 2.18 21.437 4.772 22.251 7.549 22.251 C 16.589 22.251 21.556 14.749 21.556 8.244 C 21.556 8.026 21.556 7.819 21.545 7.601 C 22.509 6.913 23.335 6.041 24 5.043 Z "
              />
            </ul>
          </ArticleInfo>
        </div>
        <AuthorList class="mb-3.5" font-family="Jost" :fontSize="{ xs: 14, md: 15 }" :lineHeight="1.1" bold color="000">
          By&nbsp;
          <Authors />
        </AuthorList>
        <div class="mb-6 flex flex-row border-b border-gray-200 pb-6 font-medium">
          <!-- <div class="label-published-article">Published&nbsp;</div> -->
          <Date font-family="Jost" :fontSize="13" :lineHeight="1.0" color="444" format="MMMM d, yyyy" />
        </div>
      </div>
    </HeaderBlock>

    <Content class="mx-5 max-w-screen-sm md:mx-auto">
      <!-- Below is the content of demo article, you should not add or remove any element below -->
      <Paragraph :order="0" font-family="Jost" :fontSize="20" :lineHeight="1.6" color="333" />
      <Header1 font-family="Jost" :fontSize="28" :lineHeight="2" />
      <Paragraph :order="1" font-family="Jost" :fontSize="20" :lineHeight="1.6" color="333" />
      <Blockquote
        font-family="Jost"
        :fontSize="{ xs: 35, md: 35 }"
        :lineHeight="1.4"
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
import { ColorArea, Template } from '@storipress/article'

import LiShareSocialIcon from './li-share-social-icon.vue'

export default Template.extend({
  components: { LiShareSocialIcon, ColorArea },
})
</script>

<style lang="scss" scoped>
.label-published-article {
  font-family:
    'Jost',
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    'Noto Sans',
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji';
  font-size: 13px;
  line-height: 1;
  color: #444;
}

.headline-image-box {
  height: 60vh;
  max-height: 25rem;
}

.article-description-box-kind > .content-wrapper {
  @apply mx-5 py-14 md:pt-12 lg:py-0;

  @screen md {
    @apply mx-auto w-11/12 max-w-screen-sm;
  }

  @screen lg {
    @apply order-1 flex max-w-full flex-col items-center justify-center;

    height: 100vh;
    max-height: 65rem;
  }
}

@media (min-width: 768px) {
  .headline-image-box {
    height: 80vh;
    max-height: 40rem;
  }
}

@media (min-width: 1070px) {
  .headline-image-box {
    height: 100vh;
    max-height: 65rem;
  }
}

.article-content {
  h1 {
    // for Header1
    @apply mb-3 md:mb-4;
  }

  h2 {
    // for Header2
    @apply mb-3 md:mb-4;
  }

  p {
    // for Paragraph
    @apply mb-3 md:mb-4;
  }
}
</style>
