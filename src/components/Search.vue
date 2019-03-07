
<template>
  <div class="search">
    <div class="filter">
      <p>Villa? Cottage? Apartment? <br/>Your perfect holiday awaits</p>
      <div class="filter-input">
        <b-form-input class="width-100 mb-15" v-model="text1" type="text" placeholder="Location" />
        <!-- <b-form-input class="width-50-l mb-15" v-model="text1" type="date" placeholder="Start Date" /> -->
        <!-- <date-picker class="width-50-l mb-15" lang="en" v-model="time1" :first-day-of-week="1"></date-picker>
        <date-picker class="width-50-r mb-15" lang="en" v-model="time1" :first-day-of-week="1"></date-picker> -->
        <!-- <b-form-input class="width-50-r mb-15" v-model="text1" type="date" placeholder="End Date" /> -->
        <HotelDatePicker DatePickerID="01" class="width-100 mb-15" />

        <b-form-input class="width-100 mb-15" v-model="text1" type="text" placeholder="Guests" />
      </div>
      <div class="act-search">
        <b-button
          variant="primary"
          style="width: 100%; background: #3F51B5 !important; color: #fff; border-radius: 30px; border: none; float: right; padding: 15px 30px; border-radius: 30px; margin: 12px 0;"
        >Search</b-button>
      </div>
    </div>

    <div class="list-result">
      <div class="result-item">
        <div class="item-left">
          <v-icon name="home" style="width: 40px;"></v-icon>
        </div>
        <div class="item-right">
          <h3>Your holiday is safe with us</h3>
          <p>More space, more privacy, more amenities</p>
        </div>
      </div>
      <div class="result-item">
        <div class="item-left">
          <v-icon name="home" style="width: 40px;"></v-icon>
        </div>
        <div class="item-right">
          <h3>Your holiday is safe with us</h3>
          <p>More space, more privacy, more amenities</p>
        </div>
      </div>
      <div class="result-item">
        <div class="item-left">
          <v-icon name="home" style="width: 40px;"></v-icon>
        </div>
        <div class="item-right">
          <h3>Your holiday is safe with us</h3>
          <p>More space, more privacy, more amenities</p>
        </div>
      </div>
      <div class="result-item">
        <div class="item-left">
          <v-icon name="home" style="width: 40px;"></v-icon>
        </div>
        <div class="item-right">
          <h3>Your holiday is safe with us</h3>
          <p>More space, more privacy, more amenities</p>
        </div>
      </div>
      <div class="result-item">
        <div class="item-left">
          <v-icon name="home" style="width: 40px;"></v-icon>
        </div>
        <div class="item-right">
          <h3>Your holiday is safe with us</h3>
          <p>More space, more privacy, more amenities</p>
        </div>
      </div>
      <div class="result-item">
        <div class="item-left">
          <v-icon name="home" style="width: 40px;"></v-icon>
        </div>
        <div class="item-right">
          <h3>Your holiday is safe with us</h3>
          <p>More space, more privacy, more amenities</p>
        </div>
      </div>
      <div class="result-item">
        <div class="item-left">
          <v-icon name="home" style="width: 40px;"></v-icon>
        </div>
        <div class="item-right">
          <h3>Your holiday is safe with us</h3>
          <p>More space, more privacy, more amenities</p>
        </div>
      </div>
      <div class="result-item">
        <div class="item-left">
          <v-icon name="home" style="width: 40px;"></v-icon>
        </div>
        <div class="item-right">
          <h3>Your holiday is safe with us</h3>
          <p>More space, more privacy, more amenities</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text1: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../assets/scss/search.scss';
</style>
