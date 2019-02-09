// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import * as express from 'express';

import { Engine } from './engine';
import { View } from './view';
import { Routes } from './routes';

enableProdMode();

/**
 * Sets the entry point of the Express application.
 * Uses `Engine`, `View`, and `Routes`
 */
class App {
  /**
   * Create the `express.Application`
   */
  public app: express.Application;
  /**
   * Create the `Engine` of the `express.Application`
   */
  private engine: Engine = new Engine();
  /**
   * Create the `View` of the `express.Application`
   */
  private view: View = new View();
  /**
   * Create the `Routes` of the `express.Application`
   */
  private routes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.engine.set(this.app);
    this.view.set(this.app);
    this.routes.set(this.app, express);
  }
}

export default new App().app;
