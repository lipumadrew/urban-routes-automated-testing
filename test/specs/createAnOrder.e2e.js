const page = require('../../page');
const helper = require('../../helper')



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

    it('should add a card as a payment method', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const paymentButton = await $('.pp-button');
        await paymentButton.waitForDisplayed();
        await paymentButton.click();
        const addCardButton = await $('.pp-row.disabled');
        await addCardButton.click();
        const cardNumberField = await $('#number');
        await cardNumberField.setValue("123412341234");
        const cardCodeField = await $(".card-code-input #code");
        await cardCodeField.setValue("321");
        const linkButton = await $(".pp-buttons :nth-child(1)");
        await linkButton.click();
        const addedCard = await $("div.pp-selector > div:nth-child(3) > .pp-title");
        expect(addedCard).toHaveValue("Card");

    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should accept a message to the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const driverMessage = $("#comment");
        await driverMessage.setValue("Please drive carefully");
        expect(driverMessage).toHaveValue("Please drive carefully");
    })

    it('should be able to order a blanket and hankerchiefs', async () => {
        const firstSlider = $(".slider.round");
        await firstSlider.click();

        
    })

    it('should be able to order 2 ice cream buckets', async () => {
        const plusCounter = await $(".counter-plus");
        await plusCounter.click();
        await plusCounter.click();
        expect($(".counter-value")).toHaveValue("2");

    })

    it('should open the car search modal', async () => {
        const orderButton = await $(".smart-button");
        await orderButton.click();
        const orderModal = await $(".order-body");
        await orderModal.waitForDisplayed();
        expect(orderModal).toBeDisplayed();
    })

    it('should display driver info in the modal', async () => {
        const orderHeader = await $(".order-header-content");
        await orderHeader.waitForDisplayed();
        expect(orderHeader).toBeDisplayed();
        
    })
})

