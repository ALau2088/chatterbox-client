var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var text = $('#message').val();
    var roomname = RoomsView.$select.val()

    var message = {
      username: App.username,
      text: text,
      roomname: roomname
    }
    MessagesView.renderMessage(message)
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};