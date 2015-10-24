$(document).ready(function(){
  $("form").on("submit",function(e){
  e.preventDefault();
  var userName = $('input').val()

  $.ajax({
		url: "https://api.instagram.com/v1/users/search?q=" + userName + "&access_token=235641580.ac75f97.4a90c7cf418944b09ef6bbb3b76926c2",
    dataType: "jsonp",

  })
  .done(function(results){ // shoot profile images to screen
    for(var i = 0; i < 21; i++) {
     //console.log(results.data[i].id);
     $(".ig-container").append('<div data-user-id='+ results.data[i].id +' class="box"><img class="pic" src=" '+ results.data[i].profile_picture + '" alt=""><h4>'+ results.data[i].username +'</h4></div>')
    }

      });
  });
  //when box is clicked clear contents
  //ajax call to get user id recent feed
  $('body').on("click", ".box", function(event){
    console.log(event);
    var userId = $(event.currentTarget).data('user-id');

    $(".ig-container").html('');
    $.ajax({
      url:"https:api.instagram.com/v1/users/"+ userId +"/media/recent/?access_token=235641580.ac75f97.4a90c7cf418944b09ef6bbb3b76926c2",
      dataType:"jsonp",

    })
    .done(function(results){
    console.log(results.data);
    $.each(results.data, function(index, value){
      $('.ig-container').append('<div class="box"><img class="pic" src=" '+ value.images.standard_resolution.url + '" alt=""><div id="overlay" class="pic overlay"><p class="caption">'+ value.caption.text +'</p></div></div>');

    });


  });
});

  //hover over picture and it shows caption
  $("body").on("mouseenter", ".box", function(event){
    console.log($(this));
    //console.log(event);
    $(this).find(".overlay").fadeIn(200);
  });
  $("body").on("mouseleave", ".box", function(){
    //console.log("left");
    $(".overlay").fadeOut(200);
  });

  //resets
  $(".reset").click(function(){
    $(".ig-container").html(' ');
  });



});







//$(".ig-container").append('<div class="box"><img class="pic" src=" '+ results.data.profile_picture + '" alt=""></div>')
//$.each(results.data, function(index, value){
  //$('.ig-container').append('<div class="box"><img class="pic" src=" '+ value.images.standard_resolution.url + '" alt=""><div id="overlay" class="pic overlay"><p class="caption">'+ value.caption.text +'</p></div></div>');

//});





//when user clicks on box
//users images shows

//shoots pictures to screen

  //on click of insta-user
//   $("body").on("click", ".insta-user", function(event){
//     //assign userId the value.id from data-userid
//     var userId = $(event.currentTarget).data('userid');
//     $.ajax({
//       url: "https://api.instagram.com/v1/users/"+ userId +"/media/recent/?access_token=235641580.ac75f97.4a90c7cf418944b09ef6bbb3b76926c2",
//       dataType: "jsonp",
//
//     })
//     .done(function(results){
//       //'<div class="box"><a href="#"><img class="pic" src="'+ results.data.profile_picture + '" alt=""><h4>data.username <br><small>data.full_name</small></h4></a></div>'
//       console.log(results.data);
//       $('.ig-container').html('')
//       $.each(results.data, function(index, value){
//         $('.ig-container').append('<div class="box"><img class="pic" src="'+ value.images.standard_resolution.url + '" alt=""></div>')
//       })
//   });
// })
