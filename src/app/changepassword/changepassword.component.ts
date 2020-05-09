import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  message: 'e-Mail sent Successfully';
}
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
})
export class ChangepasswordComponent implements OnInit {
  forgotForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: ApiService, public dialog: MatDialog) {
    this.createForm();
  }

  ngOnInit(): void {}

  forgot() {
    console.log(this.forgotForm.value);
    let input_data = {
      username: this.forgotForm.value.email,
    };
    this.api.forgot(input_data).subscribe(
      (data : any) => {
        console.log(data);
        this.dialog.open(DialogDataExampleDialog, {
          data: {
            message: data.message
          },
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private createForm() {
    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }
}



@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './success_message.html',
})

// Dialouge
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}