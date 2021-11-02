import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {
today:any;
selecteddate:any;
age =0;

  constructor() {
    this.today = new Date().toISOString();
   }

  ngOnInit() {
  }
calcage(){
  let today:any = new Date();
  let selecteddate:any=new Date(this.selecteddate);
  let age =Math.round((Math.abs(this.selecteddate-today)/24*60*60*1000)/365);
  this.age =age;
}

}
