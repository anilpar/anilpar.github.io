import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemsContainerComponent } from './view-items-container.component';

describe('ViewItemsContainerComponent', () => {
  let component: ViewItemsContainerComponent;
  let fixture: ComponentFixture<ViewItemsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewItemsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
