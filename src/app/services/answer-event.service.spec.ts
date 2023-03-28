import { TestBed } from '@angular/core/testing';

import { AnswerEventService } from './answer-event.service';

describe('AnswerEventService', () => {
  let service: AnswerEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
