<template>
  <div id="container">
    <div class="box">
      <span
        v-if="!isEditAllowed"
        class="choose-list-overlay"
        :class="{ 'chosen-list-color-overlay': isCurrentListChosen }"
        @click="chooseList">
      </span>
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
        <p
          v-if="isDeletionErrorShown"
          class="error-msg">You can't delete the default list.
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
      isConfirmShown: false,
      isDeletionErrorShown: false
    }
  },

  computed: {
    ...mapGetters([
      'userLists',
      'chosenList'
    ]),

    isCurrentListChosen () {
      return this.currentList.index === this.chosenList
    }
  },

  methods: {
    ...mapActions([
      'changeList',
      'deleteList',
      'changeChosenList'
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
      if (!this.checkIfDefaultList()) {
        this.deleteList(this.index)
        this.isConfirmShown = !this.isConfirmShown
      } else {
        this.showDeletionError()
      }
    },

    checkIfDefaultList () {
      return (this.index === 0)
    },

    showDeletionError () {
      this.isDeletionErrorShown = !this.isDeletionErrorShown
      setTimeout(() => {
        this.isDeletionErrorShown = !this.isDeletionErrorShown
      }, 3000)
    },

    validate () {
      this.$v.$touch()
      return !this.$v.$invalid
    },

    chooseList () {
      console.log('clicked')
      this.changeChosenList(this.currentList)
      console.log(this.currentList.index === this.chosenList)
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

  .choose-list-overlay {
    position: absolute;
    height: 37px;
    width: 360px;

    border: 1px transparent;
  }

  .chosen-list-color-overlay {
    background-color: #ffa500;
    opacity: .2;
  }
</style>
