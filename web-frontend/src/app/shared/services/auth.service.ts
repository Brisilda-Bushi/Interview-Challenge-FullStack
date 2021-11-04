import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthDto } from '../dto/auth.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Output() loginSuccess = new EventEmitter<AuthDto>();
  @Output() loginFailed = new EventEmitter<string>();

  private readonly LOCAL_STORAGE_AUTH_VAR = 'auth';

  constructor(private http: HttpClient, private route: Router) {}

  login(email: string, password: string) {
    // api call with httclient
    this.http
      .put<AuthDto>(
        `${environment.apiUrl}/api/v1/authentication/${email}`,
        { password: password, meta: 'string' }
      )
      .subscribe({
        next: (result: AuthDto) => {
          // fire loginSuccess event with the result
          this.loginSuccess.emit(result);
          // store result which is an object of AuthDto into localStorage
          localStorage.setItem(
            this.LOCAL_STORAGE_AUTH_VAR,
            JSON.stringify(result)
          );
        },
        error: (error: HttpErrorResponse) => {
          this.loginFailed.emit('Wrong email or password!');
          console.log(error);
        },
      });
  }

  logout(): void {
    localStorage.clear();
    this.route.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const authDto = this.getAuth();
    if (authDto && authDto.authenticated) {
      return true;
    }
    return false;
  }

  getAuth() {
    const authString = localStorage.getItem(this.LOCAL_STORAGE_AUTH_VAR);
    if (authString) {
      const authDto = JSON.parse(authString);
      if (authDto && authDto.authenticated) {
        return authDto;
      }
    }
    return null;
  }
}
