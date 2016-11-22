import {Injectable,Inject} from '@angular/core';
import  { Http,Headers,URLSearchParams } from '@angular/http';
import { Product } from "../models/product.model";
import { ProductCategory } from "../models/productCategory.model";
import { List } from 'immutable';
import { Observable } from "rxjs/Observable";



@Injectable()
export class ProductCategoryBackendService {

    private _productCategories = [
        {
        "id": 1,
        "name": "Sports"
        }, {
        "id": 2,
        "name": "Baby"
        }, {
        "id": 3,
        "name": "Baby"
        }, {
        "id": 4,
        "name": "Sports"
        }, {
        "id": 5,
        "name": "Computers"
        }, {
        "id": 6,
        "name": "Automotive"
        }, {
        "id": 7,
        "name": "Beauty"
        }, {
        "id": 8,
        "name": "Games"
        }, {
        "id": 9,
        "name": "Games"
        }, {
        "id": 10,
        "name": "Movies"
        }, {
        "id": 11,
        "name": "Movies"
        }, {
        "id": 12,
        "name": "Outdoors"
        }, {
        "id": 13,
        "name": "Jewelery"
        }, {
        "id": 14,
        "name": "Automotive"
        }, {
        "id": 15,
        "name": "Books"
        }, {
        "id": 16,
        "name": "Home"
        }, {
        "id": 17,
        "name": "Grocery"
        }, {
        "id": 18,
        "name": "Movies"
        }, {
        "id": 19,
        "name": "Games"
        }, {
        "id": 20,
        "name": "Garden"
        }
    ]

    private prodCategoryList : List<ProductCategory> = List<ProductCategory>(this._productCategories);
    http:Http;

    constructor(http:Http)  {
        this.http = http;
    }

    getAllProductCategories() {
        return this.prodCategoryList.toArray();
        // return this.http.get('/api/products');
    }

    nextID() {
        return this.prodCategoryList.size;
    }

    saveProductCategory(newProduct: ProductCategory) {

        this.prodCategoryList.push(newProduct);
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json; charset=utf-8');

        // return this.http.post('/api/products', JSON.stringify(newProduct.toJS()), {headers}).share();
        return newProduct;
    }

    deleteProduct(deletedProduct: ProductCategory) {
        // this.prodList = this.prodList.find(deletedProduct, 1)
        let foundProdInd:number = this.findIndexByID(deletedProduct.id);
        if (foundProdInd) {

        }
        // let params = new URLSearchParams();
        // params.append('id', '' + deletedProduct.number );

        // return this.http.delete('/api/product', {search: params}).share();
    }

    findByID(id: number) {
        this.prodCategoryList.forEach( (prodCat: ProductCategory) => {
            if (prodCat.id === id) {
                return prodCat;
            }
        })
        return null;
    }

    findIndexByID(id: number) {
        this.prodCategoryList.forEach( (prodCat: ProductCategory, ind: number) => {
            if (prodCat.id === id) {
                return ind;
            }
        })
        return -1;
    }

    updateProduct(updatedProduct: ProductCategory) {
        let foundProdInd:number = this.findIndexByID(updatedProduct.id);
        if (foundProdInd ) {
            this.prodCategoryList = this.prodCategoryList.set(foundProdInd, updatedProduct);
            return updatedProduct;
        }
    }
}