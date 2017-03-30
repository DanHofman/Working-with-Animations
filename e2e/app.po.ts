import { browser, element, by } from 'protractor';

export class AnimationsPracticePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('AP-root h1')).getText();
  }
}
