import {describe, expect, test} from '@jest/globals';

import {HtmlPart, markdown_to_html} from '../src/md2html';

describe('Markdown To Html Parsing', () => {
  test('Header 1 parsing', () => {
    const markdown = `
# This is a header
`;

    let parts: HtmlPart[] = markdown_to_html(markdown);

    expect(parts.length).toBe(1);
    expect(parts[0].tag).toBe('h1');
    expect(parts[0].value).toBe('This is a header');
  });

  test('Header 1 parsing', () => {
    const markdown = `
# This is a header
## This is a second header
`;

    let parts: HtmlPart[] = markdown_to_html(markdown);

    expect(parts.length).toBe(2);
    expect(parts[0].tag).toBe('h1');
    expect(parts[0].value).toBe('This is a header');

    expect(parts[1].tag).toBe('h2');
    expect(parts[1].value).toBe('This is a second header');
  });
});

/*
// NOTE: Never use var.
const a = 20;
const b = "this is a string";


// define
const hello_function = (): string => {
  return 'Hello!';
}

// calling
hello_function();
*/