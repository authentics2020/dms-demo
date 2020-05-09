import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { StorageService } from '../../services/storage.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
export interface DialogData {
  message: 'Registered Successfully';
}

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})
export class AdduserComponent implements OnInit {
  addUserForm: FormGroup;
  roles: Role[] = [
    { value: 'admin-0', viewValue: 'Admin' },
    { value: 'admin-1', viewValue: 'Sub Admin 1' },
    { value: 'admin-2', viewValue: 'Sub Admin 2' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private storage: StorageService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  private createForm() {
    this.addUserForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      f_name: ['', Validators.required],
      email: ['', Validators.required],
      confirm_password: ['', Validators.required],
      user_id: ['', Validators.required],
      role_value: ['', Validators.required],
      remember: true,
    });
  }

  add_user() {
    console.log(this.addUserForm.value);
    let data = {
      username: this.addUserForm.value.f_name,
      password: this.addUserForm.value.password,
      email: this.addUserForm.value.email,
      role: [this.addUserForm.value.role_value],
    };

    console.log(data);
    console.log(data.role[0]);
    let token = this.storage.get_value('token');
    console.log(token);
    this.api.add_user(data, token).subscribe(
      (data) => {
        console.log(data);
        // alert('Registered Successfully');
        this.dialog.open(DialogDataExampleDialog, {
          data: {
            message: data.message,
          },
        });
        this.createForm();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openDialog() {}
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './success_register.html',
})

// Dialouge
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
