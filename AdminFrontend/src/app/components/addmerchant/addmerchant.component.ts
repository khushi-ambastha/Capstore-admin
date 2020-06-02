import { Component, OnInit } from '@angular/core';
import { MerchantDetails } from 'src/app/Model/MerchantDetails';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { CapstoreService } from 'src/app/service/capstore.service';

@Component({
  selector: 'app-addmerchant',
  templateUrl: './addmerchant.component.html',
  styleUrls: ['./addmerchant.component.css']
})
export class AddmerchantComponent implements OnInit {

  name:string;
username:string;
password;
phone_number : String;
alternate_phone_number : String;
eMail:String;
alternate_email: String;
check=false;
status: string;
rating =0;
isApproved;
role="Merchant";
isACtive=false;
securityQueston=null;
securityAnswer=null;
products=null;
user_address=null;
product_feedback=null;
coupons=null;
merchant: MerchantDetails= new MerchantDetails(name,this.username,this.password,this.eMail,this.role,this.isACtive,this.securityQueston,this.securityAnswer,this.phone_number,
  this.alternate_phone_number,this.alternate_email,this.products,this.user_address,this.product_feedback,this.coupons,this.isApproved);

  constructor(private router: Router, private adminService: CapstoreService) { }

  ngOnInit(): void {

  }
  addMerchant()
  {
    console.log(this.merchant);
   //this.adminService.addNewMerchant(this.merchant);
   //this.adminService.setter(this.merchant);

   //this.adminService.registerMerchant(this.merchant).subscribe(data=> console.log(data));
  
   }

   onCheckboxValueChange():any{
    this.check=!this.check
    if(this.check){
    this.status="Approved";
    alert(this.status)
    }
    else{
    this.status="Disapproved";
    alert(this.status)
    }
    this.isApproved=this.check;


  }
  verify(){
    this.router.navigate(['/verifyMerchant']);
  }
}
