import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        name: "Construction Set",
        price: "10.99",
        img: "https://i.im.ge/2022/07/26/FU4Dt9.jpg",
      },
      {
        name: "Soft Pink Bunny",
        price: "10.99",
        img: "https://i.im.ge/2022/07/26/FU47qK.jpg",
      },
      {
        name: "Ring Stacker Toy",
        price: "10.99",
        img: "https://i.im.ge/2022/07/26/FU4s4F.jpg",
      },
      {
        name: "Coil Spring Toy",
        price: "10.99",
        img: "https://i.im.ge/2022/07/26/FU4q36.jpg",
      },
    ],
    addedToCart: [],
    openAddToCart: false,
  },
  getters: {
    products(state) {
      return state.products;
    },
    addedToCartCount(state) {
      return state.addedToCart.length;
    },
    addedToCart(state) {
      return state.addedToCart;
    },
    openAddToCart(state) {
      return state.openAddToCart;
    },
  },
  mutations: {
    handleCart(state, payload) {
      const product = state.products.filter(
        (product) => product.name === payload
      );
      state.addedToCart.unshift(product);
    },
    showCart(state) {
      state.openAddToCart = !state.openAddToCart;
    },
  },
  actions: {},
  modules: {},
});
