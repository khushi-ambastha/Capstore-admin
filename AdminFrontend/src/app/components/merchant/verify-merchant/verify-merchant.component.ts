import { Component, OnInit } from '@angular/core';
import { CapstoreService } from 'src/app/service/capstore.service';
import { User } from 'src/app/Model/User.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { MerchantDetails } from 'src/app/Model/MerchantDetails';

@Component({
  selector: 'app-verify-merchant',
  templateUrl: './verify-merchant.component.html',
  styleUrls: [],
})
export class VerifyMerchantComponent implements OnInit {
 // merchant: Observable<User>;
 name:string;
    username:string;
    password;
    phone_number : String;
    alternate_phone_number : String;
    email:String;
    alternate_email: String;
    check=false;
    status: string;
    rating =0;
   // isApproved;
    role="Admin";
    isACtive=false;
    securityQueston=null;
    securityAnswer=null;
    products=null;
    user_address=null;
    product_feedback=null;
    coupons=null;
    isApproved = false;
 merchant: MerchantDetails= new MerchantDetails(name,this.username,this.password,this.email,this.role,this.isACtive,this.securityQueston,this.securityAnswer,this.phone_number,
  this.alternate_phone_number,this.alternate_email,this.products,this.user_address,this.product_feedback,this.coupons,this.isApproved);
 merchant1: Observable<User>;
  
  
  token:number;

  constructor(
    private capstoreService: CapstoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.token = params['userId'];
      console.log(this.token);
    });
   // JSON.stringify( this.merchant);
    //this.merchant=this.capstoreService.getCurrentMerchant();
    this.capstoreService.getMerchant(this.token).subscribe(data=> this.merchant=data);
    console.log(this.merchant);
    
    //this.reloadData(this.token);
  }

  reloadData(token) {
    console.log('Hello');
    console.log(token);
    this.capstoreService.getMerchantForVerification(token).subscribe((data) => {
      this.merchant = data;
      console.log(data);
    });
  }

  acceptMerchant() {
    console.log('Accept');
    this.isApproved = true;
    this.merchant.isActive=true;
    alert("Merchant Approved.")
    this.capstoreService.getToken(this.token, 'Accept').subscribe((data) => {
      this.merchant = data;
      console.log(data);
    });
    // //window.location.reload();
  }

  rejectMerchant() {
    console.log('Reject');
    this.isApproved = false;
    this.merchant.isActive=false;
    this.merchant=null;
    alert("Merchant rejected");
     this.capstoreService.getToken(this.token, 'Reject').subscribe((data) => {
       this.merchant = data;
       console.log(data);
     });
    //window.location.reload();
  }

  closeTab() {
    window.close();
  }
}


