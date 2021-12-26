import { generateUid } from "../infrastructure/uuid/uuid";
import { IProduct, productId } from "./Product";

export type basketId = string;

export interface Basket {
  items: IProduct[];
}

export class Basket {
  private _id: basketId;
  public items: IProduct[];

  constructor() {
    this._id = generateUid();
    this.items = [];
  }

  get id(): basketId {
    return this._id;
  }

  findProduct(product: IProduct): IProduct | null {
    const findProduct = (item: IProduct) => item.id === product.id;

    return this.items.find(findProduct) ?? null;
  }

  increaseBasket(product: IProduct): this {
    return {
      ...this,
      items: [...this.items, product],
    };
  }

  decreaseBasket(productId: productId): this {
    return {
      ...this,
      items: this.items.filter((item) => item.id !== productId),
    };
  }
}
