<template>
  <client-only>
    <div class="slider-container">
      <hooper :settings="hooperSettings" @slide="onSlide" ref="slider">
        <slot />
      </hooper>
      <button
        class="slider-arrow prev"
        :class="{ disabled: isPrevDisabled }"
        @click="slidePrev"
      >
        <span class="icon-arrow-left"></span>
      </button>
      <button
        class="slider-arrow next"
        :class="{ disabled: isNextDisabled }"
        @click="slideNext"
      >
        <span class="icon-arrow-right"></span>
      </button>
    </div>
  </client-only>
</template>

<script>
import { Hooper } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  components: {
    Hooper
  },
  props: {
    length: {
      required: true,
      type: [String, Number]
    }
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        itemsToSlide: 1,
        pagination: false,
        wheelControl: false,
        breakpoints: {
          576: {
            itemsToShow: 2
          },
          768: {
            itemsToShow: 3
          },
          992: {
            itemsToShow: 4
          },
          1200: {
            itemsToShow: 4
          }
        }
      },
      currentSlide: 0
    }
  },
  computed: {
    isNextDisabled() {
      const breakpoints = {
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
      }
      const currentBreakpoint = breakpoints[this.$mq]
      const itemsToShow =
        this.hooperSettings.breakpoints[currentBreakpoint]?.itemsToShow ||
        this.hooperSettings.itemsToShow

      return this.currentSlide + itemsToShow >= this.length
    },
    isPrevDisabled() {
      return this.currentSlide === 0
    }
  },
  methods: {
    onSlide(slider) {
      console.log(slider)
      this.currentSlide = slider.currentSlide
    },
    slideNext() {
      if (!this.isNextDisabled) {
        this.$refs.slider.slideNext()
      }
    },
    slidePrev() {
      if (!this.isPrevDisabled) {
        this.$refs.slider.slidePrev()
      }
    }
  }
}
</script>

<style lang="scss">
.slider-container {
  position: relative;
  padding: 0 40px;
  width: 100%;
  .hooper {
    outline: none !important;
    height: auto;
  }
  .slider-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: $primary;
    font-size: 48px;
    cursor: pointer;
    &.disabled {
      color: lighten($gray-1, 5%);
      cursor: initial;
    }
    &.prev {
      left: 0;
      @include media-breakpoint-down(xs) {
        left: 10%;
      }
    }
    &.next {
      right: 0;
      @include media-breakpoint-down(xs) {
        right: 10%;
      }
    }
  }
}
</style>
