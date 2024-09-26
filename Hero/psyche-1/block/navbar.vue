<template>
  <Navigation class="relative z-40 h-[52px] md:h-[100px] lg:h-[144px]">
    <!-- header grid -->
    <ColorArea
      backgroundColor="fff"
      kind="header-grid-wrapper-kind"
      :class="
        showScrollMenu
          ? 'header-grid-wrapper-scroll fixed top-0 z-10 w-full border-b border-gray-300'
          : 'static top-[-6.25rem] w-full border-b border-transparent'
      "
    >
      <div
        class="flex min-h-[3.25rem] items-center gap-x-2 px-3 md:justify-between lg:mx-auto lg:max-w-7xl"
        :class="
          showScrollMenu
            ? 'py-2.5 md:min-h-[3.75rem] md:px-6 md:pb-2 md:pt-[0.625rem] lg:min-h-[3.75rem]'
            : 'lg:min-h-36 pb-2 pt-[0.625rem] md:min-h-[6.25rem] md:px-6 md:py-5 lg:pb-11 lg:pt-[3.25rem]'
        "
      >
        <div class="flex basis-1/3 gap-y-2" :class="showScrollMenu ? 'flex-row items-center' : 'flex-col'">
          <!-- menu and search -->
          <div class="flex flex-row flex-nowrap items-center justify-self-start">
            <button @click="isMenuOpen = true">
              <TextElement
                component="div"
                kind="menu-text"
                color="000"
                :lineHeight="1.4"
                fontFamily="Jost"
                :fontSize="{ xs: 11, md: 13, lg: 15 }"
                class="flex"
              >
                Menu
              </TextElement>
            </button>
            <TextElement
              class="py-0 pl-2 pr-1 md:px-[1.125rem]"
              fontFamily="Jost"
              :fontSize="{ xs: 11, md: 13, lg: 15 }"
              kind="menu-text-separator-kind"
              component="div"
              color="000000B3"
              align="center"
              :lineHeight="1.4"
              >/</TextElement
            >
            <SearchElement>
              <TextElement kind="search-icon-text" color="7c7c7c" component="span">
                <svg viewBox="0 0 24 24" class="h-[1.375rem] w-[1.375rem]">
                  <path
                    d="M14.57 15.32c-1.042 0.743-2.318 1.18-3.695 1.18-3.521 0-6.375-2.854-6.375-6.375s2.854-6.375 6.375-6.375c3.521 0 6.375 2.854 6.375 6.375 0 1.76-0.714 3.354-1.867 4.508l4.498 4.498c0.206 0.206 0.201 0.537-0.006 0.744-0.209 0.209-0.54 0.21-0.744 0.006l-4.56-4.56zM10.875 15.75c3.107 0 5.625-2.518 5.625-5.625s-2.518-5.625-5.625-5.625c-3.107 0-5.625 2.518-5.625 5.625s2.518 5.625 5.625 5.625v0z"
                    fill="currentColor"
                  />
                </svg>
              </TextElement>
            </SearchElement>
            <TextElement
              :class="{ 'md:block': showScrollMenu, hidden: !showScrollMenu }"
              class="py-0 pl-2 pr-1 md:px-[1.125rem]"
              fontFamily="Jost"
              :fontSize="{ xs: 11, md: 13, lg: 15 }"
              kind="menu-text-separator-kind"
              component="div"
              color="000000B3"
              align="center"
              :lineHeight="1.4"
              >/</TextElement
            >
          </div>
          <!-- social links -->
          <Site class="hidden flex-row flex-wrap gap-x-[0.625rem] gap-y-1 justify-self-start md:flex" v-slot="{ site }">
            <template v-for="(icon, social) in socials">
              <TextElement
                :key="social"
                v-show="site && site.socials && site.socials[social]"
                kind="social-icon-text"
                component="span"
                color="7c7c7c"
                :font-size="19"
                class="flex"
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

        <!-- logo -->
        <LinkElement href="/" class="relative basis-1/3">
          <Logo
            class="flex justify-center"
            :class="
              showScrollMenu
                ? 'h-screen max-h-5 hover:opacity-70 md:max-h-7'
                : 'h-[25px] max-w-[200px] hover:opacity-70 md:h-10 md:max-w-[25rem] lg:h-[3.125rem]'
            "
          />
        </LinkElement>

        <!-- desk links-->
        <DeskList class="basis-1/3" v-slot="{ desks }">
          <div class="hidden flex-row flex-nowrap justify-end md:flex">
            <!-- desk 1 -->
            <LinkElement v-if="desks[0]" :href="desks[0].url">
              <TextElement
                class="whitespace-nowrap"
                fontFamily="Jost"
                :fontSize="{ xs: 11, md: 13, lg: 15 }"
                kind="nav-desk-link"
                component="div"
                color="000"
                :lineHeight="1.4"
              >
                {{ desks[0].name }}
              </TextElement>
            </LinkElement>
            <TextElement
              v-if="desks[0]"
              class="px-2 py-0 md:px-5"
              fontFamily="Jost"
              :fontSize="{ xs: 11, md: 13, lg: 15 }"
              kind="desk-links-separator-kind"
              component="div"
              color="000000B3"
              align="center"
              :lineHeight="1.4"
              >/</TextElement
            >
            <!-- desk 2 -->
            <LinkElement v-if="desks[1]" :href="desks[1].url">
              <TextElement class="whitespace-nowrap" component="div" kind="nav-desk-link">
                {{ desks[1].name }}
              </TextElement>
            </LinkElement>
            <TextElement
              v-if="desks[1]"
              class="hidden px-2 py-0 md:px-5 lg:block"
              kind="desk-links-separator-kind"
              :fontSize="{ xs: 11, md: 13, lg: 15 }"
              component="div"
              color="000000B3"
              align="center"
              :lineHeight="1.4"
              >/</TextElement
            >
            <!-- desk 3 -->

            <LinkElement class="hidden lg:flex" v-if="desks[2]" :href="desks[2].url">
              <TextElement class="whitespace-nowrap" kind="nav-desk-link" component="div">
                {{ desks[2].name }}
              </TextElement>
            </LinkElement>
          </div>
        </DeskList>
      </div>
    </ColorArea>
    <!-- menu backdrop transparent -->
    <transition name="fade">
      <div
        @click="isMenuOpen = false"
        v-show="isMenuOpen"
        class="fixed inset-0 z-20 h-screen w-screen cursor-pointer"
      />
    </transition>

    <!-- side menu -->
    <transition name="slide">
      <ColorArea
        v-show="isMenuOpen"
        class="fixed left-0 top-0 z-40 flex h-screen w-screen flex-row justify-end md:w-[60vw] lg:w-[50vw]"
        backgroundColor="ffffff"
        kind="fixed-side-menu-kind"
      >
        <div
          class="flex h-full w-full flex-col justify-between overflow-auto px-4 py-0 md:max-w-[25rem] md:px-[1.125rem]"
        >
          <!-- close button -->
          <button @click="isMenuOpen = false">
            <TextElement
              component="div"
              kind="menu-close-text"
              class="pt-5"
              color="2d2b29"
              :lineHeight="1.4"
              fontFamily="Jost"
              :fontSize="{ xs: 14, md: 15 }"
            >
              x Close
            </TextElement>
          </button>
          <!-- desk links side -->
          <DeskList v-slot="{ desks }">
            <ul class="flex w-full flex-col px-0 pb-4 pt-6 md:pb-[1.125rem] md:pt-7">
              <template v-for="chunk in chunkDesks(desks)">
                <LinkElement :key="`${chunk[0].id}-0`" v-if="chunk[0]" :href="chunk[0].url">
                  <TextElement
                    kind="side-menu-desk-0"
                    class="inline-block px-0 py-2 hover:underline hover:opacity-70 md:py-2.5"
                    :fontSize="{ xs: 27, md: 30 }"
                    component="li"
                    :lineHeight="1.4"
                    fontFamily="Jost"
                    color="025744"
                  >
                    {{ chunk[0].name }}
                  </TextElement>
                </LinkElement>
                <LinkElement :key="`${chunk[1].id}-1`" v-if="chunk[1]" :href="chunk[1].url">
                  <TextElement
                    kind="side-menu-desk-1"
                    class="inline-block px-0 py-2 hover:underline hover:opacity-70 md:py-2.5"
                    :fontSize="{ xs: 27, md: 30 }"
                    component="li"
                    :lineHeight="1.4"
                    fontFamily="Jost"
                    color="d77720"
                  >
                    {{ chunk[1].name }}
                  </TextElement>
                </LinkElement>
                <LinkElement v-if="chunk[2]" :key="chunk[2].id" :href="chunk[2].url">
                  <TextElement
                    kind="side-menu-desk-2"
                    class="inline-block px-0 py-2 hover:underline hover:opacity-70 md:py-2.5"
                    :fontSize="{ xs: 27, md: 30 }"
                    component="li"
                    :lineHeight="1.4"
                    fontFamily="Jost"
                    color="92110b"
                  >
                    {{ chunk[2].name }}
                  </TextElement>
                </LinkElement>
              </template>
            </ul>
          </DeskList>
          <!-- page links side menu -->
          <div class="flex flex-row md:flex-col">
            <!-- col 1 -->
            <PageList v-slot="{ pages }" class="flex w-full flex-col px-0 pb-4 pt-6 md:pb-[1.125rem] md:pt-7">
              <!-- add search as first element -->
              <SearchElement
                style="opacity: 1 !important"
                class="inline-block px-0 py-2 hover:underline hover:opacity-70 md:py-2.5"
              >
                <div class="flex flex-row flex-nowrap items-center">
                  <div class="-ml-1 inline-flex w-[1.875rem]">
                    <TextElement kind="search-icon-text" component="span">
                      <svg viewBox="0 0 24 24" class="h-[1.375rem] w-[1.375rem]">
                        <path
                          d="M14.57 15.32c-1.042 0.743-2.318 1.18-3.695 1.18-3.521 0-6.375-2.854-6.375-6.375s2.854-6.375 6.375-6.375c3.521 0 6.375 2.854 6.375 6.375 0 1.76-0.714 3.354-1.867 4.508l4.498 4.498c0.206 0.206 0.201 0.537-0.006 0.744-0.209 0.209-0.54 0.21-0.744 0.006l-4.56-4.56zM10.875 15.75c3.107 0 5.625-2.518 5.625-5.625s-2.518-5.625-5.625-5.625c-3.107 0-5.625 2.518-5.625 5.625s2.518 5.625 5.625 5.625v0z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </TextElement>
                  </div>

                  <TextElement
                    class="inline-flex"
                    kind="side-menu-page-kind"
                    :fontSize="{ xs: 18, md: 20 }"
                    component="span"
                    :lineHeight="1.4"
                    fontFamily="Jost"
                  >
                    Search
                  </TextElement>
                </div>
              </SearchElement>
              <!-- now put first half pages here -->
              <!-- https://flaviocopes.com/how-to-cut-array-half-javascript/ -->
              <LinkElement
                v-for="page in pages.filter((_, i, arr) => i < arr.length / 2)"
                :key="page.id"
                :href="page.url"
              >
                <TextElement
                  kind="side-menu-page-kind"
                  class="inline-block px-0 py-2 hover:underline hover:opacity-70 md:py-2.5"
                  component="span"
                >
                  {{ page.name }}
                </TextElement>
              </LinkElement>
            </PageList>

            <!-- col 2 -->
            <PageList v-slot="{ pages }" class="flex w-full flex-col px-0 pb-4 pt-6 md:pb-[1.125rem] md:pt-7">
              <!-- now put second half pages here -->
              <LinkElement
                v-for="page in pages.filter((_, i, arr) => i >= arr.length / 2)"
                :key="page.name"
                :href="page.url"
              >
                <TextElement
                  kind="side-menu-page-kind"
                  class="inline-block px-0 py-2 hover:underline hover:opacity-70 md:py-2.5"
                  :fontSize="{ xs: 18, md: 20 }"
                  component="span"
                  :lineHeight="1.4"
                  fontFamily="Jost"
                  color="000"
                  >{{ page.name }}</TextElement
                >
              </LinkElement>
            </PageList>
          </div>

          <!-- social links side menu -->
          <Site
            class="mt-auto flex w-full flex-row flex-nowrap gap-x-[0.625rem] px-0 py-[5.625rem] md:py-10"
            v-slot="{ site }"
          >
            <template v-for="(icon, social) in socials">
              <TextElement
                v-if="site && site.socials ? site.socials[social] : ''"
                :key="social"
                kind="menu-social-icon-text"
                component="span"
                color="7c7c7c"
                :font-size="19"
                class="flex"
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

import socials from './socials'

export default {
  components: {
    Navigation,
    Logo,
    DeskList,
    LinkElement,
    TextElement,
    ColorArea,
    SearchElement,
    Site,
    PageList,
  },
  data() {
    return {
      isMenuOpen: false,
      socials,
      limitHeaderDesks: 3,
      scrollPosition: 0, // initial value set in beforeMount
      vh: 0, // initial value set in beforeMount
      vw: 0, // initial value set in beforeMount
    }
  },
  watch: {
    isMenuOpen(newValue) {
      if (newValue === true) {
        document.body.classList.add('stop-scroll')
      } else {
        document.body.classList.remove('stop-scroll')
      }
    },
  },
  methods: {
    chunkDesks(desks) {
      return chunk(desks, 3)
    },
    updateScroll() {
      this.scrollPosition = this.getScroll()
    },
    getScroll() {
      return Math.round(window.scrollY)
    },
    updateVh() {
      this.vh = this.getVh()
    },
    getVh() {
      // https://stackoverflow.com/a/8876069/10030480
      return Math.round(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0))
    },
    updateVw() {
      this.vw = this.getVw()
    },
    getVw() {
      // https://stackoverflow.com/a/8876069/10030480
      return Math.round(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0))
    },
  },

  beforeMount() {
    this.updateScroll()
    this.updateVh()
    this.updateVw()
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll, { passive: true })
    window.addEventListener('resize', this.updateVh)
    window.addEventListener('resize', this.updateVw)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll, { passive: true })
    window.removeEventListener('resize', this.updateVh)
    window.removeEventListener('resize', this.updateVw)
    document.body.classList.remove('stop-scroll')
  },
  computed: {
    showScrollMenu() {
      if (typeof window === 'undefined') {
        return false
      }
      const scrollOffset = this.vw > 768 ? 200 : 100
      return this.scrollPosition >= this.vh - scrollOffset
    },
  },
}
</script>

<style lang="scss" scoped>
.header-grid-wrapper-scroll {
  top: 0;
  transition: top 400ms ease-in-out 0s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  transform: translateX(0%);
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>

<style>
.stop-scroll {
  overflow: hidden;
}
</style>
