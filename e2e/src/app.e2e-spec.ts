import * as fs from 'fs';
import { join } from 'path';
import {
  browser,
  logging
} from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', (): void => {
  let page: AppPage;
  let server;

  beforeEach((): void => {
    page = new AppPage();
    page.navigateTo();
    if (fs.existsSync(join(process.cwd(), 'dist/prod/server.js'))) {
      server = require(join(process.cwd(), 'dist/prod/server'));
    } else {
      server = require(join(process.cwd(), 'dist/local/server'));
    }
  });

  it('should display welcome message', (): void => {
    expect(page.getTitleText()).toContain('Welcome');
  });

  it('should display helpful heading', (): void => {
    expect(page.getSubtitleText()).toEqual('Here are some links to help you start:');
  });

  it('should display three helpful links', (): void => {
    expect(page.getHelpLinks().count()).toBeGreaterThan(0);
  });

  afterEach(async (): Promise<void> => {
    // Assert that there are no errors emitted from the browser
    const logs: logging.Entry[] = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE
    }));
  });
});
