<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <form @submit.prevent="submit">

            <div class="form-group" :class="{ 'form-group--error': $v.pokerAlias.$error }">
              <label class="form__label">Poker Alias</label>
              <input class="form__input" placeholder="pokerAlias" v-model.trim="$v.pokerAlias.$model"/>
            </div>
            <div class="error" v-if="!$v.pokerAlias.required">pokerAlias is Required</div>
            <div class="error" v-if="!$v.pokerAlias.minLength">pokerAlias must have at least {{$v.pokerAlias.$params.minLength.min}} letters.</div>
            <div class="form-group" :class="{ 'form-group--error': $v.winnings.$error }">
              <label class="form-control-label" name="amount">Total Profit (or loss) </label>
              <input class="form__input" type="number" v-model.trim="winnings"/>
            </div>
            <div class="error" v-if="!$v.winnings.decimal">Invalid input. Enter your profit/loss</div>

            <div class="form-group" :class="{ 'form-group--error': $v.afq.$error }">
              <label class="form-control-label" name="amount">AFQ % </label>
              <input class="form__input" type="number" v-model.trim="afq"/>
            </div>
            <div class="error" v-if="!$v.afq.decimal">Invalid input. Enter your profit/loss</div>


            <div class="form-group" :class="{ 'form-group--error': $v.vpip.$error }">
              <label class="form-control-label" name="amount">VPIP % </label>
              <input class="form__input" type="number" v-model.trim="vpip"/>
            </div>
            <div class="error" v-if="!$v.vpip.decimal">Invalid input. Enter your profit/loss</div>

            <p>
              <button class="btn btn-dark btn1" type="submit" :disabled="submitStatus === 'PENDING'">Add player
              </button>
            </p>
            <p class="typo__p" v-if="submitStatus === 'OK'">Player added!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">adding player...</p>
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
import {required, minLength, between, decimal} from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'Donate',
  data () {
    return {
      messagetitle: 'Add a player ',
      winnings: 0,
      pokerAlias: '',
      afq: 0,
      vpip: 0,
      submitStatus: null
    }
  },
  validations: {
    pokerAlias: {
      required,
      minLength: minLength(5)
    },
    winnings: {
      required,
      decimal
    },
    afq: {
      required,
      decimal
    },
    vpip: {
      required,
      decimal
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
          let player = {
            pokerAlias: this.pokerAlias,
            winnings: this.winnings,
            afq: this.afq,
            vpip: this.vpip
          }
          this.player = player
          console.log('Submitting in PlayerForm : ' + JSON.stringify(this.player, null, 5))
          this.submitPlayer(this.player)
        }, 500)
      }
    },
    submitPlayer: function (player) {
      console.log('submitPlayer!')
      console.log('Submitting in submitPlayer : ' + player)
      PlayerService.postPlayer(player)
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

  button {
    color: gold;
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
    background: purple;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
