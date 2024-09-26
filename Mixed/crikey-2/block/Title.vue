<template>
  <div>
    <div class="flex pt-2 pb-6">
      <TextInput
        component="h1"
        kind="desk-title"
        :lineHeight="1.5"
        :fontSize="{ xs: 24 }"
        color="000"
        bold
        :defaultValue="desk"
      />
    </div>
    <ColorArea v-if="divider" class="h-px" backgroundColor="000" kind="desk-title-divider" />
  </div>
</template>

<script>
import { ColorArea, TextInput } from '@storipress/block'

export default {
  name: 'DeskTitle',

  components: {
    ColorArea,
    TextInput,
  },

  props: {
    desk: {
      type: String,
    },
    divider: {
      type: Boolean,
    },
  },
}
</script>

<style></style>
