<template>
  <FilterBox>
    Kategoria:
    <Row class="mt-24">
      <Column cols="6" v-for="category in categories.list" :key="category">
        <Button
          link
          :text="category"
          class="text-smaller mb-16"
          :class="{ active: categories.active === category }"
        />
      </Column>
    </Row>
  </FilterBox>
</template>

<script>
import { mapGetters } from 'vuex'
import FilterBox from './FilterBox'
export default {
  components: {
    FilterBox
  },
  computed: mapGetters({ categories: 'filter/categories' })
}
</script>

<style scoped lang="scss">
button.link {
  &.active {
    color: $primary;
    &::before {
      width: 100%;
      position: absolute;
      height: 1px;
      left: 0;
      bottom: -2px;
      background: $primary;
      transform: scaleX(1);
    }
  }
}
</style>
