<template>
  <SubscribeForm class="flex justify-center">
    <div>
      this is a form that will be inject dynamiclly into articles. Just remember to include `SubscribeEmail` inside.
    </div>
    <label>
      Email:
      <SubscribeEmail class="border" />
    </label>
    <button type="submit">Submit</button>
  </SubscribeForm>
</template>

<script>
import { SubscribeEmail, SubscribeForm } from '@storipress/article'

export default {
  components: {
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
