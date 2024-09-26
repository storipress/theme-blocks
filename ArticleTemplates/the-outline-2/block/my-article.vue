<template>
  <ArticleBlock>
    <!--- hero --->
    <HeaderBlock>
      <HeadlineWrapper class="hero-wrapper flex h-screen max-h-[65rem]">
        <HeadlineImage class="absolute inset-0 w-full" sizes="(max-width: 768px) 200vw, 100vw" />

        <!--- hero text wrapper --->
        <div
          class="relative flex min-h-full w-full flex-col justify-between bg-black bg-opacity-40 px-8 text-center md:px-32"
        >
          <!--- Group 1 Start --->
          <div class="h-full flex-col">
            <!--- desk --->
            <ArticleInfo v-slot="{ article }">
              <LinkElement :href="article.deskUrl">
                <Desk
                  kind="hero-desk"
                  class="mb-4 inline-block pt-7 lg:mb-4"
                  :fontSize="14"
                  fontFamily="Jost"
                  color="fff"
                  align="center"
                  component="span"
                />
              </LinkElement>
            </ArticleInfo>
            <!--- vert. line --->
            <div class="mx-auto inline-block h-[calc(100%-4rem)] border-l border-white" />
          </div>
          <!--- Group 1 End --->

          <!--- Group 2 Start --->
          <div class="my-8 flex-col">
            <!--- Article Title --->
            <TitleElement
              class="pointer-events-auto mb-5 overflow-visible lg:mb-4"
              :bold="true"
              :fontSize="{ xs: 50, md: 70, lg: 100 }"
              :lineHeight="1"
              fontFamily="Jost"
              color="fff"
              kind="hero-title"
            />
            <!--- art. title description --->
            <Description kind="hero-description" fontFamily="Jost" :fontSize="{ xs: 16, md: 26 }" color="fff" />
          </div>
          <!--- Group 2 End --->

          <!--- vert. line --->
          <div class="anim-line mx-auto mb-7 inline-block h-full border-l border-white" />

          <!--- svg share button --->
          <div :class="[isSocialShareOpen ? ' show' : '', `social-share absolute right-6 bottom-6 z-10`]">
            <div class="cursor-pointer" @click="toggleSocialShare">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="25px"
                height="25px"
                viewBox="0 0 511.626 511.627"
                style="enable-background: new 0 0 511.626 511.627"
                xml:space="preserve"
                fill="#FFFF"
              >
                <g>
                  <path
                    d="M506.206,179.012L360.025,32.834c-3.617-3.617-7.898-5.426-12.847-5.426s-9.233,1.809-12.847,5.426 c-3.617,3.619-5.428,7.902-5.428,12.85v73.089h-63.953c-135.716,0-218.984,38.354-249.823,115.06C5.042,259.335,0,291.03,0,328.907 c0,31.594,12.087,74.514,36.259,128.762c0.57,1.335,1.566,3.614,2.996,6.849c1.429,3.233,2.712,6.088,3.854,8.565 c1.146,2.471,2.384,4.565,3.715,6.276c2.282,3.237,4.948,4.859,7.994,4.859c2.855,0,5.092-0.951,6.711-2.854 c1.615-1.902,2.424-4.284,2.424-7.132c0-1.718-0.238-4.236-0.715-7.569c-0.476-3.333-0.715-5.564-0.715-6.708 c-0.953-12.938-1.429-24.653-1.429-35.114c0-19.223,1.668-36.449,4.996-51.675c3.333-15.229,7.948-28.407,13.85-39.543 c5.901-11.14,13.512-20.745,22.841-28.835c9.325-8.09,19.364-14.702,30.118-19.842c10.756-5.141,23.413-9.186,37.974-12.135 c14.56-2.95,29.215-4.997,43.968-6.14s31.455-1.711,50.109-1.711h63.953v73.091c0,4.948,1.807,9.232,5.421,12.847 c3.62,3.613,7.901,5.424,12.847,5.424c4.948,0,9.232-1.811,12.854-5.424l146.178-146.183c3.617-3.617,5.424-7.898,5.424-12.847 C511.626,186.92,509.82,182.636,506.206,179.012z"
                  />
                </g>
              </svg>
            </div>
            <ArticleInfo v-slot="{ socials }">
              <ul class="social-items">
                <li v-if="socials.facebook">
                  <LinkElement target="_blank" rel="noopener" :href="socials.facebook">
                    <svg
                      fill="#FFFF"
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFF" viewBox="0 0 16 16">
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                      />
                    </svg>
                  </LinkElement>
                </li>
              </ul>
              <!--- svg share button end -->
            </ArticleInfo>
          </div>
        </div>
      </HeadlineWrapper>
    </HeaderBlock>

    <!--- content start --->
    <div class="mt-14 flex justify-center px-6 md:px-[16vw] lg:mt-36 lg:px-36">
      <div class="relative flex w-full flex-col content-center">
        <div class="post-head flex flex-col justify-center lg:mx-auto lg:max-w-5xl">
          <ArticleInfo class="flex justify-center" v-slot="{ article }">
            <LinkElement :href="article.deskUrl">
              <Desk kind="meta-desk" class="meta-desk mb-5 inline-block md:mt-7 lg:mb-20" component="div" />
            </LinkElement>
          </ArticleInfo>
          <TitleElement
            class="mr-8 md:mr-0 lg:text-center"
            :fontSize="{ xs: 28, md: 48, lg: 76 }"
            :lineHeight="1.2"
            fontFamily="Jost"
            color="000"
            kind="content-title"
          />
          <Description
            kind="content-description"
            class="my-4 mr-8 text-left md:mt-9 md:mb-5 md:mr-0 lg:text-center"
            fontFamily="Jost"
            :fontSize="{ xs: 17, md: 21 }"
            color="000"
          />

          <!---social share buttons--->
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
          <div class="w-full self-center lg:max-w-screen-sm">
            <Content>
              <!-- Below is the content of demo article, you should not add or remove any element below -->
              <Paragraph :order="0" fontFamily="Jost" :fontSize="18" :lineHeight="1.6" />
              <Header1 :fontSize="28" fontFamily="Jost" :lineHeight="2" />
              <Paragraph :order="1" fontFamily="Jost" />
              <Blockquote fontFamily="Jost" />
              <Paragraph :order="2" fontFamily="Jost" />
              <Header2 :fontSize="24" fontFamily="Jost" :lineHeight="2" />
              <Paragraph :order="3" fontFamily="Jost" />
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
      @apply opacity-80 hover:opacity-100;

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
