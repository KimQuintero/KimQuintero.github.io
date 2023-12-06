// JavaScript file
$( function() {
   $("map area").click( function(){
	           $('#myModal').modal("show");


      if ($(this).attr("id") == "P1") {
         $("#feedback").css("color","blue");
         $("#feedback").html("Presentation");
      }

      if ($(this).attr("id") == "P2") {
         $("#feedback").css("color","green");
         $("#feedback").html("Practice");
      }

      if ($(this).attr("id") == "P3") {
         $("#feedback").css("color","purple");
         $("#feedback").html("Production");
      }

	if ($(this).attr("id") == "P4") {
         $("#feedback").css("color","#C5622C");
         $("#feedback").html("Posting");
      }

	if ($(this).attr("id") == "P5") {
         $("#feedback").css("color","#AE0C8A");
         $("#feedback").html("Participation");
      }


   });
}); //end main jQuery function
// JavaScript Document