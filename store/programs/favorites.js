var qs = require('qs');
export const state = {
  favoritesList: [],
  favorite: {}

}


export const getters = {
  getList(state) {
    return state.favoritesList
  },
  get(state) {
    return state.favorite
  },

}

export const actions = {
  async update({
    commit,
    state
  }, id) {
    return new Promise(async (resolve, reject) => {
      if (state.favorite.hasOwnProperty('id')) {
        await this.$axios.delete(`/user-programs/${state.favorite.id}`)
        commit('set', {})
        resolve(true)
      } else {
        const {
          data: data
        } = await this.$axios.post(`/user-programs`, {
          data: {
            program: id,
            user: this.$auth.user.id
          }
        })
        commit('set', data.data)
        resolve(true)
      }

    })
  },
  async findAll({commit}, params) {
    const {
      data: data
    } = await this.$axios.get(`/user-programs/?populate=*`, {
      params: {
        ...params
      },
      paramsSerializer: params => {
        return qs.stringify(params, {
          arrayFormat: 'brackets'
        })
      }
    })
    commit('setList', data)
  },
  async find({
    commit
  }, id) {
    const {
      data: data
    } = await this.$axios.get(`/user-programs/?populate=*`,{
        params:{
            user: this.$auth.user.id,
            program:id
        }
    })
    commit('set', data.data[0] ?? {})
  },

}

export const mutations = {
  setList(state, data) {
    state.favoritesList = data.data
  },
  set(state, data) {
    state.favorite = data
  },


}
