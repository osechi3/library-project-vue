import Vue from 'vue'
import Vuex from 'vuex'

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
      state.user.books[bookInfo.index] = bookInfo
      console.log(state.user.books[0].title)
    },

    DELETE_BOOK (state, index) {
      state.user.books.splice(index, 1)
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
    },

    changeBook ({ commit }, bookInfo) {
      commit('CHANGE_BOOK', bookInfo)
    },

    deleteBook ({ commit }, { index }) {
      commit('DELETE_BOOK', index)
    }
  },

  modules: {
  }
})
