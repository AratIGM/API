import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class APIComponent implements OnInit {

  getAPIhere: any = '';

  constructor(
    private _APIservice: MyServiceService
  ) { }

  ngOnInit(): void {
    this. _APIservice.getAPI().subscribe(response=>{
      console.log('api response',response);
      this.getAPIhere = response;
    })
  }

}
