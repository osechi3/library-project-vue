<template>
  <div id="container">
    <a
      id="btn-close"
      href="#"
      @click="$emit('close-btn-clicked')">✖
    </a>
    <h1 id="container-title">Add New List</h1>
    <br>
    <div class="container-input">
      <label class="labels" for="book-title">Name:</label>
      <input
        id="book-title"
        v-model.trim="newList.title"
        :class="{ invalid: $v.newList.title.$error }"
        :placeholder="$v.newList.title.required ? 'Don\'t leave this field empty.' : 'Enter the name of the list.'"
        type="text">
      <p
        v-if="!$v.newList.title.maxLength"
        class="error-msg">The name of the list must be less than {{ $v.newList.title.$params.maxLength.max }} characters.
      </p>
    </div>
    <button
     id="btn-submit"
     @click.prevent="sendList">Submit New List</button>
  </div>
</template>

<script>
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      newList: {
        title: ''
      }
    }
  },

  methods: {
    sendList () {
      if (this.validate() === true) {
        this.$store.dispatch('sendList', this.newList)
        this.clearInput()
        this.$emit('submit-btn-clicked')
      }
    },

    validate () {
      this.$v.$touch()
      return !this.$v.$invalid
    },

    clearInput () {
      this.newList.title = ''
    }
  },

  validations: {
    newList: {
      title: { required, maxLength: maxLength(23) }
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
    z-index: 2;
    transform: translate(-50%, -50%);

    background-color: white;
    border: 1px transparent;
    border-radius: 5px;
  }
  #container-title {
    margin: 0;

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
