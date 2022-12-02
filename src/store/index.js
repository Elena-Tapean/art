import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: [
      {
        id: 1,
        name: 'Project #1',
        text: 'Personal resume in a website page created with React.js.'
      },
      {
        id: 2,
        name: 'Project #2',
        text: 'A bookstore app created with Vue.js.'
      },
      {
        id: 3,
        name: 'Project #3',
        text: 'A store created with Angular.js.'
      },
      {
        id: 4,
        name: 'Project #4',
        text: 'A movie API app created with React.js.'
      },
      {
        id: 5,
        name: 'Project #5',
        text: 'This experimental project created with Vue.js.'
      }
    ]
  },
  getters: {
  },
  mutations: {
    SET_TEXT (state, data) {
      state.pages = data
      state.pagesCopy = [...data]
    }
  },
  actions: {
    async get_data ({commit}) {
      try {
        setTimeout (() => {
          const data = [
            {
              id: 1,
              name: 'Project #1',
              text: 'Personal resume in a website page created with React.js.'
            },
            {
              id: 2,
              name: 'Project #2',
              text: 'A bookstore app created with Vue.js.'
            },
            {
              id: 3,
              name: 'Project #3',
              text: 'A store created with Angular.js.'
            },
            {
              id: 4,
              name: 'Project #4',
              text: 'A movie API app created with React.js.'
            },
            {
              id: 5,
              name: 'Project #5',
              text: 'This experimental project created with Vue.js.'
            }
          ]
          commit('SET_TEXT', data)
        }, 1000)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
