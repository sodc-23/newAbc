


<template>
  <div class="popup">
    <b-button v-b-modal.modal1 style="margin: 30px;">Show modal</b-button>

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
          <div>
            <date-picker v-model="time3" lang="en" :first-day-of-week="1"></date-picker>
          </div>
          <div>
            <date-picker v-model="time3" lang="en" :first-day-of-week="1"></date-picker>
          </div>

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
import DatePicker from 'vue2-datepicker'
 
export default {
  components: { DatePicker },
  data() {
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
      timePickerOptions:{
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
  name: "HelloWorld",
  data(){
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* ============== */
.social{
  width: 100%;
  text-align: right;
}
.btn-icon{
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: inline-block;
  margin-left: 10px;
}
.content{
  padding: 50px 30px;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin-top: 15px;
}
.ft-left{
  text-align: left;
}
.ft-left svg{
  width: 35px;
  height: 35px;
}
.vue-star-rating-star{
  width: 35px;
  height: 35px;
}
.reviews{
  width: 100%;
  display: inline-block;
  text-align: left;
}
#modal1 .modal-dialog{
  width: 50% !important;
  max-width: none !important;
  overflow: hidden;
  height: auto !important;
  /* display: inline-block; */
}
.modal-dialog{
  width: 50% !important;
}
.pricing{
  text-align: center;
  margin-top: 60px;
}
.pricing >div{
  display: inline-block;
  width: 200px;
  margin: 15px;
}
.pricing .guests{
  display: block;
  width: 430px;
  margin: 15px auto;
  text-align: left;
}
.pricing .book-now{
  display: block;
  width: 430px;
  margin: 15px auto;
  text-align: left;
  margin-top: 60px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
  margin-bottom: 15px;
}
.text-charged{
  width: 100%;
  color: #cc3b30;
  text-align: right;
}
.content{
  display: inline-block;
  overflow: hidden;
  width: 100%;
}
.pricing .user{
  overflow: hidden;
  text-align: left;
  width: 430px;
}
.user .user-name{
  height: 120px;
  align-items: center;
   display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-content: center;
  align-content: center;
  /* width: 180px; */
  float: left;
}
.user .user-avatar{
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 30px;
}
.footer{
  width: 100%;
  margin-top: 30px;
  text-align: center;
}
.footer >p{
  text-align: center;
  width: 100%;
  margin: 0;
}
</style>
