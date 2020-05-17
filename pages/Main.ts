import Page from "./page";

class Main extends Page {
    get searchField() { return this.getElement('#searchInput', 'Search input field'); }
    suggestionResult(value: string) { return this.getElement(`span=${value}`, 'Suggestion results'); }

    open() {
        super.open('/');
    }

    searchFor(valueSet: string, valueFind: string) {
        this.searchField?.setValue(valueSet);
        this.suggestionResult(valueFind);
        browser.pause(1000);
        browser.keys('\uE007');
    }
}

export default new Main();