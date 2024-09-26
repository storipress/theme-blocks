<template>
  <Block :block="block" class="py-6 md:py-12" backgroundColor="f6f6f6">
    <div class="main-section">
      <DeskSection class="my-desk" :order="0" v-slot="{ desk }">
        <div class="desk-title-container">
          <TextInput
            component="h4"
            kind="desk-title"
            data-id="1"
            fontFamily="Jost"
            :fontSize="32"
            :defaultValue="desk"
          />
        </div>
        <ArticleBlock class="my-article" v-slot="{ article }">
          <LinkElement :href="article.url">
            <TextElement component="h3" kind="article-title" class="line-clamp-1" fontFamily="Jost" :fontSize="17">
              {{ article.title }}
            </TextElement>
          </LinkElement>
        </ArticleBlock>

        <ArticleBlock class="my-article" v-slot="{ article }">
          <LinkElement :href="article.url">
            <TextElement component="h3" kind="article-title" class="line-clamp-1">
              {{ article.title }}
            </TextElement>
          </LinkElement>
        </ArticleBlock>

        <ArticleBlock class="my-article" v-slot="{ article }">
          <LinkElement :href="article.url">
            <TextElement component="h3" kind="article-title" class="line-clamp-1">
              {{ article.title }}
            </TextElement>
          </LinkElement>
        </ArticleBlock>
      </DeskSection>
      <DeskSection class="my-desk" :order="1" v-slot="{ desk }">
        <div class="desk-title-container">
          <TextInput component="h4" kind="desk-title" data-id="2" :defaultValue="desk" />
        </div>
        <ArticleBlock class="my-article" v-slot="{ article }">
          <LinkElement :href="article.url">
            <TextElement component="h3" kind="article-title" class="line-clamp-1">
              {{ article.title }}
            </TextElement>
          </LinkElement>
        </ArticleBlock>

        <ArticleBlock class="my-article" v-slot="{ article }">
          <LinkElement :href="article.url">
            <TextElement component="h3" kind="article-title" class="line-clamp-1">
              {{ article.title }}
            </TextElement>
          </LinkElement>
        </ArticleBlock>
        <ArticleBlock class="my-article" v-slot="{ article }">
          <LinkElement :href="article.url">
            <TextElement component="h3" kind="article-title" class="line-clamp-1">
              {{ article.title }}
            </TextElement>
          </LinkElement>
        </ArticleBlock>
      </DeskSection>
      <DeskSection class="my-desk" :order="2" v-slot="{ desk }">
        <div class="desk-title-container">
          <TextInput component="h4" kind="desk-title" data-id="3" :defaultValue="desk" />
        </div>
        <ArticleBlock class="my-article" v-slot="{ article }">
          <LinkElement :href="article.url">
            <TextElement component="h3" kind="article-title" class="line-clamp-1">
              {{ article.title }}
            </TextElement>
          </LinkElement>
        </ArticleBlock>
        <ArticleBlock class="my-article" v-slot="{ article }">
          <LinkElement :href="article.url">
            <TextElement component="h3" kind="article-title" class="line-clamp-1">
              {{ article.title }}
            </TextElement>
          </LinkElement>
        </ArticleBlock>

        <ArticleBlock class="my-article" v-slot="{ article }">
          <LinkElement :href="article.url">
            <TextElement component="h3" kind="article-title" class="line-clamp-1">
              {{ article.title }}
            </TextElement>
          </LinkElement>
        </ArticleBlock>
      </DeskSection>
    </div>
  </Block>
</template>

<script>
import { ArticleBlock, Block, DeskSection, LinkElement, TextElement, TextInput } from '@storipress/block'

export default {
  components: {
    ArticleBlock,
    Block,
    DeskSection,
    TextElement,
    LinkElement,
    TextInput,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.desk-title-container {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #808080;
}

.my-article:not(:last-child) {
  /* padding: 12px 0 12px 0; */
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 16px;
  padding-bottom: 16px;
}

.main-section {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.my-desk {
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  padding: 0 0 16px 0;
  width: 100%;
}

.desk-title {
  width: 100%;
}

.my-desk:not(:last-child) {
  margin-bottom: 24px;
}

@media (min-width: 768px) {
  .main-section {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }

  .my-desk {
    -ms-flex-preferred-size: calc(33.33333% - 16px);
    flex-basis: calc(33.33333% - 0px);
    padding: 0;
  }

  .my-desk:not(:last-child) {
    margin-bottom: 0;
    margin-right: 32px;
  }
}
</style>
