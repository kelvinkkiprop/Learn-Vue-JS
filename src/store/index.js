import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

 //Vuex store
export default new Vuex.Store({

  //STATE
  state: {

    //Get data
    players: [      
      {id: 10, name: 'Paul Pogba', club: 'Manchester United'},
      {id: 20, name: 'Marcus Rashfoard', club: 'Manchester United'},                 
    ],

  },

  //MUTATION
  mutations: {

    //push players to our players array
    getPlayers(state, players){
      state.players = players
    }

  },

  //ACTION
  actions: {

    //Get playesr
    async getPlayers({ commit }){

      axios.get("https://my-json-server.typicode.com/typicode/demo/posts")
      .then(response => {
          const players = response.data;
          commit('getPlayers', players);
      }).catch(error => {                   
          console.log(error);
      });
    }

  },

  //MODULES
  modules: {
  },

  //ADD GETTERS
  getters: {
  }

})
