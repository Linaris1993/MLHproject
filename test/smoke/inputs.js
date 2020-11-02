const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-014 Name', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const label = $(sel.name).isDisplayed()
            expect(label).toEqual(true);
        });

        it('TC-015 Gender He', function () {
                const label = $$(sel.gender)[0].isDisplayed();
                expect(label).toEqual(true);
        });

        it('TC-016 Gender She', function () {
            const label = $$(sel.gender)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-017 Gender It', function () {
            const label = $$(sel.gender)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-0018 Age', function () {
                const label = $(sel.age).isDisplayed();
                expect(label).toEqual(true);
            });

        it('TC-019 Story', function () {
                const label = $(sel.story).isDisplayed();
                expect(label).toEqual(true);
            });

        it('TC-020 create', function () {
            const label = $(sel.create).isDisplayed();
            expect(label).toEqual(true);
        });

        });

    describe('Placeholders are correct', function () {

    });

    });