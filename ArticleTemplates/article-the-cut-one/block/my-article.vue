<template>
  <ArticleBlock class="p-5" :backgroundColor="{ xs: 'FFF4EF' }">
    <div class="article-container">
      <HeaderBlock>
        <div class="header">
          <div class="text">
            <div class="lg:w-96 lg:border-t lg:border-black lg:pt-4">
              <div class="mb-4 flex gap-3 md:mb-6">
                <ArticleInfo v-slot="{ article }">
                  <LinkElement :href="article.deskUrl">
                    <Desk class="desk" fontFamily="Jost" :fontSize="{ xs: 12 }" :lineHeight="1.0" bold />
                  </LinkElement>
                </ArticleInfo>
                <Date
                  class="tracking-widest"
                  format="MMMM d, yyyy"
                  fontFamily="Jost"
                  :fontSize="{ xs: 12 }"
                  :lineHeight="1.0"
                />
              </div>
              <div>
                <TitleElement
                  class="inline"
                  fontFamily="Jost"
                  :fontSize="{ xs: 35, md: 40, lg: 48 }"
                  :lineHeight="1.1"
                />
                <Description
                  class="inline"
                  fontFamily="Jost"
                  :fontSize="{ xs: 35, md: 40, lg: 48 }"
                  :lineHeight="1.1"
                  color="949494"
                />
              </div>
              <div class="mt-4">
                <AuthorList
                  class="flex items-end gap-[0.2em]"
                  fontFamily="Jost"
                  :fontSize="{ xs: 13 }"
                  :lineHeight="1.0"
                >
                  By&nbsp;
                  <Authors authorClass="tracking-wide" separator="and" />
                </AuthorList>
              </div>
            </div>
          </div>
          <div class="mt-6 lg:m-0 lg:w-1/2">
            <HeadlineImage class="h-96 w-full" sizes="(max-width: 768px) 95vw, (max-width: 1060px) 85vw, 100vw" />
          </div>
        </div>

        <HeadlineCaption
          fontFamily="Jost"
          :fontSize="12"
          color="909090"
          :align="{ xs: 'start', lg: 'end' }"
          class="mt-3"
        />
      </HeaderBlock>

      <!---content start--->
      <Content class="space-y-4 lg:w-2/3">
        <Paragraph :order="0" fontFamily="Jost" :fontSize="{ xs: 18 }" :lineHeight="1.6" />
        <Header1 fontFamily="Jost" :fontSize="30" :lineHeight="2" />
        <Paragraph :order="1" />
        <Blockquote fontFamily="Jost" :fontSize="{ xs: 22 }" :lineHeight="1.6" />
        <Paragraph :order="2" />
        <Header2 fontFamily="Jost" :fontSize="26" :lineHeight="2" />
        <Paragraph :order="3" />
      </Content>
    </div>
  </ArticleBlock>
</template>

<script>
import { Template } from '@storipress/article'

export default Template.extend({})
</script>

<style lang="scss" scoped>
.header {
  @apply lg:flex lg:justify-center;
}

.text {
  @apply lg:w-1/2 lg:border-t lg:border-b lg:border-l lg:border-gray-400 lg:p-10;
}

.desk {
  @apply border-r border-red-400 pr-3 tracking-widest;
}

.article-content {
  @apply mt-6 md:ml-14;
}

@screen md {
  .article-container {
    margin-left: 5%;
    margin-right: 5%;
  }

  .headline {
    height: 860px;
  }

  .article-content {
    max-width: 37.5rem;
  }
}

@screen lg {
  .article-container {
    @apply mx-auto mt-10;

    max-width: 1140px;
  }

  .headline {
    height: 700px;
  }

  .article-content {
    @apply ml-32 mt-12;
  }
}
</style>
