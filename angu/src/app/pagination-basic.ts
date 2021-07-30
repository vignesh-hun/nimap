import {Component, OnInit} from '@angular/core';
import { DatacallService } from './api.service';

@Component({
  selector: 'ngbd-pagination-basic',
  templateUrl: './pagination-basic.html'
})
export class NgbdPaginationBasic implements OnInit {
    productlist:any[] = []
    constructor(private dataCallService: DatacallService) { }
    page:number = 4;
    pageSize:number = 10;
    
    ngOnInit(): void {
        this.getproductdata(1)
    }

    getproductdata (page: number) {
    this.dataCallService.getProduct(page).subscribe(
        res => {
        this.productlist = res
        console.log(this.productlist)
        })
    }

    onChangePage(pageOfItems : number) {
        console.log(pageOfItems)
        this.dataCallService.getProduct(pageOfItems).subscribe(
            res => {
            this.productlist = res
            })
    }
}
