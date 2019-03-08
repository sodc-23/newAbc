// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// eslint-disable
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

import StarRating from 'vue-star-rating'
import feather from 'vue-icon'
import * as VueGoogleMaps from 'vue2-google-maps'
import HotelDatePicker from 'vue-hotel-datepicker'
import { store } from './store/store'
import carousel from 'vue-owl-carousel'
// css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import './assets/scss/custom.scss'

Vue.use(HotelDatePicker)
Vue.use(carousel)
Vue.use(BootstrapVue)
Vue.use(feather, {
  name: 'v-icon',
  props: {
    baseClass: {
      type: String,
      default: 'v-icon'
    },
    classPrefix: {
      type: String,
      default: 'v-icon-'
    }
  }
})
Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places'
  }
})

// fortawesome
// library.add(faCoffee)

// rating
Vue.component('star-rating', StarRating)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('HotelDatePicker', HotelDatePicker)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, StarRating },
  template: '<App/>',
  store
})
