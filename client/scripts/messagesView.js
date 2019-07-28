var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();

    //create an event listener for when usernames are clicked
    $('.username').on('click', Friends.toggleStatus)
  },

  // decodeHtml: function(html) {
  //   var txt = document.createElement("textarea");
  //   txt.innerHTML = html;
  //   return txt.value;
//}
  render: function() {
    //this.$chats.append(something here)
    var html = '';

    for ( var key in Messages){
      console.log(Messages[key])
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