<template>
  <div class="container"><NavBar /></div>
  <main>
    <div class="container">
      <Slider />
    </div>
  </main>
  <div class="wave"><img src="./images/wave.svg" alt="" /></div>
  <div class="container">
    <Products />
  </div>
  <div class="container"><Footer /></div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Slider from "./components/Slider.vue";
import Products from "./components/Products.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { NavBar, Slider, Products, Footer },
};
</script>

<style>
@font-face {
  font-family: "Merienda";
  src: local("Merienda"),
    url(./fonts/Cairo-VariableFont_wght.ttf) format("truetype");
}
#app {
  font-family: "Cairo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media (min-width: 979px) {
  .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 150px;
    padding-right: 150px;
  }
}
@media (max-width: 979px) {
  .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
}
a {
  text-decoration: none;
  color: black;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

main {
  background-color: #f8f4ed;
  padding: 30px 0;
  margin-top: 20px;
}
.wave {
  margin-top: -5px;
}
button {
  cursor: pointer;
}
</style>
