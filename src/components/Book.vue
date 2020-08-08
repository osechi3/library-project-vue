<template>
  <div id="container">

    <div class="box">
      <h2 class="box-head">Title:</h2>
      <input
        class="input-text"
        :class="{ 'input-text-edit-border': isEditAllowed }"
        type="text"
        v-model="currentBook.title"
        :disabled="!isEditAllowed">
    </div>

    <div class="box">
      <h2 class="box-head">Author:</h2>
      <input
        class="input-text"
        :class="{ 'input-text-edit-border': isEditAllowed }"
        type="text"
        v-model="currentBook.author"
        :disabled="!isEditAllowed">
    </div>

    <div class="box">
      <h2 class="box-head">Number of Pages</h2>
      <input
        class="input-text"
        :class="{ 'input-text-edit-border': isEditAllowed }"
        type="number"
        v-model="currentBook.numberOfPages"
        :disabled="!isEditAllowed">
    </div>

    <div class="box">
      <h2 class="box-head">Read?</h2>
      <input
        class="input-checkbox"
        type="checkbox"
        v-model="currentBook.isRead"
        true-value="yes"
        false-value="no"
        :disabled="!isEditAllowed">
    </div>

    <div class="box">
      <h2 class="box-head">Actions</h2>
      <div class="box-body">
        <button
          v-if="!isEditAllowed"
          class="btn-actions"
          @click.prevent="isEditAllowed = !isEditAllowed">Edit
        </button>
        <button
          v-else
          class="btn-actions btn-confirm"
          @click.prevent="confirmChanges">Confirm
        </button>
        <button class="btn-actions">Del</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    book: {
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
      currentBook: {
        title: this.book.title,
        author: this.book.author,
        numberOfPages: this.book.numberOfPages,
        isRead: this.book.isRead,
        index: this.index
      },

      isEditAllowed: false
    }
  },

  methods: {
    ...mapActions([
      'changeBook'
    ]),

    confirmChanges () {
      this.changeBook(this.currentBook)
      this.isEditAllowed = !this.isEditAllowed
    }
  }
}
</script>

<style scoped>
  #container {
    display: flex;
  }
  .box {
    display: flex;
    flex-direction: column;

    width: 230px;

    text-align: center;

    outline: 1px solid;
  }
  .box-head {
    margin: 0;
    padding: 4px 0;

    font-size: 19px;
    color: white;

    background-color: black;
  }
  .box-body {
    margin: 5px 0;

    font-size: 17px;
  }

  .btn-actions {
    margin: 0 5px;

    font-weight: bold;
    color: white;

    border: none;
    border: 1px solid black;
    border-radius: 3px;
    background-color: black;
  }
  .btn-actions:hover {
    color: black;

    background-color: white;
  }
  .btn-confirm {
    background-color: lightgreen;
    border: 1px solid lightgreen;
  }

  .input-text {
    height: 30px;

    text-align: center;
    font-size: 15px;
    font-weight: bold;
    border: 3px solid white;
  }
  .input-text-edit-border {
    border: 3px solid red;
  }

  input:disabled {
    background-color: white;
    color: black;
  }
</style>
