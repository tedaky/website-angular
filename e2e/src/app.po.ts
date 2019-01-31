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
    return element(by.css('app-main-component h1')).getText();
  }

  public getSubtitleText(): any {
    return element(by.css('app-main-component > h2')).getText();
  }

  public getHelpLinks(): any {
    return element.all(by.css('app-main-component a'));
  }
}
