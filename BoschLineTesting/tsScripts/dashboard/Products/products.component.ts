// ====== ./dashboard/Products/products.component.ts ======

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from "../../services/products.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';
import { List } from 'immutable';

@Component({
    templateUrl: 'templates/dashboard/products/products.tpl.html',
    styleUrls: ['templates/dashboard/products/products.css'],
})

// Component class
export class ProductsComponent implements OnInit {
    products: List<Product>;
    productsFiltered;
    addEnabled = false;
    prodForm: FormGroup;
    prodSearchStr: String = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productsService: ProductsService,
        private fb: FormBuilder) {
            this.prodForm = fb.group({
                name: ["", Validators.required],
                number: ["", Validators.required],
                lineID: ["", Validators.required]
            });
            this.productsService.products.subscribe(
            res => {
                this.products = res;
                this.productsFiltered = this.filterProducts(this.prodSearchStr, res.toArray());
            },
            err => console.log("Error retrieving Products")
        )
    }

    ngOnInit() {
        this.productsService.loadInitialData();
    }
    filterChanged(filterStr) {
        this.productsFiltered = this.filterProducts(filterStr, this.products);
    }

    filterProducts(filterStr, products) {
        filterStr = filterStr.toLowerCase();
        if (filterStr !== '') {
            const productsFiltered = products.filter( (prod) => {
                if(prod.name.toLowerCase().includes(filterStr)) {
                    return prod;
                }
            });
            return productsFiltered;
        } else {
            return products;
        }
    }

    addProduct(event) {
        let addedProd = Object.assign({}, this.prodForm.value, {id: this.products.toArray().length});
        this.products.unshift(addedProd);
        this.addEnabled = false;
        this.prodForm.reset();
    }
    
    toggleAdd() {
        this.addEnabled = !this.addEnabled;
    }
    
    searchProducts(newVal) {
        this.prodSearchStr = newVal || '';
        this.filterChanged(this.prodSearchStr);
        // console.log('Search Changed...', this.prodSearchStr);
    }
}