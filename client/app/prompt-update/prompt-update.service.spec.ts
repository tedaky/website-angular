import { TestBed } from '@angular/core/testing';

import { PromptUpdateService } from './prompt-update.service';

describe('PromptUpdateService', () => {
  beforeEach((): void => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: PromptUpdateService = TestBed.get(PromptUpdateService);
    expect<PromptUpdateService>(service).toBeTruthy();
  });
});
