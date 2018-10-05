import backend from '@/backend'

export default {
  getDownloads ({commit}) {
    backend.fetchResource('torrents/')
      .then(result => {
        commit('setDownloads', result)
      })
  },
  // last lines from ajax
  getLines ({commit}, torrentID) {
    const fetchUrl = 'torrents/' + torrentID + '/console/stdout'
    backend.fetchResource(fetchUrl)
      .then(lines => {
        lines.forEach(line => {
          commit('appendLine', {torrentID, line})
        })
      })
  },
  removeRemote ({commit}, {remoteID}) {
    // delete from api
    commit('removeRemote', remoteID)
  },
  addRemote ({commit}) {
    // add from api
    const data = {
      id: Math.floor(Math.random() * 100),
      type: 'transmission',
      config: {
        hostname: 'yuppie',
        ssl: false
      }
    }
    commit('addRemote', data)
  },
  socket_grabbed: ({dispatch}) => {
    dispatch('getDownloads')
  },
  // one line from socket
  socket_read: ({commit}, {torrentID, line}) => {
    commit('appendLine', {torrentID, line})
  },
  socket_connect: ({commit, dispatch}) => {
    commit('setConnected', true)
    dispatch('getDownloads')
  },
  socket_disconnect: ({commit}) => {
    commit('setConnected', false)
  }
}
