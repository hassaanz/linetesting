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
    productsGroups = {};
    prodGroupArr = [];
    prodGroupArrOrig = [];
    productsFiltered;
    addEnabled = false;
    prodForm: FormGroup;
    prodSearchStr: String = '';
    groupSearchStr:String = '';
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productsService: ProductsService,
        private fb: FormBuilder) {
            this.prodGroupArr = [];
            this.prodForm = fb.group({
                name: ["", Validators.required],
                number: ["", Validators.required],
                lineID: ["", Validators.required]
            });
            this.productsService.products.subscribe(
                res => {
                    this.prodGroupArr = [];
                    this.prodGroupArrOrig = [];
                    this.products = res;
                    this.productsGroups = {};
                    this.products.forEach( (prod) => {
                        if (!this.productsGroups[prod.groupName]) {
                            this.productsGroups[prod.groupName] = {groupName: prod.groupName, prods: []};
                        }
                        this.productsGroups[prod.groupName].prods.push(prod);
                    });
                    
                    Object.keys(this.productsGroups).forEach( (key, ind) => {
                        this.prodGroupArr.push(this.productsGroups[key])    
                    })
                    this.prodGroupArrOrig = this.prodGroupArr;
                    this.productsFiltered = this.filterProducts(this.prodSearchStr, res.toArray());
                },
                err => console.log("Error retrieving Products")
            )
    }

    ngOnInit() {
        this.productsService.loadInitialData();
    }

    filterChanged(filterStr) {
        filterStr = filterStr || '';
        this.prodSearchStr = filterStr;
        console.log(this.groupSearchStr, this.prodSearchStr);
        this.prodGroupArr = this.filterProductGroups(this.groupSearchStr, this.prodGroupArrOrig, this.prodSearchStr);
        // this.productsFiltered = this.filterProducts(filterStr, this.products);
    }

    filterProductGroups(filterStr, prodGrpArr, prodSearch) {
        prodSearch = prodSearch.toLowerCase();
        filterStr = filterStr.toLowerCase();
        if (filterStr !== '') {
            var filteredGroups = prodGrpArr.filter((prodGrp) => {
                let grpName = prodGrp.groupName.toLowerCase();
                if (grpName) {
                    return (grpName.includes(filterStr.toLowerCase()));
                }
                return false; 
            });
            console.log(filteredGroups)
            filteredGroups.forEach((prodGroupObj, ind) => {
                var origProds = prodGrpArr.find( prodGroupOrid => (prodGroupOrid.groupName === prodGroupObj.groupName));
                filteredGroups[ind].prods = this.filterProducts(prodSearch, origProds.prods);
            })
            return filteredGroups;
        } else {
            // Filter by product search string
            return prodGrpArr;
        }
    }
    groupFilterChanged(groupStr) {
        groupStr = groupStr || '';
        this.groupSearchStr = groupStr;
        console.log(groupStr);
        this.prodGroupArr = this.filterProductGroups(groupStr, this.prodGroupArrOrig, this.prodSearchStr);
        
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