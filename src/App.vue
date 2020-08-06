<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    appHeader: Header
  }
}
</script>

<style>
 body {
   margin: 0;

   background-color: #E5E5E5;
 }
</style>
