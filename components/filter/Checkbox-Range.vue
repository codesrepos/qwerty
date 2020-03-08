<template>
  <FilterBox>
    <Checkbox v-model="box.checked" :label="box.label" :id="box.checkboxId" />
    <template v-if="box.checked">
      <RangeInput
        :min="box.min"
        :max="box.max"
        v-model="box.rangeValue"
        class="pl-8 mb-40 mt-32"
      />
    </template>
  </FilterBox>
</template>

<script>
import RangeInput from '../RangeInput'
import FilterBox from './FilterBox'
export default {
  components: {
    FilterBox,
    RangeInput
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
