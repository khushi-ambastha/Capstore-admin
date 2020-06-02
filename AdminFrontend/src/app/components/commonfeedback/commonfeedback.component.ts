import { Component, OnInit } from '@angular/core';
import { CapstoreService } from 'src/app/service/capstore.service';
import { Router } from '@angular/router';
import { CommonFeedback } from 'src/app/Model/CommonFeedback';

@Component({
  selector: 'app-commonfeedback',
  templateUrl: './commonfeedback.component.html',
  styleUrls: ['./commonfeedback.component.css']
})
export class CommonfeedbackComponent implements OnInit {

  cfdList: CommonFeedback[];
  searchTerm;


  constructor(private router:Router,
    private adminService: CapstoreService) { }

    approveRequest(feedbackId){
      this.adminService.forwardRequestToMerchant(feedbackId).subscribe();
  }

    approveResponse(feedbackId){
      console.log("approved")
      this.adminService.forwardResponseToCustomer(feedbackId).subscribe()
  }

  ngOnInit(){
    this.adminService.getAllCommonFeedback().subscribe(
        (data:any)=>{
            this.cfdList=data;
        },
        error=>{
            console.log(error);
        }
    )
  }


 back()
{
    this.router.navigate(['admin']);
}


}
