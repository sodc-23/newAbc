<template>
  <div class="popup">
    <b-button v-b-modal.modal1 style="margin: 30px;">Show modal</b-button>

     <!-- <date-picker lang="en" v-model="time1" :first-day-of-week="1"></date-picker>
    <date-picker lang="en" v-model="time2" type="datetime" :time-picker-options="timePickerOptions"></date-picker>
    <date-picker lang="en" v-model="time3" range :shortcuts="shortcuts"></date-picker>
    <date-picker lang="en" v-model="value"></date-picker> -->

    <!-- Modal Component -->
    <b-modal id="modal1" title="" hide-header="true" hide-footer="true">
      <div class="social">
        <div class="btn-icon">
          <v-icon name="share" style="width: 30px;"></v-icon>
        </div>
        <div class="btn-icon">
          <v-icon name="heart" style="width: 30px;"></v-icon>
        </div>
      </div>

      <div class="content">
        <div class="ft-left">
          <div class="ft-price">
            <v-icon name="zap" style="width: 20px;"></v-icon> <span style="font-weight: bold">$123</span> <span style="margin-left: 7px; color: ccc;">avg/night</span>
          </div>
          <div class="reviews">
            <star-rating style="display: inline-block;"></star-rating>
            <span style="margin-top: 10px; margin-left: 7px;">Reviews</span>
          </div>
          <p style="color: #777; margin-top: 10px;">Wonderful 4.9/5 - Good for families</p>
        </div>

        <div class="pricing">
          <!-- <div>
            <date-picker v-model="time3" lang="en" :first-day-of-week="1"></date-picker>
          </div>
          <div>
            <date-picker v-model="time3" lang="en" :first-day-of-week="1"></date-picker>
          </div> -->

            <!-- <date-picker lang="en" v-model="time3" range :shortcuts="shortcuts" style="width: 430px !important;"></date-picker> -->

          <HotelDatePicker DatePickerID="01" class="width-100 mb-15" />

          <div class="guests">
            <b-form-group
              id="fieldset1"
              label="Guests"
              label-for="input1"
            >
              <b-form-input id="input1" :state="state" v-model="name" trim />
             </b-form-group>
          </div>

          <div class="book-now">
            <b-button
              variant="primary"
              style="width: 100%; background: #6f3263 !important; color: #fff; border-radius: 30px; border: none; float: right; padding: 15px 30px; border-radius: 30px; margin: 12px 0;"
            >Book Now</b-button>
            <p class="text-charged">You wont be charged yet</p>
          </div>

          <div class="user">
            <img class="user-avatar" src="https://www.qualiscare.com/wp-content/uploads/2017/08/default-user-300x300.png" alt="">
            <div class="user-name">
              <p>owner <a href="">Ask Owner a Question</a></p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <p>For booking assistance, call Holidayin at <strong>1234567890 Property #1</strong></p>
        <b-button
              variant="primary"
              style="float: right; background: rgb(199, 63, 63) !important; color: #fff; border-radius: 30px; border: none; float: right; padding: 15px 30px; border-radius: 30px; margin: 12px 0;"
            >Report this listing</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
// eslint-disable no-new
// eslint-disable
// eslint-disable-next-line
export default {
  data () {
    return {
      slide: 0,
      sliding: null,
      dateOne: '',
      dateTwo: '',
      dateFormat: 'DD-MM-YYYY'
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    // formatDates: function (dateOne, dateTwo) {
    //   var formattedDates = ''
    //   if (dateOne) {
    //     formattedDates = format(dateOne, this.dateFormat)
    //   }
    //   if (dateTwo) {
    //     formattedDates += ' - ' + format(dateTwo, this.dateFormat)
    //   }

    //   console.log(formattedDates)
    //   return formattedDates
    // },

    onClosed: function () {
      var datesStr = this.formatDates(this.inputDateOne, this.inputDateTwo)
      console.log('Dates Selected: ' + datesStr)
      this.trigger = false
    },
    toggleAlign: function () {
      this.alignRight = !this.alignRight
    },
    triggerDatepicker: function () {
      this.trigger = !this.trigger
    },
    onMonthChange: function (dates) {
      console.log('months changed', dates)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../assets/scss/popup.scss';
</style>
