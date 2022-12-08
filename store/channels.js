var qs = require('qs');
export const state = {
  channelsList: [],

}


export const getters = {
  getList(state) {
    return state.channelsList
  },

}

export const actions = {
  async findAll({
    commit
  }, params) {

    const {
      data: data
    } = await this.$axios.get(`/channels`, {
      params: {
        ...params
      },
      paramsSerializer: params => {
        return qs.stringify(params, {
          arrayFormat: 'brackets'
        })
      }
    })
    commit('setList', data.data)
  },
}

export const mutations = {
  setList(state, data) {
    state.channelsList = data
  },
}
