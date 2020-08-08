<template>
  <div id="container">
    <div class="box">
      <h2 class="box-head">Title:</h2>
      <p class="box-body">Totoro</p>
    </div>
    <div class="box">
      <h2 class="box-head">Author:</h2>
      <p class="box-body">Miyazaki</p>
    </div>
    <div class="box">
      <h2 class="box-head">Number of Pages</h2>
      <p class="box-body">281</p>
    </div>
    <div class="box">
      <h2 class="box-head">Read?</h2>
      <p class="box-body">Yes</p>
    </div>
    <div class="box">
      <h2 class="box-head">Actions</h2>
      <div class="box-body">
        <button class="btn-actions">Edit</button>
        <button class="btn-actions">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
</style>
