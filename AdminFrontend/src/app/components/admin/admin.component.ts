import { Component, OnInit } from '@angular/core';
import { CapstoreService } from 'src/app/service/capstore.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  searchTerm:any;
  constructor(private capstoreService:CapstoreService) { }
  email;
  ngOnInit(): void {
  }

invite(email)
{
 this.capstoreService.inviteservice(email).subscribe(data=> console.log(data));
 console.log("invite send");
 alert("Invite sent successfully!");
}
}
