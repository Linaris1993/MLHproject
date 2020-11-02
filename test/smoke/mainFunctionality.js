const sel = require ('../../data/selectors.json');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1 - 4 are filled', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const inputName = $(sel.name).setValue('LadyBug')
            const inputGender= $$(sel.gender)[1].click()
            const inputAge = $(sel.age).setValue(123)
            const click = $(sel.storyClick).click()
            const inputStory = $$(sel.storyType)[6].click()
            const create = $(sel.create).isEnabled()
            expect(create).toEqual(true);
        });
    });

});