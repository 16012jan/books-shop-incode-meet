import { BooksShopPage } from './app.po';

describe('books-shop App', () => {
  let page: BooksShopPage;

  beforeEach(() => {
    page = new BooksShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
