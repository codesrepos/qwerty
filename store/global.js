export const state = () => ({
  targetURL: ''
})

export const mutations = {
  setTargetURL(state, url) {
    state.targetURL = url
  }
}
