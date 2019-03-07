<template>
  <div class="hello">
    <div class="lanepage">
      <b-navbar class="navBar" toggleable="lg" type="dark" >
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
              <v-icon name="facebook" style="width: 25px;"></v-icon>
            </b-nav-item>
            <b-nav-item href="#">
              <v-icon name="youtube" style="width: 25px;"></v-icon>
            </b-nav-item>
            <b-nav-item href="#">
              <v-icon name="instagram" style="width: 25px;"></v-icon>
            </b-nav-item>
           
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

    <div class="content">
      <b-card no-body>
        <b-tabs small card v-model="tabIndex">
          <b-tab title="Overview">
            <div class="row">
              <div class="col-sm-6">
                <p>
                  <v-icon name="home"></v-icon>
                  <span class="mgl-15">Cottage</span>
                </p>
                <p>
                  <v-icon name="users"></v-icon>
                  <span class="mgl-15">People: 2</span>
                </p>
                <p>
                  <v-icon name="sidebar"></v-icon>
                  <span class="mgl-15">Bedrooms: 3</span>
                </p>
                <p>
                  <v-icon name="target"></v-icon>
                  <span class="mgl-15">Bathrooms: 3</span>
                </p>
                <p>
                  <v-icon name="voicemail"></v-icon>
                  <span class="mgl-15">Separate WCs: 1</span>
                </p>
                <p>
                  <v-icon name="watch"></v-icon>
                  <span class="mgl-15" >Min. Stay: 7 nights</span>
                </p>
              </div>
              
              <div class="col-sm-6">
                <GmapMap
                  :center="{lat:18, lng:18}"
                  :zoom="7"
                  map-type-id="terrain"

                >
                </GmapMap>
              </div>
            </div>
          </b-tab>
          <b-tab title="Facilities">
            I'm the second tab
            <b-card>I'm the card in tab</b-card>
          </b-tab>
          <b-tab title="Reviews" >I'm the last tab</b-tab>
          <b-tab title="Location" >I'm the last tab</b-tab>
          <b-tab title="Availability" >I'm the last tab</b-tab>
        </b-tabs>
      </b-card>
    </div>
<<<<<<< HEAD
    
    <div class="footer-menu">
      <a href="#">Premier Partner</a>
      <a href="#">Instant Confirmation</a>
      <a href="#">Good for families</a>
      <a href="#">Hot Tub</a>
      <a href="#">Pool</a>
      <a href="#">No Smoking</a>
=======

    <div class="banner-bot">
      <b-button>Premier Partner</b-button>
      <b-button>Instant Confirmation</b-button>
      <b-button>Good for families</b-button>
      <b-button>Hot Tub</b-button>
      <b-button>Pool</b-button>
      <b-button>No Smoking</b-button>
>>>>>>> 2b421ee8ae9149c84d089fa49dd7ec6524f61461
    </div>

    <footer>
      <div class="row align-items-center">
        <div class="col-sm-6">
          <div class="price">
            <v-icon name="zap"></v-icon> <b>$123</b> <span>avg/night</span>
          </div>
          <div class="reviews">
            <star-rating :star-size="18" :rating="rating" :rounded-corners="true"></star-rating>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex flex-row-reverse">
            <b-button
              variant="primary" class="btn-custom1"
            >Request to Book</b-button>
          </div>
        </div>
      </div>      
    </footer>
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
<<<<<<< HEAD
      tabIndex: 1,
      rating: 4,
=======
      tabIndex: 1
>>>>>>> 2b421ee8ae9149c84d089fa49dd7ec6524f61461
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<<<<<<< HEAD
<style lang="scss"  scoped>
.v-icon{
  font-size: 24px;
  width: 30px;
}

@media (max-width: 768px) {
  footer {
    .d-flex {
      margin-top: 15px;
      display: block!important;
    }
  }
}
=======
<style lang="scss"  >
  @import '../assets/scss/lanepage.scss';
>>>>>>> 2b421ee8ae9149c84d089fa49dd7ec6524f61461
</style>
