<template>
  <div id="container">
    <a
      id="btn-close"
      href="#"
      @click="$emit('close-btn-clicked')">✖
    </a>
    <h1 id="container-title">Add New Book</h1>
    <br>
    <div class="container-input">
      <label class="labels" for="book-title">Title:</label>
      <input
        id="book-title"
        v-model.trim="newBook.title"
        :class="{ invalid: $v.newBook.title.$error }"
        :placeholder="$v.newBook.title.required ? 'Don\'t leave this field empty.' : 'Enter the title of the book.'"
        type="text">
      <p
        v-if="!$v.newBook.title.maxLength"
        class="error-msg">The title of the book must be less than {{ $v.newBook.title.$params.maxLength.max }} characters.
      </p>
    </div>

    <div class="container-input">
      <label class="labels" for="book-author">Author:</label>
      <input
        id="book-author"
        v-model.trim="newBook.author"
        :class="{ invalid: $v.newBook.author.$error }"
        :placeholder="$v.newBook.author.required ? 'Don\'t leave this field empty.' : 'Enter the author of the book.'"
        type="text">
      <p
        v-if="!$v.newBook.author.maxLength"
        class="error-msg">The author must be less than {{ $v.newBook.author.$params.maxLength.max }} characters.
      </p>
    </div>

    <div class="container-input">
      <label class="labels" for="book-number-of-pages">Pages in the book:</label>
      <input
        id="book-number-of-pages"
        v-model.number="newBook.numberOfPages"
        :class="{ invalid: $v.newBook.numberOfPages.$error }"
        :placeholder="$v.newBook.author.required ? 'Don\'t leave this field empty.' : 'Enter the number of pages in the book.'"
        type="number">
        <p
          v-if="$v.newBook.numberOfPages.$error"
          class="error-msg">The number of pages must be greater than 0.
        </p>
    </div>

    <div class="container-input">
      <label class="labels" for="book-is-read">Have you read it?</label>
      <div id="book-is-read">
        <input
          id="book-is-read-no"
          v-model="newBook.isRead"
          type="radio"
          value="no">
        <label class="labels" for="boo-is-read-no">No</label>
        <input
          id="book-is-read-yes"
          v-model="newBook.isRead"
          type="radio"
          true-value="yes"
          false-value="no">
        <label class="labels" for="boo-is-read-yes">Yes</label>
      </div>
    </div>

    <button
     id="btn-submit"
     @click.prevent="sendBook">Submit New Book</button>
  </div>
</template>

<script>
import { required, minValue, maxLength } from 'vuelidate/lib/validators'

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
      if (this.validate() === true) {
        this.$store.dispatch('sendBook', this.newBook)
        this.clearInput()
        this.$emit('submit-btn-clicked')
      }
    },

    validate () {
      this.$v.$touch()
      return !this.$v.$invalid
    },

    clearInput () {
      this.newBook.title = ''
      this.newBook.author = ''
      this.newBook.numberOfPages = 0
      this.newBook.isRead = 'no'
    }
  },

  validations: {
    newBook: {
      title: { required, maxLength: maxLength(23) },
      author: { required, maxLength: maxLength(23) },
      numberOfPages: { required, minValue: minValue(1) }
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
  #btn-close {
    align-self:flex-end;

    margin: 5px 10px;

    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 20px;
  }
  #btn-close:hover {
    color: red;
  }

  .invalid {
    color: red;
    font-weight: bold;
  }
  .error-msg {
    margin: 3px;
  }
</style>
