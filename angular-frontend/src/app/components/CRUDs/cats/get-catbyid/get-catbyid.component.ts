import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import * as styles from 'css/templates';

@Component({
  selector: 'app-get-catbyid',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './get-catbyid.component.html',
  styleUrls: ['./get-catbyid.component.css']
})
export class GetCatByIdComponent {
  input: string = '';
  data: any = null;
  error: string | null = null;
  inputStyle = styles.inputStyle;
  buttonStyle = styles.buttonStyle;
  divStyle = styles.divStyle;
  textStyle = styles.textStyle;
  h1Style = styles.h1Style;

  constructor(private http: HttpClient) {}

  handleInputChange(event: any) {
    this.input = event.target.value;
    this.data = null;
  }

  async fetchCatById() {
    if (!this.input.trim()) {
      this.error = 'Empty input field!';
      this.data = null;
      return;
    }

    try {
      const response = await this.http
        .get<any>(`http://localhost:3001/cats/${this.input}`)
        .toPromise();
      this.data = response;
      if (!response) {
        this.error = 'Not found!';
      } else if (response.breed) {
        this.error = null;
      }
    } catch (err: any) {
      this.error = err.statusText || 'An error occurred';
      this.data = null;
    }
  }
}