<template>
  <div class="flex grow flex-col overflow-y-scroll px-6 py-4">
    <DeskList v-slot="{ desks }" class="desk-list">
      <TextElement
        color="000"
        class="-translate-x-4 pt-2 opacity-0 hover:opacity-75"
        v-for="desk of desks"
        :key="desk.id"
        :fontSize="{ xs: 30, md: 30 }"
        kind="desk-list-links"
        fontFamily="Jost"
        component="div"
      >
        <LinkElement :href="desk.url"> {{ desk.name }} </LinkElement>
      </TextElement>
    </DeskList>
    <PageList v-slot="{ pages }" class="page-list pt-8">
      <TextElement
        color="000"
        class="-translate-x-4 opacity-0 hover:opacity-75"
        v-for="page of pages"
        :key="page.id"
        :fontSize="{ xs: 19, md: 19 }"
        :lineHeight="1.5"
        kind="page-list-links"
        fontFamily="Jost"
        component="div"
      >
        <LinkElement :href="page.url"> {{ page.name }} </LinkElement>
      </TextElement>
    </PageList>
  </div>
</template>

<script>
import { DeskList, LinkElement, PageList, TextElement } from '@storipress/block'

export default {
  components: { TextElement, LinkElement, DeskList, PageList },
}
</script>

<style lang="scss" scoped></style>
