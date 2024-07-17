import { defineStore } from "pinia";
import axios from "axios";
import { headersGet, product } from "../util";

export const useProduct = defineStore("Product", {
  state: () => ({
    product: null,
    cart: {
      full_name: "",
      phone_number: "",
      products: [],
    },
  }),
  actions: {
    async getProduct(id) {
      try {
        const response = await axios.get(`${product}${id}`, headersGet);
        if (response.status === 200 || response.data) {
          this.product = response.data;
          return { success: true };
        }
      } catch (e) {
        console.error("Ошибка в файле Product(getProduct)", e);
        return { success: false, status: e.response?.status };
      }
    },

    async postProduct(phone, name) {
      let cartLocal = localStorage.getItem("cart");
      if (cartLocal) {
        this.cart = JSON.parse(cartLocal);
      }

      this.cart.full_name = name;
      this.cart.phone_number = phone;

      const cartToRequest = { ...this.cart };
      cartToRequest.products = cartToRequest.products.map((product) => ({
        product_id: product.id,
        quantity: product.quantity,
      }));

      try {
        const response = await axios.post(
          `${product}orders/`,
          cartToRequest,
          headersGet
        );
        localStorage.removeItem("cart");
        this.cart.full_name = "";
        this.cart.phone_number = "";
        this.cart.products = [];
        return response;
      } catch (e) {
        console.error("Ошибка в файле Product(postProduct)", e);
        return null;
      }
    },
    addProductToCart(data) {
      let cartLocal = localStorage.getItem("cart");

      if (cartLocal) {
        this.cart = JSON.parse(cartLocal);
      }

      if (this.cart.products.length == 0) {
        this.cart.products.push(data);
      } else {
        for (let i = 0; i <= this.cart.products.length; i++) {
          const item = this.cart.products[i];
          if (i == this.cart.products.length) {
            this.cart.products.push(data);
            break;
          } else if (item.id === data.id) {
            this.cart.products[i].quantity += data.quantity;
            break;
          }
        }
      }

      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    changeQuantity(target, data) {
      this.cart = JSON.parse(localStorage.getItem("cart"));

      for (let i = 0; i < this.cart.products.length; i++) {
        const item = this.cart.products[i];

        if (item.product_id === data.product_id) {
          if (target === "+") {
            this.cart.products[i].quantity++;
          } else {
            this.cart.products[i].quantity--;
          }
        }
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    getCartFromLocal() {
      const cartString = localStorage.getItem("cart");
      if (cartString) {
        this.cart.products = JSON.parse(cartString).products;
      }
      return JSON.parse(localStorage.getItem("cart"));
    },

    getContactsFromlocal() {
      const cartLocal = localStorage.getItem("cart");
      let phone = "";
      let name = "";
      if (cartLocal) {
        phone = JSON.parse(cartLocal).phone_number;
        name = JSON.parse(cartLocal).full_name;

        return { phone: phone, name: name };
      }
    },

    deleteFromCart(data) {
      this.cart = JSON.parse(localStorage.getItem("cart"));
      for (let i = 0; i < this.cart.products.length; i++) {
        const item = this.cart.products[i];

        if (item.product_id === data.product_id) {
          this.cart.products.splice(i, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
});
