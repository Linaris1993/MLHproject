const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-014 Name', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const name = $(sel.name).isDisplayed()
            expect(name).toEqual(true);
        });

        it('TC-015 Gender He', function () {
                const gender = $$(sel.gender)[0].isDisplayed();
                expect(gender).toEqual(true);
        });

        it('TC-016 Gender She', function () {
            const gender= $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-017 Gender It', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-0018 Age', function () {
                const age = $(sel.age).isDisplayed();
                expect(age).toEqual(true);
            });

        it('TC-019 Story', function () {
                const story = $(sel.story).isDisplayed();
                expect(story).toEqual(true);
            });

        it('TC-020 create', function () {
            const label = $(sel.create).isDisplayed();
            expect(label).toEqual(true);
        });

        });

    describe('PLaceholders are correct', function () {

        it('TC-022 NamePlaceholder', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const text = $(sel.NamePlaceholder).getAttribute('placeholder')
            expect(text).toEqual(exp.PlaceholderName);
        });

        /*it('TC-023 Text for he radio button', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const text = $(sel.HeRadioButton).getValue()
            expect(text).toEqual(exp.HeRadioButton);
        });*/

        it('TC-026 AgePlaceholder', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const text = $(sel.AgePlaceholder).getAttribute('placeholder')
            expect(text).toEqual(exp.PlaceholderAge);
        });

        /*it('TC-027 StoryPlaceholder', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const text = $(sel.StoryPlaceholder).getAttribute('placeholder')
            expect(text).toEqual(exp.PlaceholderStory);
        });*/

        it('TC-028 Create button name', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const text = $(sel.create).getText()
            expect(text).toEqual(exp.CreateButton);
        });

        });
    });