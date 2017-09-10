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
      $.ajax({
        url:'https://api.github.com/users/'+username+'/repos',
        data:{
          client_id:'b3f55fb4b00d5a18030a',
          client_secret:'3c084d7aa98e55d062148e4e55cffc4b1a742549',
          sort:'created_at: asc',
          per_page: 6
        }
      }).done(function(repos){
        $.each(repos, function(index, repo){
          $('#repos').append(`
            <div class="well">
              <div class="row">
                <div class="col-md-7">
                  <strong>${repo.name}</strong>: ${repo.description}
                </div>
                <div class="col-md-3">
                  <span class="label label-success">Forks: ${repo.forks_count}</span>
                  <span class="label label-info">Watchers: ${repo.watchers_count}</span>
                  <span class="label label-warning">Stars: ${repo.stargazers_count}</span>
                </div>
                <div class="col-md-2">
                  <a href="${repo.html_url}" target="_blank" class="btn btn-primary">Repo Page</a>
                </div>
              </div>
            </div>
          `);
        });
      });
      $('#profile').html(`
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">${user.name}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-3">
                <img class="thumbnail avatar" src="${user.avatar_url}">
                <a target="_blank" class="btn btn-warning btn-block" href="${user.html_url}">View Profile</a>
              </div>
              <div class="col-md-9">
                <span class="label label-primary">Public Repos: ${user.public_repos}</span>
                <span class="label label-success">Public Gists: ${user.public_gists}</span>
                <span class="label label-info">Followers: ${user.followers}</span>
                <span class="label label-warning">Following: ${user.following}</span>
                <br><br>

                <ul class="list-group">
                  <li class="list-group-item">Website: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${user.created_at}</li>
                  <li class="list-group-item">Hireable: ${user.hireable}</li>
                  <li class="list-group-item">Bio: ${user.bio}</li>

                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 class="page-header">Latest Repositories</h3>
        <div id="repos"></div>
      `);
    });
  });
});
