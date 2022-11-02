//using JQuery 
console.log($("h1").css("color"));                  //getting the property
$("h1").css("color", "red");                        //setting the property
$("h1").addClass("big-title margin-50");             //to add (multiple) class(defined in CSS) to an element. Here "h1".
//$("h1").removeClass("big-title");                 to remove the class or multiple classes


//changing text
$("h1").text("How are you?");                       
$("button").text("Click here!");                    //in jQuery, using text instead of "textContent".
$("h1").html("<em>Working on it</em>");             //in jQuery, using html instead of "innerHTML".


//manipulating attributes
$("a").attr("href","https://www.google.com");


//Adding Event Listner 
//Unlike traditional method of adding for loop to traverse all the buttons and using "querySelector", "addEventListner"
// jQuery has a simpler way to go
$("button").click(function(){
    $("h1").css("color","purple");
});


//Keypress event
$("input").keypress(function(event){
    console.log(event.key);
    $("h1").text(event.key);                                        //to change h1 according to the key pressed
});


//using "on" instead of "click" or "keypress"
$("h1").on("mouseover", function(){
    $("h1").css("color","yellow");
});


//adding and removing elements
$("h1").before("<button>Used before in JQuery</button>");
$("h1").after("<button>Used after in JQuery</button>");
$("h1").prepend("<button>Used prepend in JQuery</button>");
$("h1").append("<button>Used append in JQuery</button>");
//$("button").remove();                                              To remove all the buttons        



//Animations
$("button").on("click", function(){             //to hide and show h1 upon clicking the buttons
    //$("h1").show();
    //$("h1").hide();
    //$("h1").toggle();
    //$("h1").fadeOut();
    //$("h1").fadeIn();
    //$("h1").fadeToggle();
    //$("h1").slideUp();
    //$("h1").slideDown();
    //$("h1").slideToggle();
   // $("h1").animate({opacity : "80%",           //"animate" lets us add custom CSS properties into Animation. 
   //                 margin: "20px"});           //But we can only change the NUMERIC properties
   $("h1").slideUp().slideDown().animate({opacity : "80%", margin: "100px"});
});