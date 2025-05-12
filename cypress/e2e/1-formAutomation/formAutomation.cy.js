import { PracticeFormPage } from '../../pageObjects/PracticeFormPage';

describe('Automation Practice Form', () => {
  beforeEach(() => {
    PracticeFormPage.visit();
  });

  it('Fill out the form and validates submission!', () => {
    // Filling out the form
    PracticeFormPage.fillTextFields('Bob', 'Bobby', 'bobber.bo77@inbox.lv');
    PracticeFormPage.selectGender('Male');
    PracticeFormPage.fillMobileNumber('5839218435');
    PracticeFormPage.setDateOfBirth('28', 'February', '1930');
    PracticeFormPage.selectSubject('Economics');
    PracticeFormPage.selectHobby('Music');
    PracticeFormPage.uploadPicture('testimage.jpg');
    PracticeFormPage.setAddress('Some Street, Some City');
    PracticeFormPage.selectState('NCR');
    PracticeFormPage.selectCity('Delhi');
    PracticeFormPage.submitForm();

    // Validating the form
    PracticeFormPage.verifySubmission('Student Name', 'Bob Bobby');
    PracticeFormPage.verifySubmission('Student Email', 'bobber.bo77@inbox.lv');
    PracticeFormPage.verifySubmission('Gender', 'Male');
    PracticeFormPage.verifySubmission('Mobile', '5839218435');
    PracticeFormPage.verifySubmission('Date of Birth', '28 February,1930');
    PracticeFormPage.verifySubmission('Subjects', 'Economics');
    PracticeFormPage.verifySubmission('Hobbies', 'Music');
    PracticeFormPage.verifySubmission('Picture', 'testimage.jpg');
    PracticeFormPage.verifySubmission('State and City', 'NCR Delhi');
  });
});
