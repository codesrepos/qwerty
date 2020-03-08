<template>
  <div class="box" :class="{ border: border }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  background: $gray-1;
  padding: 32px 24px;
  &.border {
    border-bottom: 1px solid $dark;
  }
}
</style>
