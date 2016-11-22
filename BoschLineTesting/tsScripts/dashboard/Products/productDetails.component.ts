// ====== ./dashboard/Products/productDetails.component.ts ======

import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from "../../services/products.service";
import { ProductObservationService } from "../../services/productObservation.service";
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: 'templates/dashboard/products/productDetails.tpl.html',
    styleUrls: ['templates/dashboard/products/productDetails.css'],
    selector: 'bsh-product-details'
})

// Component class
export class ProductDetailsComponent implements OnInit {

    private product;
    constructor(
        private productsService: ProductsService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe( (param: any) =>{
            let prodID = parseInt(param['id']);
            if (isNaN(prodID)) {
                this.router.navigate(['dash/products']);
                return;
            }
            console.log("Route ID: ", prodID);
            this.product = this.productsService.getproductByID(prodID);
            console.log("Got Product", this.product);
        })
    }

    onSave(f: NgForm) {
        
    }

    // Go back to previous route and send back product data
    goBack() {
        this.router.navigate(
            ['../', { id: this.product} ],
            { relativeTo: this.route }
        );
    }
 }

