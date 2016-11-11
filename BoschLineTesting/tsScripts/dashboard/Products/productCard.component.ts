// ====== ./dashboard/Products/products.component.ts ======

import { Component, Input, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { ProductsService } from "../../services/products.service";
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: 'templates/dashboard/products/productCard.tpl.html',
    styleUrls: ['templates/dashboard/products/productCard.css'],
    selector: 'bsh-product'
})

// Component class
export class ProductCardComponent implements OnInit {
    edit = false;
    @Input() product;

    constructor(private productsService: ProductsService) { }

    ngOnInit() { }

    editProd() {
        this.edit = true;
    }

    onSave(f: NgForm) {
        this.edit = false;
    }
 }

