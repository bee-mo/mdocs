// mdocs - markdown document generator.
// start: npm run mdocs <directory>

import {cli_args, render_markdown} from './util';

const main = (): void => {
  const args = cli_args();
  if (args.length == 0) {
    console.error('No command line arguments.');
    return;
  }

  if (args[0] == 'render') {
    if (args.length == 1) {
      console.error('No file specified.');
      return;
    }
    return render_markdown(args[1]);
  }
};

main();
