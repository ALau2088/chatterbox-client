var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    //App.fetch(MessagesView.initialize)
    MessagesView.initialize();

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      for(let i = 0; i < data.results.length; i++){
        var { username, text, roomname} = data.results[i];
        Messages[i] = {
          username: username,
          text: text,
          roomname: roomname
        };
        Rooms[roomname] = roomname;
      }
      // $("#")
      MessagesView.initialize();
      RoomsView.initialize();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
