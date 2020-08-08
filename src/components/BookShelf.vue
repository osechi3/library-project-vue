<template>
  <div id="container">
    <div id="container-head">
      <h1 class="title">Your books</h1>
    </div>
    <div id="container-body">
      <app-book></app-book>
    </div>
  </div>
</template>

<script>
import Book from './Book'
export default {
  components: {
    appBook: Book
  }
}
</script>

<style scoped>
  #container {
    width: 920px;
    margin: 0 auto;

    outline: 1px solid;
  }
  #container-head {
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;

    background-color: #14213d;
  }
  #container-body {
    padding-top: 25px;
    background-color: white;
  }
  .title {
    margin-top: 10px;

    font-size: 22px;
  }
</style>
