<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners" :key="banner">
        {{ banner }}
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: ['/1.jpg', '/2.jpg', '/3.jpg'],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
        // some swiper options...
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.banners.push('/4.jpg')
      console.log('banners update')
    }, 3000)
    console.log(
      'This is current swiper instance object',
      this.mySwiper,
      'It will slideTo banners 3'
    )
    this.mySwiper.slideTo(3, 1000, false)
  }
}
</script>

<style>
.swiper-slide {
  height: 200px;
  background: red;
}
</style>
