import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './webServices/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardChildGuard implements CanActivateChild {

  constructor(private _userAuth: UsersService, private _router: Router){}


  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._userAuth.loggedIn()) {
        return true;
      } else {
        this._router.navigate(['/login']);
        return false;
      }
  }

}
