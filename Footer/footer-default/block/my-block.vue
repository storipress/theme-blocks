<template>
  <FooterBlock class="md:px-18 px-4 py-12" :block="block">
    <!---first section--->
    <div class="flex flex-col">
      <!---logo--->
      <Site class="flex flex-col items-center" v-slot="{ site }">
        <LinkElement class="flex" href="/">
          <Logo class="mr-auto h-6" />
        </LinkElement>
        <!---social icons--->
        <div class="my-5 flex flex-wrap justify-center gap-6">
          <template v-for="social of socials">
            <TextElement
              v-if="site && site.socials ? site.socials[social.prop] : ''"
              :key="social.prop"
              kind="social-icon"
              component="div"
              color="1f2937"
              :font-size="40"
              class="px-1 pt-1 pb-3.5 md:mr-2 md:p-0 lg:pb-0"
            >
              <a rel="noopener" target="_blank" :href="site && site.socials ? site.socials[social.prop] : ''">
                <Icon class="h-10 w-10">{{ social.icon }}</Icon>
              </a>
            </TextElement>
          </template>
        </div>
        <Site />
      </Site>

      <!--- page list --->
      <SiteInfo class="flex justify-around md:grow" v-slot="{ pages }">
        <div class="mt-2 mb-8 flex flex-wrap justify-center gap-5">
          <LinkElement v-for="(page, index) of pages" :key="page.id" :href="page.url">
            <TextElement
              component="p"
              kind="link-text"
              :dataId="`${index}`"
              color="1f2937"
              fontFamily="Jost"
              :fontSize="14"
              class="whitespace-nowrap tracking-widest hover:underline hover:opacity-75"
            >
              {{ page.name }}
            </TextElement>
          </LinkElement>
        </div>
      </SiteInfo>
    </div>

    <!---Site Copyright info --->
    <div class="flex flex-wrap items-start justify-center text-center tracking-widest">
      <Site v-slot="{ site }">
        <TextInput
          fontFamily="Jost"
          :fontSize="12"
          kind="copyright"
          component="p"
          color="000"
          :defaultValue="getCopyright(site)"
        />
      </Site>
      <TextInput
        fontFamily="Jost"
        :fontSize="12"
        kind="service-provider-input"
        component="div"
        color="000"
        class="mb-1 mt-1.5 w-full"
        is-link
        :default-value="powerByDefault"
      />
    </div>
  </FooterBlock>
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
import { FooterBlock, Icon, LinkElement, Logo, Site, SiteInfo, TextElement, TextInput } from '@storipress/block'

import { geneva, tiktok } from './socials'

export default {
  components: {
    FooterBlock,
    Icon,
    LinkElement,
    Logo,
    Site,
    SiteInfo,
    TextElement,
    TextInput,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    powerByDefault: JSON.stringify({
      content: 'powered by storipress',
      links: [{ start: 11, end: 23, href: 'https://storipress.com' }],
    }),
    socials: [
      {
        icon: mdiFacebook,
        prop: 'facebook',
      },
      {
        icon: mdiTwitter,
        prop: 'twitter',
      },
      {
        icon: mdiInstagram,
        prop: 'instagram',
      },
      {
        icon: mdiLinkedin,
        prop: 'linkedin',
      },
      {
        icon: mdiYoutube,
        prop: 'youtube',
      },
      {
        icon: mdiPinterest,
        prop: 'pinterest',
      },
      {
        icon: mdiWhatsapp,
        prop: 'whatsapp',
      },
      {
        icon: mdiReddit,
        prop: 'reddit',
      },
      {
        icon: tiktok,
        prop: 'tiktok',
      },
      {
        icon: geneva,
        prop: 'geneva',
      },
    ],
  }),

  methods: {
    getCopyright(site) {
      const year = new Date().getFullYear()

      return `© ${site.name} ${year}  All Rights Reserved`
    },
  },
}
</script>
