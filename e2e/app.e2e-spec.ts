import { AngularUniversalLabPage } from './app.po';

describe('angular-universal-lab App', function() {
  let page: AngularUniversalLabPage;

  beforeEach(() => {
    page = new AngularUniversalLabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
