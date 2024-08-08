const page = require('../../page');
const helper = require('../../helper')

/*
Tests for setting the address and filling in the phone number appear to be done already

I need to add tests for:
- Selecting supportive plan (done)
- Adding a credit card
- Writing a message for the driver
- Ordering a Blanket and handkerchiefs
- Ordering 2 Ice creams
- The car search modal appears
- Waiting for the driver info to appear in the modal
*/

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })

    it('should select the supportive plan', async () => {
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportiveButton = await $(".tariff-cards>:nth-child(5)") //Should select the supportive car option
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();
        await expect(supportiveButton).toHaveElementClassContaining("tcard active"); //Checks to see if the supportive car option is active once clicked
    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })
})

