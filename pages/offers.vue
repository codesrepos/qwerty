<template>
  <div>
    <Checkbox :checked="checked" id="test" label="Some random label" />
    <div>
      <Radio
        label="Radio 1"
        v-model="value_radio"
        name="test-radio"
        id="test-radio-1"
      >
      </Radio>

      <Radio
        label="Radio 2"
        v-model="value_radio"
        name="test-radio"
        id="test-radio-2"
      >
      </Radio>

      <Radio
        label="Radio 3"
        v-model="value_radio"
        name="test-radio"
        id="test-radio-3"
      >
      </Radio>

      <p>Selected value : {{ value_radio }}</p>
    </div>
    <Row>
      <Column xl="3">
        <FilterSection />
      </Column>
    </Row>
  </div>
</template>

<script>
import FilterSection from '@/components/filter/FilterSection'
export default {
  components: {
    FilterSection
  },
  data() {
    return {
      checked: false,
      value_radio: ''
    }
  },
  created() {
    console.log(this.$store.state.filter.list)
  }
}
</script>

<style scoped></style>
