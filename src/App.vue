<template>
  <div id="app">
    <div
      class="color-overlay"
      v-if="isShown"></div>
    <app-header @add-book-btn-clicked="isShown = !isShown"></app-header>
    <input-prompt
      v-if="isShown"
      @submit-btn-clicked="isShown = !isShown">
    </input-prompt>
    <app-book-shelf></app-book-shelf>
  </div>
</template>

<script>
import Header from './components/Header'
import InputPrompt from './components/InputPrompt'
import BookShelf from './components/BookShelf'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    inputPrompt: InputPrompt,
    appBookShelf: BookShelf
  },

  data () {
    return {
      isShown: false
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
</style>
