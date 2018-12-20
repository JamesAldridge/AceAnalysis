<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <form @submit.prevent="submit">

            <div class="form-group" :class="{ 'form-group--error': $v.tournamentName.$error }">
              <label class="form__label">Tournament Name</label>
              <input class="form__input" placeholder="tournament name" v-model.trim="$v.tournamentName.$model"/>
            </div>
            <div class="error" v-if="!$v.tournamentName.required">Tournament Name is Required</div>
            <div class="error" v-if="!$v.tournamentName.minLength">Tournament Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
            <div class="form-group" :class="{ 'form-group--error': $v.tableSize.$error }">
              <label class="form-control-label" name="amount">Table Size</label>
              <input class="form__input" type="number" v-model.trim="tableSize"/>
            </div>
            <div class="error" v-if="!$v.tableSize.numeric">Invalid input. Enter the table size</div>
            <div class="form-group" :class="{ 'form-group--error': $v.buyIn.$error }">
              <label class="form-control-label" name="amount">Buy In amount</label>
              <input class="form__input" type="number" v-model.trim="buyIn"/>
            </div>
            <div class="error" v-if="!$v.buyIn.decimal">Invalid input. Enter your buyIn</div>
            <div class="form-group" :class="{ 'form-group--error': $v.prizePool.$error }">
              <label class="form-control-label" name="amount">Guaranteed Prize Pool</label>
              <input class="form__input" type="number" v-model.trim="prizePool"/>
            </div>
            <div class="error" v-if="!$v.prizePool.decimal">Invalid input. Enter your prizePool</div>
            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Add Tournament
              </button>
            </p>
            <p class="typo__p" v-if="submitStatus === 'OK'">Tournament added!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">adding tournament...</p>
          </form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import PlayerService from '@/services/playerservice'
import {required, minLength, numeric, decimal} from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  tournamentName: 'Tournament',
  data () {
    return {
      messagetitle: 'Add a Tournament ',
      buyIn: 0,
      tournamentName: '',
      submitStatus: null
    }
  },
  validations: {
    tournamentName: {
      required,
      minLength: minLength(5)
    },
    buyIn: {
      required,
      decimal
    },
    prizePool: {
      required,
      decimal
    },
    tableSize: {
      required,
      numeric
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          let tournament = {
            tournamentName: this.tournamentName,
            buyIn: this.buyIn,
            tableSize: this.tableSize,
            prizePool: this.prizePool
          }
          this.tournament = tournament
          console.log('Submitting in Tournamnet form : ' + JSON.stringify(this.tournament, null, 5))
          this.submitTournament(this.tournament)
        }, 500)
      }
    },
    submitTournament: function (tournament) {
      console.log('submitTournament')
      console.log('Submitting in submitPlayer : ' + tournament)
      PlayerService.postTournaments(tournament)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
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
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
