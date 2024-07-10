module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php?controller=contact', // Update with the actual URL
    elements: {
      subjectHeadingDropdown: '#id_contact',
      messageTextbox: '#message',
      emailField: '#email',
      orderReferenceInput: '#id_order',
      attachFileInput: '#uniform-fileUpload > span.filename',
      sendButton: '#submitMessage > span',
      successMessage: '#center_column > p',
      errorMessage: '#submitMessage > span'
    },
    commands: [{
      selectSubject: function(optionValue) {
        return this
          .click('@subjectHeadingDropdown')
          .setValue('@subjectHeadingDropdown', optionValue)
          .click('@subjectHeadingDropdown');
      },


      attachFile: function(filePath) {
        return this
          .setValue('@attachFileInput', filePath);
      }
    }]
  };
  