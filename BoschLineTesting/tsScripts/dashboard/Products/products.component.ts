// ====== ./dashboard/Products/products.component.ts ======

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from "../../services/products.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: 'templates/dashboard/products/products.tpl.html',
    styleUrls: ['templates/dashboard/products/products.css'],
    providers: [ ProductsService ],
})

// Component class
export class ProductsComponent implements OnInit {
    products;
    addEnabled = false;
    prodForm: FormGroup;

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
    }
    addProduct(event) {
        let addedProd = Object.assign({}, this.prodForm.value, {id: this.products.length});
        console.log(addedProd);
        this.products.unshift(addedProd);
        this.addEnabled = false;
    }
    
    toggleAdd() {
        this.addEnabled = !this.addEnabled;
    }
}