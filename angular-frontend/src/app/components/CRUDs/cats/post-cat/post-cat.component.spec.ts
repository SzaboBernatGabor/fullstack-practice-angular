import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCatComponent } from './post-cat.component';

describe('PostCatComponent', () => {
  let component: PostCatComponent;
  let fixture: ComponentFixture<PostCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
