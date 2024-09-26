<template>
  <Navigation class="relative z-40">
    <!-- header grid -->
    <ColorArea backgroundColor="fff" kind="header-grid-kind">
      <div class="header-grid">
        <!-- nav desks -->
        <DeskList v-slot="{ desks }" class="nav-desk-links-wrapper">
          <LiNavMenuDeskLink
            v-for="(desk, index) in desks"
            :key="desk.id"
            :text="desk.name"
            :url="desk.url"
            :showEndSeparator="index + 1 < limitHeaderDesks"
            :class="{ hidden: index + 1 > limitHeaderDesks }"
          />
        </DeskList>
        <div style="grid-area: menu" class="flex flex-col justify-center">
          <div class="flex flex-row flex-nowrap">
            <button @click="isMenuOpen = true">
              <TextElement kind="nav-desk-link" component="div">Menu</TextElement>
            </button>
            <TextElement
              class="flex w-9 justify-center md:w-10"
              fontFamily="Jost"
              :fontSize="{ xs: 10, md: 12 }"
              kind="menu-text-seperator"
              component="div"
              color="00000059"
              align="center"
              :lineHeight="1.0"
              >/</TextElement
            >
          </div>
        </div>
        <SearchElement class="search-box-nav flex flex-row flex-nowrap items-center justify-center">
          <TextElement class="flex" color="7c7c7c" kind="element-svg-wrapper-search" component="span">
            <svg viewBox="0 0 24 24" style="width: 14px; height: 14px">
              <path
                d="M23.256 20.423l-5.685-4.835c-0.588-0.529-1.216-0.772-1.724-0.748 1.342-1.572 2.153-3.611 2.153-5.84 0-4.971-4.029-9-9-9s-9 4.029-9 9 4.029 9 9 9c2.229 0 4.268-0.811 5.84-2.153-0.023 0.508 0.219 1.136 0.748 1.724l4.835 5.685c0.828 0.92 2.18 0.997 3.005 0.172s0.747-2.177-0.172-3.005zM9 15c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
                fill="currentColor"
              ></path>
            </svg>
          </TextElement>
        </SearchElement>
        <LinkElement class="logo-wrapper" href="/"> <Logo class="logo-wrapper__element" /> </LinkElement>
        <!-- social links -->
        <Site class="social-links-wrapper" v-slot="{ site }">
          <template v-for="(icon, social) in socials">
            <TextElement
              v-if="site && site.socials ? site.socials[social] : ''"
              :key="social"
              kind="element-svg-wrapper-facebook"
              component="span"
              color="7c7c7c"
              :font-size="{ md: 16, lg: 20 }"
              class="social-link"
            >
              <a rel="noopener" target="_blank" :href="site && site.socials ? site.socials[social] : ''">
                <svg viewBox="0 0 24 24" height="1em" width="1em">
                  <path :d="icon" fill="currentColor"></path>
                </svg>
              </a>
            </TextElement>
          </template>
        </Site>
      </div>
    </ColorArea>
    <!-- menu backdrop transparent-->
    <transition name="fade" leave-active-class="fade-slow-leave-active">
      <div
        @click="isMenuOpen = false"
        v-show="isMenuOpen"
        class="fixed inset-0 z-10 h-screen w-screen cursor-pointer"
        role="button"
      />
    </transition>
    <!-- top menu -->
    <transition name="fade">
      <ColorArea v-show="isMenuOpen" backgroundColor="fff" kind="top-menu-wrapper-kind" class="top-menu-wrapper">
        <div class="top-menu">
          <div style="margin-bottom: 3.5vh" class="top-menu-item-gutter top-menu-item-left">
            <button @click="isMenuOpen = false" class="flex cursor-pointer flex-row items-center hover:opacity-75">
              <!-- x close -->
              <TextElement component="span" class="mr-2.5 inline-flex" kind="element-svg-wrapper-close" color="7c7c7c">
                <svg viewBox="0 0 24 24" class="top-menu-close-icon fill-current">
                  <path
                    d="M12 10.303l-8.485-8.485-1.697 1.697 8.485 8.485-8.485 8.485 1.697 1.697 8.485-8.485 8.485 8.485 1.697-1.697-8.485-8.485 8.485-8.485-1.697-1.697-8.485 8.485z"
                    fill="currentColor"
                  ></path>
                </svg>
              </TextElement>
              <TextElement
                component="div"
                kind="top-menu-close-label"
                :lineHeight="1.0"
                fontFamily="Jost"
                :fontSize="{ xs: 12, md: 14, lg: 15 }"
                color="7c7c7c"
                >Close</TextElement
              >
            </button>
          </div>
          <!-- social icons -->
          <div style="margin-bottom: 3.5vh" class="top-menu-item-gutter top-menu-item-right">
            <Site class="top-menu-social-wrapper" v-slot="{ site }">
              <template v-for="(icon, social) in socials">
                <TextElement
                  v-if="site && site.socials ? site.socials[social] : ''"
                  :key="social"
                  kind="element-svg-wrapper-facebook"
                  component="span"
                  class="hover:opacity-75"
                >
                  <a rel="noopener" target="_blank" :href="site && site.socials ? site.socials[social] : ''">
                    <svg viewBox="0 0 24 24" height="1em" width="1em" class="top-menu-social-svg">
                      <path :d="icon" fill="currentColor"></path>
                    </svg>
                  </a>
                </TextElement>
              </template>
            </Site>
          </div>
          <div style="margin-bottom: 7vh" class="top-menu-item-gutter top-menu-item-left">
            <DeskList v-slot="{ desks }">
              <ul class="flex flex-col">
                <template v-for="chunk in chunkDesk(desks)">
                  <LinkElement v-if="chunk[0]" :key="chunk[0].id" :href="chunk[0].url" class="hover:opacity-75">
                    <TextElement
                      kind="top-menu-desk-0"
                      :fontSize="{ xs: 18, md: 26, lg: 34 }"
                      component="li"
                      bold
                      :lineHeight="1.3"
                      fontFamily="Jost"
                      color="0c776d"
                      >{{ chunk[0].name }}</TextElement
                    >
                  </LinkElement>
                  <LinkElement v-if="chunk[1]" :key="chunk[1].id" :href="chunk[1].url" class="hover:opacity-75">
                    <TextElement
                      kind="top-menu-desk-1"
                      :fontSize="{ xs: 18, md: 26, lg: 34 }"
                      component="li"
                      bold
                      :lineHeight="1.3"
                      fontFamily="Jost"
                      color="103559"
                      >{{ chunk[1].name }}</TextElement
                    >
                  </LinkElement>
                  <LinkElement v-if="chunk[2]" :key="chunk[2].id" :href="chunk[2].url" class="hover:opacity-75">
                    <TextElement
                      kind="top-menu-desk-2"
                      :fontSize="{ xs: 18, md: 26, lg: 34 }"
                      component="li"
                      bold
                      :lineHeight="1.3"
                      fontFamily="Jost"
                      color="940b52"
                      >{{ chunk[2].name }}</TextElement
                    >
                  </LinkElement>
                  <LinkElement v-if="chunk[3]" :key="chunk[3].id" :href="chunk[3].url" class="hover:opacity-75">
                    <TextElement
                      kind="top-menu-desk-3"
                      :fontSize="{ xs: 18, md: 26, lg: 34 }"
                      component="li"
                      bold
                      :lineHeight="1.3"
                      fontFamily="Jost"
                      color="a00110"
                      >{{ chunk[3].name }}</TextElement
                    >
                  </LinkElement>
                  <LinkElement v-if="chunk[4]" :key="chunk[4].id" :href="chunk[4].url" class="hover:opacity-75">
                    <TextElement
                      kind="top-menu-desk-4"
                      :fontSize="{ xs: 18, md: 26, lg: 34 }"
                      component="li"
                      bold
                      :lineHeight="1.3"
                      fontFamily="Jost"
                      color="c56b25"
                      >{{ chunk[4].name }}</TextElement
                    >
                  </LinkElement>
                </template>
              </ul>
            </DeskList>
          </div>
          <PageList style="margin-bottom: 7vh" class="top-menu-item-gutter top-menu-item-right" v-slot="{ pages }">
            <ul class="flex h-full flex-col">
              <div
                v-for="(page, index) in pages"
                :key="page.id"
                class="flex"
                :class="{ 'grow flex-col justify-end': index + 1 === pages.length }"
              >
                <LinkElement :href="page.url" class="hover:opacity-75">
                  <TextElement
                    kind="top-menu-page"
                    :fontSize="{ xs: 16, md: 24, lg: 32 }"
                    component="li"
                    :lineHeight="1.3"
                    fontFamily="Jost"
                    color="000"
                    >{{ page.name }}</TextElement
                  >
                </LinkElement>
              </div>
            </ul>
          </PageList>
          <div class="top-menu-search-wrapper top-menu-item-gutter top-menu-item-left">
            <SearchElement>
              <a class="flex cursor-pointer flex-row items-center hover:opacity-75">
                <TextElement kind="element-svg-wrapper-search" component="span">
                  <svg viewBox="0 0 24 24" class="top-menu-search-icon">
                    <path
                      d="M23.256 20.423l-5.685-4.835c-0.588-0.529-1.216-0.772-1.724-0.748 1.342-1.572 2.153-3.611 2.153-5.84 0-4.971-4.029-9-9-9s-9 4.029-9 9 4.029 9 9 9c2.229 0 4.268-0.811 5.84-2.153-0.023 0.508 0.219 1.136 0.748 1.724l4.835 5.685c0.828 0.92 2.18 0.997 3.005 0.172s0.747-2.177-0.172-3.005zM9 15c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </TextElement>
                <TextElement
                  class="top-menu-search-label"
                  fontFamily="Jost"
                  :fontSize="{ xs: 12, md: 16, lg: 20 }"
                  kind="top-menu-search"
                  component="div"
                  color="000"
                  :lineHeight="1.0"
                  >Search</TextElement
                >
              </a>
            </SearchElement>
          </div>
        </div>
      </ColorArea>
    </transition>
    <!-- top menu on scroll 100vh -->
    <transition name="slide">
      <ColorArea
        v-show="showScrollMenu"
        backgroundColor="fff"
        kind="scroll-menu-wrapper-kind"
        class="scroll-menu-wrapper"
      >
        <div class="scroll-menu-wrapper__grid">
          <!-- menu button -->
          <div style="grid-area: menu" class="flex flex-col justify-center">
            <div class="flex flex-row flex-nowrap">
              <button @click="isMenuOpen = true">
                <TextElement
                  kind="scroll-menu-desk-link"
                  component="div"
                  color="000"
                  :lineHeight="1.0"
                  fontFamily="Jost"
                  :fontSize="{ xs: 13, md: 15 }"
                  >Menu</TextElement
                >
              </button>
              <TextElement
                class="hidden w-9 text-center sm:inline-block md:w-10"
                fontFamily="Jost"
                :fontSize="{ xs: 10, md: 12 }"
                kind="scroll-menu-text-seperator"
                component="div"
                color="00000059"
                align="center"
                :lineHeight="1.0"
                >/</TextElement
              >
            </div>
          </div>
          <!-- search -->
          <SearchElement class="search-box-nav hidden flex-row flex-nowrap items-center justify-center sm:flex">
            <div class="flex flex-row flex-nowrap">
              <TextElement kind="element-svg-wrapper-search" component="span">
                <svg viewBox="0 0 24 24" style="width: 14px; height: 14px">
                  <path
                    d="M23.256 20.423l-5.685-4.835c-0.588-0.529-1.216-0.772-1.724-0.748 1.342-1.572 2.153-3.611 2.153-5.84 0-4.971-4.029-9-9-9s-9 4.029-9 9 4.029 9 9 9c2.229 0 4.268-0.811 5.84-2.153-0.023 0.508 0.219 1.136 0.748 1.724l4.835 5.685c0.828 0.92 2.18 0.997 3.005 0.172s0.747-2.177-0.172-3.005zM9 15c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
                    fill="currentColor"
                  ></path>
                </svg>
              </TextElement>
              <TextElement
                class="hidden w-9 text-center lg:inline-block"
                kind="scroll-menu-text-seperator"
                component="span"
                >/</TextElement
              >
            </div>
          </SearchElement>
          <LinkElement class="logo-wrapper-scroll-menu" href="/">
            <Logo class="logo-wrapper-scroll-menu__element" />
          </LinkElement>
          <!-- social links -->
          <Site class="social-links-wrapper" v-slot="{ site }">
            <template v-for="(icon, social) in socials">
              <TextElement
                v-if="site && site.socials ? site.socials[social] : ''"
                :key="social"
                kind="element-svg-wrapper-facebook"
                component="span"
                class="social-link"
              >
                <a rel="noopener" target="_blank" :href="site && site.socials ? site.socials[social] : ''">
                  <svg viewBox="0 0 24 24" height="1em" width="1em">
                    <path :d="icon" fill="currentColor"></path>
                  </svg>
                </a>
              </TextElement>
            </template>
          </Site>
          <!-- nav desks -->
          <DeskList v-slot="{ desks }" class="nav-desk-links-wrapper">
            <template v-for="(desk, index) in desks">
              <template v-if="index + 1 <= limitHeaderDesks">
                <LinkElement :key="desk.id" :href="desk.url" class="hover:opacity-75">
                  <TextElement kind="scroll-menu-desk-link" component="span">{{ desk.name }}</TextElement>
                </LinkElement>
                <TextElement
                  :key="`${desk.id}_sep`"
                  class="inline-block w-6"
                  align="center"
                  kind="scroll-menu-text-seperator"
                  component="span"
                  >/</TextElement
                >
              </template>
            </template>
          </DeskList>
        </div>
      </ColorArea>
    </transition>
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
} from '@storipress/block'
import { chunk } from 'lodash'

import LiNavMenuDeskLink from './li-nav-menu-desk-link.vue'
import socials from './socials'

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
    LiNavMenuDeskLink,
    ColorArea,
  },
  data() {
    return {
      isMenuOpen: false,
      socials,
      limitHeaderDesks: 2,
      scrollPosition: 0, // initial value set in beforeMount
      vh: 0, // initial value set in beforeMount
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = this.getScroll()
    },
    getScroll() {
      return Math.round(window.scrollY)
    },
    handleResize() {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) this.limitHeaderDesks = 1
      else if (window.innerWidth >= 1024 && window.innerWidth < 1280) this.limitHeaderDesks = 2
      else if (window.innerWidth >= 1280) this.limitHeaderDesks = 3
      else this.limitHeaderDesks = 2

      this.vh = this.getVh()
    },
    getVh() {
      // https://stackoverflow.com/a/8876069/10030480
      return Math.round(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0))
    },
    chunkDesk(desks) {
      return chunk(desks, 5)
    },
  },
  beforeMount() {
    this.updateScroll()
  },
  mounted() {
    this.handleResize()
    window.addEventListener('scroll', this.updateScroll, { passive: true })
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll, { passive: true })
    window.removeEventListener('resize', this.handleResize)
    document.body.classList.remove('stop-scroll')
  },
  computed: {
    showScrollMenu() {
      return this.vh && this.scrollPosition >= this.vh
    },
  },
  watch: {
    isMenuOpen(newValue) {
      if (newValue) {
        document.body.classList.add('stop-scroll')
      } else {
        document.body.classList.remove('stop-scroll')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.header-grid {
  @apply relative mx-auto grid h-auto w-full;

  padding: 14.4px 10.8px 58.5px 21.6px;
  grid-template-columns: 0fr auto 1fr auto auto;
  grid-template-rows: auto 50px;
  grid-template-areas:
    'menu search . nav-desks nav-desks'
    'social social logo . .';
}

.scroll-menu-wrapper {
  @apply fixed inset-x-0 top-0 z-20 w-full shadow;

  &__grid {
    @apply mx-auto grid h-full w-full items-center;

    height: 43.19px;
    padding: 0 10.8px 0 21.6px;
    grid-template-columns: auto auto auto 1fr auto auto auto;
    grid-template-rows: auto;
    grid-template-areas: 'menu search social logo nav-desks nav-desks nav-desks';
    max-width: 1200px;

    @screen md {
      @apply px-10;

      height: 48px;
    }
  }
}

.nav-desk-links-wrapper {
  @apply hidden flex-row flex-nowrap items-center justify-items-center sm:flex;

  grid-area: nav-desks;
}

.logo-wrapper {
  @apply absolute left-1/2 h-auto w-auto;

  top: calc(50% + 18px);
  transform: translate3d(-50%, -50%, 0);

  @screen md {
    top: 50%;
  }

  &__element {
    @apply h-full;

    max-height: 50.64px;
    max-width: 90vw;

    @screen md {
      max-height: 56.27px;
    }
  }
}

.logo-wrapper-scroll-menu {
  @apply absolute left-1/2 h-auto w-auto;

  top: 50%;
  transform: translate3d(-50%, -50%, 0);

  &__element {
    @apply h-screen w-max;

    max-width: 50vw;
    max-height: 20.25px;

    @screen md {
      max-height: 25.31px;
    }

    &::v-deep img {
      @apply w-auto;
    }
  }
}

.menu-area {
  @apply flex flex-row items-center;

  grid-area: menu;
}

.search-box-nav {
  height: 23px;
  grid-area: search;
}

.social-links-wrapper {
  @apply hidden flex-row lg:flex;

  grid-area: social;
}

.social-link {
  margin-right: 13px;
}

.top-menu-wrapper {
  @apply fixed inset-x-0 top-0 z-40 shadow-xl;
}

.top-menu {
  @apply flex w-full flex-row flex-wrap content-between;

  min-height: 50vh;
  margin: 13.5px auto 37.8px;
  padding: 0 16.2px;
}

.top-menu-item-gutter {
  padding: 0 5.4px;
}

.top-menu-item-left {
  width: 55%;
}

.top-menu-item-right {
  width: 45%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease-in-out;
}

.fade-slow-leave-active {
  transition: opacity 500ms ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  transform: translateY(0%);
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
}

.top-menu-close-icon {
  width: 11px;
  height: 11px;
}

.top-menu-close-label {
  @apply flex tracking-widest;
}

.menu-text {
  @apply flex tracking-widest;
}

.top-menu-search-icon {
  width: 10px;
  height: 10px;
}

.top-menu-search-label {
  @apply flex tracking-widest;

  padding: 0 2px;
  margin-left: 0.6vw;
}

.top-menu-social-wrapper {
  @apply flex flex-wrap gap-y-1;

  margin-left: -3.6px;
}

.top-menu-social-svg {
  @apply block;

  height: 3.8vw;
  width: 3.8vw;
  margin-right: 2vw;
}

.top-menu-search-wrapper {
  margin-bottom: 2vh;
}

.top-menu-search-wrapper::v-deep button {
  @apply outline-none;
}

@media (min-width: 768px) {
  .header-grid {
    @apply items-center;

    padding: 18px 40px 18px;
    grid-template-areas:
      'menu search . nav-desks nav-desks'
      'menu search logo nav-desks nav-desks';
  }

  .search-box-nav {
    height: 26px;
  }

  .top-menu {
    margin: 15px auto 42px;
    padding: 0 18px;
  }

  .top-menu-close {
    width: 12px;
    height: 12px;
  }

  .top-menu-item-gutter {
    padding: 0 18px;
  }

  .top-menu-item-left {
    width: 50%;
  }

  .top-menu-item-right {
    width: 50%;
  }

  .top-menu-social-wrapper {
    margin-left: -4px;
  }

  .top-menu-social-svg {
    height: 2vw;
    width: 2vw;
    margin-right: 1.5vw;
  }

  .top-menu-search-icon {
    width: 12px;
    height: 12px;
  }

  .top-menu-search-wrapper {
    margin-bottom: 4vh;
  }
}

@media (min-width: 1070px) {
  .header-grid,
  .top-menu {
    max-width: 1200px;
  }

  .top-menu-social-svg {
    height: 20px;
    width: 20px;
  }

  .header-grid {
    grid-template-areas:
      'menu search . nav-desks nav-desks'
      'social social logo nav-desks nav-desks';
  }
}
</style>

<style lang="scss">
.stop-scroll {
  overflow: hidden;
}
.logo-wrapper__element > img {
  @apply h-auto w-auto object-cover;

  max-height: 50.64px;

  @screen md {
    max-height: 56.27px;
  }
}
</style>
