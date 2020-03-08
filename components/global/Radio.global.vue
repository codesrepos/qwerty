<template>
  <div>
    <input
      type="radio"
      :value="id"
      :name="name"
      :id="id"
      :checked="id === defaultValue"
      @change="$emit('input', $event.target.value)"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    defaultValue: {
      type: String,
      required: false
    }
  },
  computed: {
    radioButtonValue: {
      get() {
        return this.value
      },
      set() {
        this.$emit('change', this.id)
      }
    }
  }
}
</script>

<style scoped lang="scss">
[type='radio']:checked,
[type='radio']:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type='radio']:checked + label,
[type='radio']:not(:checked) + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 15px;
  font-size: 16px;
  display: inline-block;
  color: $light;
}
[type='radio']:checked + label:before,
[type='radio']:not(:checked) + label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 15px;
  border: 1px solid $primary;
  border-radius: 100%;
  background: $dark;
}
[type='radio']:checked + label:after,
[type='radio']:not(:checked) + label:after {
  content: '';
  width: 9px;
  height: 9px;
  background: $primary;
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 100%;
  transition: all 0.2s ease;
}
[type='radio']:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type='radio']:checked + label:after {
  opacity: 1;
  transform: scale(1);
}
</style>
