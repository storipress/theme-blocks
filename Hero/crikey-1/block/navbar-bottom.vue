<template>
  <ColorArea
    kind="nav-bottom-background"
    class="mx-auto overflow-hidden border-b border-black px-[0.4rem]"
    backgroundColor="fff"
  >
    <div class="m-auto flex max-w-[1440px] items-center justify-between">
      <DeskList v-slot="{ desks }" class="overflow-hidden">
        <div class="keep-scroll flex overflow-x-auto py-[0.2rem]">
          <TextElement
            color="000"
            v-for="desk of desks"
            :key="desk.id"
            kind="hero-desk"
            font-family="Jost"
            component="h4"
            class="inline-flex whitespace-nowrap pb-[0.6rem] pl-[0.7rem] pr-[1.4rem] pt-2 hover:opacity-75"
            :font-size="15"
            :line-height="1"
          >
            <LinkElement :href="desk.url">
              {{ desk.name }}
            </LinkElement>
          </TextElement>
        </div>
      </DeskList>

      <!-- social links -->
      <Site v-slot="{ site }">
        <div class="flex">
          <TextElement
            v-for="{ key, link, icon } of filterSocials(site.socials)"
            :key="key"
            kind="social-links"
            component="span"
            color="7c7c7c"
            :font-size="{ md: 20, lg: 28 }"
            class="mr-2"
          >
            <a rel="noopener" target="_blank" :href="link">
              <svg viewBox="0 0 24 24" height="1em" width="1em">
                <path :d="icon" fill="currentColor"></path>
              </svg>
            </a>
          </TextElement>
        </div>
      </Site>
    </div>
  </ColorArea>
</template>

<script>
import { ColorArea, DeskList, LinkElement, Site, TextElement } from '@storipress/block'

import socials from './socials'

export default {
  components: { ColorArea, DeskList, LinkElement, Site, TextElement },
  methods: {
    filterSocials(links) {
      const available = new Set(Object.keys(links))
      return Object.entries(links)
        .filter(([key]) => available.has(key))
        .map(([key, link]) => ({ key, link, icon: socials[key] }))
    },
  },
}
</script>

<style scoped lang="scss">
.keep-scroll {
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
