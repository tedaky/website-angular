// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import * as express from 'express';

import { Engine } from './engine';
import { View } from './view';
import { Routes } from './routes';
import { Listen } from './listen';

enableProdMode();

/**
 * Sets the entry point of the Express application.
 * Uses Engine, View, Routes, and Listen
 */
class App {
  public app: express.Application;
  private engine: Engine = new Engine();
  private view: View = new View();
  private routes: Routes = new Routes();
  private listen: Listen = new Listen();

  constructor() {
    this.app = express();
    this.engine.set(this.app);
    this.view.set(this.app);
    this.routes.set(this.app, express);
    this.listen.set(this.app);
  }
}

export default new App().app;
