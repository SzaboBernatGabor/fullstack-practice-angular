import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { DeleteCatComponent } from '../cats/delete-cat/delete-cat.component';
import { GetCatsComponent } from '../cats/get-cats/get-cats.component';
import { PatchCatComponent } from '../cats/patch-cat/patch-cat.component';
import { PostCatComponent } from '../cats/post-cat/post-cat.component';
import { GetCatByIdComponent } from '../cats/get-catbyid/get-catbyid.component';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-cat-cruds',
  imports: [CommonModule, DeleteCatComponent, GetCatsComponent, PatchCatComponent, PostCatComponent, GetCatByIdComponent],
  standalone: true,
  templateUrl: './cat-cruds.component.html',
  styleUrls: ['./cat-cruds.component.css']
})
export class CatCrudsComponent {
  token: string | null = null;
  decoded: any = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.token = this.getCookie('token');
      if (this.token) {
        this.decoded = jwtDecode(this.token);
      }
    }
  }

  getCookie(name: string): string | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }

  switchOnPermission(permission: number | undefined) {
    switch (permission) {
      case 0:
        return ['GetCatsComponent', 'GetCatByIdComponent'];
      case 1:
        return ['GetCatsComponent', 'GetCatByIdComponent', 'PatchCatComponent'];
      case 2:
        return ['GetCatsComponent', 'GetCatByIdComponent', 'PostCatComponent', 'PatchCatComponent', 'DeleteCatComponent'];
      default:
        return [];
    }
  }
}