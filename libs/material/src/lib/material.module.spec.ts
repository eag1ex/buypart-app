import { waitForAsync, TestBed } from '@angular/core/testing';
import { MaterialModule } from './material.module';

describe('ThemeMaterialModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MaterialModule).toBeDefined();
  });
});
