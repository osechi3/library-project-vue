<template>
  <div id="container">
    <div class="box">
      <input
        class="input-text"
        :class="{ 'input-text-edit-border': isEditAllowed }"
        type="text"
        v-model="currentList.title"
        :disabled="!isEditAllowed">
        <p
          v-if="!$v.currentList.title.maxLength"
          class="error-msg">The title must be less than {{ $v.currentList.title.$params.maxLength.max }} characters.
        </p>
        <p
          v-if="!$v.currentList.title.required && $v.currentList.title.$dirty"
          class="error-msg">Don't leave this field empty.
        </p>
    </div>
    <div class="box">
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
          v-if="isEditAllowed"
          class="btn-actions btn-abort"
          @click.prevent="abortChanges">Abort
        </button>
        <button
          v-else-if="!isEditAllowed && !isConfirmShown"
          class="btn-actions"
          @click.prevent="showDeleteConfirmation">Del
        </button>
        <button
          v-if="isConfirmShown"
          class="btn-actions btn-confirm-del"
          @click.prevent="confirmDeletion">Sure?
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { required, maxLength } from 'vuelidate/lib/validators'
import { mixinHelperFunctions } from '../mixins/MixinHelperFunctions'

import '../styles/style-btns.css'

export default {
  mixins: [mixinHelperFunctions],

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

      isEditAllowed: false,
      isConfirmShown: false
    }
  },

  computed: {
    ...mapGetters([
      'userLists'
    ])
  },

  methods: {
    ...mapActions([
      'changeList',
      'deleteList'
    ]),

    confirmChanges () {
      if (this.checkObjectEquality(this.currentList, this.userLists[this.index]) === false) {
        if (this.validate()) {
          this.changeList(this.currentList)
          this.isEditAllowed = !this.isEditAllowed
        }
      } else {
        this.isEditAllowed = !this.isEditAllowed
      }
      console.log(this.currentList)
      console.log(this.userLists[this.index])
    },

    abortChanges () {
      console.log(this.userLists[this.index])
      this.currentList = Object.assign(this.currentList, this.userLists[this.index])
      this.isEditAllowed = !this.isEditAllowed
      // console.log(this.currentList)
    },

    showDeleteConfirmation () {
      this.isConfirmShown = !this.isConfirmShown
      setTimeout(() => {
        this.isConfirmShown = !this.isConfirmShown
      }, 3000)
    },

    confirmDeletion () {
      this.deleteList(this.currentList)
      this.isConfirmShown = !this.isConfirmShown
    },

    validate () {
      this.$v.$touch()
      return !this.$v.$invalid
    }
  },

  validations: {
    currentList: {
      title: { required, maxLength: maxLength(23) }
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

    border-top: 3px solid #ffa500;
  }
  .box-body {
    margin: 5px 0;

    font-size: 17px;
  }

  .input-text {
    height: 30px;

    text-align: center;
    font-size: 15px;
    font-weight: bold;
    border: 3px solid white;
  }
  .input-text-edit-border {
    border: 3px solid #ffa500;
  }
  input:disabled {
    color: black;

    background-color: white;
  }

  .error-msg {
    position: absolute;
    top: 25px;
    left: 0px;
    padding: 3px;
    z-index: 1;

    width: 217px;

    font-size: 14px;
    font-weight: bold;

    background-color: #fca311;
  }
</style>
