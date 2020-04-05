
// var genres = ["Country", "Hip Hop", "Pop", "Christian"];

// function populateButtons() {
//   $(".buttons").empty();

//   for (i=0; i < genres.length; i++) {
//     var newGif = $('<button>').text(genres[i]);
//     newGif.attr("data-person", genres[i]);
//     $("#buttons").append(newGif);
//   }

// }

//   $(".buttons", ).on("click", "button", function () {
//     var person = $(this).attr("data-person");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//       person + "&api_key=4IHnhsR2X6fuvZRUQbM3yYfwqzBCh4RV&limit=30";


    

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       .then(function (response) {
//         var state = $(this).attr("data-state");
//         var results = response.data;

//         for (var i = 0; i < results.length; i++) {
//           var gifDiv = $("<div>");
//           console.log(i);
          
        
    
        
//         console.log(personImage);
        
//          gifDiv.prepend(personImage);

//           $("#gifs-appear-here").prepend(personImage);
          

    
//         }

  

//       });

    
//   });

  

// $("#submit").on('click', function(event) {
 
//     event.preventDefault();
//     var newQuery = $('#text').val().trim();
//     var newCountry = $("<button>").html(newQuery);


//     genres.push(newQuery);
//     newCountry.append("#buttons");
//     console.log(newCountry);        

//      populateButtons();

//   })
  
  
  
//   populateButtons();

