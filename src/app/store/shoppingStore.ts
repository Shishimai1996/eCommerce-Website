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
        // 既存のアイテムがある場合は数量を増やす
        existingItem.quantity += item.quantity;
      } else {
        // 新しいアイテムをカートに追加
        this.cart.push(item);
      }
    });
  };

  removeFromCart = (id: number) => {
    runInAction(() => {
      this.cart = this.cart.filter((item) => item.id !== id);
    });
  };
}

export const cartStore = new CartStore();
