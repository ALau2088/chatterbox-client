var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.unbind('click').bind('click', Rooms.add);
    RoomsView.$select.on('change', RoomsView.render)
    for ( var key in Rooms){
      RoomsView.renderRoom(Rooms[key])
    }
    //RoomsView.renderRoom();
  },

  render: function() {
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
  },

  renderRoom: function(roomname) {
    RoomsView.$select.append(`<option value =${roomname} >${roomname}</option>`);
    console.log('new room created')
  }

};
