import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {divStyle} from 'css/templates';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent {
  divStyle = divStyle;
}