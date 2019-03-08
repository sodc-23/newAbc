<template>
  <div class="list-view">
    <header>
      <b-navbar class="navBar" toggleable="lg" type="dark" >
        <b-navbar-toggle target="nav_collapse"/>

        <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="active fw-bold" href="/">HOME</b-nav-item>
            <!-- <b-nav-item class="active fw-bold" href="#">Search</b-nav-item> -->
            <router-link tag="li" to="/search" class="nav-item">
              <a class="nav-link">SEARCH</a>
            </router-link>
            <!-- <b-nav-item-dropdown class="fw-bold" text="LOGIN" right>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown> -->

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

    <b-container>
      <div class="filter">
        <div class="filter-ctn">
          <div class="location">
            <b-button v-on:click="searchData"><v-icon name="search" class="icon-search"></v-icon></b-button>
            <b-form-input v-model="location" type="text" placeholder="Enter your Location" />
          </div>
          <HotelDatePicker v-model="date_select" DatePickerID="01" class="width-100 mb-15" />
          <div class="guests">
            <v-icon name="users" class="icon-users"></v-icon>
            <b-form-input id="input1" v-model="name" trim />
          </div>
        </div>
      </div>
      <div class="tabs-show">
        <b-tabs content-class="mt-3">
          <b-tab title="Filter" active>
            <b-alert show dismissible>
              <v-icon name="clock" style="width: 40px;"></v-icon>
              <span><b>Hurry up! </b> Only 17% of Cardiff properties are left for your dates.</span>
            </b-alert>
          </b-tab>
          <b-tab title="Map">I'm the second tab content</b-tab>
        </b-tabs>
      </div>
      <div class="list-ctn">
        <div class="list-item" v-for="item in listData" :key="item">
          <div class="item-image">
            <img v-bind:src="item.image" alt="">
          </div>
          <div class="item-info">
            <div class="info-product">
              <h6 class="title">
                <v-icon name="home"></v-icon>
                <span>{{ item.times }}</span>
              </h6>
              <h3>{{ item.title }}</h3>
              <p class="address">{{ item.address }}</p>
              <p class="location">
                <v-icon name="map-pin"></v-icon>
                {{ item.location }}</p>
              <div class="chips">
                <b-badge pill variant="light" v-for="chip in item.cancellations" :key="chip" >{{ chip }}</b-badge>
              </div>
            </div>
            <div class="info-price">
              <div class="price-part">
                <h3>
                  <template v-if="item.point > 4">
                    Exceptional!
                  </template>
                  <template v-else>
                    Normal
                  </template>
                  {{ item.point }} / 5
                </h3>
                <span><strong>£{{ item.price }}</strong> per night</span>
              </div>
              <div class="price-review">
                <h3>{{ item.membership}}</h3>
                <star-rating class="ratings" :rating="item.rating" :star-size="14" :read-only="true" inactive-color="#d3d8de" active-color="#000"></star-rating><span class="review-count">(78)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
// eslint-disable no-new
// eslint-disable
// eslint-disable-next-line
export default {
  data () {
    return {
      msg: 'ahihi',
      location: '',
      date_select: '',
      rating: 5,
      name: '',
      listData: [
        {
          image: 'https://picsum.photos/1024/480/?image=52',
          times: 'Viewed 12 times in the last 48 hours...',
          title: '"Pinelodge - SELF CATERING LODGE - LLANTRAISANT ...',
          address: 'Cabin',
          location: '12.4 km to Cardiff centre',
          cancellations: ['Free Cancellation', 'xxx'],
          point: 1,
          price: 12,
          rating: 2,
          membership: 'Premier'
        },
        {
          image: 'https://picsum.photos/1024/480/?image=52',
          times: 'Viewed 44 times in the last 48 hours...',
          title: '"Pinelodge - SELF CATERING LODGE - LLANTRAISANT ...',
          address: 'Cabin - 1BR - 1BA -Sleep 2',
          location: '56.4 km to Cardiff centre',
          cancellations: ['Free Cancellation', 'xxx'],
          point: 5,
          price: 44,
          rating: 4,
          membership: 'free'
        },
        {
          image: 'https://picsum.photos/1024/480/?image=52',
          times: 'Viewed 48 times in the last 48 hours...',
          title: '"Pinelodge - SELF CATERING LODGE - LLANTRAISANT ...',
          address: 'Cabin - 1BR - 1BA -Sleep 2',
          location: '16.4 km to Cardiff centre',
          cancellations: ['Free Cancellation', 'xxx'],
          point: 5,
          price: 56,
          rating: 0,
          membership: 'Premier'
        },
        {
          image: 'https://picsum.photos/1024/480/?image=52',
          times: 'Viewed 48 times in the last 48 hours...',
          title: '"Pinelodge - SELF CATERING LODGE - LLANTRAISANT ...',
          address: 'Cabin - 1BR - 1BA -Sleep 2',
          location: '16.4 km to Cardiff centre',
          cancellations: ['Free Cancellation', 'xxx'],
          point: 5,
          price: 56,
          rating: 0,
          membership: 'Premier'
        }
      ]
    }
  },
  methods: {
    searchData () {
      this.listData = [
        {
          image: 'https://picsum.photos/1024/480/?image=52',
          times: 'Viewed 12 times in the last 48 hours...',
          title: '"Pinelodge - SELF CATERING LODGE - LLANTRAISANT ...',
          address: 'Cabin',
          location: '12.4 km to Cardiff centre',
          cancellations: ['Free Cancellation', 'xxx'],
          exceptional: '1/5',
          price: 12,
          rating: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/list-view.scss';
</style>
