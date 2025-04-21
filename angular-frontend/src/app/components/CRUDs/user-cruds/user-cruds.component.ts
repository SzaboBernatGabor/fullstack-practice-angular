import { Component } from '@angular/core';
import { PatchUserComponent } from '../users/patch-user/patch-user.component';
import { GetUsersComponent } from '../users/get-users/get-users.component';
import { DeleteUserComponent } from '../users/delete-user/delete-user.component';

@Component({
  selector: 'app-user-cruds',
  imports: [PatchUserComponent, GetUsersComponent, DeleteUserComponent],
  standalone: true,
  templateUrl: './user-cruds.component.html',
  styleUrls: ['./user-cruds.component.css']
})
export class UserCrudsComponent {}