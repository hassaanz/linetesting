// ====== ./dashboard/Products/addproduct.component.ts ======

import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from "../../services/products.service";
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: 'templates/dashboard/products/addProduct.tpl.html',
    styleUrls: ['templates/dashboard/products/addPriduct.css'],
    selector: 'bsh-add-product'
})

// Component class
export class AddProductComponent implements OnInit {
    prodForm: FormGroup;
    @Output() onAddProduct = new EventEmitter<any>();

    constructor(
        private productsService: ProductsService,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder) { 
            // @TODO fix form add group
            this.prodForm = fb.group({
                name: ["", Validators.required],
                number: ["", Validators.required],
                lineID: ["", Validators.required]
            });
    }

    ngOnInit() { }

    onProductClick(product) {
        this.router.navigate(product.id, {relativeTo: this.route});
    }

    addProduct(event) {
        let addedProd = Object.assign({}, this.prodForm.value);
        this.onAddProduct.emit(addedProd);
        this.prodForm.reset();
    }
 }

