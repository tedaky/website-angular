import {
  browser,
  element,
  by
} from 'protractor';

export class AppPage {
  public navigateTo(): any {
    return browser.get('/');
  }

  public getTitleText(): any {
    return element(by.css('app-root h1')).getText();
  }

  public getSubtitleText(): any {
    return element(by.css('app-root > h2')).getText();
  }

  public getHelpLinks(): any {
    return element.all(by.css('app-root a'));
  }
}
