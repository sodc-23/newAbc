// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// eslint-disable
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import StarRating from 'vue-star-rating'
import VueMasonry from 'vue-masonry-css'
import feather from 'vue-icon'
import * as VueGoogleMaps from 'vue2-google-maps'
import DatePicker from 'vue2-datepicker'
import HotelDatePicker from 'vue-hotel-datepicker'

// css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

Vue.use(HotelDatePicker)
Vue.use(DatePicker)
Vue.use(BootstrapVue)
Vue.use(VueMasonry)
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
    key: 'AIzaSyCyjh1JsjGPSGJe_AwGRLvZ5NZExCnEKaY',
    libraries: 'places'
  }
})

// fortawesome
library.add(faCoffee)

// rating
Vue.component('star-rating', StarRating)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('HotelDatePicker', HotelDatePicker)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, StarRating },
  template: '<App/>'
})
