<template>
  <div class="products-section">
    <div class="header">
      <h3>New Arrivals</h3>
    </div>
    <div class="products">
      <SingleProduct
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </div>
    <div class="show-all">
      <button>Show All</button>
    </div>
  </div>
</template>

<script>
import SingleProduct from "./SingleProduct.vue";
export default {
  components: { SingleProduct },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>

<style>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 40px;
}

.header h3 {
  text-align: center;
  padding: 20px 0;
}

.show-all {
  display: flex;
  align-items: center;
  justify-content: center;
}

.show-all button {
  padding: 10px;
  margin-top: 20px;
  background-color: #ff714c;
  border-radius: 20px;
  border: none;
  color: white;
  text-align: center;
}

.products-section {
  border-bottom: 1px solid #c0c0c0;
  padding-bottom: 30px;
  margin-bottom: 10px;
}
</style>
