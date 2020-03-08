<template>
  <FilterBox>
    <Checkbox v-model="price" label="Cena (PLN):" id="price" />
    <template v-if="price">
      <RangeInput
        :min="100"
        :max="3000"
        v-model="rangeValue"
        class="pl-8 mb-40 mt-32"
      />

      <Radio
        v-for="duration in durations"
        :key="duration.id"
        :label="duration.text"
        v-model="pickedDuration"
        :defaultValue="pickedDuration"
        name="duration"
        :id="duration.id"
      />
    </template>
  </FilterBox>
</template>

<script>
import FilterBox from './FilterBox'
import RangeInput from '@/components/RangeInput'
export default {
  components: {
    FilterBox,
    RangeInput
  },
  data() {
    return {
      rangeValue: [100, 2500],
      price: false,
      pickedDuration: 'half-hour',
      durations: [
        {
          text: 'Za pół godziny',
          id: 'half-hour'
        },
        {
          text: 'Za godzinę',
          id: 'hour'
        },
        {
          text: 'Za całą noc',
          id: 'night'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
