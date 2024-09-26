<template>
  <ColorArea kind="nav-bg-wrapper" class="border-color--hbr mx-auto w-screen overflow-hidden border-b px-8">
    <DeskList v-slot="{ desks }" class="overflow-hidden">
      <div class="keep-scroll flex overflow-x-auto">
        <TextElement
          color="282828"
          v-for="desk of desks"
          :key="desk.id"
          kind="hero-desk"
          fontFamily="Jost"
          component="h4"
          class="whitespace-nowrap hover:opacity-75"
          :fontSize="15"
        >
          <LinkElement :href="desk.url"> {{ desk.name }} </LinkElement>
        </TextElement>
      </div>
    </DeskList>
  </ColorArea>
</template>

<script>
import { ColorArea, DeskList, LinkElement, TextElement } from '@storipress/block'

export default {
  components: { DeskList, LinkElement, TextElement, ColorArea },
  data() {
    return {
      navDesksLimit: 11,
    }
  },
  methods: {
    limitNavDesks(desks) {
      let result
      if (desks && Array.isArray(desks)) {
        if (desks.length > this.navDesksLimit) {
          result = desks.slice(0, this.navDesksLimit)
        } else {
          result = desks
        }
      }
      return result
    },
  },
}
</script>

<style scoped lang="scss">
.hero-desk {
  @apply inline-flex py-2.5;

  padding-right: 30px;
}

.nav-bottom-bg {
  @apply hidden w-screen items-center justify-center  overflow-hidden border-b lg:flex;

  padding-left: 30px;
  padding-right: 30px;
}

.keep-scroll {
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
