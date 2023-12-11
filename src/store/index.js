import { createStore } from 'vuex'

export default createStore({
  state: {
    error: '', // Holds the error message
    isLoading: false, // Indicates if the application is currently loading data
    clientInformation: {},
  },
  getters: {
      isLoading: (state) => state.isLoading,
      error: (state) => state.error,
      clientInformation: (state) => state.clientInformation,
  },
  mutations: {
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_LOADING(state, value) {
      state.isLoading = value;
    },
    RESET_ERROR(state) {
      state.error = '';
    },
    SET_CLIENT_INFO(state, value) {
      state.clientInformation = value || {};
    }
  },
  actions: {
    setLoading({ commit }, value) {
      commit('SET_LOADING', value);
    },
    setError({ commit }, error) {
      commit('SET_ERROR', error);
      setTimeout(() => {
        commit('RESET_ERROR');
      }, 10000); // Reset error after 10 seconds
    },
  },
  modules: {
  }
})
