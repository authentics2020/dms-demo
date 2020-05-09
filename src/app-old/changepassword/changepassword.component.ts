import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
})
export class ChangepasswordComponent implements OnInit {
  forgotForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {
    this.createForm();
  }

  ngOnInit(): void {}

  forgot() {
    console.log(this.forgotForm.value);
    let input_data = {
      email: this.forgotForm.value.email,
    };
    this.api.forgot(input_data).subscribe(
      (data) => {
        console.log(data);
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
