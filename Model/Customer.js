"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import components from angular/form
var forms_1 = require("@angular/forms");
var Customer = /** @class */ (function () {
    function Customer() {
        this.CustomerName = "";
        this.CustomerCode = "";
        this.CustomerAmount = 0;
        // create object of form group
        this.userForm = new forms_1.FormGroup({});
        // use the builder to create the form object
        var _builder = new forms_1.FormBuilder();
        // this.formGroup = _builder.group({});
        // // Adding a simple validation
        // this.formGroup.addControl('CustomerNameControl', new FormControl('',Validators.required));
        // // Adding a composite validation
        // var validationcollection = [];
        // //validationcollection.push(Validators.required);
        // //validationcollection.push(Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$"));
        // this.formGroup.addControl('CustomerCodeControl', new FormControl('', [Validators.required, Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$")]));
        this.userForm = _builder.group({
            CustomerNameControl: ['', forms_1.Validators.required],
            CustomerCodeControl: ['', [forms_1.Validators.required, forms_1.Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$")]]
        });
    }
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map