<template>
  <Block :block="block" backgroundColor="fff">
    <div class="md:grid md:grid-cols-4 md:gap-x-[3.7%]">
      <!-- DeskSection one -->
      <DeskSectionOne />

      <!-- DeskSection two -->
      <DeskSectionTwo />

      <div class="col-span-1">
        <!-- DeskSection three -->
        <DeskSection v-slot="{ desk }" :order="2" class="mt-12 md:mb-4 md:mt-0">
          <ColorArea kind="deskSection-three" backgroundColor="ffd79b">
            <BackgroundItem :desk="desk" deskSection="three" />
          </ColorArea>
        </DeskSection>

        <!-- DeskSection four -->
        <DeskSectionFour />

        <!-- DeskSection five -->
        <DeskSection v-slot="{ desk }" :order="4" class="mt-12 md:mb-4 md:mt-0">
          <ColorArea kind="deskSection-five" backgroundColor="eef0f2">
            <BackgroundItem :desk="desk" deskSection="five" />
          </ColorArea>
        </DeskSection>

        <!-- DeskSection six -->
        <DeskSection v-slot="{ desk }" :order="5" class="pt-2 pb-4">
          <Title :desk="desk" />
          <ColorArea kind="article-divider" class="h-px w-full" backgroundColor="d4d8da" />
          <TextOnlyItem class="py-2" deskSection="six" />
          <ColorArea kind="article-divider" class="h-px w-full" backgroundColor="d4d8da" />
        </DeskSection>
      </div>
    </div>
  </Block>
</template>

<script>
import { Block, ColorArea, DeskSection } from '@storipress/block'

import BackgroundItem from './BackgroundItem.vue'
import DeskSectionFour from './DeskSectionFour.vue'
import DeskSectionOne from './DeskSectionOne.vue'
import DeskSectionTwo from './DeskSectionTwo.vue'
import TextOnlyItem from './TextOnlyItem.vue'
import Title from './Title.vue'

export default {
  components: {
    Block,
    ColorArea,
    DeskSection,
    Title,
    TextOnlyItem,
    DeskSectionOne,
    DeskSectionTwo,
    DeskSectionFour,
    BackgroundItem,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
