import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/Product';
import { FormGroup } from '@angular/forms';
import { CapstoreService } from 'src/app/service/capstore.service';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.css']
})
export class AddDiscountComponent implements OnInit {

  productId:number;
  discount:number;
  check:any;
  message:any;
  submitted:boolean=false;
  discountForm:FormGroup;
  product:Product;
  constructor(private router:Router,private adminService: CapstoreService) { }

  ngOnInit() {
    this.product=new Product();
  }
  back()
  {
      this.router.navigate(['admin']);
  }
  onSubmit()
  {
    this.submitted=true;
    // this.productId=this.discountForm.controls.productId.value;
    // this.discount=this.discountForm.controls.discount.value;
   // alert(this.productId);
    //alert(this.discount);
    if(this.product.discount>=0)
    {  
    this.adminService.addDiscount(this.product.productId,this.product.discount).subscribe(
    data=>{
      console.log(data);
      this.check=data;
      if(this.check==true)
      {
        alert("Discount Added succesfully");
      }
      this.router.navigate(['showDiscount']);
    },
     error=>{
      console.log(error);
    }
  );
    }
    else{
      alert("Enter Valid Number");
    }
  }
}
