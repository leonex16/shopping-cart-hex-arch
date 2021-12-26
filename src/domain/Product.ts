import { generateUid } from "../infrastructure/uuid/uuid";

export type productId = string;

export interface IProduct {
  id: productId;
  title: string;
  price: number;
}

export class Product {
  private _id: productId = generateUid();
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