import { assert } from 'chai';
import Page from "./Page";

class Article extends Page {
    get header() { return this.getElement('#firstHeading', 'Article name'); }

    nameIs(name: string) {
        let articleName = this.header?.getText();
        assert(articleName === name, `Article name is '${articleName}', but should be '${name}'`)
    }
}

export default new Article();