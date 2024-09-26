<template>
  <HeroBlock :block="block">
    <ColorArea kind="hero-background" backgroundColor="edebeb">
      <Navbar />
      <SpacingProvider width="calc(100% - 1.5rem)" class="py-12 lg:py-[4.5rem]" :max="{ lg: '1440px' }">
        <div
          class="relative col-[main] m-auto grid grid-cols-[0rem_1fr_0rem] gap-y-8 md:grid-cols-[1fr_0.75rem_1fr] md:gap-y-3 lg:-mt-14 lg:grid-cols-[15.625rem_0.75fr_0.75rem_1fr] lg:pl-[8.125rem]"
        >
          <DeskSectionOne />
          <DeskSectionTwo />
          <DeskSectionThree />
          <DeskSectionFour />
          <DeskSectionFive />
        </div>
      </SpacingProvider>
    </ColorArea>
  </HeroBlock>
</template>

<script>
import { ColorArea, HeroBlock, SpacingProvider } from '@storipress/block'

import DeskSectionFive from './DeskSectionFive.vue'
import DeskSectionFour from './DeskSectionFour.vue'
import DeskSectionOne from './DeskSectionOne.vue'
import DeskSectionThree from './DeskSectionThree.vue'
import DeskSectionTwo from './DeskSectionTwo.vue'
import Navbar from './navbar.vue'

export default {
  components: {
    ColorArea,
    HeroBlock,
    SpacingProvider,
    Navbar,
    DeskSectionOne,
    DeskSectionTwo,
    DeskSectionThree,
    DeskSectionFour,
    DeskSectionFive,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
    deskSection: {
      type: String,
    },
  },
}
</script>
