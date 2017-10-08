// import components from angular/form
import {NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder } from '@angular/forms'

export class Customer{
    CustomerName : string = "";
    CustomerCode : string = "";
    CustomerAmount : number = 0; 
    // create object of form group
    userForm : FormGroup = new FormGroup({});

    constructor(){
        // use the builder to create the form object
        var _builder = new FormBuilder();
        // this.formGroup = _builder.group({});

        // // Adding a simple validation
        // this.formGroup.addControl('CustomerNameControl', new FormControl('',Validators.required));

        // // Adding a composite validation
        // var validationcollection = [];
        // //validationcollection.push(Validators.required);
        // //validationcollection.push(Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$"));
        // this.formGroup.addControl('CustomerCodeControl', new FormControl('', [Validators.required, Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$")]));

        this.userForm = _builder.group({
            CustomerNameControl : ['',Validators.required],
            CustomerCodeControl : ['', [Validators.required, Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$")]]
        });
    }
}