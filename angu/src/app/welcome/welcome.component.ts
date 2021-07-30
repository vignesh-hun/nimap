import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { DatacallService } from '../api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private dataCallService: DatacallService) {
    this.userForm = this.fb.group({
      name: [''],
    })
  }

  send() {
    let formData = {
      name: this.userForm.value.name
    }
    this.dataCallService.addCategory(formData).subscribe(
      res => {
        console.log(res);
      })
  }


}
