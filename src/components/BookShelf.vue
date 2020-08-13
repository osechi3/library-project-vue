<template>
  <div id="container">
    <div id="container-head">
      <h1 class="title">Your books</h1>
    </div>
    <transition-group id="container-body" tag="div" name="fade-slide-horizontal">
      <app-book
        v-for="(book, index) in userBooks"
        :key="book.title"
        :book="book"
        :index="index"></app-book>
    </transition-group>
  </div>
</template>

<script>
import Book from './Book'
import { mapGetters } from 'vuex'

export default {
  components: {
    appBook: Book
  },

  computed: {
    ...mapGetters([
      'userBooks',
      'chosenList'
    ]),
    currentListUserBooks () {
      return this.userBooks.filter((book, index) => {
        console.log(book.listIndex)
        return book.listIndex === this.chosenList
      })
    }
  }
}
</script>

<style scoped>
  #container {
    width: 920px;
    margin: 0 auto;
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

  /* Animations */
  .fade-slide-horizontal-enter, .fade-slide-horizontal-leave-to {
    opacity: 0;
    transform: translateX(-10px);
  }
  .fade-slide-horizontal-enter-active {
    transition: all .2s ease-in;
  }
  .fade-slide-horizontal-leave-active {
    transition: all .2s ease-in;
    position: absolute;
  }
  .fade-slide-horizontal-move {
    transition: transform 1s;
  }
</style>
