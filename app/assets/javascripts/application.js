// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require_tree .



$(function() {
  
  $("#a_link").bind("click", function(event) {
    // event.stopPropagation();

    alert("don't click me");
    return false;
  });
  
  $("#register_form").bind("submit", function(event) {
    var form = $(this);
    var data = form.serialize();
    var url = form.attr("action");
    
    var ajax = $.post(url, data);
    ajax.success(function(data) {
      alert("You have register a user called " + data.user.name);
    });
    ajax.error(function(data) {
      alert("failed!!!!!")
    });
    ajax.complete(function(data) {
      alert("it's finsehd")
    });
    // console.debug(data);
    
    event.stopPropagation();
    
    return false;
  });
  // console.debug("My value is " + $("#a_link").data("a-key"));
  
  // console.debug($("#notice").html());
  
  // console.debug($(".item").html());
  
  $(".item").each(function(i) {
    // console.debug($(this).html());
  });
  
  $(".item").bind("click", function(event) {
    // alert("you just click a item, it's content is: " + $(this).html());
    // var ajax = $.get("/home/item?id=" + $(this).data("id"));
    // ajax.success(function(data) {
    //   console.debug(data);
    // });
    // ajax.error(function(data) {
    //   console.debug(data);
    //   // alert('sorry, there is an error');
    // });
    
    var ajax = $.ajax({
      url: "/home/item?id=" + $(this).data("id"),
      type: "post",
      data: {"a": 1, "b": 2}
    })
    
    ajax.success(function(data) {
      console.debug(data);
    });
  });
});

function get_content() {
  alert($("div[name=myname]").html())
}

function decorate_me() {
  x = Math.random();
  
  $("#decorate_me").css(
    {
      "border": "10px solid black",
      "backgroundColor": "#eee",
      "color": "#f00",
      "padding": "20px",
      "font-size": 10*x + "px"
    }
  )
}

$(function() {
	$( "#accordion" ).accordion();
});
