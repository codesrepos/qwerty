<template>
  <client-only>
    <v-select
      @input="onInput"
      :clearable="false"
      :options="options"
      :value="selected"
      :class="{ 'w-input': withInput }"
    />
  </client-only>
</template>

<script>
import 'vue-select/dist/vue-select.css'
export default {
  props: {
    selected: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    withInput: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onInput(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">
.v-select {
  background: transparent;
  max-height: 54px;
  .vs {
    &__selected,
    &__search {
      border: none;
      font-size: 16px;
      color: $light;
      &:hover {
        cursor: pointer;
      }
    }
    &__dropdown-toggle {
      height: 100%;
      border: 1px solid $light;
      padding: 0 6px;
      min-height: 40px;
      @include hover-active-focus() {
        border-color: $primary;
      }
    }
  }
  li {
    font-size: 16px;
  }
  svg {
    fill: $light;
  }
  &.w-input {
    width: 40%;
    min-width: 220px;
    @include media-breakpoint-down(xs) {
      width: 100%;
    }
    .vs__dropdown-toggle {
      border-top-left-radius: 0;
      @include media-breakpoint-down(xs) {
        border-top: none;
        border-top-right-radius: 0;
        padding: 10px 0;
      }
      @include media-breakpoint-up(sm) {
        border-bottom-left-radius: 0;
        border-left: none;
      }
    }
  }
}
</style>
