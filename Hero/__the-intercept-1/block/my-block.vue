<template>
  <HeroBlock :block="block" class="pb-4 md:pb-8" backgroundColor="000">
    <Navbar />
    <!-- hero article  -->
    <DeskSection :order="0">
      <ArticleBlock v-slot="{ article }" class="hero-article-section relative w-full">
        <LinkElement :href="article.url">
          <ResponsiveImage :src="article.headline" class="hero-images" :alt="article.headlineAlt" sizes="100vw" />
          <div class="hero-gradient absolute bottom-0" />
        </LinkElement>
        <div class="hero-container">
          <TextElement
            component="h4"
            kind="hero-article-desk"
            style="margin-bottom: 15px"
            color="ffffff"
            bold
            fontFamily="Cooper Hewitt"
            :lineHeight="{ xs: 1.1 }"
            :fontSize="{ xs: 18 }"
          >
            <LinkElement :href="article.deskUrl">
              {{ article.desk }}
            </LinkElement>
          </TextElement>

          <LinkElement :href="article.url">
            <TextElement
              component="h2"
              kind="hero-article-title"
              class="mb-2 h-auto max-w-2xl"
              color="ffffff"
              fontFamily="Cooper Hewitt Heavy"
              :lineHeight="{ xs: 1.1, md: 1.0 }"
              :fontSize="{ xs: 23, md: 44 }"
            >
              {{ article.title }}
            </TextElement>
          </LinkElement>

          <TextElement component="p" kind="hero-article-authors" color="8280ff" :fontSize="13" fontFamily="system-ui">
            <!-- src:https://github.com/storipress/Builder-Blocks/pull/80/files/f7cf31b8e9ece1b5c41aabec20548056f1f090f3#diff-ab2fa8f2bf80d54d8f41ebc54386f6065ca7ba2fa7abc0e3250f18fc3ce054a2R124 -->
            <span v-for="(author, index) in article.authors" :key="index + author.name">
              <LinkElement class="author-link" :href="author.url">
                {{
                  article.authors.length === 1
                    ? `${author.name}`
                    : index !== article.authors.length - 1 && index !== article.authors.length - 2
                    ? `${author.name}, `
                    : index === article.authors.length - 2
                    ? `${author.name} `
                    : `& ${author.name}`
                }}
              </LinkElement>
            </span>
          </TextElement>
        </div>
      </ArticleBlock>
    </DeskSection>

    <!-- content... -->
    <!-- need to add spacing provider -->

    <SpacingProvider :width="{ xs: 'calc(100% - 2.5rem)', md: 'calc(100% - 5rem)' }" :max="{ lg: '1120px' }" />
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
} from '@storipress/block'

import Navbar from './navbar.vue'

export default {
  components: {
    ArticleBlock,
    DeskSection,
    HeroBlock,
    LinkElement,
    TextElement,
    SpacingProvider,
    ResponsiveImage,
    Navbar,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      showMock: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.hero-article-section {
  height: 100vw;

  @screen lg {
    height: 50vw;
  }
}

.hero-images {
  @apply absolute h-full w-full object-cover;
}

.hero-gradient {
  @apply h-1/2 w-full;

  background: linear-gradient(0deg, rgba(3, 3, 3, 1) 0%, rgba(232, 170, 36, 0) 100%);
}

.hero-container {
  @apply absolute inset-x-0 bottom-0 mx-auto p-5 md:px-10;

  width: 100%;
  max-width: 1200px;
}

@screen md {
  .hero-images {
    @apply w-full;
  }
}

.article-title-mock {
  @apply pb-6;
}
</style>
