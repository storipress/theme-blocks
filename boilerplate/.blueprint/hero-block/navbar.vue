<template>
  <Navigation>
    <div class="flex justify-center">
      <Logo />
    </div>
    <div class="flex justify-center">
      <DeskList class="" v-slot="{ desks }">
        <ul class="flex space-x-2">
          <LinkElement v-for="desk of desks" :key="desk.name" :href="desk.url">
            <TextElement kind="hero-desk" component="li">{{ desk.name }}</TextElement>
          </LinkElement>
        </ul>
      </DeskList>
    </div>
  </Navigation>
</template>

<script>
import { DeskList, LinkElement, Logo, Navigation, TextElement } from '@storipress/block'

export default {
  components: { Navigation, Logo, DeskList, LinkElement, TextElement },
}
</script>
