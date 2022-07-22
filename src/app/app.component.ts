import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  



    headers = ['Name','Salary','Experience_year'];
    employee = [
    {
      Name: 'Ram',
      Salary:'10000',
      Experience_year:'1',

    },
    {
      Name: 'Ravi',
      Salary:'20000',
      Experience_year:'2',

      
    },
    {
      Name: 'Raju',
      Salary:'15000',
      Experience_year:'1',

      
    },
    {
      Name: 'sid',
      Salary:'30000',
      Experience_year:'3',
    },
  ];

}
    

