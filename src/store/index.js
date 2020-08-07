import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      books: []
    }
  },
  mutations: {
    ADD_BOOK (state, newBook) {
      state.user.books.push(newBook)
    }
  },
  actions: {
    sendBook ({ commit }, newBook) {
      commit('ADD_BOOK', {
        title: newBook.title,
        author: newBook.author,
        numberOfPages: newBook.numberOfPages,
        isRead: newBook.isRead
      })
    }
  },
  modules: {
  }
})
