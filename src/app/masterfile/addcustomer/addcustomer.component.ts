import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ApiService } from '../../services/api.service';
import { StorageService } from '../../services/storage.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  message: 'Registered Successfully';
}
interface Exchange {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class AddcustomerComponent implements OnInit {
  addCustomerForm: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  check: boolean = false;
  token: any;
  exchanges: Exchange[] = [
    { value: 'value-0', viewValue: 'Value 1' },
    { value: 'value-1', viewValue: 'Value 2' },
    { value: 'value-2', viewValue: 'Value 3' },
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private api: ApiService,
    private storage: StorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.token = this.storage.get_value('token');
    this.firstFormGroup = this._formBuilder.group({
      customerCode: ['', Validators.required],
      customerName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      customerRocNo: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      postCode: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      contactNo1: ['', Validators.required],
      contactNo2: ['', Validators.required],
      currency: ['', Validators.required],
      exchangeRate: ['', Validators.required],
      exchange_value: ['', Validators.required],
      billingType: ['', Validators.required],
      status: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      postCode: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      contactNo1: ['', Validators.required],
      contactNo2: ['', Validators.required],
      currency: ['', Validators.required],
      exchangeRate: ['', Validators.required],
    });

    // this.secondFormGroup.setValue({'addressLine1' : "ashvhjsvg"})
  }

  add_customer() {
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    let input_data = {
      addressLine1: this.firstFormGroup.value.addressLine1,
      addressLine2: this.firstFormGroup.value.addressLine2,
      billingAddressLine1: this.secondFormGroup.value.addressLine1,
      billingAddressLine2: this.secondFormGroup.value.addressLine2,
      billingCity: this.secondFormGroup.value.city,
      billingContactNumber1: this.secondFormGroup.value.contactNo1,
      billingContactNumber2: this.secondFormGroup.value.contactNo2,
      billingCountry: this.secondFormGroup.value.country,
      billingPostCode: this.secondFormGroup.value.postCode,
      billingState: this.secondFormGroup.value.state,
      billingType: this.firstFormGroup.value.billingType,
      city: this.firstFormGroup.value.city,
      contactNumber1: this.firstFormGroup.value.contactNo1,
      contactNumber2: this.firstFormGroup.value.contactNo2,
      country: this.firstFormGroup.value.country,
      currencyCode: this.firstFormGroup.value.currency /*'INR'*/,
      currencyName: this.firstFormGroup.value.currency,
      customerCode: this.firstFormGroup.value.customerCode,
      customerName: this.firstFormGroup.value.customerName,
      customerRocNumber: this.firstFormGroup.value.customerRocNo,
      email: this.firstFormGroup.value.emailAddress,
      isBillingAddrSameAsCustomerAddr: this.check ? 1 : 0,
      postCode: this.firstFormGroup.value.postCode,
      state: this.firstFormGroup.value.state,
      status: this.firstFormGroup.value.status == 1 ? 'ACTIVE' : 'INACTIVE',
      // "status": this.firstFormGroup.value.status
    };
    console.log(input_data);
    this.api.save_ustomer(input_data, this.token).subscribe(
      (data: any) => {
        console.log(data);
        this.dialog.open(DialogDataExampleDialog, {
          data: {
            message: data.message,
          },
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  use_address() {
    this.check = !this.check;
    if (!this.check) {
      this.secondFormGroup.patchValue({
        addressLine1: '',
        addressLine2: '',
        city: '',
        postCode: '',
        state: '',
        country: '',
        contactNo1: '',
        contactNo2: '',
      });
    } else {
      this.secondFormGroup.patchValue({
        addressLine1: this.firstFormGroup.value.addressLine1,
        addressLine2: this.firstFormGroup.value.addressLine2,
        city: this.firstFormGroup.value.city,
        postCode: this.firstFormGroup.value.postCode,
        state: this.firstFormGroup.value.state,
        country: this.firstFormGroup.value.country,
        contactNo1: this.firstFormGroup.value.contactNo1,
        contactNo2: this.firstFormGroup.value.contactNo2,
      });
    }

    console.log('hey i am calling');
    this.secondFormGroup.value.addressLine1 = this.firstFormGroup.value.addressLine1;
    this.secondFormGroup.value.addressLine2 = this.firstFormGroup.value.addressLine2;
    this.secondFormGroup.value.city = this.firstFormGroup.value.city;
    this.secondFormGroup.value.postCode = this.firstFormGroup.value.postCode;
    this.secondFormGroup.value.state = this.firstFormGroup.value.state;
    this.secondFormGroup.value.country = this.firstFormGroup.value.country;
    this.secondFormGroup.value.contactNo1 = this.firstFormGroup.value.contactNo1;
    this.secondFormGroup.value.contactNo2 = this.firstFormGroup.value.contactNo2;

    console.log(this.secondFormGroup.value);
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './success_status.html',
})

// Dialouge
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
