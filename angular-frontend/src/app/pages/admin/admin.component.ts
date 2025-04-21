import { Component } from '@angular/core';
import { UserCrudsComponent } from '../../components/CRUDs/user-cruds/user-cruds.component';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [UserCrudsComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {}