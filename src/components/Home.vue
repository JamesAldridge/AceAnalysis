<template>
  <div>
    <b-carousel id="carousel1"
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

      <b-carousel-slide caption="AceAnalysis Aims to elevate your game"
                        text="Improve Your game and move up the stakes"
                        img-src="http://www.christian--louboutin.in.net/wp-content/uploads/2018/08/poker-chips-on-the-table-1024x480.jpeg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Understand The Stats"
        text="Overcome variance and make profit"
        img-src="http://farm8.staticflickr.com/7417/11924718544_5407e07f89_b.jpg">
      </b-carousel-slide>

      <b-carousel-slide
        caption="Crush the Game Online"
        text="Build a bankroll"
        img-src="https://bitcoinplay.net/wp-content/uploads/2018/10/slika-1-1024x480.jpg">
      </b-carousel-slide>

      <b-carousel-slide
        caption="Become A Pro!"
        text="Lose Small, Win Big"
        img-src="https://d1nz104zbf64va.cloudfront.net/pv/i/o/579744c0d3904342238b4577."></b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- carousel-1.vue -->
