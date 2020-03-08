export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    if (to.name !== 'intro' && !app.$cookies.get('accepted')) {
      app.store.commit('global/setTargetURL', to.name)
      next({ name: 'intro' })
    } else {
      next()
    }
  })
}
