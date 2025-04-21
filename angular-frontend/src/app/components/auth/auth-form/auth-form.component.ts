import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CookieService } from 'app/services/cookie.service';
import {jwtDecode } from 'jwt-decode';
import { PermissionService } from 'app/services/permission.service';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  inputData = {
    email: '',
    password: ''
  };
  data: string | null = null;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService, private permissionService: PermissionService) {}

  checkCookie() {
    const hasToken = this.cookieService.hasCookie('token');
    console.log('Has token:', hasToken);
  }

  setToken() {
    this.cookieService.setCookie('token', 'exampleToken', { secure: true });
  }

  deleteToken() {
    this.cookieService.deleteCookie('token');
  }

  handleInputChange(event: any) {
    const { id, value } = event.target;
    this.inputData = { ...this.inputData, [id]: value };
  }

  async fetchAuth(mode: string) {
    try {
      const response: any = await this.http
        .post(`http://localhost:3001/users/${mode}`, this.inputData, { withCredentials: true })
        .toPromise();
  
      if (mode === 'login') {
        document.cookie = `token=${response.token}; Path=/;`;
        const decodedToken: any = jwtDecode(response.token);
        const permission = decodedToken.permission;
        this.permissionService.setPermission(permission);
        this.router.navigate(['/cats']);
      } else {
        this.data = 'Account Created';
      }
    } catch (error: any) {
      console.error('Authentication failed:', error);
      this.data = error.statusText;
      console.log(error.statusText);
    }
  }

  responseFunc(): string {
    switch (this.data?.toString()) {
      case 'Internal Server Error':
        return 'Email already in use';
      case 'Unauthorized':
        return 'Incorrect email or password';
      case 'Bad Request':
        return 'Invalid input field(s)';
      case 'Account Created':
        return 'Account Created';
      default:
        return '';
    }
  }
}