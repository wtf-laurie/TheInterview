$(document).ready(function(){
		var quoteSource=[
		{
			quote: "What are 3 good qualities about yourself",
			name:" "
	    },
	    {
	    	quote:"List 5 strengths you have",
	    	name:" "
	    },
	    {
	    	quote:"What do you do on a regular day",
	    	name:" "
	    },
	    {
	    	quote:"What do you do to help your classmates out",
	    	name:" "
	    },
	    {
	    	quote:"If you see that someone doesn't get what the assignment is what do you do",
	    	name:" "
	    },
	    {
	    	quote:"Can you tell me a little about yourself",
	    	name:" "
	    },
	    {
	    	quote:"How did you hear about the position",
	    	name:" "
	    },
	    {
	    	quote:"What do you know about the company",
	    	name:" "
	    },
	    {
	    	quote:"Why do you want this job",
	    	name:" "
	    },
	    {
	    	quote:"What do you find yourself to be weak in",
	    	name:" "
	    },
	    {
	    	quote:"What are your strengths",
	    	name:" "
	    },
	    {
	    	quote:"Where do you see yourself in five years? Ten years?",
	    	name:" "
	    },
	    {
	    	quote:"Tell me about an accomplishment you are most proud of?",
	    	name:" "
	    },
	    {
	    	quote:"Tell me about a time you made a mistake?",
	    	name:" "
	    },
	    {
	    	quote:"What is your dream job?",
	    	name:" "
	    },
	    {
	    	quote:"What would you look to accomplish in the first 30 days/60 days/90 days on the job?",
	    	name:" "
	    },
	    {
	    	quote:"Describe yourself?",
	    	name:" "
	    },
	    {
	    	quote:"Tell me how you handled a difficult situation?",
	    	name:" "
	    },
	    {
	    	quote:"How would you deal with an angry or irate customer?",
	    	name:" "
	    },
	    {
	    	quote:"What are your salary requirements?",
	    	name:" "
	    },
	    {
	    	quote:"What motivates you?",
	    	name:" "
	    },
	    {
	    	quote:"What’s your availability?",
	    	name:" "
	    },
	    {
	    	quote:"What are your career goals?",
	    	name:" "
	    },
	    {
	    	quote:"What would your direct reports say about you?",
	    	name:" "
	    },
      {
	    	quote:"If I called your boss right now and asked him/her what is an area that you could improve on, what would he/she say?",
	    	name:" "
	    },
      {
	    	quote:"Are you a leader or a follower?",
	    	name:" "
	    },
      {
	    	quote:"What is your favorite website?",
	    	name:" "
	    },
      {
	    	quote:"What are some of your leadership experiences?",
	    	name:" "
	    },
      {
	    	quote:"Would you work 40+ hours a week ?",
	    	name:" "
	    },

	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'								'+newQuoteGenius+'</p>');
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		}//end for loop
	
	});//end quoteButton function
		
		
});//end document ready

