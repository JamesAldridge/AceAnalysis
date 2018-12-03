<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messageTitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="tournaments" :options="options">
      </v-client-table>
    </div>
  </div>
</template>

<script>
import PlayerService from '@/services/playerservice.js'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Players',
  data () {
    return {
      messageTitle: 'Tournaments',
      tournaments: [],
      errors: [],
      columns: ['tournamentName', 'tableSize', 'speed', 'buyIn', 'prizePool'],
      options: {
        headings: {
          tournamentName: 'Tournament Name',
          tableSize: 'Table Size',
          speed: 'Speed',
          buyIn: 'Buy In ',
          prizePool: 'Prize Pool'
        }
      }
    }
  },
  created () {
    this.loadTournaments()
  },
  methods: {
    loadTournaments: function () {
      PlayerService.fetchTournaments()
        .then(response => {
          // JSON responses are automatically parsed.
          this.tournaments = response.data
          console.log(this.tournaments)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
</style>
