import minimist from 'minimist';

import app, {init} from './app';

const argv = minimist(process.argv.slice(2));
const port = argv.port || 8081;

init().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
});
