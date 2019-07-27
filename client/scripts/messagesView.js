var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //create an event listener for when usernames are clicked

    MessagesView.render();
  },

  render: function() {
    //this.$chats.append(something here)
    var html = '';

    for ( var key in Messages){
      html += MessageView.render(Messages[key])
    }

      // Messages.forEach((el)=> html += MessageView.render(el))

    MessagesView.$chats.append(html);
  },

  renderMessage: function(message) {
    Parse.create(message);
    let html = MessageView.render(message);
    MessagesView.$chats.prepend(html);
  }

};