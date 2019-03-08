<template>
  <div class="popup">
    <!-- Modal Component -->
    <b-modal id="modal1" title="" :hide-header="true" :hide-footer="true">
      <div class="content">
        <div class="row">
          <div class="col-7">
            <div class="price">
              <v-icon name="zap"></v-icon> <b>£123</b> <span>avg/night</span>
            </div>
            <div class="reviews">
              <star-rating :star-size="18" :rating="rating" :rounded-corners="true"></star-rating>
            </div>
          </div>
          <div class="col-5">
            <div class="social">
              <div class="btn-icon">
                <v-icon name="share" ></v-icon>
              </div>
              <div class="btn-icon">
                <v-icon name="heart" ></v-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-5"></div>
        <div class="pricing">
          <div class="form-group">
            <HotelDatePicker DatePickerID="01" class="width-100 mb-15" />
          </div>
          <div class="guests form-group">
            <b-form-group
              id="fieldset1"
              label="Guests"
              label-for="input1"
            >
              <b-form-input id="input1" v-model="guest" />
             </b-form-group>
          </div>

          <div class="form-group">
            <b-button
              variant="primary"
              class="btn-custom1 w-100"
            >Book Now</b-button>
          </div>
          <div class="form-group">
              <p class="text-charged">You wont be charged yet</p>
          </div>

          <div class="form-group user-ask">
            <div class="user-name">
              <img class="user-avatar" src="https://www.qualiscare.com/wp-content/uploads/2017/08/default-user-300x300.png" alt="">
              <span>owner <a href="">Ask Owner a Question</a></span>
            </div>
          </div>
        </div>
      </div>
<!--
      <div class="footer">
        <p>For booking assistance, call Holidayin at <strong>1234567890 Property #1</strong></p>
        <b-button
              variant="primary"
              style="float: right; background: rgb(199, 63, 63) !important; color: #fff; border-radius: 30px; border: none; float: right; padding: 15px 30px; border-radius: 30px; margin: 12px 0;"
            >Report this listing</b-button>
      </div> -->
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
      dateOne: '',
      dateTwo: '',
      dateFormat: 'dd/mm/yyyy',
      rating: 4,
      guest: ''
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../assets/scss/popup.scss';
</style>
