import Api from '@/services/api'

export default {
  fetchPlayers () {
    return Api().get('/players')
  },
  postPlayer (player) {
    return Api().post('/players', player,
      { headers: {'Content-type': 'application/json'} })
  }
}
