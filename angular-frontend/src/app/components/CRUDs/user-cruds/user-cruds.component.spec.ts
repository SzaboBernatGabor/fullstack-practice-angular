import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCrudsComponent } from './user-cruds.component';

describe('UserCrudsComponent', () => {
  let component: UserCrudsComponent;
  let fixture: ComponentFixture<UserCrudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCrudsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
