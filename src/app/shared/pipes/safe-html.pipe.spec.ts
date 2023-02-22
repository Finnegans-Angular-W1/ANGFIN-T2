import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

import { SafeHTMLPipe } from './safe-html.pipe';
import { TESTING_MODULES, TESTING_PROVIDERS } from 'src/app/spec/constants';

describe('SafeHTMLPipe', () => {
  let pipe: SafeHTMLPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomSanitizer,TESTING_PROVIDERS],
      imports:[TESTING_MODULES]
    });
    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new SafeHTMLPipe(sanitizer);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});