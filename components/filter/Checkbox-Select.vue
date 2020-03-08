<template>
  <FilterBox>
    <Select
      :options="box.languages"
      v-model="box.selected"
      :selected="box.selected"
    />
  </FilterBox>
</template>

<script>
import FilterBox from './FilterBox'
export default {
  components: {
    FilterBox
  },
  props: {
    box: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
