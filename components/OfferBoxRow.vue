<template>
  <Row>
    <h2 class="h4 mb-16 w-100 pl-56">
      {{ title }}
    </h2>
    <Slider :length="offers.length" class="pb-32">
      <slide v-for="offer in offers" :key="offer.name">
        <div class="offer">
          <OfferBox :offer="offer"></OfferBox>
        </div>
      </slide>
    </Slider>
  </Row>
</template>

<script>
import { Slide } from 'hooper'
import OfferBox from '@/components/OfferBox'
export default {
  components: {
    OfferBox,
    Slide
  },
  props: {
    title: {
      type: String,
      required: false
    },
    offers: {
      type: Array,
      required: true
    },
    breakpoints: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      sliderOptions: {
        controls: false,
        items: 1,
        responsive: {
          576: {
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 4
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.offer {
  padding: 0 16px;
  @include media-breakpoint-down(xs) {
    max-width: 240px;
    margin: 0 auto;
  }
}
.slider-arrow {
  color: red;
}
</style>
