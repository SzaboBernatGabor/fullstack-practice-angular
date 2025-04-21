import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PermissionService } from 'app/services/permission.service';

@Component({
  selector: 'app-dynamic-nav',
  imports: [CommonModule, HttpClientModule, RouterModule],
  standalone: true,
  templateUrl: './dynamic-nav.component.html',
  styleUrls: ['./dynamic-nav.component.css']
})
export class DynamicNavComponent implements OnInit {
  @Input() permission: number | undefined;
  constructor(private http: HttpClient, private router: Router, private permissionService: PermissionService) {}

  ngOnInit() {
    this.permissionService.permission$.subscribe((permission) => {
      this.permission = permission;
    });
  }
  async logout() {
    try {
      console.log(this.permission);
      await this.http.post('http://localhost:3001/users/logout', {}, { withCredentials: true }).toPromise();
      document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      this.permissionService.setPermission(undefined);
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }
}