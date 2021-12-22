import { v4 } from "uuid";
import { Product, productId } from "./Product";

export type basketId = string;

export interface Basket {
  items: Product[];
}

export class Basket {
  private _id: basketId;
  public items: Product[];;

  constructor() {
    this._id = v4();
    this.items = [];
  }

  get id(): basketId {
    return this._id;
  }

  findProduct( product: Product): Product | null {
    const findProduct = ( item: Product ) => item.id === product.id;

    return this.items.find(findProduct) ?? null;
  }

  increaseBasket( product: Product ): this {
    return {
      ...this,
      items: [ ...this.items, product ]
    };
  }

  decreaseBasket( productId: productId ): this {
    return {
      ...this,
      items: this.items.filter( item => item.id !== productId )
    };
  }
}
 