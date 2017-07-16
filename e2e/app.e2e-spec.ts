import { Ng4TwitterPage } from './app.po';

describe('ng4-twitter App', () => {
  let page: Ng4TwitterPage;

  beforeEach(() => {
    page = new Ng4TwitterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
