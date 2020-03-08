<template>
  <div>
    <input
      type="checkbox"
      class="checkbox"
      :id="id"
      :name="name || id"
      @change="$emit('input', $event.target.checked)"
    />
    <label :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
.checkbox {
  display: none;
  + label {
    display: block;
    margin: 0.2em;
    cursor: pointer;
    padding: 0.2em;
    position: relative;
    &::before {
      content: '';
      border: 2px solid $primary;
      border-radius: 4px;
      display: inline-block;
      width: 24px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      box-sizing: border-box;
      margin-right: 0.2em;
      vertical-align: bottom;
      color: transparent;
      transition: transform 0.2s ease;
      margin-right: 24px;
    }
  }
  &:checked {
    + label {
      &::before {
        background-color: transparent;
        border-color: $primary;
        color: $primary;
      }
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 7px;
        left: 12px;
        width: 6px;
        height: 12px;
        border: solid $primary;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
  }
}
</style>
