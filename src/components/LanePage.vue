/ * eslint-disable * /
/*eslint semi: "error"*/

<template>
  <div class="hello">
    <div class="lanepage">
      <b-navbar class="navBar" toggleable="lg" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"/>

        <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="active fw-bold" href="#">HOME</b-nav-item>
            <b-nav-item href="#" class="fw-bold">REGISTER</b-nav-item>

            <b-nav-item-dropdown class="fw-bold" text="LOGIN" right>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#">
              <!-- <font-awesome-icon icon="coffee"/> -->
              <v-icon name="facebook" style="width: 25px;"></v-icon>
            </b-nav-item>
            <b-nav-item href="#">
              <!-- <font-awesome-icon icon="coffee"/> -->
              <v-icon name="youtube" style="width: 25px;"></v-icon>
            </b-nav-item>
            <b-nav-item href="#">
              <!-- <font-awesome-icon icon="coffee"/> -->
              <v-icon name="instagram" style="width: 25px;"></v-icon>
            </b-nav-item>

            <!-- <b-nav-item-dropdown right>
                <template slot="button-content">
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>-->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="sileder">
      <b-carousel
        id="carousel1"
        style="text-shadow: 1px 1px 2px #333;"
        controls
        indicators
        background="#ababab"
        :interval="4000"
        img-width="1024"
        img-height="480"
        v-model="slide"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        />

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"/>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <div class="contnet">
      <b-card no-body>
        <b-tabs small card v-model="tabIndex">
          <b-tab title="Overview"  style="display: inline-flex">
            <masonry :cols="2" :gutter="50">
              <div class="overview-left" style="text-align: left;">
                <p>
                  <v-icon name="home"></v-icon>
                  <span style="margin-left: 10px;">Cottage</span>
                </p>
                <p>
                  <v-icon name="users"></v-icon>
                  <span style="margin-left: 10px;">People: 2</span>
                </p>
                <p>
                  <v-icon name="sidebar"></v-icon>
                  <span style="margin-left: 10px;">Bedrooms: 3</span>
                </p>
                <p>
                  <v-icon name="target"></v-icon>
                  <span style="margin-left: 10px;">Bathrooms: 3</span>
                </p>
                <p>
                  <v-icon name="voicemail"></v-icon>
                  <span style="margin-left: 10px;">Separate WCs: 1</span>
                </p>
                <p>
                  <v-icon name="watch"></v-icon>
                  <span style="margin-left: 10px;">Min. Stay: 7 nights</span>
                </p>
              </div>
              <div class="overview-right">
                <GmapMap
                  :center="{lat:10, lng:10}"
                  :zoom="7"
                  map-type-id="terrain"
                  style="width: 900px; height: 700px"
                >
                  <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                  />
                </GmapMap>
              </div>
            </masonry>
          </b-tab>
          <b-tab title="Facilities" style="display: inline-flex">
            I'm the second tab
            <b-card>I'm the card in tab</b-card>
          </b-tab>
          <b-tab title="Reviews" style="display: inline-flex">I'm the last tab</b-tab>
          <b-tab title="Location" style="display: inline-flex">I'm the last tab</b-tab>
          <b-tab title="Availability" style="display: inline-flex">I'm the last tab</b-tab>
        </b-tabs>
      </b-card>
    </div>
    
    <div class="banner-bot">
      <b-button>Premier Partner</b-button>
      <b-button>Instant Confirmation</b-button>
      <b-button>Good for families</b-button>
      <b-button>Hot Tub</b-button>
      <b-button>Pool</b-button>
      <b-button>No Smoking</b-button>
    </div>

    <div class="footer" style="padding: 15px;">
      <masonry :cols="2" :gutter="50">
        <div class="ft-left">
          <div class="ft-price">
            <v-icon name="zap" style="width: 20px;"></v-icon> <span style="font-weight: bold">$123</span> <span style="margin-left: 7px; color: ccc;">avg/night</span>
          </div>
          <div class="reviews">
            <star-rating star-size="25px" rating="5" style="display: inline-block;"></star-rating>
            <span style="margin-top: 10px; margin-left: 7px;">Reviews</span>
          </div>
        </div>
        <div class="ft-right">
          <b-button
            variant="primary"
            style="background: #6f3263 !important; color: #fff; border-radius: 30px; border: none; float: right; padding: 15px 30px; border-radius: 30px; margin-top: 12px;"
          >Request to Book</b-button>
        </div>
      </masonry>
    </div>
  </div>
</template>

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
<style scoped  >
h1,
h2 {
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
.navBar {
  background: #6f3263 !important;
}
.card-header{
  padding: 0 !important;
}
.card-header-tabs{
  display: inline-flex;
}
.v-icon{
  font-size: 24px;
  width: 30px;
}
.banner-bot{
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 30px 15px;
  border-bottom: 1px solid #ddd;
}
.banner-bot button{
  display: inline-block;
  margin: 0 15px;
  color: #000;
  background-color: rgba(210, 202, 202, 0.28);
  border: none;
}
.contnet{
  
}
.contnet .card-header-tabs{
  display: inline-flex;
}
.footer{

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
.fw-bold{
  font-weight: bold;
}
</style>
