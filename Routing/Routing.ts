import {Component} from '@angular/core';
import {CustomerComponent} from "../Component/CustomerComponent";
import {SupplierComponent} from "../Component/SupplierComponent";
import {WelcomeComponent} from "../Component/WelcomeComponent";

export const ApplicationRoutes = [
    { path: 'UI', component:WelcomeComponent },
    { path: 'Customer', component: CustomerComponent },
    { path: 'Supplier', component: SupplierComponent },
    { path: '', component:WelcomeComponent }
];