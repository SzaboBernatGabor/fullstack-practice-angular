import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCatsComponent } from './get-cats.component';

describe('GetCatsComponent', () => {
  let component: GetCatsComponent;
  let fixture: ComponentFixture<GetCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
