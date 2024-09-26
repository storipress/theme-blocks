<template>
  <Navigation :class="!isHero && 'fixed inset-x-0 top-0 z-10 w-full bg-black'" height="90px">
    <div
      class="w-full md:px-5"
      :class="isHero ? 'absolute inset-x-0 top-0 z-10' : 'flex items-center justify-between py-5'"
    >
      <LinkElement href="/" class="ml-4 block w-2/3" :class="isHero && 'mt-5'">
        <Logo class="logo-max" />
      </LinkElement>
      <div
        @click="toggleSidebar"
        class="right-[25px] top-[15px] z-[2] h-6 w-6 cursor-pointer"
        :class="isHero ? 'fixed mt-2' : 'flex flex-col justify-center'"
      >
        <ColorArea v-for="i in 3" :key="i" class="mb-1 h-px" backgroundColor="fff" kind="menu-hamburger-icon-line" />
      </div>
    </div>
    <Portal :open="true">
      <!-- side menu content -->
      <div :class="['sidebar-menu-container', { 'sidebar-menu-container-open': isSidebarOpenState }]">
        <ColorArea
          backgroundColor="f2f2f2"
          class="h-full w-full overflow-x-hidden overflow-y-scroll"
          kind="sidebar-background"
        >
          <!-- content -->
          <div class="sidebar-menu-padding-y">
            <LinkElement href="/" class="ml-4 block w-2/3 md:ml-9">
              <Logo class="logo-max darken" />
            </LinkElement>
            <div class="right-sidebar-button-absolute mt-2 h-6 w-6 cursor-pointer" @click="toggleSidebar">
              <ColorArea kind="close-icon-line" style="transform: rotate(45deg)" backgroundColor="000" />
              <ColorArea kind="close-icon-line" style="transform: rotate(-45deg)" />
            </div>
            <!-- sidebar search  -->
            <SearchElement class="mt-7 mb-5 h-5 px-5 md:px-10">
              <!-- customized icon -->
              <TextElement color="7c7c7c" kind="search-icon" component="div">
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  class="stroke-current"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="7.5" cy="7.5" r="7" stroke-width="1.3" />
                  <line x1="11.3536" y1="12.6464" x2="18.3536" y2="19.6464" stroke-width="1.3" />
                </svg>
              </TextElement>
            </SearchElement>
            <!-- sidebar search  -->
            <!-- Sidebar links  -->
            <div class="flex w-full flex-col px-5 md:px-10">
              <DeskList v-slot="{ desks }">
                <TextElement
                  v-for="desk in desks"
                  :key="desk.id"
                  component="div"
                  kind="sidebar-category"
                  class="sidebar-category py-3"
                  :fontSize="16"
                  fontFamily="Cooper Hewitt Heavy"
                  :lineHeight="1"
                >
                  <LinkElement :href="desk.url"> {{ desk.name }} </LinkElement>
                </TextElement>
              </DeskList>
            </div>
            <!-- Sidebar links  -->
            <!-- line  -->
            <ColorArea
              style="max-width: 335px"
              class="mx-5 mt-2 h-px md:mx-10"
              kind="sidebar-line"
              backgroundColor="111"
            />
            <!-- line  -->
            <!-- Sidebar links 2  -->
            <div class="mt-5 flex w-full flex-col px-5 md:px-10">
              <PageList v-slot="{ pages }">
                <TextElement
                  v-for="page in pages"
                  :key="page.id"
                  component="div"
                  kind="sidebar-links"
                  class="sidebar-links pb-5"
                  color="111"
                  :fontSize="16"
                  fontFamily="IBM Plex Sans"
                  :lineHeight="1"
                >
                  <LinkElement :href="page.url">{{ page.name }}</LinkElement>
                </TextElement>
              </PageList>
            </div>
            <!-- Sidebar links 2  -->
            <!-- social media icon  -->
            <Site v-slot="{ site }" class="mt-8 mb-5 flex w-full flex-row px-5 md:px-10">
              <a v-if="site.facebook" :href="site.facebook" class="inline-flex" target="_blank" rel="noopener">
                <TextElement color="7C7C7C" kind="social-icon-facebook" component="div">
                  <svg viewBox="0 0 24 24" class="mr-4 w-4 fill-current stroke-current">
                    <path
                      d="M21.75 0h-19.5c-1.237 0-2.25 1.013-2.25 2.25v19.5c0 1.237 1.013 2.25 2.25 2.25h9.75v-10.5h-3v-3h3v-1.5c0-2.48 2.020-4.5 4.5-4.5h3v3h-3c-0.825 0-1.5 0.675-1.5 1.5v1.5h4.5l-0.75 3h-3.75v10.5h6.75c1.237 0 2.25-1.013 2.25-2.25v-19.5c0-1.237-1.013-2.25-2.25-2.25z"
                    ></path>
                  </svg>
                </TextElement>
              </a>
              <a v-if="site.twitter" :href="site.twitter" class="inline-flex" target="_blank" rel="noopener">
                <TextElement color="7C7C7C" kind="social-icon-twitter" component="div">
                  <svg viewBox="0 0 24 24" class="mr-4 w-4 fill-current stroke-current">
                    <path
                      d="M24 5.306c-0.881 0.394-1.833 0.656-2.827 0.773 1.017-0.609 1.795-1.575 2.166-2.723-0.952 0.563-2.006 0.975-3.127 1.195-0.9-0.956-2.18-1.552-3.595-1.552-2.719 0-4.922 2.203-4.922 4.922 0 0.384 0.042 0.759 0.127 1.12-4.092-0.206-7.72-2.166-10.148-5.147-0.422 0.727-0.666 1.575-0.666 2.475 0 1.706 0.867 3.216 2.189 4.097-0.806-0.023-1.566-0.248-2.231-0.614 0 0.019 0 0.042 0 0.061 0 2.386 1.697 4.378 3.952 4.828-0.412 0.112-0.848 0.173-1.298 0.173-0.319 0-0.623-0.033-0.928-0.089 0.628 1.955 2.447 3.38 4.598 3.422-1.688 1.322-3.806 2.109-6.117 2.109-0.398 0-0.788-0.023-1.177-0.070 2.184 1.402 4.772 2.212 7.552 2.212 9.056 0 14.011-7.505 14.011-14.011 0-0.216-0.005-0.427-0.014-0.637 0.961-0.689 1.795-1.556 2.456-2.545z"
                    ></path>
                  </svg>
                </TextElement>
              </a>
            </Site>
            <!-- social media icon  -->
          </div>
        </ColorArea>
      </div>
    </Portal>
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
  Portal,
  SearchElement,
  Site,
  TextElement,
} from '@storipress/block'

export default {
  name: 'navbar',
  components: {
    LinkElement,
    Logo,
    Navigation,
    TextElement,
    SearchElement,
    Site,

    ColorArea,
    Portal,
    DeskList,
    PageList,
  },

  props: {
    currentPage: {
      type: String,
    },
  },

  data() {
    return {
      isSidebarOpenState: false,
    }
  },

  computed: {
    isHero() {
      return !this.currentPage
    },
  },

  methods: {
    toggleSidebar() {
      this.isSidebarOpenState = !this.isSidebarOpenState
    },
  },

  watch: {
    isSidebarOpenState(newValue) {
      if (newValue) {
        document.body.classList.add('stop-scroll')
      } else {
        document.body.classList.remove('stop-scroll')
      }
    },
  },

  beforeDestroy() {
    document.body.classList.remove('stop-scroll')
  },
}
</script>

<style lang="scss" scoped>
.sidebar-menu-padding-y {
  @apply py-5;

  @screen md {
    padding: 14px 0 20px 0;
  }
}

.logo-max {
  @apply h-screen w-full;

  max-height: 50px;

  &::v-deep img {
    @apply w-auto;
  }
}

.darken {
  @apply brightness-0 saturate-0 filter;
}

.right-sidebar-button {
  position: fixed;
  right: 25px;
  top: 15px;
  z-index: 2;
}

.right-sidebar-button-absolute {
  position: absolute;
  right: 25px;
  top: 15px;
  z-index: 2;
}

.sidebar-menu-container {
  @apply fixed top-0 bottom-0 w-full;

  left: -110%;
  z-index: 30;
  transition: left 0s ease-in-out;
}

.sidebar-menu-container-open {
  -webkit-transform: translateZ(3);
  transform: translateZ(3);
  left: 0;
  visibility: visible;
  transition: all 0.35s ease-in-out;
}

.close-icon-line {
  @apply absolute top-1/2 w-full;

  height: 1.3px;
}
</style>

<style>
.stop-scroll {
  overflow: hidden;
}
</style>
