<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="players" :options="options">
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
      messagetitle: 'Players',
      players: [],
      errors: [],
      columns: ['pokerAlias', '_id', 'winnings', 'tournaments'],
      options: {
        headings: {
          pokerAlias: 'Alias',
          _id: 'ID',
          winnings: 'Winnings ',
          tournaments: 'Tournaments'
        }
      }
    }
  },
  created () {
    this.loadPlayers()
  },
  methods: {
    loadPlayers: function () {
      PlayerService.fetchPlayers()
        .then(response => {
          // JSON responses are automatically parsed.
          this.players = response.data
          console.log(this.players)
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
