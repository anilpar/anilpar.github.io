import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemUpdateComponent } from './user-item-update.component';

describe('UserItemUpdateComponent', () => {
  let component: UserItemUpdateComponent;
  let fixture: ComponentFixture<UserItemUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserItemUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
