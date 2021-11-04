import { TestBed } from '@angular/core/testing';

import { CarOnSaleService } from './car-on-sale.service';

describe('CarOnSaleService', () => {
  let service: CarOnSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarOnSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
