import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostListComponent } from './view-post-list.component';

describe('ViewPostListComponent', () => {
  let component: ViewPostListComponent;
  let fixture: ComponentFixture<ViewPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPostListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
