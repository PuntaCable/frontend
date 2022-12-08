var qs = require('qs');
export const state = {
  schedulesList: [],
  schedulesAll: {
    data: [{
      program:{}
    }],
  },
  programScheduleList: [],

}


export const getters = {
  getList(state) {
    return state.schedulesList
  },
  getAll(state) {
    return state.schedulesAll
  },
  getProgramScheduleList(state) {
    return state.programScheduleList
  },


}

export const actions = {
  async findList({
    commit
  }, params) {

    const {
      data: data
    } = await this.$axios.get(`/schedules/list`, {
      params: {
        populate: 'channel,program,program.category',
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

  async findAll({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`/schedules`, {
          params: {
            populate: 'channel,program,program.category',
            sort: 'start_date:asc',
            ...params
          },
          paramsSerializer: params => {
            return qs.stringify(params, {
              arrayFormat: 'brackets'
            })
          }
        })
        .then(data => {
          commit('setAll', data.data)
          resolve(data.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },


  async findAllChannels({
    commit
  }, page) {
    return new Promise(async (resolve, reject) => {
      const {
        data: data
      } = await this.$axios.get(`/channels`, {
        params: {
          pagination: {
            page: page,
            pageSize:10
          }
        },
        paramsSerializer: params => {
          return qs.stringify(params, {
            arrayFormat: 'brackets'
          })
        }
      })
      resolve(data.data.map((item) => item.id))
    })
  },

}

export const mutations = {
  setList(state, data) {
    state.schedulesList = data
  },
  setAll(state, data) {
    state.schedulesAll = data
  },
  setProgramScheduleList(state, data) {
    state.programScheduleList = data
  },

}
