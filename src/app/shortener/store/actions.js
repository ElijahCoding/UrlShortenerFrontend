import * as api from '../api'

export const shortenUrl = ({ commit, dispatch, state }) => {
  commit('setShortened', null)
  commit('setWating', true)

  api.post({ url: state.url }).then((response) => {
    commit('setShortened', response.data.data)
    commit('setUrl', null)
    commit('setWating', false)
  }).catch((error) => {
    if (error.response.status === 422) {
      dispatch('setMessage', error.response.data.url[0], { root: true })
      commit('setWating', false)
    }
  })
}
