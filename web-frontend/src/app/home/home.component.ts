import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuctionsDto } from '../shared/dto/auctions.dto';
import { AuthService } from '../shared/services/auth.service';
import { CarOnSaleService } from '../shared/services/car-on-sale.service';
import * as moment from "moment";
import 'moment/locale/pt-br';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // component variable that contains the auctions, initialized with undefined
  // auctionsDto: AuctionsDto | undefined;


  subscription = new Subscription();

  name = 'Angular 6';
  timeLeftOne: number = 60000;
  timeLeftTwo: number = 50000;
  timeLeftThree: number = 55000;
  timeLeftFour: number = 35000;
  timeLeftFive: number = 45000;
  timeLeftSix: number = 40000;

  updateScheduler : any;

  private readonly updateInMilliseconds = 1000; // if this is set to 1000 then the timer works and counts down

  // constructor(private auth: AuthService, private carOnSale: CarOnSaleService) {}

  constructor(
    // private auth: AuthService, 
    private route: Router
    ) {}

  ngOnInit(): void {
    this.subscription.add(
      // this.carOnSale.auctionsLoaded.subscribe((auctions: AuctionsDto) => {
      //   // assign api call result to component variable
      //   this.auctionsDto = auctions;
      //   console.log(auctions);
        
      // })
    );

    // // immediately call function to retrieve data from api
    // this.carOnSale.getAuctions();

    // scheduler for updating
    this.updateScheduler = setInterval( () => {
      if(this.timeLeftOne ||
        this.timeLeftTwo || 
        this.timeLeftThree || 
        this.timeLeftFour ||
        this.timeLeftFive ||
        this.timeLeftSix > 0) {
        this.timeLeftOne--;
        this.timeLeftTwo--;
        this.timeLeftThree--;
        this.timeLeftFour--;
        this.timeLeftFive--;
        this.timeLeftSix--;
      } else {
        this.timeLeftOne = 60;
        this.timeLeftTwo = 60;
        this.timeLeftThree = 60;
        this.timeLeftFour = 60;
        this.timeLeftFive = 60;
        this.timeLeftSix = 60;
      }
    }, this.updateInMilliseconds);
  }

  

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();

    // // clearing scheduler
    // clearInterval(this.updateScheduler);
  }

  // onLogout(){
  //   this.auth.logout();
  // }
  onLogout(){
    this.route.navigate(['/login']);
  }


}
