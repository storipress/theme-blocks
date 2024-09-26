<template>
  <Navigation class="fixed inset-x-0 top-0 z-20" height="70px">
    <!-- nav inner -->
    <ColorArea class="top-container" backgroundColor="fff" kind="main-nav-bar-kind">
      <div class="main-nav-bar">
        <!-- desks -->
        <div>
          <DeskList class="hidden lg:flex" v-slot="{ desks }">
            <ul class="flex flex-row space-x-8">
              <LinkElement
                v-for="(desk, index) in desks"
                :key="desk.id"
                :href="desk.url"
                :class="{ flex: index < 2, hidden: index >= 2 }"
              >
                <TextElement
                  kind="hero-desk"
                  class="whitespace-nowrap"
                  :fontSize="17"
                  fontFamily="Jost"
                  color="000"
                  component="li"
                  :lineHeight="1.4"
                >
                  {{ desk.name }}
                </TextElement>
              </LinkElement>
            </ul>
          </DeskList>
        </div>
        <!-- center logo -->
        <template v-if="!currentPage">
          <transition appear appear-class="logo-enter" appear-active-class="logo-enter-active">
            <div class="logo-wrapper-custom pointer-events-none hidden lg:flex">
              <LinkElement href="/" class="pointer-events-auto" :style="logoTransform">
                <Logo class="logo-custom" />
              </LinkElement>
            </div>
          </transition>
        </template>

        <div class="logo-wrapper-custom pointer-events-none flex">
          <LinkElement class="pointer-events-auto" :class="{ 'lg:hidden': !currentPage }" href="/">
            <Logo class="logo-custom" />
          </LinkElement>
        </div>
        <!-- hamburger -->
        <div class="flex flex-row items-center justify-end">
          <SearchElement class="search-wrapper-custom">
            <div class="flex h-full w-4 flex-col items-center justify-center">
              <TextElement kind="search-svg-element" color="7c7c7c" component="span">
                <svg viewBox="0 0 24 24" style="width: 16px; height: 16px">
                  <path
                    d="M23.256 20.423l-5.685-4.835c-0.588-0.529-1.216-0.772-1.724-0.748 1.342-1.572 2.153-3.611 2.153-5.84 0-4.971-4.029-9-9-9s-9 4.029-9 9 4.029 9 9 9c2.229 0 4.268-0.811 5.84-2.153-0.023 0.508 0.219 1.136 0.748 1.724l4.835 5.685c0.828 0.92 2.18 0.997 3.005 0.172s0.747-2.177-0.172-3.005zM9 15c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
                    fill="currentColor"
                  ></path>
                </svg>
              </TextElement>
            </div>
          </SearchElement>
          <div class="ham-icon" @click="isMenuOpen = true">
            <ColorArea backgroundColor="000" kind="ham-bar" />
            <ColorArea kind="ham-bar" />
            <ColorArea kind="ham-bar" />
          </div>
        </div>
      </div>
      <div class="bottom-bar-container">
        <ColorArea v-if="currentPage" kind="bottom-bar" backgroundColor="333333" />
      </div>
    </ColorArea>

    <!-- side menu overlay -->
    <transition name="fade">
      <ColorArea
        kind="side-menu-overlay"
        backgroundColor="000"
        v-show="isMenuOpen"
        class="fixed inset-0 z-20 h-screen w-screen opacity-40"
        @click="isMenuOpen = false"
      ></ColorArea>
    </transition>

    <!-- fixed side menu -->
    <ColorArea
      :class="{ 'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen }"
      class="fixed-side-menu transform transition-all duration-300 ease-in-out"
      backgroundColor="fff"
      kind="fixed-side-menu-kind"
    >
      <div class="side-menu-close-button z-10" @click="isMenuOpen = false">
        <TextElement kind="menu-close-svg-element" color="7c7c7c" component="span">
          <i class="icon icon-cross_thin text-lg" />
        </TextElement>
      </div>
      <div class="absolute inset-0 w-full overflow-x-hidden overflow-y-scroll overscroll-y-contain px-5 py-10 md:px-10">
        <DeskList v-slot="{ desks }">
          <ul class="side-menu-desks-list">
            <li class="mb-1 w-1/2 md:mb-0 md:w-full" v-for="desk in desks" :key="desk.id">
              <LinkElement :href="desk.url" class="p-2 hover:opacity-70">
                <TextElement
                  kind="side-menu-desk"
                  :fontSize="{ xs: 20, md: 35 }"
                  fontFamily="Libertinus Serif"
                  color="000"
                  component="span"
                  :lineHeight="1.1"
                  >{{ desk.name }}</TextElement
                >
              </LinkElement>
            </li>
          </ul>
        </DeskList>
        <PageList v-slot="{ pages }">
          <ul class="side-menu-other-pages">
            <LiOtherPagesMenu v-for="page in pages" :key="page.id" :text="page.name" :url="page.url" />
            <SearchElement style="margin-top: 15px" class="mb-2.5 w-1/2 md:hidden">
              <div class="flex cursor-text flex-row items-center justify-start">
                <TextElement kind="search-svg-element" component="span">
                  <svg viewBox="0 0 24 24" class="inline-flex h-3.5 w-3.5">
                    <path
                      d="M23.256 20.423l-5.685-4.835c-0.588-0.529-1.216-0.772-1.724-0.748 1.342-1.572 2.153-3.611 2.153-5.84 0-4.971-4.029-9-9-9s-9 4.029-9 9 4.029 9 9 9c2.229 0 4.268-0.811 5.84-2.153-0.023 0.508 0.219 1.136 0.748 1.724l4.835 5.685c0.828 0.92 2.18 0.997 3.005 0.172s0.747-2.177-0.172-3.005zM9 15c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </TextElement>
                &nbsp;
                <TextInput
                  class="inline-flex hover:opacity-70"
                  kind="side-menu-search"
                  :fontSize="{ xs: 20 }"
                  fontFamily="Libertinus Serif"
                  color="000"
                  component="div"
                  :lineHeight="1.1"
                  defaultValue="Search"
                />
              </div>
            </SearchElement>
          </ul>
        </PageList>
        <Site v-slot="{ site }">
          <ul class="side-menu-social">
            <template v-for="social in socials">
              <TextElement
                v-if="site && site.socials ? site.socials[social] : ''"
                :key="social"
                style="height: max-content; letter-spacing: 0.12em"
                class="mb-1 flex w-full"
                kind="side-menu-social-link"
                :fontSize="14"
                fontFamily="Jost"
                color="000"
                component="li"
                :lineHeight="1.4"
              >
                <a rel="noopener" target="_blank" :href="site && site.socials ? site.socials[social] : ''">
                  {{ social.replace(/^./, social[0].toUpperCase()) }}
                </a>
              </TextElement>
            </template>
          </ul>
        </Site>
      </div>
    </ColorArea>
  </Navigation>
</template>

<script>
import {
  ColorArea,
  DeskList,
  LinkElement,
  Logo,
  Navigation,
  PageList,
  SearchElement,
  Site,
  TextElement,
  TextInput,
} from '@storipress/block'

import LiOtherPagesMenu from './li-other-pages-menu.vue'
import menuHashMixin from './menu-hash-mixin.js'

export default {
  components: {
    Navigation,
    Logo,
    DeskList,
    PageList,
    LinkElement,
    TextElement,
    SearchElement,
    Site,
    LiOtherPagesMenu,
    ColorArea,
    TextInput,
  },
  props: {
    currentPage: {
      type: String,
    },
  },
  data() {
    return {
      scrollPosition: 0, // initial value set in beforeMount
      isMenuOpen: false,
      vw: 0, // initial value set in beforeMount
      socials: [
        'facebook',
        'twitter',
        'instagram',
        'linkedin',
        'youtube',
        'pinterest',
        'whatsapp',
        'reddit',
        'tiktok',
        'geneva',
      ],
    }
  },
  mixins: [menuHashMixin],
  computed: {
    logoTransform() {
      // <!--     transform: matrix(3.5, 0, 0, 3.5, 0, 112); at scroll 0px -->
      // <!--     transform: matrix(1, 0, 0, 1, 0, 0); at scroll end -->
      const scrollEnd = Math.min(205, Math.round(0.16 * this.vw - 70))
      const tranlateYOffset = (15 / 90) * scrollEnd
      const maxScale = (3.3 / 90) * scrollEnd
      const translateYEnd = scrollEnd + tranlateYOffset
      const filteredPositon = this.scrollPosition > scrollEnd ? scrollEnd : this.scrollPosition
      const scale = maxScale - (maxScale - 1) * (filteredPositon / scrollEnd) // linear .. can change to other function
      const translateY = translateYEnd - translateYEnd * (filteredPositon / scrollEnd)

      const matrixFunction = `matrix(${scale},0,0,${scale},0,${translateY})`
      return {
        transform: matrixFunction,
      }
    },
  },
  methods: {
    updateScroll() {
      this.scrollPosition = this.getScroll()
    },
    updateVw() {
      this.vw = this.getVw()
    },
    getVw() {
      return Math.round(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0))
    },
    getScroll() {
      return Math.round(window.scrollY)
    },
  },
  beforeMount() {
    this.updateScroll()
    this.updateVw()
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll, { passive: true })
    window.addEventListener('resize', this.updateVw)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll, { passive: true })
    window.removeEventListener('resize', this.updateVw)
  },
}
</script>

<style lang="scss" scoped>
.top-container {
  @apply inset-x-0 mx-auto box-content px-2.5;

  max-width: 2000px;

  @screen md {
    padding: 0 2%;
  }
}

.main-nav-bar {
  @apply flex w-full flex-row items-center justify-between md:px-2.5 lg:px-5;

  height: 70px;
}

.bottom-bar-container {
  @apply w-full px-2.5 md:px-5;

  .bottom-bar {
    @apply inset-x-0 mx-auto h-px w-full;

    max-width: 1960px;
  }
}

.fixed-side-menu {
  @apply fixed right-0 top-0 z-40 h-screen w-screen;

  @screen md {
    width: 490px;
  }
}

.logo-wrapper-custom {
  @apply absolute left-0 right-0 m-auto h-screen items-center justify-center px-4;

  max-height: 18px;
  max-width: 80vw;

  @screen lg {
    max-height: 22px;
  }
}

.logo-custom {
  @apply inline-flex w-auto self-stretch;
}

.logo-custom::v-deep img {
  @apply w-auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 700ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@screen lg {
  .logo-enter-active {
    transition: opacity 1.5s 0.5s;
  }

  .logo-enter {
    opacity: 0;
  }
}

.ham-icon {
  @apply box-content flex h-3 w-4 cursor-pointer flex-col justify-between p-1 md:h-4 md:w-6 lg:w-9;
}

.ham-bar {
  @apply h-0.5 w-full;

  @screen md {
    height: 3px;
  }
}

.search-wrapper-custom {
  @apply invisible mr-10 md:visible;
}

.side-menu-close-button {
  @apply absolute cursor-pointer p-4;

  top: 12px;
  right: 16px;
  outline: none;
}

.side-menu-desks-list {
  @apply flex list-none flex-row flex-wrap border-b border-solid border-gray-200 md:flex-col;

  padding-bottom: 30px;
  margin-bottom: 30px;
  letter-spacing: -0.0108em;
}

.side-menu-other-pages {
  @apply flex list-none flex-row flex-wrap border-b-4 border-solid border-black md:flex-col;

  padding-bottom: 30px;
  margin-bottom: 15px;
  letter-spacing: -0.0108em;
}

.side-menu-social {
  @apply m-0 flex list-none flex-col p-0;
}

.search-wrapper-custom::v-deep div {
  @apply flex;
}

.side-menu-search::v-deep > div {
  min-height: inherit;
}
</style>

<style>
.stop-scroll {
  overflow: hidden;
}
</style>
