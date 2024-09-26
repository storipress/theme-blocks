<template>
  <Block :block="block" class="w-full pt-4 md:pt-8 md:pb-4 lg:py-16" backgroundColor="f6f6f6">
    <DeskSection class="my-desk grid grid-cols-1" :order="0">
      <div class="relative">
        <div ref="slider" class="keen-slider">
          <div v-for="i in 3" :key="i" class="keen-slider__slide">
            <ArticleBlock class="md:col-span-6 lg:col-span-4" v-slot="{ article }">
              <LinkElement :href="article.url">
                <div class="aspect-h-16 aspect-w-10 relative flex h-96 flex-col overflow-hidden">
                  <div class="flex h-full w-full flex-col">
                    <!---hero photo--->
                    <ResponsiveImage
                      class="col-span-full row-span-full h-full w-full overflow-hidden object-cover"
                      :src="article.headline"
                      :alt="article.headlineAlt"
                      ssizes="(max-width: 768px) 100vw, (max-width: 1060px) 45vw, 30vw"
                    />
                    <!---Article Title--->
                    <ColorArea
                      kind="article-title-container"
                      backgroundColor="000000"
                      class="col-span-full row-span-full flex h-40 w-full flex-col justify-center self-end px-2.5 py-[5%]"
                    >
                      <TextElement
                        component="h3"
                        kind="article-title"
                        fontFamily="Jost"
                        :fontSize="22"
                        :lineHeight="1.2"
                        align="center"
                        color="ffffff"
                        class="w-4/5 self-center line-clamp-3"
                      >
                        {{ article.title }}
                      </TextElement>
                    </ColorArea>
                  </div>
                </div>
              </LinkElement>
            </ArticleBlock>
          </div>
        </div>
      </div>
      <div v-if="slider" class="flex justify-center px-0 py-[10px] lg:hidden">
        <button
          v-for="(_slide, idx) in dotHelper"
          :key="idx"
          class="mx-[5px] my-0 h-[10px] w-[10px] cursor-pointer rounded-[50%] border-0 p-[5px] focus:outline-none"
          :class="current === idx ? 'bg-black' : 'bg-[#c5c5c5]'"
          @click="slider.moveToIdx(idx)"
        />
      </div>
    </DeskSection>
  </Block>
</template>

<script>
import 'keen-slider/keen-slider.min.css'

import {
  ArticleBlock,
  Block,
  ColorArea,
  DeskSection,
  LinkElement,
  ResponsiveImage,
  TextElement,
} from '@storipress/block'
import KeenSlider from 'keen-slider'
import { markRaw } from 'vue-demi'

export default {
  components: {
    ArticleBlock,
    Block,
    DeskSection,
    TextElement,
    ResponsiveImage,
    ColorArea,
    LinkElement,
  },
  computed: {
    dotHelper() {
      return this.slider ? [...Array(this.slider.track.details.slides.length).keys()] : []
    },
  },
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      current: 1,
      slider: null,
    }
  },
  mounted() {
    this.slider = markRaw(
      new KeenSlider(this.$refs.slider, {
        spacing: 20,
        breakpoints: {
          '(min-width: 768px)': {
            slides: {
              perView: 2,
            },
          },
          '(min-width: 1070px)': {
            slides: {
              perView: 3,
            },
          },
        },
        slideChanged: () => {
          this.current = this.slider.track.details.rel
        },
      })
    )
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy()
  },
}
</script>

<style lang="scss" scoped></style>
