<template>
  <no-ssr>
    <div>
      <vue-slider
        :value="value"
        :enable-cross="false"
        :min="min"
        :max="max"
        @change="onChange"
        tooltip="always"
        tooltip-placement="bottom"
      ></vue-slider>
    </div>
  </no-ssr>
</template>

<script>
let VueSlider
if (process.client) {
  VueSlider = require('vue-slider-component')
}
export default {
  props: {
    value: {
      type: [Array, Number],
      required: true
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 1
    }
  },
  components: {
    VueSlider
  },
  methods: {
    onChange(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">
.vue-slider {
  height: 1px !important;
  &-rail {
    background-color: rgba($primary, 0.4);
  }
  &-dot-handle {
    background: $primary;
  }
  &-process {
    background: $primary;
  }
  &-dot-tooltip-inner {
    background: none;
    border: none;
    color: $light;
    font-size: 16px;
    padding: 0;
    &::after {
      content: none;
    }
  }
}
</style>
