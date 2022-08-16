import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {  
  data: any = [];

  constructor(private product: UserserviceService) { }

  ngOnInit(): void {
      this.product.getData().subscribe((data) => {
        console.warn(data);
        this.data = data;
      });
  }

}
