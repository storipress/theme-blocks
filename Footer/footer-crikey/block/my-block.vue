<template>
  <FooterBlock :block="block">
    <ColorArea kind="footer-block-one" background-color="eef0f2" class="p-4 lg:py-2 lg:px-0">
      <div
        class="m-auto flex h-full min-h-[64px] max-w-[1440px] flex-col items-center md:items-start lg:min-h-[80px] lg:flex-row lg:items-center"
      >
        <div class="mx-[1.85%] lg:w-1/4">
          <Logo class="footer-logo mb-2 max-w-[250px]" />
        </div>
        <SiteInfo class="mx-[1.85%] flex w-full flex-wrap lg:w-3/4 lg:justify-between" v-slot="{ desks }">
          <LinkElement
            v-for="desk of desks"
            :key="desk.id"
            :href="desk.url"
            class="w-1/2 text-center md:text-left lg:w-auto"
          >
            <TextElement
              component="p"
              kind="desk-link-text"
              color="000"
              font-family="Jost"
              :font-size="{ xs: 15, md: 18 }"
              :line-height="1.5"
              class="whitespace-nowrap font-bold tracking-widest hover:underline hover:opacity-75"
            >
              {{ desk.name }}
            </TextElement>
          </LinkElement>
        </SiteInfo>
      </div>
    </ColorArea>

    <ColorArea kind="footer-block-two" background-color="d4d8da" class="px-4 py-6 lg:py-8 lg:px-0">
      <div class="m-auto max-w-[1440px] md:flex">
        <Site class="mx-[1.85%] flex flex-col md:w-1/2 lg:pl-[26.85%]" v-slot="{ site }">
          <TextInput
            font-family="Jost"
            :font-size="18"
            :line-height="1.2"
            kind="follow-text"
            class="flex justify-center pb-2.5 md:justify-start"
            component="p"
            :default-value="`Follow ${site.name}`"
            color="000"
            bold
          />
          <div class="flex flex-wrap justify-center md:justify-start md:gap-x-2 md:gap-y-1">
            <template v-for="(icon, social) in socials">
              <TextElement
                v-if="site && site.socials ? site.socials[social] : ''"
                :key="social"
                kind="social-icon"
                component="div"
                color="1f2937"
                :font-size="28"
                class="px-1 pt-1 pb-3.5 md:p-0 lg:pb-0"
              >
                <a rel="noopener" target="_blank" :href="site && site.socials ? site.socials[social] : ''">
                  <Icon class="h-8 w-8">{{ icon }}</Icon>
                </a>
              </TextElement>
            </template>
          </div>
        </Site>
        <div class="mx-[1.85%] md:w-1/4">
          <SiteInfo class="flex w-full flex-wrap" v-slot="{ pages }">
            <LinkElement v-for="page of pages" :key="page.id" :href="page.url" class="w-full text-center md:text-left">
              <TextElement
                component="p"
                kind="page-text"
                color="1f2937"
                font-family="Jost"
                :font-size="{ xs: 14, md: 16 }"
                :line-height="1.8"
                class="whitespace-nowrap tracking-widest hover:underline hover:opacity-75"
              >
                {{ page.name }}
              </TextElement>
            </LinkElement>
          </SiteInfo>
        </div>
        <div class="mx-[1.85%] md:w-1/4">
          <SiteInfo class="flex w-full flex-wrap">
            <TextInput
              v-for="index in 4"
              :key="index"
              class="w-full text-center md:text-left"
              component="p"
              kind="link-text"
              :dataId="`${index}`"
              color="1f2937"
              font-family="Jost"
              :font-size="{ xs: 14, md: 16 }"
              :line-height="1.8"
              default-value="More from Desk"
            />
          </SiteInfo>
        </div>
      </div>
    </ColorArea>

    <ColorArea kind="footer-block-three" background-color="000" class="p-4 md:p-0">
      <div
        class="m-auto flex min-h-[60px] max-w-[1440px] items-center justify-center text-center tracking-widest md:mx-[1.85%] md:justify-start md:text-left"
      >
        <Site v-slot="{ site }">
          <TextInput
            font-family="Jost"
            :font-size="15"
            kind="copyright"
            component="p"
            color="fff"
            :default-value="getCopyright(site)"
          />
        </Site>
      </div>
    </ColorArea>
  </FooterBlock>
</template>

<script>
import {
  ColorArea,
  FooterBlock,
  Icon,
  LinkElement,
  Logo,
  Site,
  SiteInfo,
  TextElement,
  TextInput,
} from '@storipress/block'

import socials from './socials'

export default {
  components: {
    ColorArea,
    FooterBlock,
    Icon,
    TextElement,
    TextInput,
    Site,
    SiteInfo,
    LinkElement,
    Logo,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      socials,
    }
  },

  methods: {
    getCopyright(site) {
      const year = new Date().getFullYear()

      return `© ${site.name} ${year}  All Rights Reserved`
    },
  },
}
</script>

<style lang="scss" scoped>
.footer-logo {
  &::v-deep {
    img {
      @apply h-auto w-full;
    }
  }
}
</style>
