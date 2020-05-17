import { assert } from 'chai';

export default class Page {
    open(path: string) {
        browser.url(path)
    }

    getElement(locator: string, name: string) {
        try {
            let element = $(locator);
            return element;
        }
        catch (err) {
            assert(false, `${name} not found`);
        }
    }
}