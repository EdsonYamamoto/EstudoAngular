import { TesteProjectPage } from './app.po';

describe('teste-project App', function() {
  let page: TesteProjectPage;

  beforeEach(() => {
    page = new TesteProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
