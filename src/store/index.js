import Vue from 'vue';
import Vuex from 'vuex'; //vuex

Vue.use(Vuex);

/**
 * 实例化
 * @type {Vuex}
 */
const store = new Vuex.Store({
	state: {
		loading: true
	},
	actions:{
		/**
	   * loading
	   */
	  loading({
	    commit,
	    state
	  }, data) {
	    return new Promise((resolve, reject) => {
	      //提交
	      commit('loading', data);
	      resolve();
	    });
  	},
	},
	mutations: {
	  "loading": (state, accessToken) => {
	    state.loading = loading;
	  },
	},
});

//导出
export default store;