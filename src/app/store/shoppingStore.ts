import { makeAutoObservable, runInAction } from "mobx";
import { StaticImageData } from "next/image";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

class CartStore {
  cart: CartItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart = (item: CartItem) => {
    const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);
    runInAction(() => {
      if (existingItem) {
        // if there are previous item, increase quantity.
        existingItem.quantity += item.quantity;
      } else {
        // add new item to the cart
        this.cart.push(item);
      }
    });
  };

  removeFromCart = (id: number) => {
    runInAction(() => {
      this.cart = this.cart.filter((item) => item.id !== id);
    });
  };

  clearCart() {
    this.cart = [];
  }
  get totalPrice() {
    const total = this.cart.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    return new Intl.NumberFormat("ja-JP").format(total);
  }
}

export const cartStore = new CartStore();
