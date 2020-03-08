import Vue from 'vue'

if (process.client) {
  const VueCookie = require('vue-cookie')
  Vue.use(VueCookie)
}
