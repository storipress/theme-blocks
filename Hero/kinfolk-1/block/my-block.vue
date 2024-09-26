<template>
  <HeroBlock :block="block" backgroundColor="fff">
    <Navbar />
    <!-- nav-spacer -->
    <transition appear name="fade">
      <DeskSection :order="0">
        <ArticleBlock class="main-article-wrapper-custom relative h-screen" v-slot="{ article }">
          <!-- headline image -->
          <!-- https://jsfiddle.net/nobu222/xr0g3Lco/ -->
          <ResponsiveImage
            class="h-full object-cover brightness-75"
            :src="article.headline"
            :alt="article.headlineAlt"
            sizes="100vw"
          />
          <!-- headline description -->
          <LinkElement class="absolute top-0 left-0 block h-full w-full" :href="article.url">
            <div class="main-article-desc-wrapper sticky">
              <!-- desk title -->
              <TextElement
                component="h4"
                kind="article-desk"
                class="main-article-desk-title"
                align="center"
                fontFamily="Jost"
                :fontSize="13"
                :lineHeight="1.2"
                color="fff"
              >
                <LinkElement :href="article.deskUrl">
                  {{ article.desk }}
                </LinkElement>
              </TextElement>

              <!-- title -->
              <TextElement
                component="h2"
                kind="article-title"
                fontFamily="Jost"
                class="w-full tracking-wide drop-shadow-xl filter line-clamp-2"
                :fontSize="{ xs: 40, lg: 90 }"
                color="fff"
                align="center"
                :lineHeight="1.1"
              >
                {{ article.title }}
              </TextElement>
              <!-- blurb -->
              <TextElement
                component="p"
                kind="article-blurb"
                fontFamily="Jost"
                class="main-article-blurb"
                :fontSize="{ xs: 18, lg: 20 }"
                color="fff"
                align="center"
                :lineHeight="1.6"
              >
                {{ article.blurb }}
              </TextElement>
            </div>
          </LinkElement>
        </ArticleBlock>
      </DeskSection>
    </transition>
    <SpacingProvider :width="{ xs: 'calc(90% - 40px)', md: 'calc(96% - 40px)' }" />
  </HeroBlock>
</template>

<script>
import {
  ArticleBlock,
  DeskSection,
  HeroBlock,
  LinkElement,
  ResponsiveImage,
  SpacingProvider,
  TextElement,
  TextInput,
} from '@storipress/block'

import Navbar from './navbar.vue'

export default {
  components: {
    ArticleBlock,
    HeroBlock,
    DeskSection,
    TextElement,
    TextInput,
    SpacingProvider,
    Navbar,
    LinkElement,
    ResponsiveImage,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.main-article-wrapper-custom {
  @screen lg {
    margin-top: min(205px, calc(0.16 * 100vw));
  }
}

.main-article-desc-wrapper {
  @apply top-1/2 flex -translate-y-1/2 transform flex-col px-2.5;
}

.main-article-blurb {
  @apply left-0 right-0 mx-auto drop-shadow-xl filter;

  margin-top: 27px;
  width: 50%;
  min-width: 300px;
  max-width: 730px;
}

.main-article-desk-title {
  @apply mb-2.5 w-full tracking-widest drop-shadow-xl filter;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s 0.8s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
