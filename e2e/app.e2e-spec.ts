import { AngularToolOfHeroesPage } from './app.po';

describe('angular-tool-of-heroes App', () => {
  let page: AngularToolOfHeroesPage;

  beforeEach(() => {
    page = new AngularToolOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
