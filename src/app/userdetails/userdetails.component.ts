import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
   }


  fetchData=()=>{
    this.myapi.viewuser().subscribe(
      (data)=>{
        this.userData=data
      }
    )
  }



  userData:any={}

  ngOnInit(): void {
  }

}
