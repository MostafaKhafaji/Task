<template>
  <div class="single-product">
    <div class="pro-img">
      <img :src="product.img" alt="" />
      <div @click="handleCart" class="add-to-cart">
        <img src="../images/cart.png" alt="" />
      </div>
    </div>
    <div>
      <p>{{ product.name }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  props: ["product"],
  methods: {
    handleCart() {
      this.$store.commit("handleCart", this.product.name);
      this.$store.state.openAddToCart = true;
    },
  },
};
</script>

<style>
.single-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.pro-img {
  max-width: 300px;
  position: relative;
}
.pro-img img {
  width: 250px;
  border-radius: 5px;
  height: 200px;
}

div p {
  text-align: center;
  padding: 5px;
  cursor: pointer;
}

div p:hover {
  color: #ff714c;
}
.add-to-cart {
  position: absolute;
  left: 10px;
  top: 10px;
  cursor: pointer;
}
.add-to-cart img {
  height: 30px;
  width: 30px;
}
</style>
