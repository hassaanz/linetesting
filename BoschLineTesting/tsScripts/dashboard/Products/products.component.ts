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
    // productsGroups = {};
    // prodGroupArr = [];
    prodGroupArr = [];
    private productsFiltered = [];
    // productsFiltered;
    addEnabled = false;
    prodForm: FormGroup;
    prodSearchStr: String = '';
    groupSearchStr:String = '';
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productsService: ProductsService,
        
        private fb: FormBuilder) {
            this.prodForm = fb.group({
                name: ["", Validators.required],
                number: ["", Validators.required],
                // lineID: ["", Validators.required],
                groupName: ["", Validators.required]
            });
            this.productsService.products.subscribe(
                res => {
                    this.products = res;
                    this.prodGroupArr = this.productsToGroups(this.applyFiltersOnProds(this.prodSearchStr, this.groupSearchStr, this.products.toArray()));
                },
                err => console.log("Error retrieving Products")
            )
    }

    ngOnInit() {
        this.productsService.loadInitialData();
    }

    prodsFilterChanged(filterStr) {
        filterStr = filterStr || '';
        this.prodSearchStr = filterStr;
        this.prodGroupArr = this.productsToGroups(this.applyFiltersOnProds(this.prodSearchStr, this.groupSearchStr, this.products));
    }

    groupFilterChanged(groupStr) {
        groupStr = groupStr || '';
        this.groupSearchStr = groupStr;
        this.prodGroupArr = this.productsToGroups(this.applyFiltersOnProds(this.prodSearchStr, this.groupSearchStr, this.products));
        
    }

    applyFiltersOnProds(nameFilter: String, groupNameFilter: String, products) {
        nameFilter = nameFilter || '';
        groupNameFilter = groupNameFilter || '';
        return products.filter( (prod) => prod.name.toLowerCase().includes(nameFilter.toLowerCase()) && prod.groupName.toLowerCase().includes(groupNameFilter.toLowerCase()))
    }
    productsToGroups(products:List<Product>) {
        let productsGroups = [];
        let prodGroupArr :Object[]= [];
        products.forEach( (prod) => {
            if (!productsGroups[prod.Group_id]) {
                productsGroups[prod.Group_id] = {groupName: prod.Group_id, prods: []};
            }
            productsGroups[prod.Group_id].prods.push(prod);
        });
        
        Object.keys(productsGroups).forEach( (key, ind) => {
            prodGroupArr.push(productsGroups[key])    
        })
        return prodGroupArr;
}

    addProduct(event) {
        let addedProd = Object.assign({}, this.prodForm.value, {id: this.products.toArray().length+1});
        var prodNew = new Product({
            id: addedProd.id,
            number: addedProd.number,
            name: addedProd.name,
            createdOn: new Date(),
            createdBy: 'Admin',
            groupName: addedProd.groupName,
            lineName: addedProd.lineID
        })
        this.products = this.products.insert(0, prodNew);
        this.prodGroupArr = this.productsToGroups(this.applyFiltersOnProds(this.prodSearchStr, this.groupSearchStr, this.products.toArray()));
        this.prodForm.reset();
        this.addEnabled = false;
    }
    
    toggleAdd() {
        this.addEnabled = !this.addEnabled;
    }
    
    searchProducts(newVal) {
        this.prodSearchStr = newVal || '';
        this.prodsFilterChanged(this.prodSearchStr);
    }
}