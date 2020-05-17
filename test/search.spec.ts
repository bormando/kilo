import Main from '../pages/Main';
import Article from '../pages/Article';

describe('search', () => {
    it('should find result by partial match', () => {
        Main.open();
        Main.searchFor('Schwarzenegger', 'Arnold Schwarzenegger');
        Article.nameIs('Arnold Schwarzenegger');
    });
});