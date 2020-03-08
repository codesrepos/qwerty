<template>
  <div class="input-s-wrapper d-sm-flex flex-fill">
    <Input
      :value="value"
      label="Wpisz lokalizację"
      full-width
      class="input-select"
    />
    <Select :selected="selected" :options="options" with-input />
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.input-s-wrapper {
  @include media-breakpoint-down(xs) {
    width: 90%;
    max-width: 340px;
  }
  .input-select {
    input {
      border-bottom-right-radius: 0;
      @include media-breakpoint-down(xs) {
        border-bottom-left-radius: 0;
      }
      @include media-breakpoint-up(sm) {
        border-top-right-radius: 0;
      }
    }
  }
}
</style>
