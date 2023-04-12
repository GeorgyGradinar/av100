import axios from "axios";

export const state = () => ({
  user: {}
})

export const actions = {
  async getUserData({commit}) {
    const response = await axios.post('https://api.av100.ru/v3/login', {
      "login": "9264641870",
      "password": "4716468225",
      "fromuser": 0
    }, {headers: {'X-Api-Key': '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9'}})
    const user = response.data.user
    commit("setUser", user)
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  },
}
