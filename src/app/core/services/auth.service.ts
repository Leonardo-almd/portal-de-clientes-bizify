import { profileModule } from './../../menus/profile/profile.module';
import { PoStorageService } from '@po-ui/ng-storage';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  firstValueFrom,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PoNotificationService } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public $authenticationState = new BehaviorSubject(false);

  public $userDataSubject = new BehaviorSubject({});


  public get getUser() {
    return this.$userDataSubject.asObservable()
  }

  constructor(
    private router: Router,
    private storage: PoStorageService,
    private http: HttpClient,
    private poNotification: PoNotificationService
  ) {
    this.storage.exists('user').then((result) => {
      this.$authenticationState.next(result);
    });
    this.storage.get('user').then((user) => {
      if (user) {
        this.$authenticationState.next(true);
        this.$userDataSubject.next(user);
      }
    });
  }

  public async login(event: any) {
    console.log(event)
    const body = {
      usernameOrEmail: event.login,
      password: event.password
    }
    this.http.post(`http://localhost:8080/api/v1/auth`, body).subscribe({
      next: async (response: any) => {
        console.log(response)
        const profile = JSON.stringify(response.profile)
        const token = response.accessToken
        await this.storage.set('user', profile);
        localStorage.setItem('user', profile);
        localStorage.setItem('token', token)
        this.$authenticationState.next(true);
        this.$userDataSubject.next(profile);
        this.router.navigate(['dashboard']);
      },
      error: (error) => {
        console.log(error)
        this.poNotification.error('Usuário Invalido')
      }
    });
  }

  public async logout(): Promise<any> {
    localStorage.removeItem('user');
    localStorage.removeItem('token')
    this.router.navigate(['auth']);
    this.$authenticationState.next(false);
    await this.storage.clear();
  }
}
