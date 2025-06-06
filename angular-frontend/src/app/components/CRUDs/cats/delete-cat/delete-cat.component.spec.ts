import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCatComponent } from './delete-cat.component';

describe('DeleteCatComponent', () => {
  let component: DeleteCatComponent;
  let fixture: ComponentFixture<DeleteCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
