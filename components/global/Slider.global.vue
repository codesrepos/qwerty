<template>
  <agile
    :slidesToShow="4"
    :infinite="false"
    :dots="false"
    @afterChange="afterChange"
    ref="carousel"
  >
    <slot />
    <template slot="prevButton" class="prev">prev</template>
    <template slot="nextButton" class="next">next</template>
  </agile>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    afterChange() {
      console.log(this.$refs.carousel.getCurrentSlide())
    }
  }
}
</script>

<style lang="scss">
.agile {
  padding: 0 48px;
}
.agile__nav-button {
  &--next,
  &--prev {
    position: absolute;
    top: 50%;
  }
  &--prev {
    left: 0;
  }
  &--next {
    right: 0;
  }
}
</style>
