import { BasePage } from "./basePage";

export class PracticeFormPage extends BasePage {
  static get url() {
    return "https://demoqa.com/automation-practice-form";
  }

  // Name, Surname, Email
  static fillTextFields(firstName, lastName, email) {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
  }

  // Gender
  static selectGender(gender) {
    cy.contains('.custom-control-label', gender).click();
  }

  // Number
  static fillMobileNumber(number) {
    cy.get('#userNumber').type(number);
  }

  // Day, Month, Year
  static setDateOfBirth(day, month, year) {
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select(month);
    cy.get('.react-datepicker__year-select').select(year);
    cy.get(`.react-datepicker__day--0${day}`).not('.react-datepicker__day--outside-month').click();
  }

  // Subject
  static selectSubject(subject) {
    cy.get('#subjectsInput').type(`${subject}{enter}`);
  }

  // Hobbies
  static selectHobby(hobby) {
    cy.contains('.custom-control-label', hobby).click();
  }

  // Picture
  static uploadPicture(filename) {
    cy.get('#uploadPicture').selectFile(`cypress/files/${filename}`);
  }

  // Address
  static setAddress(address) {
    cy.get('#currentAddress').type(address);
  }

  // State
  static selectState(state) {
    // Open the dropdown
    cy.get('#state').click();
    // Target the dropdown thingy
    cy.get('div')
      .contains('div', state)
      .eq(0)
      .click({ force: true });
  }

  // City
  static selectCity(city) {
    // Open the dropdown
    cy.get('#city').click();
    // Target the dropdown thingy
    cy.get('div')
      .contains('div', city)
      .eq(0)
      .click({ force: true });
  }

  // Submit
  static submitForm() {
    cy.get('#submit').click({ force: true });
  }

  // Verification
  static verifySubmission(label, value) {
    cy.get('td').contains(label).siblings().should('contain', value);
  }
}