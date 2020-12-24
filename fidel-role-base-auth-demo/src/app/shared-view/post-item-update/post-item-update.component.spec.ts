import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItemUpdateComponent } from './post-item-update.component';

describe('PostItemUpdateComponent', () => {
  let component: PostItemUpdateComponent;
  let fixture: ComponentFixture<PostItemUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostItemUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
