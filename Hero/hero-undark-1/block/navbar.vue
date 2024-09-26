<template>
  <Navigation class="nav-body" :class="{ 'scroll-menu': showScrollMenu }" :height="{ md: '40px' }">
    <div class="nav-wrapper">
      <transition name="fade">
        <ColorArea v-show="isMenuOpen" kind="side-menu" backgroundColor="262626">
          <div class="side-menu-top">
            <Logo class="side-menu-logo" />
            <button class="close-link" @click="isMenuOpen = false">
              <TextElement kind="close-icon" color="7c7c7c" class="hover:opacity-75" component="div">
                <svg class="fill-current" viewBox="-6 -6 36 36">
                  <path :d="mdiClose" />
                </svg>
              </TextElement>
            </button>
          </div>
          <div class="flex flex-col md:flex-row md:justify-between">
            <!-- left  -->
            <div class="md:w-2/3 lg:w-7/12">
              <DeskList class="w-full" v-slot="{ desks }">
                <ul class="menu-desk-list">
                  <li v-for="(desk, index) in limitNavDesks(desks)" :key="index">
                    <LinkElement class="menu-desk-link" :href="desk.url">
                      <TextElement
                        kind="menu-desk-name"
                        component="div"
                        fontFamily="Jost"
                        :fontSize="{ xs: 24, md: 42, lg: 50 }"
                        color="ffffff"
                        class="hover:opacity-75"
                        :lineHeight="1.0"
                      >
                        {{ desk.name }}
                      </TextElement>
                      <TextInput
                        kind="menu-desk-trailing"
                        component="span"
                        fontFamily="Jost"
                        :fontSize="{ xs: 12, md: 16 }"
                        :lineHeight="1.6"
                        color="bfbfbf"
                        align="right"
                        :defaultValue="desk.name"
                        bold
                      />
                    </LinkElement>
                  </li>
                </ul>
              </DeskList>

              <ColorArea class="w-full p-4 md:p-8" kind="email-form" backgroundColor="fff">
                <TextInput component="div" kind="newsletter" fontFamily="Jost" defaultValue="GET OUR NEWSLETTER" />
                <SubscribeForm class="mt-6 mb-3 flex items-end justify-between md:mb-4">
                  <template #default="{ result, message, clear }">
                    <div class="relative w-full">
                      <div class="flex w-full justify-between border-b-2 border-black">
                        <label for="form-input-email" class="sr-only">Email address</label>
                        <SubscribeEmail id="form-input-email" class="w-11/12" placeholder="Your Email Address" />
                        <button type="submit">
                          <TextInput
                            kind="submit-button"
                            component="span"
                            bold
                            color="0A0A0A"
                            fontFamily="Jost"
                            class="hover:opacity-75"
                            defaultValue="SUBMIT"
                          />
                        </button>
                      </div>
                      <div
                        v-show="message"
                        class="absolute mt-4 w-full rounded-md p-4"
                        :class="result === 'error' ? 'bg-red-50' : 'bg-green-50'"
                      >
                        <div class="flex">
                          <div class="shrink-0" :class="result === 'error' ? 'text-red-50' : 'text-green-50'">
                            <template v-if="result === 'error'">
                              <!-- Heroicon name: solid/x-circle -->
                              <svg
                                class="h-5 w-5 text-red-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </template>
                            <template v-else>
                              <!-- Heroicon name: solid/check-circle -->
                              <svg
                                class="h-5 w-5 text-green-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </template>
                          </div>
                          <div class="ml-3">
                            <h3
                              class="text-sm font-medium"
                              :class="result === 'error' ? 'text-red-800' : 'text-green-800'"
                            >
                              {{ result === 'error' ? 'Error' : 'Success' }}
                            </h3>
                            <div class="mt-2 text-sm" :class="result === 'error' ? 'text-red-700' : 'text-green-700'">
                              <p class="subscribe-result-msg" v-html="message" />
                            </div>
                          </div>
                          <div v-if="clear" class="ml-auto pl-3">
                            <div class="-mx-1.5 -my-1.5">
                              <button
                                type="button"
                                :class="
                                  result === 'error'
                                    ? 'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50'
                                    : 'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50'
                                "
                                class="inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                                @click="clear"
                              >
                                <span class="sr-only">Dismiss</span>
                                <i class="icon-cross_thin text-sm" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </SubscribeForm>
              </ColorArea>
            </div>
            <!-- right -->
            <div class="side-menu-right">
              <DeskList style="border-bottom: 1px solid #bfbfbf" class="mb-6 pb-6" v-slot="{ desks }">
                <LinkElement
                  v-for="(desk, index) in getListPartOutOf2(desks, 0)"
                  :key="index + desk.id"
                  :href="desk.url"
                  class="flex flex-col justify-center md:px-4"
                  style="height: 1.6rem"
                >
                  <TextElement component="div" kind="menu-item">{{ desk.name }}</TextElement>
                </LinkElement>
                <TextElement
                  class="select-nonez flex flex-col justify-center md:px-4"
                  style="height: 1.6rem"
                  component="div"
                  kind="menu-item"
                  >~~~~~~~~~~~~</TextElement
                >
                <LinkElement
                  v-for="(desk, index) in getListPartOutOf2(desks, 1)"
                  :key="index + desk.id"
                  :href="desk.url"
                  class="flex flex-col justify-center md:px-4"
                  style="height: 1.6rem"
                >
                  <TextElement component="div" kind="menu-item">{{ desk.name }}</TextElement>
                </LinkElement>
              </DeskList>
              <PageList class="lg:grow" v-slot="{ pages }">
                <LinkElement
                  v-for="(page, index) in pages"
                  :key="index + page.id"
                  :href="page.url"
                  class="flex flex-col justify-center md:px-4"
                  style="height: 1.6rem"
                >
                  <TextElement
                    component="div"
                    style="letter-spacing: 1px"
                    class="hover:opacity-75"
                    kind="menu-item-page"
                    fontFamily="Jost"
                    :fontSize="{ xs: 14 }"
                    color="bfbfbf"
                    :lineHeight="1.0"
                    >{{ page.name }}</TextElement
                  >
                </LinkElement>
                <SearchElement>
                  <div class="flex flex-col justify-center md:px-4" style="height: 1.6rem">
                    <TextElement
                      component="div"
                      style="letter-spacing: 1px"
                      class="hover:opacity-75"
                      kind="menu-item-page"
                      fontFamily="Jost"
                      :fontSize="{ xs: 14 }"
                      color="bfbfbf"
                      :lineHeight="1.0"
                      >Search</TextElement
                    >
                  </div>
                </SearchElement>
              </PageList>
              <Site class="mt-2 block w-full px-3" v-slot="{ site }">
                <template v-for="(icon, social) in socials">
                  <TextElement
                    v-if="site && site.socials ? site.socials[social] : ''"
                    :key="social"
                    kind="social-icon"
                    component="div"
                    color="7c7c7c"
                    :font-size="28"
                    class="social-link hover:opacity-75"
                  >
                    <ColorArea kind="social-bg" backgroundColor="000" />
                    <a
                      rel="noopener"
                      target="_blank"
                      :href="site && site.socials ? site.socials[social] : ''"
                      class="social-icon"
                    >
                      <svg viewBox="0 0 24 24" height="1em" width="1em">
                        <path :d="icon" fill="currentColor"></path>
                      </svg>
                    </a>
                  </TextElement>
                </template>
              </Site>
            </div>
          </div>
        </ColorArea>
      </transition>
      <div class="nav-content-wrapper">
        <div class="hidden flex-1 md:block">
          <DeskList class="hidden lg:flex lg:flex-row lg:flex-wrap" v-slot="{ desks }">
            <LinkElement
              v-for="(desk, index) in limitNavDesks(desks)"
              :key="index + desk.id"
              :href="desk.url"
              class="relative hover:opacity-75"
            >
              <TextElement
                kind="menu-item-scroll"
                component="div"
                fontFamily="Jost"
                :fontSize="{ xs: 14 }"
                color="0a0a0a"
                :lineHeight="1.0"
                class="absolute top-0 left-0 flex h-full w-full flex-col justify-center hover:opacity-75 md:px-4"
              >
                <div>{{ desk.name }}</div>
              </TextElement>
              <TextElement
                component="div"
                kind="menu-item"
                style="height: 3.25rem"
                class="relative flex flex-col justify-center whitespace-nowrap md:px-4"
                ><div>{{ desk.name }}</div></TextElement
              >
            </LinkElement>
          </DeskList>
        </div>
        <div class="nav-logo-wrapper">
          <LinkElement class="nav-logo-link" href="/">
            <Logo class="logo" />
          </LinkElement>
        </div>
        <PageList class="nav-links-wrapper" v-slot="{ pages }">
          <button class="menu-button hover:opacity-75" @click="isMenuOpen = true">
            <TextElement
              kind="menu-item"
              component="span"
              fontFamily="Jost"
              :fontSize="{ xs: 14 }"
              color="fff"
              :lineHeight="1.0"
            >
              Menu
            </TextElement>
            <TextElement kind="menu-item-scroll" component="span"> Menu </TextElement>
            <span class="menu-icon">
              <ColorArea kind="menu-bar" backgroundColor="fff"></ColorArea>
              <ColorArea kind="menu-bar"></ColorArea>
              <ColorArea kind="menu-bar"></ColorArea>
            </span>
          </button>
          <LinkElement v-if="pages[0]" :href="pages[0].url" class="relative hover:opacity-75">
            <TextElement
              kind="menu-item-scroll"
              component="div"
              class="absolute top-0 left-0 flex h-full w-full flex-col justify-center md:px-4"
            >
              <div>{{ pages[0].name }}</div>
            </TextElement>
            <TextElement
              component="div"
              kind="menu-item"
              style="height: 3.25rem"
              class="relative flex flex-col justify-center whitespace-nowrap md:px-4"
              ><div>{{ pages[0].name }}</div></TextElement
            >
          </LinkElement>
        </PageList>
      </div>
      <!-- opacity-0 on scroll -->
      <!-- show scroll menu available -->
      <ColorArea kind="nav-bg" backgroundColor="262626" />
      <ColorArea kind="nav-bg-scroll" backgroundColor="fff" />
    </div>
  </Navigation>
</template>

<script>
import {
  mdiClose,
  mdiFacebook,
  mdiInstagram,
  mdiLinkedin,
  mdiPinterest,
  mdiReddit,
  mdiTwitter,
  mdiWhatsapp,
  mdiYoutube,
} from '@mdi/js'
import {
  ColorArea,
  DeskList,
  LinkElement,
  Logo,
  Navigation,
  PageList,
  SearchElement,
  Site,
  SubscribeEmail,
  SubscribeForm,
  TextElement,
  TextInput,
} from '@storipress/block'

import { geneva, tiktok } from './socials'

export default {
  components: {
    ColorArea,
    DeskList,
    LinkElement,
    Logo,
    Navigation,
    PageList,
    SearchElement,
    Site,
    SubscribeEmail,
    SubscribeForm,
    TextElement,
    TextInput,
  },
  data() {
    return {
      isMenuOpen: false,
      mdiClose,
      navDesksLimit: 4,
      deskListPartOneRatio: 0.7,
      scrollPosition: 0, // initial value set in beforeMount
      vw: 0, // initial value set in beforeMount
      socials: {
        facebook: mdiFacebook,
        twitter: mdiTwitter,
        instagram: mdiInstagram,
        linkedin: mdiLinkedin,
        youtube: mdiYoutube,
        pinterest: mdiPinterest,
        whatsapp: mdiWhatsapp,
        reddit: mdiReddit,
        tiktok,
        geneva,
      },
    }
  },
  methods: {
    limitNavDesks(desks) {
      let result
      if (desks && Array.isArray(desks)) {
        if (desks.length > this.navDesksLimit) {
          result = desks.slice(0, this.navDesksLimit)
        } else {
          result = desks
        }
      }
      return result
    },
    getListPartOutOf2(list, partIndex) {
      if (!list || !Array.isArray(list)) {
        // invalid list
        return []
      }
      if (partIndex !== 0 && partIndex !== 1) {
        // invalid partIndex
        return []
      }
      const part1Size = Math.round((list.length - this.navDesksLimit) * this.deskListPartOneRatio)

      if (partIndex === 0) {
        // part1
        return list.slice(this.navDesksLimit, this.navDesksLimit + part1Size)
      } else {
        // part2
        return list.slice(this.navDesksLimit + part1Size)
      }
    },
    updateScroll() {
      this.scrollPosition = this.getScroll()
    },
    getScroll() {
      return Math.round(window.scrollY)
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
    this.updateVw()
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll, { passive: true })
    window.addEventListener('resize', this.updateVw)
  },
  beforeDestroy() {
    document.body.classList.remove('stop-scroll')
    window.removeEventListener('scroll', this.updateScroll, { passive: true })
    window.removeEventListener('resize', this.updateVw)
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
  computed: {
    showScrollMenu() {
      if (typeof window === 'undefined') {
        return false
      }

      if (this.vw >= 768) {
        const scrollOffset = 92 // 5.75rem
        return this.scrollPosition >= scrollOffset
      } else {
        return false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-body {
  @apply relative;

  @screen md {
    padding-top: 52px;
  }
}

.nav-wrapper {
  @apply relative h-auto w-full;

  @screen md {
    @apply fixed inset-x-0 top-0 z-30;
  }
}

.nav-content-wrapper {
  @apply relative z-20 flex h-auto w-full justify-between;

  @screen md {
    padding: 0 15px;
  }
}

.nav-bg {
  @apply absolute inset-0 z-10 h-full w-full transition-opacity;
}

.nav-bg-scroll {
  @apply absolute inset-0 z-0 h-full w-full;
}

.nav-links-wrapper {
  @apply flex flex-1 flex-row items-center justify-end overflow-y-visible;

  height: 3.25rem;
}

.nav-logo-wrapper {
  @apply flex content-start items-start;

  height: 5.75rem;
  transition: height 400ms cubic-bezier(0, 1.18, 0.93, 1.11);

  @screen md {
    @apply pt-4;

    &:hover {
      .nav-logo-link {
        @apply py-2.5;
      }
    }
  }
}

.nav-logo-link {
  @apply flex h-screen pt-4 pl-6 filter transition;

  transition:
    padding 100ms cubic-bezier(0, 1.18, 0.93, 1.11),
    max-height 100ms cubic-bezier(0, 1.18, 0.93, 1.11);
  max-height: 2.25rem;

  @screen md {
    @apply py-3 px-0;

    max-height: 3.25rem;
  }
}

.logo {
  @apply inline-flex h-full w-auto justify-self-stretch;
}

.logo::v-deep img {
  @apply mx-auto w-auto;
}

.menu-desk-list {
  @apply flex w-full flex-col flex-nowrap;
}

.menu-desk-link {
  @apply relative my-4 flex flex-row items-end border-b border-white md:mb-12;
}

.menu-desk-name {
  @apply w-full transition-colors;
}

.menu-desk-trailing {
  @apply absolute right-0 bottom-0;

  letter-spacing: 1px;
}

.menu-button {
  @apply relative flex h-full flex-row items-center gap-2 md:px-4;

  height: 3.25rem;
  border-right: 1px solid #555;

  .menu-item {
    @apply z-10 inline-flex transition-opacity;
  }

  .menu-item-scroll {
    @apply absolute inset-x-4 z-0 inline-flex opacity-0 transition-opacity;
  }
}

.menu-item {
  @apply transition-colors;

  z-index: 2;
  letter-spacing: 1px;
}

.menu-item-scroll {
  @apply z-0 opacity-0 transition-colors;

  letter-spacing: 1px;
}

.menu-bar {
  @apply w-5;

  margin: 3px 0 5px 0;
  height: 1px;
}

%brightness-filter {
  @screen md {
    filter: brightness(0) saturate(0);
  }
}

.scroll-menu {
  .nav-bg {
    @screen md {
      @apply opacity-0;
    }
  }

  .nav-logo-wrapper {
    @screen md {
      @apply pt-0;

      height: 3.25rem;
    }
  }

  .nav-logo-link {
    @extend %brightness-filter;
  }

  .logo {
    @extend %brightness-filter;

    &::v-deep img {
      @extend %brightness-filter;
    }
  }

  .menu-item {
    @apply pointer-events-none opacity-0;
  }

  .menu-item-scroll {
    @apply opacity-100;
  }
}

.side-menu-logo {
  @apply mr-2.5;

  width: 167px;

  @screen md {
    width: 195px;
  }
}

.side-menu {
  @apply fixed inset-0 z-50 flex w-full flex-col overflow-scroll overscroll-contain px-8 pt-8;
}

.side-menu-top {
  @apply flex items-center justify-between pb-8;
}

.side-menu-right {
  @apply mt-8 pb-8 md:mt-0 md:w-1/3 lg:flex lg:w-1/4 lg:flex-col;

  @screen md {
    border-left: 1px solid #bfbfbf;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    z-index 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  z-index: 0;
}

.close-link {
  @apply relative ml-2.5 flex items-center justify-center rounded-full border-2 border-white;

  .close-icon {
    @apply flex h-16 w-16 p-3 transition-colors;
  }
}

.email {
  @apply overflow-hidden lg:w-full;

  width: 68.5%;
}

.social-link {
  @apply relative m-1 inline-flex items-center justify-center overflow-hidden rounded-full border border-white;

  .social-icon {
    @apply z-20 flex h-12 w-12 items-center justify-center transition-colors;

    width: 54px;
    height: 54px;
    padding: 7px;
  }

  .social-bg {
    @apply absolute z-10 h-full w-full opacity-100 transition-opacity;
  }
}

input {
  @apply border-none bg-transparent outline-none;
}

input,
input::placeholder {
  @apply w-11/12 pb-[3px] text-2xl leading-4 lg:text-4xl;

  color: #0a0a0a;
  font-family: Jost;
}
</style>

<style>
.stop-scroll {
  overflow: hidden;
}
</style>
