<template>
  <div class="menu-links-wrapper">
    <DeskList v-slot="{ desks }" class="menu-desk-list-wrapper">
      <TextElement
        color="000"
        class="hover:opacity-75"
        v-for="desk of desks"
        :key="desk.id"
        :fontSize="{ xs: 15, md: 20 }"
        kind="menu-links"
        fontFamily="Jost"
        component="div"
      >
        <LinkElement :href="desk.url"> {{ desk.name }} </LinkElement>
      </TextElement>
    </DeskList>
    <PageList v-slot="{ pages }" class="menu-page-list-wrapper">
      <TextElement v-for="page of pages" :key="page.id" kind="menu-links" component="div">
        <LinkElement :href="page.url"> {{ page.name }} </LinkElement>
      </TextElement>
    </PageList>
    <Site class="menu-social-list-wrapper" v-slot="{ site }">
      <template v-for="(icon, social) in socials">
        <TextElement
          v-if="site && site.socials ? site.socials[social] : ''"
          :key="social"
          kind="social-icon-svg"
          component="span"
          color="7c7c7c"
          :font-size="14"
          class="mb-2 block"
        >
          <a
            rel="noopener"
            target="_blank"
            :href="site && site.socials ? site.socials[social] : ''"
            class="hover:opacity-75"
          >
            <svg viewBox="0 0 24 24" height="1em" width="1em" class="fill-current" style="width: auto; height: 14px">
              <path :d="icon"></path>
            </svg>
          </a>
        </TextElement>
      </template>
    </Site>
  </div>
</template>

<script>
import { DeskList, LinkElement, PageList, Site, TextElement } from '@storipress/block' // Waheguru

import socials from './socials'

export default {
  components: { TextElement, LinkElement, DeskList, PageList, Site },

  data() {
    return {
      socials,
    }
  },
}
</script>

<style lang="scss" scoped>
.menu-links {
  padding-bottom: 45px;

  @screen md {
    padding-bottom: 12px;
  }
}

.menu-links-wrapper {
  @apply flex grow flex-col overflow-y-scroll px-5;

  padding-top: 45px;
  padding-bottom: 127px;

  @screen md {
    @apply m-0 grow-0 flex-row overflow-auto p-0;
  }

  .menu-desk-list-wrapper,
  .menu-page-list-wrapper {
    @screen md {
      flex: 1;
      margin-top: 6px;
      margin-bottom: 32px;
    }
  }

  .menu-social-list-wrapper {
    @apply hidden;

    @screen md {
      @apply flex flex-col items-end;

      width: 8%;
    }
  }
}
</style>
