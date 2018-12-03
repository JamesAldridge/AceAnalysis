import Api from '@/services/api'

export default {
  fetchPlayers () {
    return Api().get('/players')
  },
  postPlayer (player) {
    return Api().post('/players', player,
      { headers: {'Content-type': 'application/json'} })
  },
  fetchTournaments () {
    return Api().get('/tournaments')
  },
  postTournaments (tournament) {
    return Api().post('/tournament', tournament,
      { headers: {'Content-type': 'application/json'} })
  }
}
