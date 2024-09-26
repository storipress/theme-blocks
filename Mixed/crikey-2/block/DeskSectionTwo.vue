<template>
  <DeskSection v-slot="{ desk }" :order="1" class="col-span-2">
    <Title :desk="desk" divider class="mb-10" />
    <ImageItem
      v-for="i in 3"
      :key="i"
      :index="i"
      class="my-4 md:mb-8"
      :class="{ 'md:flex': i !== 1 }"
      deskSection="two"
    />
    <ColorArea kind="article-divider" class="absolute h-px w-full md:hidden" backgroundColor="d4d8da" />
    <template v-for="i in 2">
      <div :key="`text_${i}`">
        <TextOnlyItem class="pt-4 pb-4 md:mb-8 md:py-0" deskSection="two" />
        <ColorArea kind="article-divider" class="absolute h-px w-full md:hidden" backgroundColor="d4d8da" />
      </div>
    </template>
  </DeskSection>
</template>

<script>
import { ColorArea, DeskSection } from '@storipress/block'

import ImageItem from './ImageItem.vue'
import TextOnlyItem from './TextOnlyItem.vue'
import Title from './Title.vue'

export default {
  components: {
    ColorArea,
    DeskSection,
    Title,
    TextOnlyItem,
    ImageItem,
  },
}
</script>
