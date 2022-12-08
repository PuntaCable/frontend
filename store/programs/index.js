var qs = require('qs');
export const state = {
  programsList: [],
  scheduleList: [],
  scheduleList: [],
  program:{
    id: null,
    main_title: null,
    original_title: null,
    long_argument: null,
    long_argument_lang: null,
    short_argument: null,
    parental_rating_type: null,
    parental_rating: null,
    image: null,  
    category:{}
  },
  favorite:{}

}


export const getters = {
  getList(state) {
    return state.programsList
  },
  getScheduleList(state) {
    return state.scheduleList
  },
  get(state) {
    return state.program
  },

}

export const actions = {
  async findAll({
    commit
  }, params) {

    const {
      data: data
    } = await this.$axios.get(`/programs`, {
      params: {
        populate: 'category',
        sort: 'start_date:asc',
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
  },id) {
    const {
      data: data
    } = await this.$axios.get(`/programs/${id}`,{
      params:{
        populate:'*'
      }
    })
    commit('set', data)
  },



  async saveToFavorites({ commit,state }, id) {
    if(state.id) {
       await this.$axios.delete(`/programs/deletefavorite/${id}`)
      commit('setFavorite', {})
    } else {
      const {
        data: data
      } = await this.$axios.post(`/programs/${id}/favorite`)
      commit('setFavorite', data)  
    }
  },
  async findAllFavorites({}, params) {
    const {
      data: data
    } = await this.$axios.get(`/user-programs`, {
      params: {
        populate: 'category',
        sort: 'start_date:asc',
        ...params
      },
      paramsSerializer: params => {
        return qs.stringify(params, {
          arrayFormat: 'brackets'
        })
      }
    })
    commit('setFavoritesList', data)
  },
  async findFavorites({ commit }, id) {
    const {
      data: data
    } = await this.$axios.get(`/programs/favorite/${id}`)
    commit('setFavorite', data)
  },
  async deleteFavorite({ commit }, id) {
  }

}

export const mutations = {
  setList(state, data) {
    state.programsList = data
  },
  setScheduleList(state, data) {
    state.scheduleList = data.data
  },
  setFavoritesList(state, data) {
    state.favoritesList = data.data
  },
  setProgramsByCategoryList(state, data) {
    let programList = data.data.map((item)=>{
      let channel = item.channel 
      item =  item.program
      item.channel = channel
      return item 
    })
    state.programsList = programList
  },

  set(state, data) {
    state.program = data.data
  },
  setFavorite(state, data) {
    state.favorite = data.data
  },


}
