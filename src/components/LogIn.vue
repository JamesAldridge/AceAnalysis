<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <form @submit.prevent="submit">

            <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
              <label class="form__label">Email Address</label>
              <input class="form__input" v-model.trim="$v.pokerAlias.$model"/>
            </div>

            <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
              <label class="form-control-label" name="amount">Password</label>
              <input class="form__input" type="number" v-model.trim="winnings"/>
            </div>
            <div class="error" v-if="!$v.winnings.decimal">Invalid input. Enter your profit/loss</div>

            <div class="error" v-if="!$v.pokerAlias.required">pokerAlias is Required</div>
            <div class="error" v-if="!$v.pokerAlias.minLength">pokerAlias must have at least {{$v.pokerAlias.$params.minLength.min}} letters.</div>
            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Log in
              </button>
            </p>

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
      messagetitle: 'Log in ',
      winnings: 0,
      pokerAlias: '',
      paymenttype: 'Direct',
      amount: 0,
      upvotes: 0,
      donation: {},
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
      decimal,
    },
    afq: {
      required,
      decimal,
      between: between(1, 100)
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
          var player = {
            paymenttype: this.paymenttype,
            amount: this.amount,
            upvotes: this.upvotes,
            pokerAlias: this.pokerAlias
          }
          this.player = player
          console.log('Submitting in PlayerForm : ' + JSON.stringify(this.player, null, 5))
          this.submitPlayer(this.player)
        }, 500)
      }
    },
    submitPlayer: function (player) {
      console.log('submitDonation!')
      console.log('Submitting in submitDonation : ' + player)
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
