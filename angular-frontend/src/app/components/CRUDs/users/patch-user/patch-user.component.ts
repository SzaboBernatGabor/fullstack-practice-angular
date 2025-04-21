import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import * as styles from 'css/templates';

@Component({
  selector: 'app-patch-user',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './patch-user.component.html',
  styleUrls: ['./patch-user.component.css']
})
export class PatchUserComponent {
  inputData: any = {
    _id: '',
    permission: 0,
    active: ''
  };
  error: string | null = null;
  data: any = null;
  inputStyle = styles.inputStyle;
  buttonStyle = styles.buttonStyle;
  divStyle = styles.divStyle;
  h1Style = styles.h1Style;
  textStyle = styles.textStyle;

  constructor(private http: HttpClient) {}

  handleInputChange(event: any) {
    const { id, value } = event.target;
    if (id === 'active') {
      if (value.toLowerCase() === 'true') {
        this.inputData.active = 'true';
      }
      if (value.toLowerCase() === 'false') {
        this.inputData.active = 'false';
      }
    } else if (id === 'permission') {
      if (value != '0' && value != '1' && value != '2') {
        this.inputData.permission = 0;
      } else {
        this.inputData.permission = parseInt(value, 10);
      }
    } else {
      this.inputData[id] = value;
    }
  }

  async fetchPatchUser() {
    try {
      const response = await this.http
        .patch(`http://localhost:3001/users/${this.inputData._id}`, this.inputData)
        .toPromise();
        this.data = response;
        if (response?.toString() === 'Not Found') {
          this.error = 'Not found!';
        } else if (response?.toString() === 'Internal Server Error') {
          this.error = 'Invalid input(s)!';
        }
          else {
          this.error = null;
        }
      } catch (err: any) {
        if (err.status === 500) {
          this.error = 'Invalid input(s)!';
        } else if (err.status === 404) {
          this.error = 'Not found!';
        }
        this.data = null;
      }
  }
}