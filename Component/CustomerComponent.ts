//importing the customer model
import {Customer} from "../Model/Customer";
import {Component} from "@angular/core";
//import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'

@Component({
    //selector : "customer-ui",
    templateUrl : "../UI/Customer.html"
})

//Customer component class exposing the customer model
export class CustomerComponent{
    CurrentCustomer : Customer = new Customer();
}