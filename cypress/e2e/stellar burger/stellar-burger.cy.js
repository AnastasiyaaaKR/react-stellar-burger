const baseUrl = "http://localhost:3000/";

describe("тестируем работу приложения", () => {
  it("Тестируем авторизацию", () => {
    cy.visit(`${baseUrl}login`);
    cy.intercept('GET','/user', {fixture: "profileData.json"})
    cy.get(".email__input").contains("E-mail").type("test@email.com");
    cy.get(".password__input").type("112233");
    cy.get(".Authorization__button").contains("Войти").click();
  });

  it("тестируем открытие страницы и создание заказа", () => {
    cy.visit(baseUrl);
    cy.intercept('GET','/ingredients/', {fixture: "ingredients.json"})
    cy.get("div").contains("0").as("BurgerConstructor");
    cy.get("li")
      .contains("Флюоресцентная булка R2-D3")
      .trigger("dragstart")
      .trigger("dragleave");
    cy.get("@BurgerConstructor")
      .trigger("dragenter")
      .trigger("dragover")
      .trigger("drop")
      .trigger("dragend");
    cy.get("li")
      .contains("Филе Люминесцентного тетраодонтимформа")
      .trigger("dragstart")
      .trigger("dragleave");
    cy.get("@BurgerConstructor")
      .trigger("dragenter")
      .trigger("dragover")
      .trigger("drop")
      .trigger("dragend");
    cy.get("li")
      .contains("Соус с шипами Антарианского плоскоходца")
      .trigger("dragstart");
    cy.get("@BurgerConstructor")
      .trigger("dragenter")
      .trigger("dragover")
      .trigger("drop")
      .trigger("dragend");
    cy.get("button").contains("Оформить заказ").click({ force: true });
  });

  it("Тестируем открытие попапа ингредиентов", () => {
    cy.visit(baseUrl);
    cy.intercept('GET','/ingredients/', {fixture: "ingredients.json"})
    cy.get("li").contains("Краторная булка N-200i").click();
    cy.contains("Детали ингредиента");
    cy.get("#modals button").click();
  });
});
