import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { DatacallService } from '../api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  categorylist:any  = []
  catId:number = 0


  constructor(private fb: FormBuilder, private dataCallService: DatacallService) {
    this.productForm = this.fb.group({
      name: [],
      categogyId: ['']
    })
   }

    ngOnInit(){
      this.getCategorydata();
    }
getCategorydata () {
  this.dataCallService.getCategory().subscribe(
    res => {
      this.categorylist = res
    })
}


send() {
  let formData = {
    name: this.productForm.value.name,
    catId: this.productForm.value.categogyId
  }
  this.dataCallService.addProduct(formData).subscribe(
    res => {
      console.log(res);
    })
}
}
