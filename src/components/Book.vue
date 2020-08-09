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
        <p
          v-if="!$v.currentBook.title.maxLength"
          class="error-msg">The title must be less than {{ $v.currentBook.title.$params.maxLength.max }} characters.
        </p>
        <p
          v-if="!$v.currentBook.title.required && $v.currentBook.title.$dirty"
          class="error-msg">Don't leave this field empty.
        </p>
    </div>

    <div class="box">
      <h2 class="box-head">Author:</h2>
      <input
        class="input-text"
        :class="{ 'input-text-edit-border': isEditAllowed }"
        type="text"
        v-model="currentBook.author"
        :disabled="!isEditAllowed">
      <p
        v-if="!$v.currentBook.author.maxLength"
        class="error-msg">The author must be less than {{ $v.currentBook.author.$params.maxLength.max }} characters.
      </p>
      <p
        v-if="!$v.currentBook.author.required && $v.currentBook.author.$dirty"
        class="error-msg">Don't leave this field empty.
      </p>
    </div>

    <div class="box">
      <h2 class="box-head">Number of Pages</h2>
      <input
        class="input-text"
        :class="{ 'input-text-edit-border': isEditAllowed, 'hide-number-arrows': !isEditAllowed }"
        type="number"
        v-model="currentBook.numberOfPages"
        :disabled="!isEditAllowed">
      <p
        v-if="!$v.currentBook.numberOfPages.minValue && $v.currentBook.numberOfPages.$dirty"
        class="error-msg">The number of pages must be greater than 0.
      </p>
      <p
        v-if="!$v.currentBook.numberOfPages.required && $v.currentBook.numberOfPages.$dirty"
        class="error-msg">Please enter a number.
      </p>
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
          @click.prevent="confirmChanges">Apply
        </button>
        <button
          v-if="!isConfirmShown"
          class="btn-actions"
          @click.prevent="isConfirmShown = !isConfirmShown">Del
        </button>
        <button
          v-else
          class="btn-actions btn-confirm-del"
          @click.prevent="confirmDeletion">Sure?
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, minValue, maxLength } from 'vuelidate/lib/validators'

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

      isEditAllowed: false,
      isConfirmShown: false
    }
  },

  methods: {
    ...mapActions([
      'changeBook',
      'deleteBook'
    ]),

    confirmChanges () {
      if (this.validate()) {
        this.changeBook(this.currentBook)
        this.isEditAllowed = !this.isEditAllowed
      }
    },

    confirmDeletion () {
      this.deleteBook(this.currentBook)
      this.isConfirmShown = !this.isConfirmShown
    },

    validate () {
      this.$v.$touch()
      return !this.$v.$invalid
    }
  },

  validations: {
    currentBook: {
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
  }

  .box {
    position: relative;
    display: flex;
    flex-direction: column;

    width: 230px;

    text-align: center;
  }
  .box-head {
    margin: 0;
    padding: 4px 0;

    font-size: 17px;
    color: white;

    background-color: orange;
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
  .btn-confirm-del {
    background-color: #fca311;
    border: 1px solid #fca311;
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
  .hide-number-arrows {
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
  }
  input:disabled {
    color: black;

    background-color: white;
  }

  .error-msg {
    position: absolute;
    top: 52px;
    left: 2px;
    padding: 3px;
    z-index: 1;

    width: 215px;

    font-size: 14px;
    font-weight: bold;

    background-color: #fca311;
    outline: 3px solid red;
  }
</style>
