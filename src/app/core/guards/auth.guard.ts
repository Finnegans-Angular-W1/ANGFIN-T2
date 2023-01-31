import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AuthState } from './../../pages/auth-login/state/auth.state';
import { getToken } from './../../pages/auth-login/state/auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad {

  constructor( private store: Store<AuthState>, private router: Router ){  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>{
    return this.store.select(getToken).pipe(
      map( (token) => {
        if(!token){
          this.router.navigateByUrl('/login');
          return false;
        }
        return true;
      })
    );
  }
}
