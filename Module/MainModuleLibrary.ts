import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CustomerComponent} from "../Component/CustomerComponent";
import {SupplierComponent} from "../Component/SupplierComponent";
import {WelcomeComponent} from "../Component/WelcomeComponent";
import {MasterPageComponent} from "../Component/MasterPageComponent";
import {RouterModule} from "@angular/router";
import {ApplicationRoutes} from "../Routing/Routing";

@NgModule({
    imports : [RouterModule.forRoot(ApplicationRoutes), BrowserModule, FormsModule],
    declarations : [CustomerComponent, MasterPageComponent, SupplierComponent, WelcomeComponent],
    bootstrap : [MasterPageComponent]
})

export class MainModuleLibrary{

}