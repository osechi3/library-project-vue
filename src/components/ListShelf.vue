<template>
  <div id="container">
    <div id="container-head">
      <h1 class="title">Your lists</h1>
    </div>
    <div id="container-body">
      <app-list></app-list>
    </div>
  </div>
</template>

<script>
import List from './List'

export default {
  components: {
    appList: List
  }
}
</script>

<style scoped>
  #container {
    width: 360px;
    margin: 0 auto;
  }
  #container-head {
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;

    background-color: #14213d;
  }
  #container-body {
    padding-top: 20px;

    background-color: white;
  }

  .title {
    margin-top: 10px;

    font-size: 20px;
  }
</style>
