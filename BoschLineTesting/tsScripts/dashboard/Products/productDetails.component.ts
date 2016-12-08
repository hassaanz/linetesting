// ====== ./dashboard/Products/productDetails.component.ts ======

import { Component, OnInit, Input } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from "../../services/products.service";
import { ProductObservationService } from "../../services/productObservation.service";
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { Observation } from "../../models/observation.model";

@Component({
    templateUrl: 'templates/dashboard/products/productDetails.tpl.html',
    styleUrls: ['templates/dashboard/products/productDetails.css'],
    selector: 'bsh-product-details'
})

// Component class
export class ProductDetailsComponent implements OnInit {

    private product;
    editTestMeas: boolean = false;
    editTest: boolean = false;
    public testDetailsForm = this.formbuilder.group({
        number: ["", Validators.required],
        inspectionChar: ["", Validators.required],
        toolNumber: ["", Validators.required],
        inspectionMethod: ["", Validators.required],
        maintainanceDesc: ["", Validators.required],
        recordDesc: ["", Validators.required],
        insMetKey: ["", Validators.required],
        prodResDesc: ["", Validators.required],
        respDesc: ["", Validators.required],

    });
    public testDataForm = this.formbuilder.group({
        minVal: [0, Validators.required],
        maxVal: [0, Validators.required],
        precision: [0, Validators.required],
        valBool: [false, Validators.required],
        boolQuestion: ['', Validators.required]
    });

    @Input() selectedObs:Observation = null;
    constructor(
        private productsService: ProductsService,
        private observationService:ProductObservationService,
        private router: Router,
        private route: ActivatedRoute,
        public formbuilder: FormBuilder) {
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
    onObsSelect($event) {
        this.selectedObs = this.observationService.getObservationByNumber($event.number);
        let obs = this.selectedObs;
        let formVals = {
            number: obs.number,
            inspectionMethod: obs.inspectionMethod || '',
            inspectionChar: obs.inspectionChar || '',
            toolNumber: obs.toolNumber || '',
            maintainanceDesc: obs.maintainanceDesc || '',
            recordDesc: obs.insMetKey || '',
            insMetKey: obs.insMetKey || '',
            prodResDesc: obs.prodResDesc || '',
            respDesc: obs.respDesc || ''
        };

        let formDataVals = {
            minVal: obs.minVal,
            maxVal: obs.maxVal,
            precision: obs.precision,
            valBool: obs.valBool,
            boolQuestion: obs.boolQuestion
        }
        // console.log("Form Vals to set", formVals);
        this.testDetailsForm.patchValue(formVals);

        this.testDataForm.patchValue(formDataVals);
        // console.log("Set form Vals", this.testDetailsForm.value);
        // console.log('Found obs change event in productdetails comp');
        // console.log(this.selectedObs);
    }
    updateForm() {
        let obs = this.selectedObs;
        let formVals = {
            number: obs.number,
            inspectionMethod: obs.inspectionMethod,
            inspectionChar: obs.inspectionChar,
            toolNumber: obs.toolNumber,
            maintainanceDesc: obs.maintainanceDesc,
            recordDesc: obs.insMetKey,
            insMetKey: obs.insMetKey,
            prodResDesc: obs.prodResDesc,
            respDesc: obs.respDesc,
            minVal: obs.minVal,
            maxVal: obs.maxVal,
            precision: obs.precision,
            valBool: obs.valBool,
            boolQuestion: obs.boolQuestion
        }
        this.testDataForm.patchValue(formVals);
        this.testDetailsForm.patchValue(formVals);
    }
    saveTestMeas() {
        let formData = this.testDataForm.value;
        this.selectedObs.minVal = formData.minVal;
        this.selectedObs.maxVal = formData.maxVal;
        this.selectedObs.precision = formData.precision;
        this.selectedObs.valBool = formData.valBool;
        this.selectedObs.boolQuestion = formData.boolQuestion;
        
        if (this.selectedObs.valBool) {
            this.selectedObs.minVal = null;
            this.selectedObs.maxVal = null;
            this.selectedObs.precision = null;
        } else {
            this.selectedObs.boolQuestion = null;
        }
        
        this.observationService.updateObservation(this.selectedObs);
        this.editTestMeas = false;
        this.updateForm();
    }
    saveTestData() {
        let formData = this.testDetailsForm.value;
        this.selectedObs.number = formData.number;
        this.selectedObs.inspectionMethod = formData.inspectionMethod;
        this.selectedObs.toolNumber = formData.toolNumber;
        this.selectedObs.maintainanceDesc = formData.maintainanceDesc;
        this.selectedObs.recordDesc = formData.recordDesc;
        this.selectedObs.insMetKey = formData.insMetKey;
        this.selectedObs.prodResDesc = formData.prodResDesc;
        this.selectedObs.respDesc = formData.respDesc;
        

        this.observationService.updateObservation(this.selectedObs);
        this.editTest = false;
        this.updateForm();
    }

 }

