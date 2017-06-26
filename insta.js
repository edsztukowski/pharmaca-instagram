
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

        //Loop through data  for first 5 images
            //we will be building a list that has a linked image and overlay
   $('#insta-feed').append('<li class="feed-box-' + x + '">' +
                                    '<a href="' + data.data[x].link +'">' +
                                    '<img src="' + data.data[x].images.low_resolution.url + '">' +
                                    '<div class="view-overlay"><p class="mid-content">' +
                                    '<span class="likes">&hearts; ' + data.data[x].likes.count + '</span>' +
                                    '<span class="comments"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M24 1h-24v16.981h4v5.019l7-5.019h13z"/></svg>' + data.data[x].comments.count + '</span></p></div>' +
                                '</a>' +
                        '</li>'
                       );
        }

        // data.data[x].images.low_resolution.url - URL of image, 306Ñ…306
  // data.data[x].images.thumbnail.url - URL of image 150Ñ…150
  // data.data[x].images.standard_resolution.url - URL of image 612Ñ…612
  // data.data[x].link - Instagram post URL
}
});
