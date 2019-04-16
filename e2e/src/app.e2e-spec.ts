import * as fs from 'fs';
import { join } from 'path';
import {
  browser,
  logging
} from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', (): void => {
  let page: AppPage;
  let server: any;

  beforeEach((): void => {
    page = new AppPage();
    page.navigateTo();
    if (fs.existsSync(join(process.cwd(), 'dist/server.js'))) {
      server = require(join(process.cwd(), 'dist/server'));
    } else {
      server = require(join(process.cwd(), 'dist/server'));
    }
  });

  it('should display welcome message', (): void => {
    expect<any>(page.getTitleText()).toContain('Welcome');
  });

  it('should display helpful heading', (): void => {
    expect<any>(page.getSubtitleText()).toEqual('Here are some links to help you start:');
  });

  it('should display three helpful links', (): void => {
    expect<any>(page.getHelpLinks().count()).toBeGreaterThan(0);
  });

  afterEach(async (): Promise<void> => {
    // Assert that there are no errors emitted from the browser
    const logs: Array<logging.Entry> = await browser.manage().logs().get(logging.Type.BROWSER);
    expect<logging.Entry>(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE
    }));
  });
});
