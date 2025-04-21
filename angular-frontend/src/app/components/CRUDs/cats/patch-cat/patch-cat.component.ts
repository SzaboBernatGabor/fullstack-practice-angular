import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import * as styles from 'css/templates';

@Component({
  selector: 'app-patch-cat',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './patch-cat.component.html',
  styleUrls: ['./patch-cat.component.css']
})
export class PatchCatComponent {
  inputData: any = {
    id: '',
    name: '',
    breed: '',
    age: null
  };
  error: string | null = null;
  data: any = null;
  inputStyle = styles.inputStyle;
  buttonStyle = styles.buttonStyle;
  textStyle = styles.textStyle;
  divStyle = styles.divStyle;
  h1Style = styles.h1Style;

  constructor(private http: HttpClient) {}

  handleInputChange(event: any) {
    const { id, value } = event.target;
    if (id === 'age') {
      const age = parseInt(value, 10);
      if (age > 0 && age < 35) {
        this.inputData.age = age;
      }
    } else {
      this.inputData[id] = value || undefined;
    }
  }

  async fetchPatchCat() {
    try {
      const response = await this.http
        .patch(`http://localhost:3001/cats/${this.inputData.id}`, this.inputData)
        .toPromise();
      this.data = response;
      if (response?.toString() === 'Error: Not Found') {
        this.error = 'Not found!';
      } else if (response?.toString() === 'Error: Bad Request') {
        this.error = 'Invalid input(s)!';
      } else {
        this.error = null;
      }
    } catch (err: any) {
      this.error = err.statusText || 'An error occurred';
      this.data = null;
    }
  }
}