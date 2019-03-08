<template>
  <div class="search">
    <header>
      <b-navbar class="navBar" toggleable="lg" type="dark" >
        <b-navbar-toggle target="nav_collapse"/>

        <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="active fw-bold" href="#">HOME</b-nav-item>

            <b-nav-item-dropdown class="fw-bold" text="LOGIN" right>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#">
              <v-icon name="facebook" ></v-icon>
            </b-nav-item>
            <b-nav-item href="#">
              <v-icon name="youtube" ></v-icon>
            </b-nav-item>
            <b-nav-item href="#">
              <v-icon name="instagram" ></v-icon>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <div class="filter">
      <div class="container">
        <p class="form-group filter-alert">Villa? Cottage? Apartment? <br/>Your perfect holiday awaits</p>
        <div class="filter-form bg-white-gray">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-6">
              <div class="form-group">
                  <b-form-input class="width-100" v-model="text1" type="text" placeholder="Location" />
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="form-group">
                <HotelDatePicker DatePickerID="01" class="w-100" />
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="form-group">
                <b-form-input class="w-100" v-model="text1" type="text" placeholder="Guests" />
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="form-group">
                  <b-button
                    variant="primary"
                    class="btn-custom2 w-100"  v-on:click="gotolist()"
                  >Search</b-button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="info-section">
      <div class="">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="item">
              <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" class="v-icon"><title>lock-shield</title><path class="cls-1" d="M20,16.6h4.53a2.27,2.27,0,0,1,2.27,2.27V25a2.27,2.27,0,0,1-2.27,2.27H20a0,0,0,0,1,0,0V16.6A0,0,0,0,1,20,16.6Z"></path><g id="Programming-Apps-Websites_Bug_Security_shield-lock" data-name="Programming-Apps-Websites / Bug/Security / shield-lock"><g id="Group_71" data-name="Group 71"><g id="shield-lock"><path id="Shape_387" data-name="Shape 387" class="cls-2" d="M5.27,7.79V19.3A18,18,0,0,0,16.8,36.09l1.57.6a4.47,4.47,0,0,0,3.26,0l1.57-.6A18,18,0,0,0,34.73,19.3V7.79a2.24,2.24,0,0,0-1.31-2.06A32.76,32.76,0,0,0,20,3,32.76,32.76,0,0,0,6.58,5.73,2.24,2.24,0,0,0,5.27,7.79Z"></path><path id="Rectangle-path_25" data-name="Rectangle-path 25" class="cls-2" d="M13.2,18.86a2.27,2.27,0,0,1,2.27-2.26h9.06a2.27,2.27,0,0,1,2.27,2.26v6.8a2.27,2.27,0,0,1-2.27,2.27H15.47a2.27,2.27,0,0,1-2.27-2.27Z"></path><path id="Shape_388" data-name="Shape 388" class="cls-2" d="M20,9.8h0a4.53,4.53,0,0,0-4.53,4.53V16.6h9.06V14.33A4.53,4.53,0,0,0,20,9.8Z"></path><path id="Shape_389" data-name="Shape 389" class="cls-2" d="M20,21.74a.57.57,0,1,1-.57.57.57.57,0,0,1,.57-.57"></path></g></g></g></svg>
              </div>
              <div class="item-content">
                  <h3>Your vacation is safe with us</h3>
                  <p>Secure payments, 24/7 support and a Book with Confidence guarantee</p>
                </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="item">
              <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" class="v-icon"><path class="cls-1" d="M23.4,23.38h4.53a2.27,2.27,0,0,1,2.27,2.27V41.52a2.27,2.27,0,0,1-2.27,2.27H23.4a0,0,0,0,1,0,0V23.38A0,0,0,0,1,23.4,23.38Z" transform="translate(60.38 6.79) rotate(90)"></path><g id="Travel_Travel-Metaphor_travel-luggage-1" data-name="Travel / Travel-Metaphor / travel-luggage-1"><g id="Group_2" data-name="Group 2"><g id="travel-luggage-1"><path id="Shape_7" data-name="Shape 7" class="cls-2" d="M10.92,29A13.6,13.6,0,1,1,30.2,16.6"></path><path id="Shape_8" data-name="Shape 8" class="cls-2" d="M8,6.1l8,3a2.26,2.26,0,0,1,1.43,2.57l-.47,2.37a2.26,2.26,0,0,1-1.68,1.75l-3.14.79L10.32,21a4.52,4.52,0,0,1-1.7,2.09L5.86,25"></path><path id="Shape_9" data-name="Shape 9" class="cls-2" d="M26,6.8l-2.21,4.42A2.28,2.28,0,0,0,23.69,13l.85,2.51"></path><path id="Rectangle-path" class="cls-2" d="M16.6,26.8a2.27,2.27,0,0,1,2.26-2.27H34.73A2.27,2.27,0,0,1,37,26.8v7.93A2.27,2.27,0,0,1,34.73,37H18.86a2.27,2.27,0,0,1-2.26-2.27Z"></path><path id="Shape_10" data-name="Shape 10" class="cls-2" d="M21.13,24.53V37"></path><path id="Shape_11" data-name="Shape 11" class="cls-2" d="M32.46,24.53V37"></path><path id="Shape_12" data-name="Shape 12" class="cls-2" d="M23.4,24.53V23.4a3.4,3.4,0,1,1,6.8,0v1.13"></path></g></g></g></svg>
              </div>
              <div class="item-content">
                  <h3>Better vacations start here</h3>
                  <p>From booking to staying, the whole process is easy and enjoyable</p>
                </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="item">
              <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" class="v-icon"><title>tea</title><path class="cls-1" d="M25.53,16.6H23.66A2.19,2.19,0,0,1,24,17.76v6.5A10.83,10.83,0,0,1,9.14,34.31,11.33,11.33,0,0,0,27.8,25.67v-6.8A2.26,2.26,0,0,0,25.53,16.6Z"></path><g id="Food-Drinks_Teas_tea-cup" data-name="Food-Drinks / Teas / tea-cup"><g id="Group_247" data-name="Group 247"><g id="Regular_247" data-name="Regular 247"><path id="Shape_1320" data-name="Shape 1320" class="cls-2" d="M7.4,16.6H25.53a2.26,2.26,0,0,1,2.27,2.27v6.8A11.34,11.34,0,0,1,16.47,37h0A11.34,11.34,0,0,1,5.13,25.67v-6.8A2.27,2.27,0,0,1,7.4,16.6Z"></path><path id="Shape_1321" data-name="Shape 1321" class="cls-2" d="M27.8,18.87h2.27a6.82,6.82,0,0,1,6.8,6.8h0a6.82,6.82,0,0,1-6.8,6.8H25.53"></path><path id="Shape_1322" data-name="Shape 1322" class="cls-2" d="M15.33,23.4V16.6"></path><path id="Shape_1323" data-name="Shape 1323" class="cls-2" d="M24.4,3C26.57,7.34,20,8.86,23.27,13.2"></path><path id="Shape_1324" data-name="Shape 1324" class="cls-2" d="M17.6,3c2.17,4.34-4.38,5.86-1.13,10.2"></path><path id="Shape_1325" data-name="Shape 1325" class="cls-2" d="M10.8,3C13,7.34,6.42,8.86,9.67,13.2"></path><path id="Rectangle-path_55" data-name="Rectangle-path 55" class="cls-2" d="M11.93,24.16a.76.76,0,0,1,.76-.76H18a.76.76,0,0,1,.75.76v5.28a.76.76,0,0,1-.75.76H12.69a.76.76,0,0,1-.76-.76Z"></path></g></g></g></svg>
              </div>
              <div class="item-content">
                  <h3>All the comforts of home</h3>
                  <p>Enjoy full kitchens, laundry, pools, yards and more</p>
                </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="item">
              <div><svg width="37px" height="37px" viewBox="0 0 37 37" version="1.1" xmlns="http://www.w3.org/2000/svg" class="v-icon"><title>currency</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="PTA-4768-Homepage-Refresh-(120)-US-(New)-Desktop-1.2" transform="translate(-1026.000000, -562.000000)"><g id="Value-Props" transform="translate(0.000000, 520.000000)"><g id="04" transform="translate(1024.000000, 40.000000)"><g id="Icon-Currency"><polygon id="Path" opacity="0.799999952" points="0.140625 40.7139375 40.140625 40.7139375 40.140625 0.7139375 0.140625 0.7139375"></polygon><path d="M21.274425,33.6624375 C19.381425,39.2914375 4.765425,38.8494375 3.140425,33.6624375 L3.140425,25.9754375 C9.374425,29.7874375 16.015425,28.6584375 21.274425,25.9754375 L21.274425,33.6624375 Z" id="Fill-1" fill="#CCE1F8"></path><path d="M12.207025,28.6585375 C17.215025,28.6585375 21.274025,26.6285375 21.274025,24.1255375 C21.274025,21.6215375 17.215025,19.5915375 12.207025,19.5915375 C7.200025,19.5915375 3.141025,21.6215375 3.141025,24.1255375 C3.141025,26.6285375 7.200025,28.6585375 12.207025,28.6585375 Z" id="Stroke-99" stroke="#364353" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.140625,24.1253375 L3.140625,33.1913375 C3.140625,35.6953375 7.199625,37.7253375 12.206625,37.7253375 C17.214625,37.7253375 21.274625,35.6953375 21.274625,33.1913375 L21.274625,24.1253375" id="Stroke-101" stroke="#364353" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.274425,28.6585375 C21.274425,31.1625375 17.214425,33.1915375 12.207425,33.1915375 C7.199425,33.1915375 3.140425,31.1625375 3.140425,28.6585375" id="Stroke-103" stroke="#364353" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.807625,26.3919375 L34.873625,26.3919375 C36.125625,26.3919375 37.140625,25.3759375 37.140625,24.1249375 L37.140625,5.9919375 C37.140625,4.7399375 36.125625,3.7249375 34.873625,3.7249375 L5.407625,3.7249375 C4.155625,3.7249375 3.140625,4.7399375 3.140625,5.9919375 L3.140625,17.3349375" id="Stroke-105" stroke="#364353" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.607425,15.0579375 C15.607425,12.9699375 17.034425,11.1519375 19.062425,10.6559375 C21.090425,10.1589375 23.196425,11.1129375 24.161425,12.9639375 C25.126425,14.8169375 24.701425,17.0879375 23.130425,18.4659375" id="Stroke-107" stroke="#364353" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.807625,8.8245375 C9.119625,8.8245375 9.373625,9.0785375 9.373625,9.3915375 C9.373625,9.7045375 9.119625,9.9585375 8.807625,9.9585375 C8.494625,9.9585375 8.240625,9.7045375 8.240625,9.3915375 C8.240625,9.0785375 8.494625,8.8245375 8.807625,8.8245375" id="Stroke-109" stroke="#364353" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M31.473625,20.1585375 C31.786625,20.1585375 32.040625,20.4125375 32.040625,20.7245375 C32.040625,21.0375375 31.786625,21.2915375 31.473625,21.2915375 C31.161625,21.2915375 30.907625,21.0375375 30.907625,20.7245375 C30.907625,20.4125375 31.161625,20.1585375 31.473625,20.1585375" id="Stroke-111" stroke="#364353" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></g></g></g></g></svg>
              </div>
              <div class="item-content">
                  <h3>More for less</h3>
                  <p>More space, more privacy, more amenities — more value</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable no-new
// eslint-disable
// eslint-disable-next-line
export default {
  data () {
    return {
      text1: '',
      bgImage: require('@/assets/img/bg.jpg')
    }
  },
  methods: {
    gotolist: function () {
      this.$router.push({ name: 'ListView' })
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/search.scss';
</style>
