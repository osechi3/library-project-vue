<template>
  <div id="app">
    <div
      class="color-overlay"
      v-if="isShown"></div>
    <app-header @add-book-btn-clicked="toggleInputBox"></app-header>
    <input-prompt
      v-if="isShown"
      @submit-btn-clicked="toggleInputBox"
      @close-btn-clicked="toggleInputBox">
    </input-prompt>
    <div id="shelf-container">
      <app-list-shelf></app-list-shelf>
      <app-book-shelf></app-book-shelf>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import InputPrompt from './components/InputPrompt'
import BookShelf from './components/BookShelf'
import ListShelf from './components/ListShelf'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    inputPrompt: InputPrompt,
    appBookShelf: BookShelf,
    appListShelf: ListShelf
  },

  data () {
    return {
      isShown: false
    }
  },

  created () {
    this.getServerInfo()
  },

  methods: {
    ...mapActions([
      'getServerInfo'
    ]),

    toggleInputBox () {
      this.isShown = !this.isShown
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
  z-index: 0;

  width: 100%;
  height: 100%;

  background-color: black;
  border: 1px solid;
  opacity: .5;
}

#shelf-container {
  display: flex;
}
</style>
