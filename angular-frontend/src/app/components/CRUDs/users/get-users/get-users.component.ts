import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import * as styles from 'css/templates';

@Component({
  selector: 'app-get-users',
  imports: [CommonModule, HttpClientModule],
  standalone: true,
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent {
  data: any[] = [];
  hidden: boolean = true;
  inputStyle = styles.inputStyle;
  buttonStyle = styles.buttonStyle;
  divStyle = styles.divStyle;
  h1Style = styles.h1Style;
  textStyle = styles.textStyle;

  constructor(private http: HttpClient) {}

  async fetchAllUsers() {
    try {
      const response = await this.http.get<any[]>('http://localhost:3001/users').toPromise();
      this.data = response || [];
      this.hidden = !this.hidden;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
}