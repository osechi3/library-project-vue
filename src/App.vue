<template>
  <div id="app">
    <app-header></app-header>
    <input-prompt></input-prompt>
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
  }
}
</script>

<style>
 body {
   margin: 0;

   background-color: #E5E5E5;
 }
</style>
