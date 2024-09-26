<template>
  <ArticleBlock class="pb-32 md:pb-60">
    <div class="mt-14 flex justify-center px-6 md:px-[16vw] lg:px-36">
      <div class="relative flex flex-col content-center">
        <div class="post-head flex flex-col justify-center lg:max-w-5xl">
          <Desk kind="meta-desk" class="meta-desk mb-5 block md:mt-7 lg:mb-10" component="div" />
          <TitleElement
            class="mr-8 md:mr-0 lg:text-center"
            :fontSize="{ xs: 28, md: 48, lg: 76 }"
            :lineHeight="1.2"
            fontFamily="Karrik"
            color="000"
            kind="content-title"
          />
          <Description
            kind="content-description"
            class="my-4 mr-8 text-left md:mt-9 md:mb-5 md:mr-0 lg:text-center"
            fontFamily="Roboto"
            :fontSize="{ xs: 17, md: 21 }"
            color="000"
          />

          <ArticleInfo v-slot="{ socials }">
            <ul class="social-share-meta block lg:hidden">
              <li v-if="socials.facebook">
                <LinkElement target="_blank" rel="noopener" :href="socials.facebook">
                  <svg
                    fill="#7c7c7c"
                    enable-background="new 0 0 24 24"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"
                    />
                  </svg>
                </LinkElement>
              </li>
              <li v-if="socials.twitter">
                <LinkElement target="_blank" rel="noopener" :href="socials.twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7c7c7c" viewBox="0 0 16 16">
                    <path
                      d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                    />
                  </svg>
                </LinkElement>
              </li>
            </ul>
          </ArticleInfo>
        </div>

        <div class="mt-20 flex flex-col justify-center">
          <div class="lg:flex lg:flex-col">
            <AuthorList :fontSize="{ xs: 20, lg: 13 }" class="mb-1 lg:flex lg:justify-center">
              By&nbsp;
              <Authors separatorClass="lg:px-[0.25em]" />
            </AuthorList>

            <Date
              :fontSize="13"
              :bold="true"
              class="head-time absolute translate-x-4 rotate-90 transform md:static md:transform-none lg:flex lg:justify-center"
              format="d MMMM yyyy, p"
            />

            <!---social share buttons--->
            <ArticleInfo v-slot="{ socials }">
              <ul class="social-share-meta mt-5 hidden lg:flex lg:justify-center">
                <li v-if="socials.facebook">
                  <LinkElement target="_blank" rel="noopener" :href="socials.facebook">
                    <svg
                      fill="#7c7c7c"
                      enable-background="new 0 0 24 24"
                      height="16"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"
                      />
                    </svg>
                  </LinkElement>
                </li>
                <li v-if="socials.twitter">
                  <LinkElement target="_blank" rel="noopener" :href="socials.twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7c7c7c" viewBox="0 0 16 16">
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                      />
                    </svg>
                  </LinkElement>
                </li>
              </ul>
            </ArticleInfo>
          </div>

          <!---content spacer line--->
          <div class="mx-auto my-12 block h-px w-6/12 max-w-[16rem] border-t border-black lg:mt-20" />

          <!---article content--->
          <div class="self-center lg:max-w-screen-sm">
            <Content>
              <!-- Below is the content of demo article, you should not add or remove any element below -->
              <Paragraph :order="0" fontFamily="Roboto" :fontSize="18" :lineHeight="2" />
              <Header1 :fontSize="28" fontFamily="Roboto" underline />
              <Paragraph :order="1" fontFamily="Roboto" />
              <Blockquote fontFamily="Roboto" />
              <Paragraph :order="2" fontFamily="Roboto" />
              <Header2 :fontSize="24" fontFamily="Roboto" />
              <Paragraph :order="3" fontFamily="Roboto" />
            </Content>
          </div>
        </div>
      </div>
    </div>
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
.article-section {
  position: inherit;
}

.hero-wrapper {
  @apply relative;
}

.anim-line {
  width: 1px;
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

.article-content {
  p {
    margin: 0 0 3rem 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h1,
  h2 {
    margin-bottom: 3rem;
  }
}

.social-share-meta {
  li {
    @apply opacity-80 transition-opacity hover:opacity-100;

    display: inline-block;
    margin-right: 20px;

    svg {
      // stylelint-disable-next-line declaration-no-important
      width: 16px !important;
      // stylelint-disable-next-line declaration-no-important
      height: 16px !important;
    }
  }
}

.head-time {
  transform-origin: center left;
  left: calc(100% - 20px);
  white-space: nowrap;
  top: 25px;

  @screen md {
    left: calc(100% - 58px);
  }
}

.article .meta-desk {
  color: #000;
  text-align: left;

  @screen lg {
    text-align: center;
  }
}
</style>
