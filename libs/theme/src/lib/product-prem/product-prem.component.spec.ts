import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPremComponent } from './product-prem.component';

describe('ProductPremComponent', () => {
  let component: ProductPremComponent;
  let fixture: ComponentFixture<ProductPremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPremComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
