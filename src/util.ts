import express, {Request, Response} from 'express';

// Return the command line arguments.
export const cli_args = ():
    string[] => {
      return process.argv.slice(2);
    }

// Given a markdown file, generate its html contents and
// render it to a browser.
export const render_markdown = (mdfile: string):
    void => {
      // TODO: Once markdown_to_html is implemented,
      // replce "html" with the function.
      const html = '<s>This is a placeholder</s>';
      return serve_html(html, 3000);
    }

// Server the |html| to a localhost server running on port
// |port|.
const serve_html = (html: string, port: number): void => {
  const server = express();
  server.get('/', (_: Request, res: Response) => {
    res.setHeader('content-type', 'text/html');
    res.send(html);
  });
  server.listen(port, () => {
    console.log(`Serving document at: localhost:${port}`);
  });
}
