<template>
  <div id="app">
    <center>
    <back-header/>
     <router-link :to="{ name: 'blogs' }"><img src="./assets/logo1_2.png" width="250" lang="180" ></router-link>
    <router-view/>
    </center>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  text-align: center; 
  color: black;
  margin-top: 5x;
  background-image: url("./assets/bg5.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
body{
  background-color: rgb(1, 39, 54);
  
  
  
}
input{
  width: 150px;
  height: 30px;
  padding:0 5px;
  transition: .5s;
}
input:focus{
  width: 250px;
  transition: .5s;
  box-shadow: #ccc 2px 2px 15px;
}
botton{
  background-color: tomato;
  border: none;
  height: 30px;
  color:#fff;
  font-weight: bold;
  cursor: pointer;
  transition: .5s;
}

button:hover{
  background-color: yellow;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity 5s;
}
.fade-enter-to{
  opacity: 1;
}
</style>
