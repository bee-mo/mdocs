
export type HtmlPart = {
  // The html tag.
  tag: string,
  // The contents of the html tag.
  value: string
};

export const markdown_to_html = (markdown: string): HtmlPart[] => {
  const parts = markdown.split('\n');

  let html_parts: HtmlPart[] = [];
  for (let el of parts) {
    if (el.length == 0) {
      continue;
    }

    if (el[0] == '#') {
      let curr: HtmlPart = {tag: 'h1', value: el.substring(1).trim()};
      html_parts.push(curr);
    }
  }
  return html_parts;
}
