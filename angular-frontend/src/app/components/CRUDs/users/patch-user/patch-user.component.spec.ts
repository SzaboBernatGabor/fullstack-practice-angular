import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchUserComponent } from './patch-user.component';

describe('PatchUserComponent', () => {
  let component: PatchUserComponent;
  let fixture: ComponentFixture<PatchUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatchUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
