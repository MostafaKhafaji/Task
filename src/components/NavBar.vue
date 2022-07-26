<template>
  <nav>
    <div class="logo"><h2>Kidzo Toys</h2></div>
    <div class="links">
      <ul>
        <a href="#"><li>Shop</li></a>
        <a href="#"> <li>About</li></a>
        <a href="#"> <li>My Account</li></a>
        <a @click="handleCart" href="#">
          <li>Cart</li>
          <span>({{ addToCartCount }})</span></a
        >
        <transition>
          <div class="cart" v-if="showCart">
            <div class="cart-header">
              <p>Item added to your cart</p>
              <img @click="handleCart" src="../images/close.png" />
            </div>

            <template v-for="cartItem in cartItems" :key="cartItem.name">
              <div class="image">
                <div><img :src="cartItem[0].img" alt="" /></div>
                <div>
                  <p>{{ cartItem[0].name }}</p>
                  <p>color: <span>yellow</span></p>
                </div>
              </div>
            </template>
            <button>
              View My Cart (<span>{{ addToCartCount }}</span
              >)
            </button>
            <button>Check Out</button>
            <p><u>Continue Shopping</u></p>
          </div>
        </transition>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    addToCartCount() {
      return this.$store.getters.addedToCartCount;
    },
    cartItems() {
      return this.$store.getters.addedToCart;
    },
    showCart() {
      return this.$store.getters.openAddToCart;
    },
  },

  methods: {
    handleCart() {
      this.$store.commit("showCart");
    },
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  position: relative;
}

nav ul {
  display: flex;
  gap: 20px;
}
@media (max-width: 500px) {
  nav {
    flex-direction: column;
    gap: 30px;
  }
}
nav ul a {
  color: #605c68;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.cart {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 99;
  top: 150%;
  right: 0;
  background-color: white;
  border-radius: 10px;
  width: 300px;
  padding: 10px;
  border: 1px solid rgb(218, 218, 218);
}
.cart .image {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  width: 100%;
}
.cart img {
  width: 60px;
  height: 60px;
}
.cart .image p:nth-child(2) {
  font-size: 14px;
  color: #a2a1a3;
}

.cart .image p:nth-child(2) span {
  color: black;
  text-align: left;
}
.cart button {
  width: 100%;
  margin-top: 5px;
}
.cart button {
  padding: 5px;
  border-radius: 10px;
  color: white;
  border: none;
}
.cart button {
  background-color: #6893e1;
}
.cart button:first-of-type {
  background-color: #f06241;
  border: 1px solid black;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.cart-header img {
  width: 10px;
  height: 10px;
  cursor: pointer;
}
</style>
