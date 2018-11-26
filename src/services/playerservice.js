import Api from '@/services/api'

export default {
  fetchPlayers () {
    return Api().get('/players')
  }
}
