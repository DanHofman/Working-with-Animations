import { AnimationsPracticePage } from './app.po';

describe('animations-practice App', () => {
  let page: AnimationsPracticePage;

  beforeEach(() => {
    page = new AnimationsPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('AP works!');
  });
});
