import { ProductRepository } from "../../infrastructure/repositories/ProductRepository";

export class ProductServices {
  static getProducts(){
    return ProductRepository.getProducts();
  }
}