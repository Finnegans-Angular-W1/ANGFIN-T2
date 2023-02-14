import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RedirectService {

  constructor(private router: Router) { }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }
  
}