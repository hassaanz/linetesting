import { Injectable, } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { User } from "../models/user.model";
import { Product } from "../models/product.model";
import { ProductCategory } from "../models/productCategory.model";
import { List } from "immutable";
import { ProductCategoryBackendService } from './productCategoryBackend.service';

@Injectable()
export class ProductCategoryService {
  

  private _productCaterorySource: BehaviorSubject<List<ProductCategory>> = new BehaviorSubject(List([]));
  private productsSource = new Subject<ProductCategory>();
  
  constructor(private productsCategoryBackend: ProductCategoryBackendService) {
    this.loadInitialData();
  }

  loadInitialData() {
    let products = (<Object[]>this.productsCategoryBackend.getAllProductCategories()).map( (prod: any) =>
        new ProductCategory({
          id: prod.id,
          name: prod.name,
          createdOn: prod.createdOn,
          createdBy: prod.createdBy
      }));
    this._productCaterorySource.next(List(products));
  }

  get products() {
    return this._productCaterorySource.asObservable();
  }

  addProduct(newProdCat: ProductCategory) {
    let saved = this.productsCategoryBackend.saveProductCategory(newProdCat);
    this._productCaterorySource.next(this._productCaterorySource.getValue().push(saved));
  }

  getproductByID(id: number) {
    let foundProdCat = this.productsCategoryBackend.findByID(id);
    return foundProdCat;
  }
}