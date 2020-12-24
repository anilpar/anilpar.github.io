import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemUpdateComponent } from './product-item-update.component';

describe('ProductItemUpdateComponent', () => {
  let component: ProductItemUpdateComponent;
  let fixture: ComponentFixture<ProductItemUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
