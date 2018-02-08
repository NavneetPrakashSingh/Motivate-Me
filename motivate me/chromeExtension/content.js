 var quotes = ["\"The Way Get Started Is To Quit Talking And Begin Doing.\" -Walt Disney",
 			   "\"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees The Opportunity In Every Difficulty.\" -Winston Churchill",
 			   "\"Don\'t Let Yesterday Take Up Too Much Of Today.\" -Will Rogers",
 			   "\"You Learn More From Failure Than From Success. Don\'t Let It Stop You. Failure Builds Character.\"- Unknown ",
 			   "\"It\'s Not Whether You Get Knocked Down, It\'s Whether You Get Up.\"-Inspirational Quote By Vince Lombardi",
 			   "\"If You Are Working On Something That You Really Care About, You Don\'t Have To Be Pushed. The Vision Pulls You.\"- Steve Jobs",
 			   "\"People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.\"- Rob Siltanen",
 			   "\"Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.\"- Og Mandino",
 			   "\"Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That\'s The Classic Entrepreneur.\"- Mohnish Pabrai",
 			   "\"We May Encounter Many Defeats But We Must Not Be Defeated.\"- Maya Angelou",
 			   "\"Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.\"- Johann Wolfgang Von Goethe",
 			   "\"Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?\"- Brian Tracy",
 			   "\"We Generate Fears While We Sit. We Overcome Them By Action.\"- Dr. Henry Link",
 			   "\"Whether You Think You Can Or Think You Can\'t, You\'re Right.\"- Henry Ford",
 			   "\"Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.\"- Helen Keller",
 			   "\"The Man Who Has Confidence In Himself Gains The Confidence Of Others.\"- Hasidic Proverb",
 			   "\"The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.\"- Franklin D. Roosevelt",
 			   "\"Creativity Is Intelligence Having Fun.\"- Albert Einstein",
 			   "\"What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.\"- Don Zimmer",
 			   "\"Do What You Can With All You Have, Wherever You Are.\"- Theodore Roosevelt",
 			   "\"Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.\" -Zig Ziglar",
 			   "\"Whenever you want to achieve something, keep your eyes open, concentrate and make sure you know exactly what it is you want. No one can hit their target with their eyes closed.\" -Paulo Coelho",
 			   "\"It is during our darkest moments that we must focus to see the light.\" -Aristotle Onassis",
 			   "\"Concentrate all your thoughts upon the work at hand. The sun\'s rays do not burn until brought to a focus.\" -Alexander Graham Bell",
 			   "\"We are what we repeatedly do. Excellence, then, is not an act but a habit.\" -Will Durant",
 			   "\"The successful warrior is the average man, with laser-like focus.\" -Bruce Lee",
 			   "\"I don\'t care how much power, brilliance or energy you have, if you don\'t harness it and focus it on a specific target, and hold it there you\'re never going to accomplish as much as your ability warrants.\"-Zig Ziglar",
 			   "\"Instead of focusing on that circumstances that you cannot change - focus strongly and powerfully on the circumstances that you can.\" -Joy Page",
 			   "\"It is wise to direct your anger towards problems - not people; to focus your energies on answers - not excuses.\" -William Arthur Ward",
 			   "\"Don\'t dwell on what went wrong. Instead, focus on what to do next. Spend your energies on moving forward toward finding the answer.\" -Denis Waitley",
 			   "\"Most people have no idea of the giant capacity we can immediately command when we focus all of our resources on mastering a single area of our lives.\" -Tony Robbins",
 			   "\"Concentration can be cultivated. One can learn to exercise willpower, discipline one\'s body and train one\'s mind.\" -Anil Ambani",
 			   "Whatever the mind of man can conceive and believe, it can achieve. -Napoleon Hill",
 			   "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  -Robert Frost",
 			   "I attribute my success to this: I never gave or took any excuse. -Florence Nightingale",
 			   "You miss 100% of the shots you don\'t take. -Wayne Gretzky",
 			   "I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed. -Michael Jordan",
 			   "The most difficult thing is the decision to act, the rest is merely tenacity. -Amelia Earhart",
 			   "Every strike brings me closer to the next home run. -Babe Ruth",
 			   "Definiteness of purpose is the starting point of all achievement. -W. Clement Stone",
 			   "Life isn\'t about getting and having, it\'s about giving and being. -Kevin Kruse",
 			   "Life is what happens to you while you\'re busy making other plans. -John Lennon",
 			   "We become what we think about. -Earl Nightingale",
 			   "Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover. -Mark Twain",
 			   "Life is 10% what happens to me and 90% of how I react to it. -Charles Swindoll",
 			   "The most common way people give up their power is by thinking they don\'t have any. -Alice Walker",
 			   "The mind is everything. What you think you become.  -Buddha",
 			   "The best time to plant a tree was 20 years ago. The second best time is now. -Chinese Proverb",
 			   "An unexamined life is not worth living. -Socrates",
 			   "Eighty percent of success is showing up. -Woody Allen",
 			   "Winning isn\'t everything, but wanting to win is. -Vince Lombardi",
 			   "I am not a product of my circumstances. I am a product of my decisions. -Stephen Covey",
 			   "Every child is an artist.  The problem is how to remain an artist once he grows up. -Pablo Picasso",
 			   "Your time is limited, so don\'t waste it living someone else\'s life. -Steve Jobs",
 			   "I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. -Maya Angelou",
 			   "Either you run the day, or the day runs you. -Jim Rohn",
 			   "Whether you think you can or you think you can\'t, you\'re right. -Henry Ford",
 			   "The two most important days in your life are the day you are born and the day you find out why. -Mark Twain",
 			   "The best revenge is massive success. -Frank Sinatra",
 			   "Life shrinks or expands in proportion to one\'s courage. -Anais Nin",
 			   "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. -Aristotle",
 			   "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you. -Jesus",
 			   "The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson",
 			   "Go confidently in the direction of your dreams.  Live the life you have imagined. -Henry David Thoreau",
 				];
 var colors = [];
 colors[0] = ["#34495e","white"];
 colors[1] = ["#2c3e50","white"];
 colors[2] = ["#9b59b6","white"];
 colors[3] = ["#8e44ad","white"];
 colors[4] = ["#3498db","white"];
 colors[5] = ["#2980b9","white"];
 colors[6] = ["#2ecc71","white"];
 colors[8] = ["#27ae60","white"];
 colors[9] = ["#1abc9c","white"];
 colors[10]= ["#16a085","white"];
 colors[11]= ["#f1c40f","white"];
 colors[12]= ["#f39c12","white"];
 colors[13]= ["#e67e22","white"];
 colors[15]= ["#d35400","white"];
 colors[16]= ["#e74c3c","white"];
 colors[17]= ["#c0392b","white"];
 colors[18]= ["#ecf0f1","black"];
 colors[19]= ["#bdc3c7","black"];
 colors[20]= ["#95a5a6","black"];
 colors[21]= ["#7f8c8d","white"];
 $(document).ready(function() { 

 	var id = 12; // A random variable for this example

       
 	// 	//code starts here
 	//  	var key = CryptoJS.enc.Hex.parse("0123456789abcdef0123456789abcdef");
		// var iv =  CryptoJS.enc.Hex.parse("abcdef9876543210abcdef9876543210");
		// var secret = "test@gmail.com";
		// var encrypted = CryptoJS.AES.encrypt(secret, key, {iv:iv});
		// //and the ciphertext put to base64
		// encrypted = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
		
		//  $.ajax({
  //           method: 'POST', // Type of response and matches what we said in the route
  //           url: 'http://motivateme.hol.es/api/public/api/userid', // This is the url we gave in the route
  //           data: {'id' : encrypted}, // a JSON object to send back
  //           success: function(returnValue){ // What to do if we succeed
  //           	jsonString = JSON.parse(returnValue);
  //           	console.log(returnValue);
  //           	if(jsonString["type"]==0){
  //           		console.log("type 0");
  //           	}else{
  //           		console.log("type 1");
  //           	}
  //               // console.log(); 
  //           },
  //           error: function(jqXHR, textStatus, errorThrown) { // What to do if we fail
  //               console.log(JSON.stringify(jqXHR));
  //               console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
  //           }
  //       });
		//  //code ends here

		 var today = new Date();
	    var h = today.getHours();
	    var m = today.getMinutes();
	    var s = today.getSeconds();
	    $('.time').text(h+":"+m);
	    var month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
	    var days=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];	   
	    var getCurrentDay =today.getDay();	    
	    var dateString =days[getCurrentDay]+" "+today.getDate()+" "+month[today.getMonth()];
	    $('.date').text(dateString);

 		 $(".button-collapse").sideNav();

      	 $('.carousel').carousel();
      	 $('.carousel').hide();
      	 $('.recommendation-text').hide();

 		 //to display chrome details
 		 chrome.identity.getProfileUserInfo(function(userInfo) {		 
		    var userEmail = userInfo.email;
		    var firstLetter = userEmail.substring(0,1).toUpperCase();		    
		    if(userEmail != ""){
		    	$('.edit-btn').hide();
		    	$('.email').text(userEmail);
		    	$('.circle-alphabet').text(firstLetter);	

		    	//code starts here
		 	 	var key = CryptoJS.enc.Hex.parse("0123456789abcdef0123456789abcdef");
				var iv =  CryptoJS.enc.Hex.parse("abcdef9876543210abcdef9876543210");
				var secret = userEmail;
				var encrypted = CryptoJS.AES.encrypt(secret, key, {iv:iv});
				//and the ciphertext put to base64
				encrypted = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
				
				 $.ajax({
		            method: 'POST', // Type of response and matches what we said in the route
		            // url: 'http://localhost:8000/api/userid/', // This is the url we gave in the route
		            url: 'http://motivateme.hol.es/api/public/api/userid',
		            data: {'id' : encrypted}, // a JSON object to send back
		            success: function(response){ // What to do if we succeed
		                 var data = localStorage.getItem("userEmailId");
				 		 if(data == null || data =='' || data ==' '){		 		 	
				 		 	localStorage.setItem("userEmailId", userEmail); 
				 		 }else{
				 		 	//do nothing since data is already present there
				 		 }
		            },
		            error: function(jqXHR, textStatus, errorThrown) { // What to do if we fail
		                console.log(JSON.stringify(jqXHR));
		                console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
		            }
		        });
				 //code ends here
				   //  	var finalUrl = "http://motivateme.hol.es/api/public/api/user/"+userEmail;
				   //  	// var finalUrl = "http://loca/api/public/api/user/"+userEmail;
					  //   $.ajax({
					  //       url: finalUrl,
					  //       type:"GET",
							// dataType:"json",
					  //       success: function(apiResponse){			            
					  //           //add the emailId to localstorage
					  //           var data = localStorage.getItem("userEmailId");
						 // 		 if(data == null || data =='' || data ==' '){		 		 	
						 // 		 	localStorage.setItem("userEmailId", userEmail); 
						 // 		 }else{
						 // 		 	//do nothing since data is already present there
						 // 		 }
					  //   }});
		    }else{
		    	var data = localStorage.getItem("userEmailId");
		    	if(data){
		    	$('.edit-btn').hide();
		    	var firstLetter = data.substring(0,1).toUpperCase();
		    		$('.email').text(data);
		    		$('.circle-alphabet').text(firstLetter);
		    	}else{
		    		$('.edit-btn').show();
		    		$('.email').text("Loyal User");
		    		$('.circle-alphabet').text("L");
		    	}		    	
		    }

			
		});

 		 var data = localStorage.getItem("quoteCategory");
 		 if(data == null || data =='' || data ==' '){
 		 	var chipElements = ['1','2','3','4'];
 		 	localStorage.setItem("quoteCategory", JSON.stringify(chipElements)); 
 		 }else{
 		 	retrievedData = JSON.parse(localStorage.getItem("quoteCategory"));
 		 }

 		 var categories = ["Motivational","Life","Love","Success"];
 		 var string ="";
 		 var newString ="";
 		 retrievedData = JSON.parse(localStorage.getItem("quoteCategory"));
 		  for (var i = 0; i<retrievedData.length; i++) { 		  	  	
 		  	if(retrievedData[i]!='0'){
 		  		string = string + "<div class=\"taggedChips\" val="+categories[i]+">"+categories[i]+"<i class=\"close material-icons selected-value\">close</i></div>"; 		  	
 		  	}else if(retrievedData[i] == '0'){
 		  		newString = newString + "<div class=\"unselectedChips\" val="+categories[i]+">"+categories[i]+"<i class=\"close material-icons selected-value\">close</i></div>"; 		  	 		  		
 		  	}
 		  };
 		  
 		  $(".tags").html(string);
 		  $(".un-tags").html(newString);

 		  //unselecting selected topics
 		  $(document).on('click', '.taggedChips', function(){		  	
 		  	$(this).remove();
 		  	$selected = $(this).attr('val'); 	
 		  	cateogoryIndex = categories.indexOf($selected); 	 		  	
 		  	var json = localStorage.getItem("quoteCategory");
 		  	dataPresent = JSON.parse(localStorage.getItem("quoteCategory")); 		  	
 		  	dataPresent[cateogoryIndex]=0;
 		  	localStorage.setItem("quoteCategory", JSON.stringify(dataPresent));
 		  	retrievedData1 = JSON.parse(localStorage.getItem("quoteCategory"));
 		  	allZeroes = retrievedData1.every(zeroTest);
 		  	if(allZeroes == true){
 		  		$('.message-box').html("<p class=\"no-quote-message\">Since, none of the quote category is selected, so random quotes will be displayed</p>");
 		  	}
 		  	var newString = "<div class=\"unselectedChips\" val="+$selected+">"+$selected+"<i class=\"close material-icons selected-value\">close</i></div>"; 		  	
 		  	 $(".un-tags").append(newString);

 		  	 Materialize.toast('Your preference has been updated', 4000);

 		  	 return false;
 		  });

 		  //unselecting unselected topics
 		  $(document).on('click', '.unselectedChips', function(event){
 		  	$selected = $(this).attr('val');
 		  	selectedIndex = categories.indexOf($selected); 		  	
 		  	dataPresent = JSON.parse(localStorage.getItem("quoteCategory"));
 		  	dataPresent[selectedIndex]=selectedIndex+1;
 		  	localStorage.setItem("quoteCategory", JSON.stringify(dataPresent)); 		  	
 		  	$(this).remove();  		  	
 		  	allZeroes = dataPresent.every(zeroTest); 		  	
 		  	if(allZeroes == false){
 		  		$('.message-box').html("");
 		  	}
 		  	var newString = "<div class=\"taggedChips\" val="+$selected+">"+$selected+"<i class=\"close material-icons selected-value\">close</i></div>"; 		  	
 		  	$(".tags").append(newString);
 		  	Materialize.toast('Your preference has been updated', 4000);
 		  	return false;
 		  });

 		  var dataAvailable = JSON.parse(localStorage.getItem("quoteCategory"));
 		  var urlString="";
 		  var givenUrlString="";
 		  var checkForNonZeroElements=0;
 		  for (var i = 0; i < dataAvailable.length; i++) {
 		  	if(dataAvailable[i]!="0"){ 		  		
 		  		givenUrlString= givenUrlString + dataAvailable[i]+"&"; 		  		
 		  	}
 		  };

 		  urlString = givenUrlString.substring(0,givenUrlString.length-1); 		  
 		  if(urlString==""){
 		  	urlString="1&2&3&4";
 		  	$('.message-box').html("<p class=\"no-quote-message\">Since, none of the quote category is selected, so random quotes will be displayed</p>");
 		  }
 		  

	 	$.ajax({
	 		url: "http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-IN",
	 		type: "GET",
	 		dataType:"json",
	 		timeout: 1500,
	 		success:function(data){
	 			$('.modal').modal();
				$('.collapsible').collapsible();
		 		
		 	    $.ajax({
			 	url: "http://motivateme.hol.es/api/public/api/"+urlString,
			 	type:"GET",
			 	dataType:"json",
			 	crossDomain:true,
			 	beforeSend: function() {
		        
		    	},
			 	success: function (quoteData) {
			 		
			 		if(quoteData.quoteText == null || quoteData.quoteText == "" || quoteData.quoteText == " "){
			 			var requiredQuote = "The best revenge is massive success. - Frank Sinatra";
			 		}else{
			 			var requiredQuote = quoteData.quoteText;
			 		}

			 		$("#content").text(requiredQuote);
			 		$("#content").css("color","white");
			 		},

			 	complete: function() {
			 		$(".display-loader").hide();
			 		if ($("#content").text() =="null" || $("#content").text() =="" || $("#content").text() ==" " ) {
			 			$("#content").text("The best revenge is massive success. - Frank Sinatra");
			 		}else{
			 			
			 		}
			    },
			 	});
		 		 		
		 		// $("#content").text(quotes[quoteNumber]);

			 	   var myUrl = ["http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-IN",
			 	   				"http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US",
			 	   				"http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR",
			 	   				"http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=de-DE",
			 	   				"http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=ja-JP",
			 	   				"http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN"
			 	   			   ];
			 	    var urlPosition = randomIntFromInterval(0,5); 	    
			 	   imageUrl=myUrl[urlPosition];

				   $.ajax({ 
				    url: imageUrl, 	    	    
				    type: "GET",
				    dataType: "json",
				    crossDomain: true,
				    success: function (data) {
				    	
				    	// var dataString = JSON.stringify(data);
				    	// var jsonData = JSON.parse(dataString);
				    	var imageUrl = "http://www.bing.com"+data.images[0].url;
				    	var bgimage = new Image();      
    					bgimage.src=imageUrl;
    					
    					$("#background-wallpaper").hide();
    					
				    	  $(bgimage).on('load',function(){				    	  	
					        $("#background-wallpaper").css("background-image","url("+$(this).attr("src")+")").fadeIn("slow");                  
					        $("#mainContent").fadeIn("slow");
					    });

				    	
				    }
				});

					 	  
	 		},
	 		error:function(error){
	 			var randomImage = randomIntFromInterval(0,3);
	 			var imageArray = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'];
	 			$('#recommendationButton').hide();
	 			$('.floating-margin').hide();
	 			$("#modal1").hide();
	 			$('.preloader-wrapper').hide();
	 			// $('#myBody').css('background-image', 'url(' + "/images/"+imageArray[randomImage]+"" + ')');
	 			
				var bgimage = new Image();      
    			bgimage.src="/images/"+imageArray[randomImage];
    					
    			$("#background-wallpaper").hide();
    					
				$(bgimage).on('load',function(){				    	  	
					$("#background-wallpaper").css("background-image","url("+$(this).attr("src")+")").fadeIn("slow");                  
					$("#mainContent").fadeIn("slow");
				});
	 			
	 			var randomQuote = randomIntFromInterval(0,64);
	 			$("#content").text(quotes[randomQuote]);
	 		}
	 	
	 	});

 		$("#content").mouseover(function(){	
			$("#content").css("background-color","rgba(0, 0, 0, 0.5)");
			}
		);
		$("#content").mouseout(function(){
			$("#content").css("background-color","rgba(0, 0, 0, 0)");
		});	
	 	
});


 function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function zeroTest(element){
	return element === 0;
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("submit-email-btn").addEventListener("click", handler);
  document.getElementById("recommendationButton").addEventListener("click", recommendation);
});

// The handler also must go in a .js file
function handler() {
  /* ... */
   var emailId = $("#email").val();
   if (emailId) {
   	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var checkEmail = re.test(emailId);
    if(checkEmail){


    	//code starts here
 	 	var key = CryptoJS.enc.Hex.parse("0123456789abcdef0123456789abcdef");
		var iv =  CryptoJS.enc.Hex.parse("abcdef9876543210abcdef9876543210");
		var secret = emailId;
		var encrypted = CryptoJS.AES.encrypt(secret, key, {iv:iv});
		//and the ciphertext put to base64
		encrypted = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
		
		 $.ajax({
            method: 'POST', // Type of response and matches what we said in the route
            url: 'http://motivateme.hol.es/api/public/api/userid', // This is the url we gave in the route
            data: {'id' : encrypted}, // a JSON object to send back
            success: function(apiResponse){ // What to do if we Succeed
            	jsonString = JSON.parse(apiResponse);            	
                if(jsonString["type"] == 0){
	            	$('.error-msg').show();
				    $('.success-msg').hide();
				    $('.error-msg').text(jsonString.response);
	            }else{
	            	$('.error-msg').hide();
				    $('.success-msg').show();
				    $('.success-msg').text(jsonString.response);
				    //add the emailId to localstorage
		           localStorage.setItem("userEmailId", emailId);
	            }
            },
            error: function(jqXHR, textStatus, errorThrown) { // What to do if we fail
                console.log(JSON.stringify(jqXHR));
                console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
            }
        });
		 //code ends here


   //  	var finalUrl = "http://motivateme.hol.es/api/public/api/user/"+emailId;
	  //   $.ajax({
	  //       url: finalUrl,
	  //       type:"GET",
			// dataType:"json",
	  //       success: function(apiResponse){
	  //           if(apiResponse.type == 0){
	  //           	$('.error-msg').show();
			// 	    $('.success-msg').hide();
			// 	    $('.error-msg').text(apiResponse.response);
	  //           }else{
	  //           	$('.error-msg').hide();
			// 	    $('.success-msg').show();
			// 	    $('.success-msg').text(apiResponse.response);
			// 	    //add the emailId to localstorage
		 //           localStorage.setItem("userEmailId", emailId);
	  //           }
	            
	  //   }});



    }else{
    	$('.error-msg').show();
	    $('.success-msg').hide();
	    $('.error-msg').text("Email Id not in correct format");
    }
    
   }else{
   	$('.error-msg').show();
   	$('.success-msg').hide();
   	$('.error-msg').text("Email cannot be blank");
   }
   // alert(emailId);
}

function recommendation(){
	$('#recommendationButton').hide();
	$('.carousel').show();
	$('.recommendation-text').show();
	$('#background-wallpaper').css('height','auto');
}
