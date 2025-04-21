import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCatByIdComponent } from './get-catbyid.component';

describe('GetCatbyidComponent', () => {
  let component: GetCatByIdComponent;
  let fixture: ComponentFixture<GetCatByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCatByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCatByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
