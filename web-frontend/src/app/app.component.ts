import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { CarOnSaleService } from './shared/services/car-on-sale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit {
  title = 'test-app-ng';

  constructor(){
  }

  ngOnInit(): void {
  }
}
