import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/Stock';
import { stockService } from '../../service/stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.css']
})
export class StockUpdateComponent implements OnInit{
  Stock:Stock = new Stock();
  Id!:any;
  constructor(private stockService : stockService, private router : Router){}
  ngOnInit(): void {

  }



  update(){
    //this.productService.addProduct(this.product);
    this.stockService.updateStock(this.Id, this.Stock).subscribe({
      next : () => this.router.navigateByUrl('/user'),
      error : (error) => console.log(error)
    });

  }

}
