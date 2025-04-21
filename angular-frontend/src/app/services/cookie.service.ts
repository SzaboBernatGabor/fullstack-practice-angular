import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  getAllCookies(): { [key: string]: string } {
    if (!isPlatformBrowser(this.platformId)) {
      return {};
    }
    const cookies: { [key: string]: string } = {};
    document.cookie.split(';').forEach(cookie => {
      const [key, value] = cookie.split('=').map(part => part.trim());
      cookies[key] = decodeURIComponent(value || '');
    });
    return cookies;
  }

  setCookie(key: string, value: string, options: { secure?: boolean; expires?: Date } = {}): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    let cookieString = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    if (options.expires) {
      cookieString += `; expires=${options.expires.toUTCString()}`;
    }
    if (options.secure) {
      cookieString += '; secure';
    }
    cookieString += '; path=/';
    document.cookie = cookieString;
  }

  getCookie(name: string): string | null {
    const cookies = this.getAllCookies();
    return cookies[name] || null;
  }

  deleteCookie(name: string): void {
    this.setCookie(name, '', { expires: new Date(0) });
  }

  hasCookie(name: string): boolean {
    return this.getCookie(name) !== null;
  }
}