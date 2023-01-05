import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
/*    games: [
      {
        id: 1,
        name: 'Game_One',
        description: 'Color the squares to match the image.'
      },
      {
        id: 2,
        name: 'Game_Two',
        description: 'Order the square to match the image.'
      },
      {
        id: 3,
        name: 'Game_Three',
        description: 'A classic game of X and Zero.'
      }
    ]*/
  },
  getters: {
  },
  mutations: {
/*    SET_GAMES (state, data) {
      state.games = data
      state.gamesCopy = [...data]
    }*/
  },
  actions: {
/*    async get_data ({commit}) {
      try {
        setTimeout (() => {
          const data = [
            {
              id: 1,
              name: 'Game_One',
              description: 'Color the squares to match the image.'
            },
            {
              id: 2,
              name: 'Game_Two',
              description: 'Order the square to match the image.'
            },
            {
              id: 3,
              name: 'Game_Three',
              description: 'A classic game of X and Zero.'
            }
          ]
          commit('SET_GAMES', data)
        }, 1000)
      } catch (error) {
        console.log(error)
      }
    }*/
  },
  modules: {
  }
})
