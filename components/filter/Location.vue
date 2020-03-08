<template>
  <FilterBox>
    Lokalizacja:
    <div
      v-for="(location, index) in $store.state.filter.locations"
      :key="location.name"
    >
      <span class="h5 mb-8 mt-16"> {{ location.name }}: </span>
      <Select
        :options="location.options"
        @input="updateSelected"
        :selected="selected[index]"
        :store="true"
      />
    </div>
  </FilterBox>
</template>
<script>
import FilterBox from './FilterBox'
export default {
  components: {
    FilterBox
  },
  computed: {
    selected() {
      return this.$store.state.filter.locations.map((el) => el.selected)
    }
  },
  methods: {
    updateSelected(value) {
      this.$store.commit('filter/updateSelectedLocation', value)
    }
  }
}
</script>

<style scoped lang="scss"></style>
