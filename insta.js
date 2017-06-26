
$(document).ready(function() {
  var token = '378764291.f0a8f7a.1bcfa3f8cddd4cef84bc41f71d58c024',
  userid = 378764291,
  num_photos = 10;


  $.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
      console.log(data);
      for( x in data.data ){
        if (x < 5) {
          instaBuilder(data.data[x]);
        } else {
          instaBuilder(data.data[x], true);
        }
      }
    },
    complete: function() {
      $('#insta-feed').css("opacity", "1");
    }
  });

  function instaBuilder(instaData, hideIt) {
        $('#insta-feed').append('<li class="feed-box-' + x + '">' +
         '<a href="' + instaData.link +'">' +
         '<img src="' + instaData.images.low_resolution.url + '">' +
         '<div class="view-overlay"><p class="mid-content">' +
         '<span class="likes">&hearts; ' + instaData.likes.count + '</span>' +
         '<span class="comments"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M24 1h-24v16.981h4v5.019l7-5.019h13z"/></svg>' + instaData.comments.count + '</span></p></div>' +
         '</a>' +
         '</li>'
       );
       if (hideIt) {
         $('.feed-box-' + x).addClass("hidden");
       }

  }
})
