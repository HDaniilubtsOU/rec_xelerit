import { TestBed } from '@angular/core/testing';

import { NawykDialogService } from './nawyk-dialog.service';

describe('NawykDialogService', () => {
  let service: NawykDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NawykDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
