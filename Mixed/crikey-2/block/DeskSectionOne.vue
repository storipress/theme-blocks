<template>
  <DeskSection v-slot="{ desk }" :order="0" class="col-span-1">
    <Title :desk="desk" divider class="mb-10" />
    <div class="hidden md:block">
      <ImageCircleItem v-for="i in 11" :key="i" />
    </div>
    <!-- slider not show when breakpoints > md -->
    <div class="mb-[1.875rem] w-screen md:hidden">
      <div class="relative">
        <div ref="slider" class="keen-slider">
          <div v-for="i in 11" :key="i" class="keen-slider__slide">
            <ImageCircleItem />
          </div>
        </div>
      </div>
      <div v-if="slider" class="flex flex-wrap justify-center py-2.5 md:hidden">
        <button
          v-for="(_slide, i) in dotHelper"
          :key="i"
          class="mx-2.5 h-[8px] w-[8px] cursor-pointer rounded-full border border-black p-1 focus:outline-none"
          :class="{ 'bg-black': current === i }"
          @click="slider.moveToIdx(i)"
        />
      </div>
    </div>
  </DeskSection>
</template>

<script>
import 'keen-slider/keen-slider.min.css'

import { DeskSection } from '@storipress/block'
import KeenSlider from 'keen-slider'
import { markRaw } from 'vue-demi'

import ImageCircleItem from './ImageCircleItem.vue'
import Title from './Title.vue'

export default {
  components: {
    DeskSection,
    Title,
    ImageCircleItem,
  },

  computed: {
    dotHelper() {
      return this.slider ? [...Array(this.slider.track.details.slides.length).keys()] : []
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
        initial: this.current,
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
        slideChanged: (s) => {
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
