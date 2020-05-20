import {login, getInfo, getRoleList, authInfo, loginByMboile} from '@/api/login'
import {getToken, setToken, removeToken, setUser, getUser} from '@/utils/auth'
// import require from 'require'
const user = {
  state: {
    token: getToken(),
    currentUser: getUser(),
    roles: [],
    router: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.currentUser = user
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_ROUTER: (state, router) => {
      state.router = router
    }
  },

  actions: {
    // 登录
    Login ({commit}, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          setToken(data.token)
          setUser(JSON.stringify(data.accountResult))
          commit('SET_TOKEN', data.token)
          commit('SET_USER', data.accountResult)
          authInfo().then(res => {
            commit('SET_ROUTER', res.data.modulePcList)
          })
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    loginByMboile ({commit}, userInfo) {
      console.log(userInfo, 'params')
      return new Promise((resolve, reject) => {
        loginByMboile(userInfo).then(response => {
          const data = response.data
          setToken(data.token)
          setUser(JSON.stringify(data.accountResult))
          commit('SET_TOKEN', data.token)
          commit('SET_USER', data.accountResult)
          authInfo().then(res => {
            commit('SET_ROUTER', res.data.modulePcList)
          })
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetInfo ({commit, state}) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            // reject('getInfo: roles must be a non-null array !')
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户角色列表
    GetRoleList ({commit, state}) {
      const params = {
        formData: {
          username: state.currentUser.username
        }
      }
      return new Promise((resolve, reject) => {
        getRoleList(params).then(response => {
          const data = response.data
          if (data.list && data.list.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.list)
          } else {
            // reject('getInfo: roles must be a non-null array !')
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut ({commit, state}) {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
    },

    // 前端 登出
    FedLogOut ({commit}) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
