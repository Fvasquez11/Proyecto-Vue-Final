<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main>
    <div class="navContainer">
       <div class="title">
        <div id="avatar">
          <b-avatar src='https://cdn-icons-png.flaticon.com/512/610/610128.png' size= "5rem"></b-avatar>
        </div>
        <h1>ProGraph</h1>
        </div>
      <nav>
        <div id="buttons">
          <b-button variant="warning"><RouterLink to="/">Home</RouterLink></b-button>
          <b-button variant="warning"><RouterLink to="/about">About</RouterLink></b-button>
          </div>
      </nav>
    </div>
    <div><RouterView /></div>
  </main>
</template>

<style>
.navContainer {
  display: flex;
  justify-content: space-between;
  padding: 2%;
  background-image: url(https://image.shutterstock.com/image-vector/blue-polygonal-banner-background-dashed-260nw-1654085914.jpg);
}
h1{
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color:rgb(24, 62, 63)
}
#buttons{
  display: flex;
  gap:30px;
}
.title{
  display: flex;
  justify-content:center;
  gap:10px;
}
.RouterLink {
  color: white;
}
.RouterLink:hover {
  color: black;
}

</style>
