// ====== ./dashboard/Products/products.component.ts ======

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Params } from '@angular/router';
import { ProductsService } from "../../services/products.service";
import { NgForm } from '@angular/forms';
import { Product } from '../../models/product.model';

@Component({
    templateUrl: 'templates/dashboard/products/productCard.tpl.html',
    styleUrls: ['templates/dashboard/products/productCard.css'],
    selector: 'bsh-product'
})

// Component class
export class ProductCardComponent implements OnInit {
    edit = false;
    form;
    @Input() product: Product;

    constructor(private productsService: ProductsService, formbuilder: FormBuilder) {
        // this.form = formbuilder.group({
        //     name: this.product.name,

        // })
    }

    ngOnInit() { }

    editProd() {
        this.edit = true;
    }

    onSave(f: NgForm) {
        this.edit = false;
        console.log(f.value);
    }
 }

