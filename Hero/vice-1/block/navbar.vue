<template>
  <Navigation class="fixed inset-x-0 top-0 z-20 mx-auto w-full" :height="{ xs: '48px', lg: '80px' }">
    <!-- navbar with links -->
    <ColorArea
      backgroundColor="fff"
      kind="navbar-box-kind"
      class="inset-x-0 mx-auto flex h-12 w-full flex-row content-center justify-between px-5 py-3 duration-300 md:h-20 md:px-8"
    >
      <!-- nav toggle and rwd logo links -->
      <div class="flex flex-row content-center md:w-full md:min-w-0 md:flex-1">
        <div class="flex flex-col place-content-center">
          <div class="h-4 w-4 cursor-pointer hover:opacity-75" role="button" @click="isMenuVisible = !isMenuVisible">
            <TextElement
              kind="menu-bar-text"
              component="i"
              class="align-top"
              :class="isMenuVisible ? 'icon-cross_thin' : 'icon-menu'"
              color="000"
            />
          </div>
        </div>
        <!-- nav logo -->
        <div class="hidden min-w-fit px-5 hover:opacity-75 md:flex">
          <LinkElement class="nav-logo-wrapper" href="/"><Logo class="nav-logo h-6 w-auto" /></LinkElement>
        </div>
        <!-- nav links -->
        <DeskList v-if="!isMenuVisible" class="hidden overflow-x-auto md:flex" v-slot="{ desks }">
          <ul class="flex flex-row items-center">
            <li
              v-for="(desk, index) in desks"
              class="h-full items-center"
              :class="{ flex: index < 5, 'hidden lg:flex': index >= 5 && index < 7, hidden: index >= 7 }"
              :key="index"
            >
              <LinkElement :href="desk.url" class="flex px-2.5">
                <!-- (text-white font-sans text-base font-bold) no-underline capitalize ignored-->
                <TextElement
                  class="max-w-[10rem] truncate whitespace-nowrap hover:opacity-75"
                  component="div"
                  kind="nav-link-header"
                  :font-size="16"
                  color="000"
                  font-family="Jost"
                  bold
                  >{{ desk.name }}</TextElement
                ></LinkElement
              >
            </li>
          </ul>
        </DeskList>
      </div>
      <!-- nav logo mobile -->
      <div class="mx-4 min-w-max hover:opacity-75 md:hidden">
        <LinkElement class="nav-logo-wrapper" href="/"><Logo class="contents" /></LinkElement>
      </div>
      <!-- nav social links -->
      <div class="flex pl-5 md:basis-[30%] lg:basis-[fit-content]">
        <Site v-if="!isMenuVisible" class="hidden md:flex" v-slot="{ site }">
          <ul
            class="hidden md:-mr-2.5 md:flex md:w-auto md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-y-2"
          >
            <template v-for="(icon, social) in socials">
              <TextElement
                v-if="site && site.socials ? site.socials[social] : ''"
                :key="social"
                kind="nav-social-links"
                component="li"
                color="000"
                :font-size="18"
              >
                <a
                  rel="noopener"
                  target="_blank"
                  :href="site && site.socials ? site.socials[social] : ''"
                  class="flex h-fit w-10 items-center justify-center hover:opacity-75"
                >
                  <svg viewBox="0 0 24 24" height="1em" width="1em">
                    <path :d="icon" fill="currentColor"></path>
                  </svg>
                </a>
              </TextElement>
            </template>
          </ul>
        </Site>
      </div>
    </ColorArea>

    <!-- dropdown menu content (shares color as navbar) -->
    <ColorArea
      kind="navbar-box-kind"
      class="inset-x-0 bottom-0 top-12 z-50 mx-auto w-full overflow-y-scroll overscroll-contain md:top-20"
      :class="{ fixed: isMenuVisible, hidden: !isMenuVisible }"
    >
      <!-- 2 columns -->
      <div class="flex flex-col px-5 pb-5 md:flex-row md:px-10 md:pb-10">
        <!-- left -->
        <div class="menu-column-left">
          <!-- search  -->
          <SearchElement class="my-8 grid w-full justify-items-stretch">
            <ColorArea
              backgroundColor="d6d6d6"
              kind="search-box-kind"
              class="flex w-full flex-row items-center justify-between py-4 pl-5 pr-5 hover:opacity-75"
            >
              <div class="text-sm text-black">Search</div>
              <div class="ml-4 flex h-full w-4 items-center justify-center">
                <svg style="width: 24px; height: 24px" class="text-black" viewBox="0 0 24 24">
                  <path
                    d="M23.256 20.423l-5.685-4.835c-0.588-0.529-1.216-0.772-1.724-0.748 1.342-1.572 2.153-3.611 2.153-5.84 0-4.971-4.029-9-9-9s-9 4.029-9 9 4.029 9 9 9c2.229 0 4.268-0.811 5.84-2.153-0.023 0.508 0.219 1.136 0.748 1.724l4.835 5.685c0.828 0.92 2.18 0.997 3.005 0.172s0.747-2.177-0.172-3.005zM9 15c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </ColorArea>
          </SearchElement>

          <!-- menu social links -->
          <Site class="-ml-2.5 flex" v-slot="{ site }">
            <ul class="my-4 flex flex-row flex-wrap gap-y-2">
              <template v-for="(icon, social) in socials">
                <TextElement
                  v-if="site && site.socials ? site.socials[social] : ''"
                  :key="social"
                  kind="menu-social-links"
                  component="li"
                  color="000"
                  :font-size="18"
                >
                  <a
                    rel="noopener"
                    target="_blank"
                    :href="site && site.socials ? site.socials[social] : ''"
                    class="flex h-fit w-10 items-center justify-center hover:opacity-75"
                  >
                    <svg viewBox="0 0 24 24" height="1em" width="1em">
                      <path :d="icon" fill="currentColor"></path>
                    </svg>
                  </a>
                </TextElement>
              </template>
            </ul>
          </Site>
        </div>
        <div>
          <!-- secondary desk links -->
          <DeskList v-slot="{ desks }">
            <ul class="my-4 flex w-full flex-wrap divide-y divide-white divide-opacity-20 p-0">
              <li v-for="(desk, index) in desks" class="menu-secondary-desk-links-custom flex grow" :key="index">
                <LinkElement :href="desk.url" style="padding: 15px 0" class="inline-block h-full w-full"
                  ><TextElement
                    component="div"
                    kind="nav-link-menu"
                    :font-size="{ xs: 16, md: 20 }"
                    color="000"
                    font-family="Jost"
                    bold
                    class="hover:opacity-75"
                    >{{ desk.name }}</TextElement
                  ></LinkElement
                >
              </li>
            </ul>
          </DeskList>
        </div>
      </div>

      <!-- menu footer -->
      <footer
        class="inset-x-0 mx-auto my-0 w-full border-t border-solid border-white border-opacity-20 px-5 py-10 md:px-10 md:py-20"
      >
        <!-- logo w-56 -->
        <LinkElement class="flex h-full w-56 items-center hover:opacity-75 md:mx-auto md:my-0" href="/"
          ><Logo
        /></LinkElement>
        <!-- footer nav -->
        <PageList v-slot="{ pages }">
          <nav class="mt-10">
            <ul class="flex flex-col flex-wrap justify-start md:flex-row md:items-center md:justify-center">
              <LiMenuFooter
                v-for="(page, index) in pages"
                :key="index"
                :index="index"
                :text="page.name"
                :url="page.url"
              />
            </ul>
          </nav>
        </PageList>
        <!-- footer copyright -->

        <div class="mt-10">
          <Site v-slot="{ site }">
            <TextInput
              class="w-full"
              component="p"
              kind="menu-footer-copyright"
              color="000"
              :font-size="{ xs: 11 }"
              font-family="Sometype Mono"
              :lineHeight="1.3"
              :align="{ xs: 'left', md: 'center' }"
              :defaultValue="getCopyrightCaption(site.name)"
            />
          </Site>
        </div>
      </footer>
    </ColorArea>
  </Navigation>
</template>

<script>
import {
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
  TextElement,
  TextInput,
} from '@storipress/block'

import LiMenuFooter from './li-menu-footer.vue'
import { geneva, tiktok } from './socials'

export default {
  components: {
    Logo,
    DeskList,
    Navigation,
    PageList,
    Site,
    LinkElement,
    LiMenuFooter,
    SearchElement,
    TextElement,
    TextInput,
    ColorArea,
  },

  data() {
    return {
      isMenuVisible: false,
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
    getCopyrightCaption(data) {
      const yearText = new Date().getFullYear()
      return `© ${yearText} ${data}`
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-logo-wrapper {
  @apply relative flex h-full items-center;
}

.menu-column-left {
  @apply md:mr-12 md:flex md:flex-col;
}

.menu-column-left button {
  @apply w-full;
}

.menu-secondary-desk-links-custom {
  flex-basis: 100%;
}

@media (min-width: 768px) {
  .menu-column-left {
    flex-basis: 180%;
  }
}

@media (min-width: 1070px) {
  .menu-column-left {
    flex-basis: 600px;
  }

  .menu-secondary-desk-links-custom {
    flex-basis: 44%;
    margin-right: 6%;
  }
}
</style>

<style lang="scss">
.nav-logo > img {
  @apply w-auto;
}
</style>
