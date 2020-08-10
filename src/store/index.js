import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      books: [
        { title: 'Test', author: 'Testor', numberOfPages: 255, isRead: 'yes' }
      ]
    }
  },

  getters: {
    userBooks (state) {
      return state.user.books
    }
  },

  mutations: {
    ADD_BOOK (state, newBook) {
      state.user.books.push(newBook)
    },

    CHANGE_BOOK (state, bookInfo) {
      console.log(state.user.books[0].title)
      console.log(bookInfo.index)
      state.user.books[bookInfo.index] = Object.assign(state.user.books[bookInfo.index], bookInfo)
      console.log(state.user.books[0].title)
    },

    DELETE_BOOK (state, index) {
      state.user.books.splice(index, 1)
    }
  },

  actions: {
    sendBook ({ commit, state, dispatch }, newBook) {
      commit('ADD_BOOK', {
        title: newBook.title,
        author: newBook.author,
        numberOfPages: newBook.numberOfPages,
        isRead: newBook.isRead
      })
      dispatch('updateServerInfo')
    },

    changeBook ({ commit, dispatch }, bookInfo) {
      commit('CHANGE_BOOK', bookInfo)
      dispatch('updateServerInfo')
    },

    deleteBook ({ commit, dispatch }, { index }) {
      commit('DELETE_BOOK', index)
      dispatch('updateServerInfo')
    },

    updateServerInfo ({ dispatch, state }) {
      axios.put('user.json', state.user)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    },

    getServerInfo ({ state }) {
      axios.get('user.json')
        .then(response => {
          for (const key in response.data) {
            if (key === 'books') {
              state.user.books = response.data[key]
            }
          }
        })
        .catch(error => console.log(error))
    }
  },

  modules: {
  }
})
