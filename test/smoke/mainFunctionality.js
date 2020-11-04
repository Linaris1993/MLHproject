const sel = require ('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValues4andClick')

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-022 Create button is clickable after 1 - 4 are filled', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4(data.name, data.gender.she, data.age, data.storyType)
            const create = $(sel.create).isEnabled()
            expect(create).toEqual(true);
        });
    });
    describe('Other path', function () {

        it('TC-023 gender he is working', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4(data.name, data.gender.she, data.age, data.storyType)
            $(sel.create).click()
            const btn = $(sel.tryAgain).isDisplayed()
            expect(btn).toEqual(true);
        });
    });
});