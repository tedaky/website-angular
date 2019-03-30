import app from './app';

/**
 * Port number to listen to
 */
const { port } = require('../environment');

// Start up the Node server
app.listen(port, (): void => {
  console.log(`Node server listening on http://localhost:${port}`);
});
