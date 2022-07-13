<script>
export default {
  data() {
    return {
      breadcrumbItems: [
        { text: "Home", href: "/" },
        { text: "About", href: "/about" },
        { text: "", href: "" },
      ],
    }
  }
}
</script>

<template>
  <main>
    <div class="footerContainer">
      <hr />
      <div class="footerContent">
        <div id="logo"><b-card no-body><b-img src="https://intranet.ufro.cl/imagenes/ufro/1-1.png" fluid alt="Logo"></b-img></b-card></div>
        <div>© 2022 Bryan Alegria, Paz Muñoz, Fernando Vásquez</div>
        <div>
          <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
          </div>
      </div>
    </div>
  </main>
</template>

<style>
.footerContainer {
  margin-top: 10%;
  background-image: url(https://image.shutterstock.com/image-vector/blue-polygonal-banner-background-dashed-260nw-1654085914.jpg); 
}
.footerContent {
  align-items: center;
  margin-top: 3%;
  padding-bottom: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#logo {
    width: 20rem;
}
</style>