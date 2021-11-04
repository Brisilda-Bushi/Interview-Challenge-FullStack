import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuctionsDto } from '../dto/auctions.dto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CarOnSaleService {
  private readonly LOCAL_STORAGE_AUTH_VAR = 'auth';

  @Output() auctionsLoaded = new EventEmitter<AuctionsDto>();

  constructor(private http: HttpClient, private auth : AuthService) {}

  getAuctions(): void {
    this.http
      .get(
        `${environment.apiUrl}/api/v2/auction/buyer/?filter=test&count=false`, {
          headers:{'userId': this.auth.getAuth().userId , 'authtoken' : this.auth.getAuth().token}
        }
      )
      .subscribe({
        next: (result: any) => {
          // fire event and bring the result from api call
          this.auctionsLoaded.emit(result);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        },
      });
  }
}
