import { TestBed, inject } from '@angular/core/testing';

import { NoteBookService } from './note-book.service';

describe('NoteBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteBookService]
    });
  });

  it('should be created', inject([NoteBookService], (service: NoteBookService) => {
    expect(service).toBeTruthy();
  }));
});
