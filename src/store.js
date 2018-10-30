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
      'cash'
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    buckets: state => {
      return state.buckets.map(({id, name, volatility, mean_return}) => ({id, name, volatility, mean_return}));
    },
    constituentsList: state => id => ( state.buckets.find( bucket => bucket.id === id ).constituents ),
  }
});
