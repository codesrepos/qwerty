<template>
  <div :class="{ 'full-width': fullWidth, 'with-icon': icon }">
    <span v-if="icon" :class="`icon-${icon}`"> </span>
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder || label"
      :aria-label="label"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
.with-icon {
  position: relative;
  span {
    position: absolute;
    font-size: 20px;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    z-index: 1;
  }
}
.full-width {
  width: 100%;
  input {
    width: 100%;
  }
}
input {
  border: 1px solid $light;
  background: $dark;
  color: $light;
  padding: 18px;
  border-radius: 4px;
  transition: border-color 0.4s ease;
  position: relative;
  font-style: italic;
  &.full-width {
    width: 100%;
    max-width: 420px;
  }
  &.with-icon {
  }
  @include hover-active-focus() {
    outline: none;
    border-color: $primary;
  }
}
</style>
