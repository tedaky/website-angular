import app from './app';

/**
 * Port number to listen to
 */
const port: string|number = process.env.PORT || 4000;

// Start up the Node server
app.listen(port, (): void => {
  console.log(`Node server listening on http://localhost:${port}`);
});
