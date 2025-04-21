import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}
  canActivate(route: any): boolean {
    const path = route.routeConfig?.path;
    if (path === 'cats' || path === 'admin') {
      const token = this.getCookie('token');
      if (token) {
        try {
          const decoded: any = jwtDecode(token);
          console.log('Decoded token:', decoded);

          if (decoded.active) {
            if (path === 'admin' && decoded.permission !== 2) {
              this.router.navigate(['/cats']);
              return false;
            }
            return true;
          }
        } catch (error) {
          console.error('Token decoding failed:', error);
        }
      }
      this.router.navigate(['/unauthorized']);
      return false;
    }
    return true;
  }

  private getCookie(name: string): string | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }
}