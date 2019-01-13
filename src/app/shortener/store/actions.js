import * as api from '../api'

export const shortenUrl = ({ commit, state }) => {
  commit('setShortened', null)
  commit('setWating', true)

  api.post({ url: state.url }).then((response) => {
    commit('setShortened', response.data.data)
    commit('setUrl', null)
    commit('setWating', false)
  }).catch((error) => {
    console.log(error.response)
  })
}
