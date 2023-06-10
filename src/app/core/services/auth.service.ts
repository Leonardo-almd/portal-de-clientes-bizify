import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { PoStorageService } from '@po-ui/ng-storage';
import { BehaviorSubject, firstValueFrom, Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  async logout(): Promise<any> {
    this.router.navigate(['auth'])
    localStorage.removeItem('password');
  }

}
