$(document).ready(function(){
  $('#searchUser').on('keyup', function(e){
    let username = e.target.value;

    // firing request to Github

    $.ajax({
      url:'https://api.github.com/users/'+username,
      data:{
        client_id:'b3f55fb4b00d5a18030a',
        client_secret:'3c084d7aa98e55d062148e4e55cffc4b1a742549'
      }
    }).done(function(user){
      console.log(user);
    });
  });
});
