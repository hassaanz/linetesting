import {Injectable,Inject} from '@angular/core';
import { Http,Headers,URLSearchParams } from '@angular/http';
import { Product } from "../models/product.model";
import { List } from 'immutable';
import { Observable } from "rxjs/Observable";
import { Constants } from '../config/constants';

@Injectable()
export class ProductsBackendService {
    private prodList : List<Product> = List<Product>();
    http:Http;
    private apiPath: string = Constants.productsPath();
    
    constructor(http:Http)  {
        this.http = http; 
    }

    getAllProducts() {
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        return this.http.get(this.apiPath, {headers});
    }
    addProduct(newProduct: Product) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this.http.post(this.apiPath, JSON.stringify(newProduct.toJS()), {headers})
        .share();
    }
    deleteProduct(deletedProduct: Product) {
        return this.http.delete(`${this.apiPath}/${deletedProduct.product_number}`)
        .share();
    }
    getProductByID(id: number) {
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        return this.http.get( `${this.apiPath}/${id}`);   
    }
    updateProduct(updatedProduct: Product) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this.http.put(
            `${this.apiPath}/${updatedProduct.product_number}`,
            JSON.stringify(updatedProduct.toJS()),
            {headers}
        ).share();
    }
}