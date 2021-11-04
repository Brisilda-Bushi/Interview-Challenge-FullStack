import { Component, OnDestroy, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// import { AuthDto } from '../shared/dto/auth.dto';
// import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  // variable bound on template using ngModel
  email = 'test@test.de';
  // variable bound on template using ngModel
  password = '123456.';

  // for tracking subscription in this component
  subscription = new Subscription();

  errorVar = '';

  constructor(
    // private auth: AuthService, 
    private route: Router
    ) {}

  ngOnInit(): void {
    this.subscription.add(
      // this.auth.loginSuccess.subscribe((authDto: AuthDto) => {
      //   console.log('login success : ' + authDto);
      //   this.route.navigate(['/home']);
      // })
    );
    this.subscription.add(
      // this.auth.loginFailed.subscribe((errorPar) => {
      //   this.errorVar = errorPar;
      // })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  // onLogin() {
  //   this.auth.login(this.email, this.password);
  // }

  onLogin() {
    this.route.navigate(['/home']);
  }

}
