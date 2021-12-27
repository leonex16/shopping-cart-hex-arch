import { IProduct } from "../../domain/Product";
import { ProductDTO } from "../http/dto/ProductDTO";
import { http } from "../http/http";

export class ProductRepository {

  static async getProducts(): Promise<IProduct[]> {
    const products = await http.get<ProductDTO[]>('http://localhost:3001/products');
    return products.map( productDTO => ({
      id: productDTO.productId,
      title: productDTO.title,
      price: Number(productDTO.price)
    }))
  }
  
}