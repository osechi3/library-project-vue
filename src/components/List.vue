<template>
  <div id="container">
    <input class="container-name" type="text" v-model="currentList.title">
    <button class="btn-actions">Rename</button>
    <button
      v-if="!isConfirmShown"
      class="btn-actions"
      @click="showDeleteConfirmation">Del
    </button>
    <button
      v-else
      class="btn-actions btn-confirm-del"
      @click="confirmDeletion">Sure?
    </button>
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
      },

      isConfirmShown: false
    }
  },

  methods: {
    ...mapActions([
      'deleteList'
    ]),

    showDeleteConfirmation () {
      this.isConfirmShown = !this.isConfirmShown
      setTimeout(() => {
        this.isConfirmShown = !this.isConfirmShown
      }, 3000)
    },

    confirmDeletion () {
      this.deleteList(this.currentList)
      this.isConfirmShown = !this.isConfirmShown
    }
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
