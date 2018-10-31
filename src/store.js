import Vue from 'vue';
import Vuex from 'vuex';
import data from './actions/data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    buckets: data,
    categories: [
      'equity',
      'bond',
      'cash',
    ],
    constituents: null,
  },

  mutations: {
    setConstituent: (state, payload) => {
      state.constituents = payload;
    },
    setCurrentBucket: (state, payload) => {
      state.currentBucket = payload;
    },
    updateWeight: (state, {id, weight}) => {
      state.constituents.map( constituent => {
        if(constituent.instrument.id === id) {
          constituent.editWeight = weight;
          constituent.changed = true;
        }
      });
    }
  },

  actions: {
    loadConstituents: ({ commit, state }, payload) => {
      const {id, name, volatility, mean_return, constituents} = state.buckets.find(bucket => bucket.id === payload.id);
      commit('setConstituent', constituents);
      commit('setCurrentBucket', { id, name, volatility, mean_return });
    },

    weightChanged: ({commit, state}, {weight, instrument}) => {
      commit('updateWeight', {
        id: instrument.id,
        weight
      })
    }
  },

  getters: {
    buckets: state => state.buckets.map(({
      id, name, volatility, mean_return,
    }) => ({
      id, name, volatility, mean_return,
    })),
    constituentsList: state => (state.constituents),
    currentBucket: state => (state.currentBucket)
  },
});
