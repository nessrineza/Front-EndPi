import { Component, OnDestroy, OnInit } from '@angular/core';
import { stockService } from '../service/stock.service';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { interval } from 'rxjs';


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit, OnDestroy{
  stock:any;
  private intervalSubscription: Subscription | null = null;
  private notificationSubject = new Subject<string>();
  notification$ = this.notificationSubject.asObservable();

constructor(private stockservice:stockService, private router:Router){ }

getallstock(){
  this.stockservice.GetAllStock().subscribe((data: any) => {
    this.stock = data;
  });
}


deletestock(id: number){
  this.stockservice.DeleteStock(id).subscribe();
  this.reloadComponent();
}


reloadComponent(): void {
  const currentRoute = this.router.url.split('?')[0];
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate([currentRoute]);
  });
}



ngOnInit(): void {
  this.getallstock();

  // Retrieve stock information every 60 seconds
  this.intervalSubscription = interval(60000)
    .pipe(switchMap(() => this.stockservice.GetAllStock()))
    .subscribe((data: any) => {
      this.stock = data;
      this.notificationSubject.next('New data retrieved from server');
    });
}

ngOnDestroy(): void {
  // Clear interval when the component is destroyed
  if (this.intervalSubscription) {
    this.intervalSubscription.unsubscribe();
  }
}
}


