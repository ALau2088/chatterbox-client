var Friends = {
// ryan: false,
// andrew: false,

  toggleStatus: function(e){
    var username = $(this).html();
    console.log(username);
    Friends[username] = !Friends[username]
    console.log(Friends[username], username)
    // Set css bold if true
    if(Friends[username] === true){
      console.log('do something');
      $('.' + $.escapeSelector(username)).parent().css('font-weight', 'bold')
    } else {
      $('.' + $.escapeSelector(username)).parent().css('font-weight', 'normal')
    }
  },

  decodeHtml: function(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
};