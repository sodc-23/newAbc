
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
        <HotelDatePicker DatePickerID="01"
            :minNights="minNights"
            :maxNights="maxNights"
            :disabledDaysOfWeek="disabledDaysOfWeek"
            :showCloseButton="showCloseButton"
            class="width-100 mb-15"
            />

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
// eslint-disable no-new
// eslint-disable
// eslint-disable-next-line
import DatePicker from 'vue2-datepicker'

export default {
  components: { DatePicker },
  data () {
    return {
      time1: '',
      time2: '',
      time3: '',
      // custom lang
      lang: {
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        pickers: ['next 7 days', 'next 30 days', 'previous 7 days', 'previous 30 days'],
        placeholder: {
          date: 'Select Date',
          dateRange: 'Select Date Range'
        }
      },
      // custom range shortcuts
      shortcuts: [
        {
          text: 'Today',
          onClick: () => {
            this.time3 = [ new Date(), new Date() ]
          }
        }
      ],
      timePickerOptions: {
        start: '00:00',
        step: '00:30',
        end: '23:30'
      }
    }
  }
}
</script>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../assets/scss/search.scss';
</style>
