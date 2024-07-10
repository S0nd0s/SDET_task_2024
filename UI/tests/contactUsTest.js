module.exports = {
    'Test Contact Us Form Submission': function (browser) {


        try {
            const contactUs = browser.page.ContactUsPage();









            contactUs.navigate();


            //Valid Submissions with mandatory fields only

            // customer service as subject heading 
            contactUs

                .setValue('@messageTextbox', 'This is a valid message.')
                .setValue('@emailField', 'test@example.com')
                .selectSubject('Customer service')
                .click('@sendButton')

                .assert.containsText('@successMessage', 'Your message has been successfully sent to our team.');



            contactUs.navigate(); //to return to contact us page again and sumbit another response

            // Webmaster as subject heading 


            contactUs

                .setValue('@messageTextbox', 'This is a valid message.')
                .setValue('@emailField', 'test@example.com')
                .selectSubject('Webmaster')
                .click('@sendButton')

                .assert.containsText('@successMessage', 'Your message has been successfully sent to our team.');



            //Valid Submission cases : different attach file cases

            contactUs.navigate(); //to return to contact us page again and sumbit another response


            //testting whether .png is supported as required

            contactUs


                .setValue('@messageTextbox', 'This is a valid message.')

                .setValue('@emailField', 'test@example.com')
                .selectSubject('Customer service')
                .setValue('input[type="file"]', 'C:/Users/S0nd0/Documents/UI/attached_files/image.png')
                .click('@sendButton')

                .assert.containsText('@successMessage', 'Your message has been successfully sent to our team.');



            contactUs.navigate();


            contactUs
                // .txt is supported as required or not 
                .setValue('@messageTextbox', 'This is a valid message.')

                .setValue('@emailField', 'test@example.com')
                .selectSubject('Customer service')

                .setValue('input[type="file"]', 'C:/Users/S0nd0/Documents/UI/attached_files/testFile.txt')
                .click('@sendButton')

                .assert.containsText('@successMessage', 'Your message has been successfully sent to our team.');



            contactUs.navigate();

            //testting whether user wants to change the attached file before submitting 
            contactUs
                //testting one file png is supported and previously tested .txt is supported 
                .setValue('@messageTextbox', 'This is a valid message.')

                .setValue('@emailField', 'test@example.com')
                .selectSubject('Customer service')
                .setValue('input[type="file"]', 'C:/Users/S0nd0/Documents/UI/attached_files/image.png')
                //user change the file [ attached another one rather than the first attached as it may attach wrong file and wants to correct it]
                .setValue('input[type="file"]', 'C:/Users/S0nd0/Documents/UI/attached_files/testFile.txt')
                .click('@sendButton')

                .assert.containsText('@successMessage', 'Your message has been successfully sent to our team.');


            contactUs.navigate();


            contactUs
                // .pdf is supported as required or not
                .setValue('@messageTextbox', 'This is a valid message.')

                .setValue('@emailField', 'test@example.com')
                .selectSubject('Customer service')

                .setValue('input[type="file"]', 'C:/Users/S0nd0/Documents/UI/attached_files/Free_Test_Data_100KB_PDF.pdf')
                .click('@sendButton')

                .assert.containsText('@successMessage', 'Your message has been successfully sent to our team.');






            contactUs.navigate();


            contactUs
                // .docx large file
                .setValue('@messageTextbox', 'This is a valid message.')

                .setValue('@emailField', 'test@example.com')
                .selectSubject('Customer service')
                .setValue('input[type="file"]', 'C:/Users/S0nd0/Documents/UI/attached_files/file-sample_1MB.docx')

                .click('@sendButton')

                .assert.containsText('@successMessage', 'Your message has been successfully sent to our team.');

            contactUs.navigate();

            contactUs
                // .docx smaller file
                .setValue('@messageTextbox', 'This is a valid message.')

                .setValue('@emailField', 'test@example.com')
                .selectSubject('Customer service')
                .setValue('input[type="file"]', 'C:/Users/S0nd0/Documents/UI/attached_files/file-sample_100kB.doc')


                .click('@sendButton')

                .assert.containsText('@successMessage', 'Your message has been successfully sent to our team.');



            contactUs.navigate();


            contactUs
                // .zip  should be supported case the user want to add multiple files together efficiently or very largeeee files
                .setValue('@messageTextbox', 'This is a valid message.')

                .setValue('@emailField', 'test@example.com')
                .selectSubject('Customer service')
                .setValue('input[type="file"]', 'C:/Users/S0nd0/Documents/UI/attached_files/zip_2MB.zip')
                .pause(5000)
                .click('@sendButton')

                .assert.containsText('@successMessage', 'Your message has been successfully sent to our team.');



            //invalid file formats



            contactUs.navigate();

            contactUs
                // .js 
                .setValue('@messageTextbox', 'This is a valid message.')

                .setValue('@emailField', 'test@example.com')
                .selectSubject('Customer service')
                .setValue('input[type="file"]', 'C:/Users/S0nd0/Documents/UI/tests/contactUsTest.js')

                .click('@sendButton')

                .assert.containsText('@errorMessage', '');

            contactUs.navigate();




            // Scenario 1:
            contactUs
                // largeeee file   approx 10MB
                .setValue('@messageTextbox', 'This is a valid message.')

                .setValue('@emailField', 'test@example.com')
                .selectSubject('Customer service')
                .setValue('input[type="file"]', 'C:/Users/S0nd0/Documents/UI/attached_files/file_example_MP4_1280_10MG.mp4')

                .click('@sendButton')

                .assert.containsText('@errorMessage', '');





            contactUs.navigate();



            //  Valid Submission submitting a file but file is empty  since it's optional then shouldn't give an error message
            contactUs

                .setValue('@messageTextbox', 'This is a valid message.')

                .setValue('@emailField', 'test@example.com')
                .selectSubject('Customer service')
                .setValue('input[type="file"]', 'C:/Users/S0nd0/Documents/UI/attached_files/empty.txt')
                .click('@sendButton')

                .assert.containsText('@successMessage', 'Your message has been successfully sent to our team.');



            contactUs.navigate();






            contactUs.navigate();





            contactUs.navigate();
            //  Invalid Submission (Invalid Email)
            contactUs
                .setValue('@messageTextbox', 'Invalid email test.')
                .setValue('@emailField', 'invalidemail')
                .selectSubject('Webmaster')
                .click('@sendButton')

                .assert.containsText('@errorMessage', '');
            // debugging
            //  .getText('@errorMessage', function(result) {
            //    console.log('Actual Error Message:', result.value);
            //  });




            contactUs.navigate();
            // Invalid Submission (no subject heading is selected )  
            contactUs
                .setValue('@messageTextbox', 'no subject test.')
                .setValue('@emailField', 'valid@mail')

                .click('@sendButton')

                .assert.containsText('@errorMessage', '');



            contactUs.navigate();
            //  Invalid Submission (no message  ) 
            contactUs

                .setValue('@emailField', 'valid@mail')
                .selectSubject('Webmaster')
                .click('@sendButton')

                .assert.containsText('@errorMessage', '');




            contactUs.navigate();
            //  Invalid Submission (order reference is wrong  [mustn't be all letters] ) 
            contactUs
                .setValue('@messageTextbox', 'order reference.')
                .setValue('@emailField', 'valid@mail')
                .selectSubject('Webmaster')
                .setValue('@orderReferenceInput', 'ebheyfdhgfm')
                .click('@sendButton')


                .assert.containsText('@errorMessage', '');


            contactUs.navigate();



            //  valid Submission (order reference is letters with numbers ) 
            contactUs

                .setValue('@messageTextbox', 'order reference.')

                .setValue('@emailField', 'test@example.com')
                .selectSubject('Customer service')
                .setValue('@orderReferenceInput', 'ebheyfdhgfm55')
                .click('@sendButton')

                .assert.containsText('@successMessage', 'Your message has been successfully sent to our team.');



            contactUs.navigate();



            // Invalid Submission: Message contains all numbers
            contactUs
                .setValue('@messageTextbox', '1234567890')
                .setValue('@emailField', 'test@example.com')
                .selectSubject('Customer service')
                .click('@sendButton')
                .assert.containsText('@errorMessage', '');



            contactUs.navigate();

            // Invalid Submission: Message contains only one letter
            contactUs
                .setValue('@messageTextbox', 'a')
                .setValue('@emailField', 'test@example.com')
                .selectSubject('Customer service')
                .click('@sendButton')
                .assert.containsText('@errorMessage', '');



        } catch (error) {
            console.error('Test case failed:', error);
            browser.end(); // End the browser session in case of failure
        }

    }

};
