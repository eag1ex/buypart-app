import { waitForAsync, TestBed } from '@angular/core/testing';
import { BuypartPagesModule } from './buypart-pages.module';

describe('BuypartPagesModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BuypartPagesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BuypartPagesModule).toBeDefined();
  });
});
