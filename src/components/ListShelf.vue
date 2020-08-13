<template>
  <div id="container">
    <div id="container-head">
      <h1 class="title">Your lists</h1>
    </div>
    <transition-group id="container-body" tag="div" name="fade-slide">
      <app-list
        v-for="(list, index) in userLists"
        :key="list.title"
        :list="list"
        :index="index">
      </app-list>
    </transition-group>
  </div>
</template>

<script>
import List from './List'
import { mapGetters } from 'vuex'

export default {
  components: {
    appList: List
  },

  computed: {
    ...mapGetters([
      'userLists'
    ])
  }
}
</script>

<style scoped>
  #container {
    width: 360px;
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
    padding-top: 20px;

    background-color: white;
  }

  .title {
    margin-top: 10px;

    font-size: 20px;
  }

  /* Animations */
  .fade-slide-enter, .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  .fade-slide-enter-active {
    transition: all .5s ease;
  }
  .fade-slide-leave-active {
    transition: all .5s ease;
    position: absolute;
  }
  .fade-slide-move {
    transition: transform 1s;
  }
</style>
