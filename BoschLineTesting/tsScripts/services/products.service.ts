import { Injectable, } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { User } from "../models/user.model";
import { Product } from "../models/product.model";
import { List } from "immutable";
import { ProductsBackendService } from './productsBackend.service';

@Injectable()
export class ProductsService {
  

  private _productsSource: BehaviorSubject<List<Product>> = new BehaviorSubject(List([]));
  
  constructor(private productsBackend: ProductsBackendService) {
    this.loadInitialData();
  }

  loadInitialData() {
    let products = (<Object[]>this.productsBackend.getAllProducts()).map( (prod: any) =>
        new Product({
          id: prod.id,
          number: prod.number,
          name: prod.name,
          createdOn: prod.createdOn,
          createdBy: prod.createdBy,
          groupName: prod.category,
          lineName: prod.Line,
      }));
    this._productsSource.next(List(products));
  }

  get products() {
    return this._productsSource.asObservable();
  }

  addProduct(newProd: Product) {
    let saved = this.productsBackend.saveProduct(newProd);
    this._productsSource.next(this._productsSource.getValue().push(saved));
  }

  getproductByID(id: number) {
    let foundProd = this.productsBackend.findByID(id);
    return foundProd;
  }
}