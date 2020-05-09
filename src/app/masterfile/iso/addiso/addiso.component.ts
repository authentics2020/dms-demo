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
  selector: 'app-addiso',
  templateUrl: './addiso.component.html',
  styleUrls: ['./addiso.component.scss'],
})
export class AddisoComponent implements OnInit {
  
  constructor(private api : ApiService, private storage : StorageService, private formBuilder: FormBuilder, private dialog : MatDialog, public router : Router) {
    this.form_creation();
  }
  selected = 'option2';
  token : any;
  isoForm : FormGroup;
  ngOnInit(): void {
    this.token = this.storage.get_value('token');
  }
  

  save_iso(){
    console.log(this.isoForm.value);
    let input_data = {
      "containerSize": this.isoForm.value.containerSize,
      "containerType": this.isoForm.value.containerType,
      "isoCode": this.isoForm.value.isoCode,
      "isoDescription": this.isoForm.value.isoDescription,
      "status": this.isoForm.value.status == 1 ? "ACTIVE" : "INACTIVE"
    }
    console.log(input_data);
    this.api.save_iso(input_data, this.token).subscribe((data : any)=>{
      console.log(data);
      this.dialog.open(DialogDataExampleDialog, {
        data: {
          message: data.message,
        },
      });
    }, (err)=>{
      console.log(err);
    })
  }

  form_creation(){
    this.isoForm = this.formBuilder.group({
      containerSize: ['', Validators.required],
      containerType: ['', Validators.required],
      isoCode: ['', Validators.required],
      isoDescription: ['', Validators.required],
      status: ['', Validators.required]
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