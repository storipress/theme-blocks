<template>
  <Navigation class="fixed top-0 z-20 w-full" :height="{ xs: '64px', md: '80px', lg: '125px' }">
    <!---topnav colorarea--->
    <ColorArea
      class="header-top border-color--hbr--alt relative z-20 flex items-end justify-between border-b"
      backgroundColor="fff"
      kind="nav-bg-wrapper"
    >
      <div class="flex items-end">
        <button class="mr-4 md:mr-10" @click="isMenuOpen = true">
          <TextElement component="span" color="7c7c7c" clas="hover:opacity-75" kind="menu-svg-element">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </TextElement>
        </button>
        <LinkElement href="/" class="border-color--hbr--alt logo-wrapper-custom">
          <Logo class="logo-custom" />
        </LinkElement>
      </div>
      <SearchElement
        style="padding-left: 18px"
        class="border-color--hbr--alt box-content hidden h-10 w-10 items-end justify-end border-l md:flex"
      >
        <TextElement component="span" color="7c7c7c" class="hover:opacity-75" kind="search-svg-element">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </TextElement>
      </SearchElement>
    </ColorArea>
    <!-- bottom nav -->
    <transition name="slide">
      <NavbarBottom class="relative z-0" v-show="showBottomNav" />
    </transition>

    <!-- backdrop -->
    <transition name="show-backdrop">
      <div v-show="isMenuOpen" @click="isMenuOpen = false" class="z-30 md:hidden" kind="backdrop-overlay" />
    </transition>
    <transition name="open-menu" @after-enter="showMenuContent = true" appear>
      <!---open menu colorarea--->
      <ColorArea v-show="isMenuOpen || showMenuContent" class="z-40" kind="side-menu-wrapper" backgroundColor="fff">
        <div class="close-button-wrapper">
          <LinkElement href="/">
            <Logo class="h-[2.5rem]" />
          </LinkElement>

          <button class="close-button-link hover:opacity-75" @click="isMenuOpen = false">
            <TextElement component="span" color="7c7c7c" kind="close-menu-svg-element">
              <i class="icon icon-cross" />
            </TextElement>
          </button>
        </div>
        <transition-group
          @after-leave="showMenuContent = false"
          name="open-menu-columns"
          tag="div"
          class="side-menu-inner-transition-group"
          appear
        >
          <!-- mobile search button -->
          <SearchElement
            key="search"
            v-show="isMenuOpen && showMenuContent"
            style="margin-top: 33px"
            class="show-only-mobile-flex border-color--hbr--side-menu w-full border-b border-t"
          >
            <TextElement
              component="span"
              color="7c7c7c"
              kind="search-svg-side-element"
              style="width: 60px; height: 60px"
              class="flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </TextElement>
          </SearchElement>

          <!-- search button md -->
          <SearchElement
            key="search-md"
            style="margin-bottom: 70px"
            class="hide-on-mobile-flex border-color--hbr--top-menu-md w-full border-b"
          >
            <TextElement
              component="span"
              color="7c7c7c"
              kind="search-svg-side-element"
              style="padding-top: 12px; padding-bottom: 17px; width: 55px"
              class="flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </TextElement>
          </SearchElement>

          <MenuLinksWrapper key="links" v-show="isMenuOpen && showMenuContent" />
        </transition-group>
      </ColorArea>
    </transition>
  </Navigation>
</template>

<script>
import { ColorArea, LinkElement, Logo, Navigation, SearchElement, TextElement } from '@storipress/block' // Waheguru

import menuHashMixin from './menu-hash-mixin.js'
import MenuLinksWrapper from './menu-links-wrapper.vue'
import NavbarBottom from './navbar-bottom.vue'
import scrollPositionMixin from './scroll-positon-mixin.js'

export default {
  components: {
    Navigation,
    Logo,
    SearchElement,
    TextElement,
    LinkElement,
    ColorArea,
    MenuLinksWrapper,
    NavbarBottom,
  },
  mixins: [menuHashMixin, scrollPositionMixin],
  data() {
    return {
      showMenuContent: false,
      bottomNavHideThreshold: 100,
    }
  },
  computed: {
    showBottomNav() {
      return this.scrollPosition < this.bottomNavHideThreshold
    },
  },
}
</script>

<style scoped lang="scss">
.header-top {
  padding: 12px 20px;

  @screen md {
    padding: 20px 40px;
  }
}

.logo-wrapper-custom {
  @apply inline-flex h-screen border-l pl-5;

  max-height: 30px;

  @screen md {
    max-height: 40px;
  }

  .logo-custom {
    @apply inline-flex w-auto self-stretch;
  }

  .logo-custom::v-deep img {
    @apply w-auto;
  }
}

.side-menu-wrapper {
  @apply fixed top-0 flex h-screen flex-col overflow-hidden;

  width: calc(100% - 100px);
  box-shadow: 4px 4px 8px rgb(0 0 0 / 20%);
  -webkit-box-shadow: 4px 4px 8px rgb(0 0 0 / 20%);

  @screen md {
    @apply h-auto max-h-screen w-full overflow-auto;

    box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
    -webkit-box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
  }

  .side-menu-inner-transition-group {
    @apply flex grow flex-col overflow-hidden;

    @screen md {
      @apply relative mx-auto mt-6 block h-auto overflow-auto;

      width: 740px;
      min-height: 450px;
    }
  }

  .close-button-wrapper {
    @apply relative mx-5 mt-9 flex justify-between md:m-0 md:w-full md:px-10 md:py-[1.375rem];
    .close-button-link {
      @screen md {
        @apply flex  h-10 w-10 items-center justify-center;
      }
    }
  }
}

.open-menu-enter-active {
  animation: slide-in-menu-animation 0.4s;

  @screen md {
    animation: slide-in-top-menu-animation 0.6s;
    animation-timing-function: ease-in-out;
  }
}

.open-menu-leave-active {
  animation: slide-in-menu-animation 0.4s reverse;

  @screen md {
    animation: slide-in-top-menu-animation 0.6s reverse;
    animation-timing-function: ease-in-out;
  }
}

.show-backdrop-enter-active {
  animation: fade-in-overlay-animation 0.4s;
}

.show-backdrop-leave-active {
  animation: fade-in-overlay-animation 0.4s reverse;
}

.open-menu-columns-enter-active {
  animation: fade-in-overlay-animation 0.3s;

  @screen md {
    animation: slide-in-list-animation 0.7s;
    animation-timing-function: ease-in-out;
  }
}

.open-menu-columns-leave-active {
  animation: fade-in-overlay-animation 0.3s reverse;

  @screen md {
    animation: slide-out-list-animation 0.7s;
    animation-timing-function: ease-in-out;
  }
}

.backdrop-overlay {
  @apply absolute left-0 top-0 h-screen w-screen;
}

.hide-on-mobile-flex {
  display: none !important;

  @screen md {
    display: flex !important;
  }
}

.show-only-mobile-flex {
  display: flex !important;

  @screen md {
    display: none !important;
  }
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

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease-in-out;
  transform: translateY(0%);
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
}

@keyframes slide-in-top-menu-animation {
  0% {
    margin-top: -100%;
  }

  100% {
    margin-top: 0;
  }
}

@keyframes fade-in-overlay-animation {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slide-in-list-animation {
  0% {
    margin-top: -70px;
    opacity: 0;
  }

  15% {
    margin-top: 2px;
  }

  29% {
    margin-top: 0;
  }

  37% {
    margin-top: -4px;
  }

  100% {
    margin-top: 0;
    opacity: 1;
  }
}

@keyframes slide-out-list-animation {
  0% {
    margin-top: 0;
    opacity: 1;
  }

  94% {
    margin-top: -70px;
  }

  100% {
    opacity: 0;
  }
}
</style>

<style lang="scss">
.stop-scroll {
  overflow: hidden;
}
</style>
