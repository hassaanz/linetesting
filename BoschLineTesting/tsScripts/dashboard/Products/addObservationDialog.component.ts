import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { Observation } from "../../models/observation.model";
import { MdDialog, MdDialogRef } from "@angular/material"

@Component({
    templateUrl: 'templates/dashboard/products/addObservationDialog.tpl.html',
    styleUrls: ['templates/dashboard/products/addObservationDialog.css'],
    selector: 'bsh-add-observation',
})
export class AddObservationDialog {
  testDataEdit = false;
  public addObsForm = this.fb.group({
    number: ["", Validators.required],
    shortText: ["", Validators.required],
    inspectionChar: ["", Validators.required],
    toolNumber: ["", Validators.required],
    inspectionMethod: ["", Validators.required],
    maintainanceDesc: ["", Validators.required],
    recordDesc: ["", Validators.required],
    insMetKey: ["", Validators.required],
    prodResDesc: ["", Validators.required],
    respDesc: ["", Validators.required],
    // validFrom: ["", Validators.required],
    // validTo: ["", Validators.required],
    createdOn: new Date(),
    prodNum: ["", Validators.required],
    minVal: ["", Validators.required],
    maxVal: ["", Validators.required],
    precision: ["", Validators.required],
    valBool: ["", Validators.required],
    boolQuestion: ["", Validators.required],
  });
  constructor(
    public dialogRef: MdDialogRef<AddObservationDialog>,
    public fb: FormBuilder) { }
  
  saveObservation() {
    // console.log(this.addObsForm.value);
    let obs = new Observation(this.addObsForm.value);
    this.dialogRef.close({status: true, value: obs});
  }
}