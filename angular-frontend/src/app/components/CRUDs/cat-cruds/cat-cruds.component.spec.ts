import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCrudsComponent } from './cat-cruds.component';

describe('CatCrudsComponent', () => {
  let component: CatCrudsComponent;
  let fixture: ComponentFixture<CatCrudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatCrudsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatCrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
