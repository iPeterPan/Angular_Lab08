import {NgModule} from "@angular/core";
import {CustomerComponent} from "../Component/CustomerComponent";
//import {BrowserModule} from "@angular/platform-browser";
//import {FormsModule} from "@angular/forms";


// code has been removed for clarity.
import {FormsModule, FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule} from "@angular/forms";    
import {HttpModule } from "@angular/http"; 
import {RouterModule} from "@angular/router";  
import {CommonModule} from "@angular/common";  
import {InMemoryWebApiModule} from "../node_modules/angular-in-memory-web-api"; 
import {CustomerRoutes} from "../Routing/CustomerRoutes";  
import {GridComponent} from "../Component/GridComponent";  

@NgModule({
    //imports: [RouterModule.forChild(CustomerRoutes),
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule],
        // InMemoryWebApiModule.forRoot(CustomerService)],
    declarations: [CustomerComponent , GridComponent],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      HttpModule
    ],

    bootstrap: [CustomerComponent]
})

export class CustomerModule {
}