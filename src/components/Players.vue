<template>
  <div class="hero">
    <h3 class="vue-title">
      <img src="../assets/shark.png" class="" style="padding: 5px">
      {{pokerAliastitle}}
    </h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="players" :options="options">
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deletePlayer(props.row._id)"></a>
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
      pokerAliastitle: 'Players',
      players: [],
      props: ['_id'],
      errors: [],
      columns: ['_id', 'pokerAlias', 'vpip', 'afq', 'winnings', 'remove'],
      options: {
        headings: {
          id: '_ID',
          pokerAlias: 'Alias',
          vpip: 'VPIP%',
          afq: 'AFQ%',
          winnings: 'Winnings'
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
    },

    deletePlayer: function (id) {
      this.$swal({
        title: 'Are you totaly sure you want to permanently delete this item?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        showCloseButton: true
        // showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result.value)
        PlayerService.deletePlayer(id)
          .then(response => {
            // JSON responses are automatically parsed.
            this.message = response.data
            console.log(this.message)
            this.loadPlayers()
            // Vue.nextTick(() => this.$refs.vuetable.refresh())
            this.$swal('Deleted', 'You successfully deleted this Player ' + JSON.stringify(response.data, null, 5), 'success')
          })
          .catch(error => {
            this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
            this.errors.push(error)
            console.log(error)
          })
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
  h3{
    margin-top: 0px !important;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
</style>
