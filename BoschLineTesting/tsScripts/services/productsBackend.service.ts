import {Injectable,Inject} from '@angular/core';
import  { Http,Headers,URLSearchParams } from '@angular/http';
import { Product } from "../models/product.model";
import { List } from 'immutable';
import { Observable } from "rxjs/Observable";


@Injectable()
export class ProductsBackendService {

    private products = [
        {
            "id":1,
            "name": "STELL MOTOR",
            "number":"0 390 204 002",
            "category":"API",
            "Line" : "W426"
        },
        {
            "id":2,
            "name":"Getriebe motor",
            "number":"0 390 204 007",
            "category":"NSA-R",
            "Line" : "W429"
        },
        {
            "id":3,
            "name": "Getriebe motor" ,
            "number":"0 390 200 123",
            "category":"NSA-R",
            "Line" : "W429"
        },
        {
            "id":4,
            "name": "Motor",
            "number":"0 390 200 123",
            "category":"NSA",
            "Line" : "W429"
        },
        {
            "id":5,
            "name": "Motor",
            "number":"0 390 204 148",
            "category":"NSA",
            "Line" : "W426"
        },
        {
            "id":6,
            "name": "Motor",
            "number":"0 390 204 147",
            "category":"NSA",
            "Line" : "W426-01"
        },
        {
            "id":7,
            "name": "Motor",
            "number":"0 390 204 146",
            "category":"NSA",
            "Line" : "W426-01"
        },
        {
            "id":8,
            "name": "Motor",
            "number":"0 390 204 145",
            "category":"NSA",
            "Line" : "W429"
        },
        {
            "id":9,
            "name": "Motor",
            "number":"0 390 204 144",
            "category":"NSA",
            "Line": "W426"
        },
        {
            "id":10,
            "name": "Motor",
            "number": "0 390 204 143",
            "category":"NSA",
            "Line": "W429"
        },
        {
            "id":11,
            "name": "Motor",
            "number": "0 390 204 142",
            "category": "NSA",
            "Line": "W426-01"
        },
        {
            "id":12,
            "name": "Motor",
            "number": "0 390 204 118" ,
            "category": "NSA",
            "Line": "W426"
        },
        {
            "id":13,
            "name": "Motor",
            "number":"0 390 204 116",
            "category": "NSA",
            "Line": "W429"
        },
        {
            "id":14,
            "name": "Motor",
            "number": "0 390 204 115",
            "category": "NSA",
            "Line": "W426"
        }
    ];

    private prodList : List<Product> = List<Product>(this.products);
    http:Http;

    constructor(http:Http)  {
        this.http = http;
    }

    getAllProducts() {
        return this.products;
        // return this.http.get('/api/products');
    }

    nextID() {
        return this.products.length;
    }

    saveProduct(newProduct: Product) {

        this.prodList.push(newProduct);
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json; charset=utf-8');

        // return this.http.post('/api/products', JSON.stringify(newProduct.toJS()), {headers}).share();
        return newProduct;
    }

    deleteProduct(deletedProduct: Product) {
        // this.prodList = this.prodList.find(deletedProduct, 1)
        return {status: 1};
        // let params = new URLSearchParams();
        // params.append('id', '' + deletedProduct.number );

        // return this.http.delete('/api/product', {search: params}).share();
    }
    findByID(id: number) {
        return this.prodList.find((prod: Product, ind:number) => {
            return prod.id === id;
        })
        // this.products.forEach( (prod: any) => {
        //     console.log(prod.id, id, prod.id === id);
        //     if (prod.id === id) {
        //         return prod;
        //     }
        // })
        // console.log('Returning...')
        // return null;
    }
    findIndexByID(id: number) {
        this.prodList.forEach( (prod: Product, ind: number) => {
            if (prod.id === id) {
                return ind;
            }
        });
        return -1;
    }
    updateProduct(updatedProduct: Product) {
        let foundProdInd:number = this.findIndexByID(updatedProduct.id);
        this.prodList = this.prodList.set(foundProdInd, updatedProduct);
        return updatedProduct;
    }

}