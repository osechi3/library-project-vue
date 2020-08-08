<template>
  <div id="container">
    <div class="title">Vue Library</div>
    <button
      class="btns"
      @click.prevent="$emit('add-book-btn-clicked')">Add Book
    </button>
    <button class="btns">Add List</button>
  </div>
</template>

<script>

</script>

<style scoped>
  #container {
    display: flex;
    flex-direction: row;
    align-items: center;

    height: 60px;
    margin-bottom: 40px;

    color: white;
    font-weight: bold;

    background-color: #14213D;
    outline: 1px solid;
  }

  .title {
    width: 280px;

    font-size: 32px;
    text-align: center;

    cursor: pointer;
  }

  .btns {
    height: inherit;
    width: 150px;

    font-size: 20px;
    color: white;
    font-weight: bold;

    background-color: inherit;
    border: none;
    border-left: 2px solid white;
    border-right: 2px solid white;
  }
  .btns:hover {
    color: #14213D;
    background-color: #FCA311;
  }
</style>
