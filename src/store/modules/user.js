import { login, logout, getInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "@/router";
import Http from "@/api/http.js";

const state = {
  token: getToken(),
  name: "",
  avatar: "user-avatar.gif"
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  }
};

const actions = {
  // user login
  async login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise(async (resolve, reject) => {
      const res = await Http.authLogin({
        username: username.trim(), 
        password: password
      })
      if (res.code == 0){
        const token = res.data.token;
        commit("SET_TOKEN", token);
        setToken(token);
        resolve();
      }
      else {
        reject(res.msg);
      }
      // login({ username: username.trim(), password: password }).then(response => {
      //   const data= response
      //   commit('SET_TOKEN', data.token)
      //   setToken(data.token)
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    });
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then(response => {
          const { data } = response;

          if (!data) {
            reject("Verification failed, please Login again.");
          }

          const { name, avatar } = data;

          commit("SET_NAME", name);
          commit("SET_AVATAR", avatar);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit("SET_TOKEN", "");
      removeToken();
      resetRouter();
      resolve();
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit("SET_TOKEN", "");
      removeToken();
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
