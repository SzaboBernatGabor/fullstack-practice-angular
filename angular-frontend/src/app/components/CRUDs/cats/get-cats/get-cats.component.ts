import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import * as styles from 'css/templates';

@Component({
  selector: 'app-get-cats',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './get-cats.component.html',
  styleUrls: ['./get-cats.component.css']
})
export class GetCatsComponent {
  data: any[] = [];
  hidden: boolean = true;
  inputStyle = styles.inputStyle;
  buttonStyle = styles.buttonStyle;
  divStyle = styles.divStyle;
  h1Style = styles.h1Style;
  textStyle = styles.textStyle;

  constructor(private http: HttpClient) {}

  async fetchAllCats() {
    try {
      const response = await this.http.get<any[]>('http://localhost:3001/cats').toPromise();
      this.data = response || [];
      this.hidden = !this.hidden;
    } catch (error) {
      console.error('Error fetching cats:', error);
    }
  }
}