import { TestBed } from '@angular/core/testing';

import { NavbarService } from './navbar-service.service';

describe('NavbarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarService = TestBed.get(NavbarService);
    expect(service).toBeTruthy();
  });
});
