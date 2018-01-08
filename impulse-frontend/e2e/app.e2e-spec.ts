import { ImpulseFrontendPage } from './app.po';

describe('impulse-frontend App', () => {
  let page: ImpulseFrontendPage;

  beforeEach(() => {
    page = new ImpulseFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
