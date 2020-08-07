<template>
  <div id="container">
    <h1 id="container-title">Add New Book</h1>
    <br>
    <div class="container-input">
      <label class="labels" for="book-title">Title:</label>
      <input id="book-title" v-model="newBook.title" type="text">
    </div>
    <div class="container-input">
      <label class="labels" for="book-author">Author:</label>
      <input id="book-author" v-model="newBook.author" type="text">
    </div>
    <div class="container-input">
      <label class="labels" for="book-number-of-pages">Pages in the book:</label>
      <input id="book-number-of-pages" v-model="newBook.numberOfPages" type="number">
    </div>
    <div class="container-input">
      <label class="labels" for="book-is-read">Have you read it?</label>
      <div id="book-is-read">
        <input id="book-is-read-no" v-model="newBook.isRead" type="radio" value="no">
        <label class="labels" for="boo-is-read-no">No</label>
        <input id="book-is-read-yes" v-model="newBook.isRead" type="radio" value="yes">
        <label class="labels" for="boo-is-read-yes">Yes</label>
      </div>
    </div>
    <button id="btn-submit" @click.prevent="sendBook">Submit New Book</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newBook: {
        title: '',
        author: '',
        numberOfPages: 0,
        isRead: 'no'
      }
    }
  },

  methods: {
    sendBook () {
      this.$store.dispatch('sendBook', this.newBook)
      this.clearInput()
    },

    clearInput () {
      this.newBook.title = ''
      this.newBook.author = ''
      this.newBook.numberOfPages = 0
      this.newBook.isRead = 'no'
    }
  }
}
</script>

<style scoped>
  #container {
    display: flex;
    flex-direction: column;

    position: absolute;
    width: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: white;
    border: 1px transparent;
    border-radius: 5px;
  }
  #container-title {
    text-align: center;
  }

  .labels {
    margin-right: 15px;

    font-size: 20px;
  }

  .container-input {
    display: flex;
    flex-direction: column;

    margin: 15px;
  }

  input {
    font-size: 16px;
  }

  #btn-submit {
    align-self: center;
    width: 200px;
    height: 40px;
    margin: 15px 0;

    color: white;
    font-size: 16px;
    font-weight: bold;

    background-color: #14213d;
    border: none;
  }
  #btn-submit:hover {
    color: black;

    background-color: #fca311;
  }
</style>
