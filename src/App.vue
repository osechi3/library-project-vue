<template>
  <div id="app">
    <transition name="fade">
      <div
        class="color-overlay"
        v-if="isShownInputBoxBook || isShownInputBoxList">
      </div>
    </transition>
    <app-header
      @add-book-btn-clicked="toggleInputBoxBook"
      @add-list-btn-clicked="toggleInputBoxList">
    </app-header>
    <transition name="fade">
      <input-prompt-book
        v-if="isShownInputBoxBook"
        @submit-btn-clicked="toggleInputBoxBook"
        @close-btn-clicked="toggleInputBoxBook">
      </input-prompt-book>
    </transition>
    <transition name="fade">
      <input-prompt-list
        v-if="isShownInputBoxList"
        @submit-btn-clicked="toggleInputBoxList"
        @close-btn-clicked="toggleInputBoxList">
      </input-prompt-list>
    </transition>

    <div id="shelf-container">
      <app-list-shelf></app-list-shelf>
      <app-book-shelf></app-book-shelf>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import InputPromptBook from './components/InputPromptBook'
import BookShelf from './components/BookShelf'
import ListShelf from './components/ListShelf'

import { mapActions } from 'vuex'
import InputPromptList from './components/InputPromptList'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    inputPromptBook: InputPromptBook,
    inputPromptList: InputPromptList,
    appBookShelf: BookShelf,
    appListShelf: ListShelf
  },

  data () {
    return {
      isShownInputBoxBook: false,
      isShownInputBoxList: false
    }
  },

  created () {
    this.getServerInfo()
  },

  methods: {
    ...mapActions([
      'getServerInfo'
    ]),

    toggleInputBoxBook () {
      this.isShownInputBoxBook = !this.isShownInputBoxBook
    },
    toggleInputBoxList () {
      this.isShownInputBoxList = !this.isShownInputBoxList
    }
  }
}
</script>

<style>
 body {
   overflow-x: hidden;
   overflow-y: hidden;

   margin: 0;

   background-color: #E5E5E5;
 }
.color-overlay {
  position: absolute;
  z-index: 1;

  width: 100%;
  height: 100%;

  background-color: black;
  border: 1px solid;
  opacity: .5;
}

#shelf-container {
  display: flex;
}

/* Animations */
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: all .2s ease-out;
}
</style>
