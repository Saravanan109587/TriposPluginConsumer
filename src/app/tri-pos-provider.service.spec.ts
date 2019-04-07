import { TestBed } from '@angular/core/testing';

import { TriPosProviderService } from './tri-pos-provider.service';

describe('TriPosProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TriPosProviderService = TestBed.get(TriPosProviderService);
    expect(service).toBeTruthy();
  });
});
