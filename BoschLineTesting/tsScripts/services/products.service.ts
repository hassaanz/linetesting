import { Injectable, } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { User } from "../models/user.model";
import { Product } from "../models/product.model";
import { List } from "immutable";
import { ProductsBackendService } from './productsBackend.service';

@Injectable()
export class ProductsService {
  

  private _productsSource: BehaviorSubject<List<Product>> = new BehaviorSubject(List([]));
  
  constructor(private productsBackendService: ProductsBackendService) {
    this.loadInitialData();
  }

  loadInitialData() {
    this.productsBackendService.getAllProducts()
      .subscribe( res => {
        let products = (<Object[]>res.json()).map( (product: any) => 
          new Product({
            product_number: product.product_number,
            product_name: product.product_name,
            Created_By: product.Created_By,
            Created_On: product.Created_On,
            Group_id: product.Group_id,
          }));
        this._productsSource.next(List(products));
      },
      err => console.log('Error  retrieving products')
    );
  }

  get products() {
    return this._productsSource.asObservable();
  }

  addProduct(newProd: Product) {
    let obs = this.productsBackendService.addProduct(newProd);
    obs.subscribe( res => {
      this._productsSource.next(this._productsSource.getValue().push(newProd));
    });
    return obs;
  }

  getproductByID(id: number) {
    return this.productsBackendService.getProductByID(id);
  }
}