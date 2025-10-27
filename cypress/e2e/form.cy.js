describe("template spec", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
        cy.get('[data-cy="cardSet"]').click();
    });
    it("Creates Set Form and display it in the setContainer if the input is valid", () => {
        cy.get("ul.cardSets").then(($sets) => {
            //save the initial size of the card sets, then add a new one
            const initialCount = $sets.length;
            cy.get('[data-cy="toggle_form"]').should("exist");
            cy.get('[data-cy="toggle_form"]').click();
            cy.get('[data-cy="set_form"]').should("exist");
            cy.get('[data-cy="set_form"]')
                .find("input[type!='submit']")
                .each((input) => {
                    cy.wrap(input).clear().type("1");
                });
            cy.get('[data-cy="set_form"]').find("input[type='submit']").click();
            //make sure that it added a new one
            cy.get("ul.cardSets").should("have.length", initialCount + 1);
            cy.get(`[data-cy="${initialCount + 1}"]`).should("exist");
        });
    });

    it("Creates Set Form displays an error message if the input is empty", () => {
        cy.get('[data-cy="toggle_form"]').should("exist");
        cy.get('[data-cy="toggle_form"]').click();
        cy.get('[data-cy="set_form"]').should("exist");
        cy.get('[data-cy="set_form"]')
            .find("input[type!='submit']")
            .each((input) => {
                cy.wrap(input).clear();
            });
        cy.get('[data-cy="set_form"]').find("input[type='submit']").click();
        cy.get('[data-cy="set_form"]').find("p.error").should("be.visible");
        cy.get('[data-cy="set_form"]')
            .find("p.error")
            .should("contain.text", "TITLE CANNOT BE EMPTY");
    });

    it("Add New Card Form and display it in the cardContainer if the input is valid", () => {
        const inputData = ["test", "description of test"];
        let i = 0;
        cy.get("ul.cardSets").first().should("exist");
        cy.get("ul.cardSets").first().click();
        cy.get('[data-cy="toggle_form"]').should("exist");
        cy.get('[data-cy="toggle_form"]').click();
        cy.get('[data-cy="card_form"]').should("exist");
        cy.get('[data-cy="card_form"]')
            .find("input[type!='submit']")
            .each((input) => {
                cy.wrap(input).clear().type(inputData[i++]);
            });

        cy.get('[data-cy="card_form"]').find("input[type='submit']").click();
        cy.get(".term").should("contains.text", inputData[0]);
        cy.get(".description").should("contains.text", inputData[1]);
    });

    it("Add New Card Form displays an error message if the term is empty", () => {
        let i = 0;
        cy.get("ul.cardSets").first().should("exist");
        cy.get("ul.cardSets").first().click();
        cy.get('[data-cy="toggle_form"]').should("exist");
        cy.get('[data-cy="toggle_form"]').click();
        cy.get('[data-cy="card_form"]').should("exist");
        cy.get('[data-cy="card_form"]')
            .find("input[type!='submit']")
            .each((input) => {
                i++ === 0
                    ? cy.wrap(input).clear()
                    : cy.wrap(input).clear().type("description of test");
            });
        cy.get('[data-cy="card_form"]').find("input[type='submit']").click();
        cy.get('[data-cy="card_form"]').find("p.error").should("be.visible");
        cy.get('[data-cy="card_form"]')
            .find("p.error")
            .should("contain.text", "TERM CANNOT BE EMPTY");
    });

    it("Add New Card Form displays an error message if the description is empty", () => {
        let i = 0;
        cy.get("ul.cardSets").first().should("exist");
        cy.get("ul.cardSets").first().click();
        cy.get('[data-cy="toggle_form"]').should("exist");
        cy.get('[data-cy="toggle_form"]').click();
        cy.get('[data-cy="card_form"]').should("exist");
        cy.get('[data-cy="card_form"]')
            .find("input[type!='submit']")
            .each((input) => {
                i++ === 0
                    ? cy.wrap(input).clear().type("test")
                    : cy.wrap(input).clear();
            });
        cy.get('[data-cy="card_form"]').find("input[type='submit']").click();
        cy.get('[data-cy="card_form"]').find("p.error").should("be.visible");
        cy.get('[data-cy="card_form"]')
            .find("p.error")
            .should("contain.text", "DESCRIPTION CANNOT BE EMPTY");
    });

    it("Add New Card Form displays an error message if the form is empty", () => {
        cy.get("ul.cardSets").first().should("exist");
        cy.get("ul.cardSets").first().click();
        cy.get('[data-cy="toggle_form"]').should("exist");
        cy.get('[data-cy="toggle_form"]').click();
        cy.get('[data-cy="card_form"]').should("exist");
        cy.get('[data-cy="card_form"]')
            .find("input[type!='submit']")
            .each((input) => {
                cy.wrap(input).clear();
            });
        cy.get('[data-cy="card_form"]').find("input[type='submit']").click();
        cy.get('[data-cy="card_form"]').find("p.error").should("be.visible");
        cy.get('[data-cy="card_form"]')
            .find("p.error")
            .should("contain.text", "TERM AND DESCRIPTION CANNOT BE EMPTY");
    });
});
