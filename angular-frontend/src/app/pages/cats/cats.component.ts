import { Component } from '@angular/core';
import { CatCrudsComponent } from 'app/components/CRUDs/cat-cruds/cat-cruds.component';

@Component({
  selector: 'app-cats-page',
  imports: [CatCrudsComponent],
  standalone: true,
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {}