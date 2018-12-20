<template>
  <div class="centerApp">
    <div>
    <h2>
      Check Out some of the live events taking Place
    </h2>
      <ul class="list-unstyled">
        <b-media tag="li">
          <h5 class="mt-0 mb-1">Megastacks Leinster</h5>
          Taking place at the Clayton Hotel Dublin January 26th. €800 buy-in, with a prize pool of a guaranteed 100k
        </b-media>
        <b-media tag="li" class="my-4">
          <h5 class="mt-0 mb-1">Megastacks Ulster</h5>
          Taking place at the Fitzwilliam Hotel Belfast February 19th. €500 buy-in, with a prize pool of a guaranteed 50k
        </b-media>
        <b-media tag="li">
          <h5 class="mt-0 mb-1">Megastacks Connact</h5>
          Taking place at the Galway Bay Hotel March 3rd. €500 buy-in, with a prize pool of a guaranteed 50k
        </b-media>
      </ul>
    </div>
  <gmap-map id="gmap"
    v-bind:center="center"
    v-bind:zoom="6"
    v-bind:map-type-id="mapTypeId">
    <gmap-marker
      v-for="(item, index) in markers"
      v-bind:key="index"
      v-bind:position="item.position"
      v-on:click="center=item.position"/>
  </gmap-map>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB5hhmhwNDW83Vu9AG5oE2QOKs37jdJ_54'
  }
})

export default {
  data () {
    return {
      center: {lat: 53.1424, lng: -7.6921},
      mapTypeId: 'terrain',
      markers: [
        {position: {lat: 53.3308, lng: -6.2487}},
        {position: {lat: 54.5957, lng: -5.9351}},
        {position: {lat: 53.2586, lng: -9.0850}}
      ]
    }
  }
}
</script>

<style scoped>
  .vue-map-container {
    height: 450px;
    max-width: 992px;
    width: 100%;
  }

  #gmap{
  margin: auto;
  }
</style>
