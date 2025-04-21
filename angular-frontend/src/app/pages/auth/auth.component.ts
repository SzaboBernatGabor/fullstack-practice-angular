import { Component, OnInit } from '@angular/core';
import { AuthFormComponent } from 'app/components/auth/auth-form/auth-form.component';
import { CookieService } from 'app/services/cookie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule, AuthFormComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  hasToken: boolean = false;

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    this.hasToken = this.cookieService.hasCookie('token');
  }
}