<template>
  <Navigation class="z-20 w-full" :class="{ 'nav-open': isMenuOpen }">
    <!-- top nav -->
    <transition name="slide">
      <ColorArea
        kind="nav-background"
        class="fixed top-0 z-20 h-[80px] w-full border-b border-black p-[1.1rem]"
        backgroundColor="fff"
        v-show="showTopNav"
      >
        <div class="m-auto flex h-full max-w-[1440px] items-center justify-between">
          <div class="flex h-full items-center">
            <button class="pr-[1.1rem]" @click="isMenuOpen = true">
              <TextElement component="span" color="7C7C7C" class="hover:opacity-75" kind="menu-svg-element">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </TextElement>
            </button>
            <LinkElement href="/" class="h-full">
              <Logo class="logo-custom h-full" />
            </LinkElement>
          </div>
          <SearchElement class="hidden px-[1.1rem] md:block">
            <TextElement component="span" color="7C7C7C" class="hover:opacity-75" kind="search-svg-element">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </TextElement>
          </SearchElement>
        </div>
      </ColorArea>
    </transition>

    <!-- bottom nav -->
    <NavbarBottom class="relative z-0 hidden pt-[80px] md:block" />

    <!-- backdrop -->
    <transition name="show-backdrop">
      <div
        v-show="isMenuOpen"
        @click="isMenuOpen = false"
        class="absolute top-0 left-0 z-30 h-screen w-screen md:hidden"
        kind="backdrop-overlay"
      />
    </transition>
    <transition name="nav-open" @after-enter="showMenuContent = true" appear>
      <!---open menu colorarea--->
      <ColorArea
        v-show="isMenuOpen || showMenuContent"
        class="fixed top-0 z-40 flex h-screen w-full flex-col overflow-hidden md:w-[360px] md:overflow-auto"
        kind="side-menu-wrapper"
        backgroundColor="fff"
      >
        <div class="flex h-[80px] items-center justify-between px-4">
          <button class="hover:opacity-75" @click="isMenuOpen = false">
            <TextElement component="span" color="7C7C7C" kind="close-menu-svg-element" :font-size="20">
              <i class="icon icon-cross" />
            </TextElement>
          </button>

          <SearchElement key="search" v-show="isMenuOpen && showMenuContent">
            <TextElement component="span" color="7C7C7C" kind="search-svg-side-element">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </TextElement>
          </SearchElement>
        </div>
        <transition
          @after-leave="showMenuContent = false"
          name="nav-open-links"
          tag="div"
          class="flex grow flex-col overflow-hidden"
        >
          <NavbarMenuLinks key="links" v-show="isMenuOpen && showMenuContent" />
        </transition>
      </ColorArea>
    </transition>
  </Navigation>
</template>

<script>
import { ColorArea, LinkElement, Logo, Navigation, SearchElement, TextElement } from '@storipress/block'

import NavbarBottom from './navbar-bottom.vue'
import NavbarMenuLinks from './navbar-menu-links.vue'

export default {
  components: {
    Navigation,
    Logo,
    SearchElement,
    TextElement,
    LinkElement,
    ColorArea,
    NavbarMenuLinks,
    NavbarBottom,
  },
  data() {
    return {
      isMenuOpen: false,
      showMenuContent: false,
      bottomNavHideThreshold: 100,
      scrollPosition: 0, // initial value set in beforeMount
    }
  },
  computed: {
    showTopNav() {
      return this.scrollPosition < this.bottomNavHideThreshold
    },
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
  beforeMount() {
    this.updateScroll()
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll, { passive: true })
  },
  methods: {
    updateScroll() {
      this.scrollPosition = this.getScroll()
    },
    getScroll() {
      return Math.round(window.scrollY)
    },
  },
  beforeDestroy() {
    document.body.classList.remove('stop-scroll')
    window.removeEventListener('scroll', this.updateScroll, { passive: true })
  },
}
</script>

<style lang="scss">
.side-menu-wrapper {
  box-shadow: 4px 4px 8px rgb(0 0 0 / 20%);
  -webkit-box-shadow: 4px 4px 8px rgb(0 0 0 / 20%);

  @screen md {
    box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
    -webkit-box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
  }
}

.nav-open-enter-active {
  animation: slide-in-menu-animation 0.4s;
}

.nav-open-leave-active {
  animation: slide-in-menu-animation 0.4s reverse;
}

@keyframes slide-in-menu-animation {
  0% {
    margin-left: -100%;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    margin-left: 0;
  }
}

@for $i from 1 through 10 {
  .nav-open .side-menu-wrapper {
    .desk-list .desk-list-links:nth-child(#{$i}),
    .page-list .page-list-links:nth-child(#{$i}) {
      animation-delay: #{$i * 0.06667}s;
    }
  }
}

.nav-open .side-menu-wrapper {
  .desk-list .desk-list-links,
  .page-list .page-list-links {
    animation: slide-in-menu-links-animation 0.5s ease-out;
    animation-fill-mode: forwards;
  }
}

@keyframes slide-in-menu-links-animation {
  0% {
    transform: translate(-1rem, 0);
    opacity: 0;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease-in-out;
  transform: translateY(0%);
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
}
</style>
