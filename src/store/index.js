import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      books: [],
      lists: [{
        title: 'Main'
      }],
      globalIdCounter: 0
    },

    chosenList: 0
  },

  getters: {
    userBooks (state) {
      return state.user.books
    },

    userLists (state) {
      return state.user.lists
    },

    chosenList (state) {
      return state.chosenList
    }
  },

  mutations: {
    ADD_BOOK (state, newBook) {
      state.user.books.push(newBook)
    },

    CHANGE_BOOK (state, bookInfo) {
      console.log(state.user.books[0].title)
      console.log(bookInfo.index)
      state.user.books[bookInfo.index] = Object.assign(state.user.books[bookInfo.index], bookInfo.currentBook)
      console.log(state.user.books[0].title)
    },

    DELETE_BOOK (state, index) {
      state.user.books.splice(index, 1)
    },

    ADD_LIST (state, newList) {
      state.user.lists.push(newList)
    },

    CHANGE_LIST (state, listInfo) {
      state.user.lists[listInfo.index] =
        Object.assign(state.user.lists[listInfo.index], listInfo.currentList)
    },

    DELETE_LIST (state, index) {
      state.user.lists.splice(index, 1)
    },

    DELETE_LIST_CHILDREN (state, index) {
      state.user.books = state.user.books.filter((book) => {
        return (book.listIndex !== index)
      })
    },

    CHANGE_CHOSEN_LIST (state, listInfo) {
      state.chosenList = listInfo.index
      console.log(state.chosenList)
    },

    INCREMENT_GLOBAL_ID (state) {
      state.user.globalIdCounter++
    }
  },

  actions: {
    sendBook ({ state, commit, dispatch, getters }, newBook) {
      commit('ADD_BOOK', {
        title: newBook.title,
        author: newBook.author,
        numberOfPages: newBook.numberOfPages,
        isRead: newBook.isRead,
        listIndex: getters.chosenList,
        id: state.user.globalIdCounter
      })
      commit('INCREMENT_GLOBAL_ID')
      dispatch('updateServerInfo')
    },

    changeBook ({ commit, dispatch }, bookInfo) {
      commit('CHANGE_BOOK', bookInfo)
      dispatch('updateServerInfo')
    },

    deleteBook ({ commit, dispatch }, index) {
      console.log(index)
      commit('DELETE_BOOK', index)
      dispatch('updateServerInfo')
    },

    sendList ({ commit, dispatch }, newList) {
      commit('ADD_LIST', {
        title: newList.title
      })
      dispatch('updateServerInfo')
    },

    changeList ({ commit, dispatch }, listInfo) {
      commit('CHANGE_LIST', listInfo)
      dispatch('updateServerInfo')
    },

    deleteList ({ commit, dispatch }, index) {
      commit('DELETE_LIST', index)
      commit('DELETE_LIST_CHILDREN', index)
      dispatch('updateServerInfo')
    },

    changeChosenList ({ commit }, listInfo) {
      commit('CHANGE_CHOSEN_LIST', listInfo)
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
            if (key === 'lists') {
              state.user.lists = response.data[key]
            }
            if (key === 'globalIdCounter') {
              state.user.globalIdCounter = response.data[key]
            }
          }
        })
        .catch(error => console.log(error))
    }
  },

  modules: {
  }
})
