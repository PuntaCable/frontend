export const state = () => ({
  package: {},
  packagesList: {},
})

export const getters = {
  get(state) {
    return state.package

  },
  getList(state) {
    return state.packagesList
  }
}

export const actions = {
  find(context, id) {
    return this.$axios.get(`/packages/${id}`)
      .then(response => {
        context.commit('set', response.data)
      })
  },
  findAll(context) {
    return this.$axios.get(`/packages/?populate=*`)
      .then(response => {
        context.commit('setList', response.data)
      })
  },
}

export const mutations = {
  set(state, data) {
    state.package = data
  },
  setList(state, data) {
    console.log(data)
    state.packagesList = data
  },
}
