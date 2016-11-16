// ====== ./dashboard/Products/products.component.ts ======

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from "../../services/products.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: 'templates/dashboard/products/products.tpl.html',
    styleUrls: ['templates/dashboard/products/products.css'],
})

// Component class
export class ProductsComponent implements OnInit {
    products;
    productsFiltered;
    addEnabled = false;
    prodForm: FormGroup;
    prodSearchStr: String;

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
    }

    ngOnInit() {
        this.products = this.productsService.getProducts();
        this.productsFiltered = this.products;
    }
    
    filterProducts(filterStr) {
        filterStr = filterStr.toLowerCase();
        filterStr = filterStr || '';
        if (filterStr !== '') {
            this.productsFiltered = this.products.filter( (prod) => {
                if(prod.name.toLowerCase().includes(filterStr)) {
                    return prod;
                }
            });
        }
    }

    addProduct(event) {
        let addedProd = Object.assign({}, this.prodForm.value, {id: this.products.length});
        console.log(addedProd);
        this.products.unshift(addedProd);
        this.addEnabled = false;
        this.prodForm.reset();
    }
    
    toggleAdd() {
        this.addEnabled = !this.addEnabled;
    }
    searchProducts(newVal) {
        this.prodSearchStr = newVal;
        this.filterProducts(newVal);
        // console.log('Search Changed...', this.prodSearchStr);
    }
}