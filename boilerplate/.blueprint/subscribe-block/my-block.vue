<template>
  <Block>
    <SubscribeForm class="flex justify-center">
      Please wrap entire contents (exclude `Block` in subscribe block)
      <label>
        Email:
        <SubscribeEmail class="border" />
      </label>
      <button type="submit">Submit</button>
    </SubscribeForm>
  </Block>
</template>

<script>
import { Block, SubscribeEmail, SubscribeForm } from '@storipress/block'

export default {
  components: {
    Block,
    SubscribeEmail,
    SubscribeForm,
  },

  props: {
    block: {
      type: Object,
      required: true,
    },
  },
}
</script>
