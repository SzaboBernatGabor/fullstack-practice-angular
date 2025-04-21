import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import * as styles from 'css/templates';

@Component({
  selector: 'app-delete-cat',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './delete-cat.component.html',
  styleUrls: ['./delete-cat.component.css']
})
export class DeleteCatComponent {
  inputStyle = styles.inputStyle;
  buttonStyle = styles.buttonStyle;
  divStyle = styles.divStyle;
  h1Style = styles.h1Style;
  textStyle = styles.textStyle;
  input: string = '';
  data: any = null;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  handleInputChange(event: any) {
    this.input = event.target.value;
    this.data = null;
  }

  async fetchDelete() {
    if (!this.input.trim()) {
      this.error = 'Empty input field!';
      this.data = null;
      return;
    }

    try {
      const response = await this.http
        .delete<any>(`http://localhost:3001/cats/${this.input}`)
        .toPromise();
      this.data = response;
      if (!response) {
        this.error = 'Not found!';
      } else {
        this.error = null;
      }
    } catch (err: any) {
      if (err.status === 500) {
        this.error = 'Not found!';
      }
      this.data = null;
    }
  }
}