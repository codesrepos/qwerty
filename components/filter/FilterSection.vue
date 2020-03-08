<template>
  <section>
    <Categories />
    <Location />
    <Price />
    <CheckboxRange
      v-for="box in checkboxRangeBoxes"
      :box="box"
      :key="box.label"
    />
    <CheckboxSelect
      v-for="box in checkboxSelectBoxes"
      :box="box"
      :key="box.label"
    />
  </section>
</template>

<script>
import Categories from './Categories'
import Location from './Location'
import Price from './Price'
import CheckboxRange from './Checkbox-Range'
import CheckboxSelect from './Checkbox-Select'
export default {
  components: {
    Categories,
    Location,
    Price,
    CheckboxRange,
    CheckboxSelect
  },
  data() {
    return {
      checkboxRangeBoxes: [
        {
          checked: false,
          label: 'Wiek(lat):',
          checkboxId: 'age',
          min: 17,
          max: 50,
          rangeValue: [17, 43]
        },
        {
          checked: false,
          label: 'Waga (kg)',
          checkboxId: 'weight',
          min: 47,
          max: 80,
          rangeValue: [47, 74]
        },
        {
          checked: false,
          label: 'Wzrost (cm)',
          checkboxId: 'height',
          min: 150,
          max: 180,
          rangeValue: [150, 174]
        },
        {
          checked: false,
          label: 'Biust (1-8)',
          checkboxId: 'bust',
          min: 1,
          max: 8,
          rangeValue: [3, 7]
        }
      ],
      checkboxSelectBoxes: [
        {
          selected: 'dowolny',
          languages: ['dowolny', 'angielski', 'polski']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  background: $gray-1;
}
</style>
