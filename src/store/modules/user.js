import { reg, login, getSliders } from '../../api/session'
const user = {
  state: {
    userInfo: null,
    slider: []
  },

  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data
    },
    setSlider (state, data) {
      state.slider = data
    },
    delUserInfo (state) {
      state.userInfo = null
    }
  },

  actions: {
    reg ({commit}, user) {
      return new Promise((resolve, reject) => {
        reg(user).then((data) => {
          resolve(data)
        }, (error) => {
          reject(error)
        })
      })
    },
    login ({commit}, user) {
      return new Promise((resolve, reject) => {
        login(user).then((data) => {
          resolve(data)
          if (data.code === 0) {
            commit('setUserInfo', data.user)
          }
        }, (error) => {
          reject(error)
        })
      })
    },
    getSliders ({commit}) {
      return new Promise((resolve, reject) => {
        getSliders().then((data) => {
          commit('setSlider', data)
          resolve(data)
        }, (error) => {
          reject(error)
        })
      })
    }
  }
}

export default user
