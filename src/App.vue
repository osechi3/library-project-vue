<template>
  <div id="app">
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
   margin: 0;

   background-color: #E5E5E5;
 }
</style>
