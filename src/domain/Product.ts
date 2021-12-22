import { v4 } from "uuid";

export type productId = string;

export interface Product {
  title: string;
  price: number;
}

export class Product {
  private _id: productId = v4();
  public title: string;
  public price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  get id(): productId {
    return this._id;
  }
}