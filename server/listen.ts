/**
 * Sets the Port to listen to of the Express application.
 */
export class Listen {
  /**
   * Set the Engine
   * @param app - The Express Application {express.Application}
   */
  public set(app: any): void {
    const port: string|number = process.env.PORT || 4000;

    // Start up the Node server
    app.listen(port, (): void => {
      console.log(`Node server listening on http://localhost:${port}`);
    });
  }
}
