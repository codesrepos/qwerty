<template>
  <div class="wrapper">
    <img :src="offer.image" alt="" class="img-fluid" />
    <div class="details">
      <p class="text-primary mb-8">
        {{ offer.name }}
      </p>
      <small class="d-block">
        {{ offer.location }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    offer: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  .details {
    background: $gray-1;
    padding: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>
