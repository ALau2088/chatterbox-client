var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class='username <%- username %>' ><%- username %></div>
        <div class='<%- username %>'><%- text %></div>
      </div>

    `)

  // renderBold: _.template(`
  //       <div class="chat">
  //         <div class="username"><%- username %></div>
  //         <div><strong><%- text %></strong></div>
  //       </div>
// `)

};