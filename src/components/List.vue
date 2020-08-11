<template>
  <div id="container">
    <input class="container-name" type="text" value="The title of the list">
    <button class="btns">Rename</button>
    <button class="btns">Del</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #container {
    display: flex;
    align-items: center;

    border-top: 3px solid orange;
  }
  .container-name {
    width: 190px;
    /* height: 15px; */
    margin: 5px 10px 5px 10px;
    padding: 0 5px;

    font-size: 14px;
    font-weight: bold;

    border: 3px solid white;
  }

  .btns {
    height: 20px;
    margin: 0 5px;

    font-weight: bold;
    color: white;

    border: none;
    border: 1px solid black;
    border-radius: 3px;
    background-color: black;
  }
  .btns:hover {
    color: black;

    background-color: white;
  }
</style>
