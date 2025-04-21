import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { CommonModule } from '@angular/common';
import * as styles from 'css/templates';

@Component({
  selector: 'app-post-cat',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './post-cat.component.html',
  styleUrls: ['./post-cat.component.css']
})
export class PostCatComponent {
  inputData: any = {
    name: '',
    breed: '',
    age: null,
    image: 'null'
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
    const { id, value, files } = event.target;
    if (id === 'image' && files.length > 0) {
      // this.inputData.image = files[0];
    } else {
      this.inputData[id] = id === 'age' ? parseInt(value, 10) : value;
    }
  }

  async fetchPostCat() {
    try {
      const formData = new FormData();
      for (const key in this.inputData) {
        if (this.inputData[key]) {
          formData.append(key, this.inputData[key]);
        }
        
      }
      console.log('FormData:', this.inputData);
      const response = await this.http
        .post('http://localhost:3001/cats', this.inputData)
        .toPromise();

      this.data = response;
      this.error = null;
    } catch (error: any) {
      console.error('Error posting cat:', error);
      this.error = 'Invalid input field(s)!';
    }
  }
}