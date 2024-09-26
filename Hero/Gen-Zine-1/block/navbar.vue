<template>
  <Navigation :class="{ 'nav-open': isMenuOpen }">
    <!-- top nav -->
    <div class="fixed inset-0 z-20 flex h-0 w-full items-start justify-between" :class="{ 'px-3 py-2': !currentPage }">
      <div class="w-[3.75rem] md:w-[7.5rem]" />

      <button class="mt-2" :class="{ 'px-3 pt-2': currentPage }" @click="isMenuOpen = true">
        <TextElement
          component="span"
          kind="navbar-menu-button"
          :font-size="{ xs: 24, lg: 30 }"
          font-family="Sinkin Sans"
          :line-height="1"
          color="54457A"
        >
          MENU
        </TextElement>
      </button>
    </div>

    <transition name="show-scrolled-nav">
      <ColorArea
        v-show="currentPage === 'author' || showScrolledNav"
        kind="menu-wrapper"
        class="fixed inset-0 z-20 flex h-fit w-full items-center justify-between px-3 py-2"
        background-color="f2f0f2"
      >
        <div class="w-[3.75rem] md:w-[7.5rem]">
          <LinkElement href="/">
            <Logo class="navbar-logo" />
          </LinkElement>
        </div>

        <button class="mt-2" @click="isMenuOpen = true">
          <TextElement
            component="span"
            kind="navbar-menu-button"
            :font-size="{ xs: 24, lg: 30 }"
            font-family="Sinkin Sans"
            :line-height="1"
            color="54457A"
          >
            MENU
          </TextElement>
        </button>
      </ColorArea>
    </transition>

    <transition name="nav-open">
      <!---open menu colorarea--->
      <ColorArea
        v-show="isMenuOpen"
        class="fixed top-0 z-40 h-full min-h-screen w-screen overflow-scroll"
        kind="menu-wrapper"
        background-color="f2f0f2"
      >
        <div
          class="relative mx-auto flex max-w-[90rem] flex-col px-5 md:px-10 lg:grid lg:min-h-full lg:grid-rows-[minmax(0,auto)_minmax(0,auto)_1fr] lg:px-[3.75rem]"
        >
          <div class="flex items-center justify-between py-4 md:justify-end md:gap-x-10 lg:justify-between">
            <SearchElement key="search" v-show="isMenuOpen">
              <TextElement
                component="span"
                color="54457a"
                kind="close-menu-svg-element"
                :font-size="{ xs: 20, md: 36 }"
                font-family="system-ui"
              >
                Search
              </TextElement>
            </SearchElement>

            <button class="hover:opacity-75" @click="isMenuOpen = false">
              <TextElement
                component="span"
                color="54457a"
                kind="close-menu-svg-element"
                :font-size="{ xs: 20, md: 36 }"
                font-family="system-ui"
              >
                Close
              </TextElement>
            </button>
          </div>

          <div
            class="h-[7.5rem] w-72 md:h-[15.625rem] md:w-[27.5rem] lg:absolute lg:top-[8.75rem] lg:right-[3.75rem] lg:w-[calc(60%-7.5rem)]"
          >
            <Logo class="navbar-logo" />
          </div>

          <DeskList v-slot="{ desks }" class="mt-4 mb-8 md:my-8 lg:my-12 lg:mx-0 lg:w-1/5 lg:max-w-[calc(90rem*0.2)]">
            <TextElement
              color="000"
              class="pt-4"
              v-for="desk of desks"
              :key="desk.id"
              :font-size="{ xs: 18, md: 30 }"
              kind="desk-list-links"
              font-family="system-ui"
              component="div"
            >
              <LinkElement :href="desk.url">{{ desk.name }}</LinkElement>
              <ColorArea kind="desk-divider" class="mt-4 h-px w-full lg:hidden" background-color="e2e0e3" />
            </TextElement>

            <div v-for="i in 3" :key="i">
              <TextInput
                color="000"
                component="div"
                :font-size="{ xs: 18, md: 30 }"
                font-family="system-ui"
                class="pt-4"
                kind="custom-list-links"
                :data-id="`${i}`"
                defaultValue="DESK"
              />
              <ColorArea kind="desk-divider" class="mt-4 h-px w-full lg:hidden" background-color="e2e0e3" />
            </div>
          </DeskList>

          <div class="lg:mb-8 lg:grid lg:grid-cols-[repeat(2,auto)_minmax(150px,1fr)] lg:grid-rows-[auto_1fr]">
            <div class="md:mt-6 lg:col-[1] lg:row-[1]">
              <TextInput
                v-for="i in 2"
                :key="i"
                color="54457a"
                :font-size="{ xs: 15, md: 20, lg: 15 }"
                component="div"
                class="mb-5"
                kind="menu-text-input-links"
                :data-id="`${i}`"
                defaultValue="DESK"
              />
            </div>

            <Site
              class="my-5 flex min-w-[16.25rem] md:my-10 lg:col-[1] lg:row-[2] lg:m-0 lg:mt-[3.75rem] lg:self-end"
              v-slot="{ site }"
            >
              <TextElement
                v-if="site.socials && site.socials.facebook"
                kind="social-icon-text-facebook"
                color="54457a"
                component="span"
                class="mr-5"
              >
                <a target="_blank" rel="noopener" :href="site.socials.facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    class="h-10 w-10"
                  >
                    <path
                      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"
                    ></path>
                  </svg>
                </a>
              </TextElement>
              <TextElement
                v-if="site.socials && site.socials.twitter"
                kind="social-icon-text-twitter"
                color="54457a"
                component="span"
                class="mr-5"
              >
                <a target="_blank" rel="noopener" :href="site.socials.twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    class="h-10 w-10"
                  >
                    <path
                      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"
                    />
                  </svg>
                </a>
              </TextElement>

              <TextElement
                v-if="site.socials && site.socials.instagram"
                kind="social-icon-text-instagram"
                color="54457a"
                component="span"
                class="mr-5"
              >
                <a target="_blank" rel="noopener" :href="site.socials.instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    class="h-10 w-10"
                  >
                    <path
                      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z"
                    />
                  </svg>
                </a>
              </TextElement>
            </Site>

            <PageList
              v-slot="{ pages }"
              class="mt-8 mb-5 flex h-[7.5rem] w-3/4 flex-col flex-wrap md:h-32 md:w-1/2 lg:col-[2] lg:row-[2] lg:m-0 lg:h-auto lg:w-auto lg:lg:flex-row lg:items-end lg:self-end"
            >
              <TextElement
                color="000"
                class="w-1/2 pb-5 lg:mr-6 lg:mt-4 lg:w-auto lg:pb-0"
                v-for="page of pages"
                :key="page.id"
                :font-size="{ xs: 12 }"
                :line-height="1.5"
                kind="page-list-links"
                font-family="system-ui"
                component="div"
              >
                <LinkElement :href="page.url"> {{ page.name }} </LinkElement>
              </TextElement>
            </PageList>

            <Site v-slot="{ site }" class="lg:col-[3] lg:row-[2] lg:m-0 lg:self-end">
              <TextInput
                class="mt-16 mb-5 w-full md:mb-10 lg:m-0 lg:ml-2"
                component="p"
                kind="menu-footer-copyright"
                color="000"
                :font-size="{ xs: 12 }"
                font-family="system-ui"
                :line-height="1.5"
                :align="{ xs: 'left' }"
                :default-value="getCopyrightCaption(site.name)"
              />
            </Site>
          </div>
        </div>
      </ColorArea>
    </transition>

    <div
      class="absolute left-1/2 z-10 mx-auto w-full -translate-x-1/2 lg:max-w-[1440px]"
      :class="{ hidden: currentPage === 'author' }"
    >
      <LinkElement href="/">
        <Logo class="navbar-logo m-3 w-[3.75rem] md:w-[7.5rem] lg:mt-1 lg:w-[30%] lg:max-w-[21.56rem]" />
      </LinkElement>
    </div>
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
    TextElement,
    TextInput,
  },
  props: {
    currentPage: {
      type: String,
    },
  },
  data() {
    return {
      isMenuOpen: false,
      bottomNavHideThreshold: 460,
      scrollPosition: 0, // initial value set in beforeMount
    }
  },
  computed: {
    showScrolledNav() {
      return this.scrollPosition > this.bottomNavHideThreshold
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
    getCopyrightCaption(data) {
      const yearText = new Date().getFullYear()
      return `© ${yearText} ${data}`
    },
  },
  beforeDestroy() {
    document.body.classList.remove('stop-scroll')
    window.removeEventListener('scroll', this.updateScroll, { passive: true })
  },
}
</script>

<style lang="scss" scoped>
.navbar-logo {
  &::v-deep {
    img {
      @apply h-auto w-full;
    }
  }
}

.stop-scroll {
  overflow: hidden;
}

.nav-open-enter-active {
  animation: slide-in-menu-animation 0.25s;
}

.nav-open-leave-active {
  animation: slide-in-menu-animation 0.25s reverse;
}

@keyframes slide-in-menu-animation {
  0% {
    margin-top: -100%;
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    margin-top: 0;
  }
}

.show-scrolled-nav-enter-active {
  animation: show-scrolled-nav-animation 0.2s;
}

.show-scrolled-nav-leave-active {
  animation: show-scrolled-nav-animation 0.2s reverse;
}

@keyframes show-scrolled-nav-animation {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
