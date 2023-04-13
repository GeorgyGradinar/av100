import axios from "axios";
import {DATA_LOGIN, HEADERS, URL_SERVER} from "~/config";

export const state = () => ({
  user: {},
  userToken: ''
})

export const actions = {
  async login({commit, dispatch}) {
    const response = await axios.post(`${URL_SERVER}login`, DATA_LOGIN, {headers: HEADERS});
    const user = response.data.user;
    const userToken = response.data.token;

    commit("setUserToken", userToken);
    dispatch("getUserData", {token: userToken, userId: user.id})
  },

  async getUserData({commit, dispatch}, payload) {
    const headers = {headers: {...HEADERS, 'X-User-Token': payload.token}};

    const response = await axios.get(`${URL_SERVER}user/${payload.userId}`, headers);
    const user = response.data;

    commit("setUser", user);
  },

  async updateUserData({commit}, payload) {
    const headers = {headers: {...HEADERS, 'X-User-Token': payload.token}};

    await axios.put(`${URL_SERVER}user/${payload.user.id}`, payload.user, headers);
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data;
  },

  setUserToken(state, data) {
    state.userToken = data;
  },
}
