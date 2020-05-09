import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { StorageService } from '../../../services/storage.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  message: 'Registered Successfully';
}
@Component({
  selector: 'app-addhaulier',
  templateUrl: './addhaulier.component.html',
  styleUrls: ['./addhaulier.component.scss'],
})
export class AddhaulierComponent implements OnInit {
  haulier_form: FormGroup;
  token: any;

  constructor(
    private api: ApiService,
    private storage: StorageService,
    private form_builder: FormBuilder,
    private dialog: MatDialog
  ) {
    this.form_creation();
  }

  ngOnInit(): void {
    this.token = this.storage.get_value('token');
  }

  save_haulier_list() {
    console.log(this.haulier_form.value);
    let input_data = {
      addressLine1: this.haulier_form.value.addressLine1,
      addressLine2: this.haulier_form.value.addressLine2,
      city: this.haulier_form.value.city,
      contactNumber1: this.haulier_form.value.contactNumber1,
      contactNumber2: this.haulier_form.value.contactNumber2,
      country: this.haulier_form.value.country,
      creditLimit: this.haulier_form.value.creditLimit,
      dgcBillingType: this.haulier_form.value.dgcBillingType,
      haulierCode: this.haulier_form.value.haulierCode,
      haulierName: this.haulier_form.value.haulierName,
      postCode: this.haulier_form.value.postCode,
      state: this.haulier_form.value.state,
      status: this.haulier_form.value.status == 1 ? 'ACTIVE' : 'INACTIVE',
    };
    console.log(input_data);
    this.api.save_haulier(input_data, this.token).subscribe(
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

  form_creation() {
    this.haulier_form = this.form_builder.group({
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      contactNumber1: ['', Validators.required],
      contactNumber2: ['', Validators.required],
      country: ['', Validators.required],
      creditLimit: ['', Validators.required],
      dgcBillingType: ['', Validators.required],
      haulierCode: ['', Validators.required],
      haulierName: ['', Validators.required],
      postCode: ['', Validators.required],
      state: ['', Validators.required],
      status: ['', Validators.required],
    });
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
