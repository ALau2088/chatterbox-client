var Rooms = {

    //callback function for adding room
    add: function(event) {
    event.preventDefault();
    console.log('added')
    var roomname =  $('#roomname').val() ;
    //Rooms[roomname] = roomname;
    RoomsView.renderRoom(roomname);
    console.log('end of fn')
    },

};