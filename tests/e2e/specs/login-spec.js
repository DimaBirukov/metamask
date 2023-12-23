describe('Login', () => {
    after(() => {
        cy.disconnectMetamaskWalletFromDapp();
    });

    it.only(`Should connect to Metamask`, () => {
        cy.visit('/');
        cy.contains('Enter App').click();

        cy.get('w3m-modal')
            .shadow()
            .find('w3m-modal-router')
            .shadow()
            .find('w3m-connect-wallet-view')
            .shadow()
            .find('w3m-desktop-wallet-selection')
            .shadow()
            .find('[name="MetaMask"]')
            .click();

        cy.acceptMetamaskAccess().then((connected) => {
            expect(connected).to.be.true;
        });
    });
});
