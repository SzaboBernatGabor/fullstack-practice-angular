import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DynamicNavComponent } from '../dynamic-nav/dynamic-nav.component';
import {jwtDecode} from 'jwt-decode'; // Default export használata
import { RouterModule } from '@angular/router';
import { PermissionService } from 'app/services/permission.service';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [DynamicNavComponent, RouterModule],
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
  token: string | null = null;
  decoded: any = null;
  permission: number | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private permissionService: PermissionService) {
    if (isPlatformBrowser(this.platformId)) {
      // Csak böngészői környezetben fut
      this.token = this.getCookie('token');
      if (this.token) {
        this.decoded = jwtDecode(this.token); // Dekódold a JWT tokent
        console.log('Token:', this.token);
        permissionService.setPermission(this.decoded.permission); // Állítsd be a permission-t a PermissionService-ben
      }
    }
  }

  ngOnInit() {
    // Figyeljük a permission változását
    this.permissionService.permission$.subscribe((permission) => {
      this.permission = permission;
    });
  }

  getCookie(name: string): string | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null; // Szerveroldalon nincs cookie
    }
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }
}