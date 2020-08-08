<template>
  <div id="app">
    <app-header @add-book-btn-clicked="isShown = !isShown"></app-header>
    <input-prompt v-if="isShown"></input-prompt>
  </div>
</template>

<script>
import Header from './components/Header'
import InputPrompt from './components/InputPrompt'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    inputPrompt: InputPrompt
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
