import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchCatComponent } from './patch-cat.component';

describe('PatchCatComponent', () => {
  let component: PatchCatComponent;
  let fixture: ComponentFixture<PatchCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatchCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
