<template>
  <fragment>
    <input
      type="checkbox"
      class="checkbox"
      :id="id"
      :name="name || id"
      :checked="checked"
      @change="$emit('input', $event.target.checked)"
    />
    <label :for="id">
      {{ label }}
    </label>
  </fragment>
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
    },
    checked: {
      type: Boolean,
      required: true
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
    &::before {
      content: '';
      border: 2px solid #bb86fc;
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
    }
    &:active {
      &::before {
        transform: scale(0);
      }
    }
  }
  &:checked {
    + label {
      &::before {
        background-color: black;
        border-color: #bb86fc;
        color: #bb86fc;
      }
    }
  }
}
input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 2px;
  left: 9px;
  width: 6px;
  height: 14px;
  border: solid #0079bf;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
