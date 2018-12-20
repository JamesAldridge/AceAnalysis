<template>
  <div class="centerApp">
    <div>
    <h2>
      Check Out some of the live events taking Place
    </h2>
      <ul>
        <li>
          <h3>Megastacks Dublin</h3>
          <p>2.5k buy-in taking place January 27th in Clayton Hotel.</p>
        </li>
        <li>
          <h3>MegaStacks Ulster</h3>
          <p>Fitzwilliam Hotel Belfast hosting the 50k guaranteed event.</p>
        </li>

        <li>
          <h3>Megastacks Connacht</h3>
          <p>Galway Bay Hotel hosting the 1k buy in event.</p>
        </li>
      </ul>
    </div>
  <gmap-map
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

  * {margin: 0; padding: 0;}

  div {
    margin: 20px;
  }

  ul {
    list-style-type: none;
    width: 500px;
  }

  h3 {
    font: bold 20px/1.5 Helvetica, Verdana, sans-serif;
  }

  li img {
    float: left;
    margin: 0 15px 0 0;
  }

  li p {
    font: 200 12px/1.5 Georgia, Times New Roman, serif;
  }

  li {
    padding: 10px;
    overflow: auto;
  }

  li:hover {
    background: #eee;
    cursor: pointer;
  }

  .centerApp {
    margin: auto;
  }
</style>
