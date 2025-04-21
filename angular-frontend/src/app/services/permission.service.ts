import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  private permissionSubject = new BehaviorSubject<number | undefined>(undefined);
  permission$ = this.permissionSubject.asObservable();

  setPermission(permission: number | undefined) {
    this.permissionSubject.next(permission);
  }

  getPermission(): number | undefined {
    return this.permissionSubject.getValue();
  }
}