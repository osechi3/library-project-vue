<template>
  <div id="container">
    <input class="container-name" type="text" v-model="currentList.title">
    <button class="btn-actions">Rename</button>
    <button class="btn-actions" @click="deleteList">Del</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import '../styles/style-btns.css'

export default {
  props: {
    list: {
      type: Object,
      required: true
    },

    index: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      currentList: {
        title: this.list.title,
        index: this.index
      }
    }
  },

  methods: {
    ...mapActions([
      'deleteList'
    ])
  }
}
</script>

<style scoped>
  #container {
    display: flex;
    align-items: center;

    border-top: 3px solid orange;
  }
  .container-name {
    width: 190px;
    /* height: 15px; */
    margin: 5px 10px 5px 10px;
    padding: 0 5px;

    font-size: 14px;
    font-weight: bold;

    border: 3px solid white;
  }
</style>
