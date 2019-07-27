var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleSubmit);
    RoomsView.$select.on('change', RoomsView.renderRoom)
    for ( var key in Rooms){
      RoomsView.render(Rooms[key])
    }
    //RoomsView.renderRoom();
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var roomname =  $('#roomname').val() ;

    RoomsView.render(roomname);
  },

  render: function(roomname) {
    RoomsView.$select.append(`<option value =${roomname} >${roomname}</option>`)
  },

  renderRoom: function() {

    // TODO: Switch render and renderRoom
    var currentRoom = RoomsView.$select.val()
    $('#chats').empty();

    var html = '';

    for ( var key in Messages){
      if (Messages[key].roomname === currentRoom) {
        html += MessageView.render(Messages[key])
      }
    }


    MessagesView.$chats.append(html);

  }

};
