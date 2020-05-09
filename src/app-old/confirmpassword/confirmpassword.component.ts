import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
export interface DialogData {
  message: 'Successfully Changed Password';
}

@Component({
  selector: 'app-confirmpassword',
  templateUrl: './confirmpassword.component.html',
  styleUrls: ['./confirmpassword.component.scss'],
})
export class ConfirmpasswordComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private api: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }
  token: any;
  changeForm: FormGroup;
  ngOnInit(): void {
    this.token = this.activateRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  openDialog() {}

  change_Password() {
    console.log(this.formBuilder);
    let input_data = {
      newPassword: this.changeForm.value.newPassword,
      token: this.token,
    };
    this.api.change_password(input_data).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private createForm() {
    this.changeForm = this.formBuilder.group({
      newPassword: ['', Validators.required],
      conPassword: ['', Validators.required],
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './success_password.html',
})

// Dialouge
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
