var num = 0;

$(document).ready(function () {
	

	
    var header = $(".header-target");
	var description = $(".description-target");
	var image = $(".image-target");
	var learnMore = ["","<br><a class='learnMore' href='http://petermankiewich.com/drms.html'><u>Learn More</u></a>","<br><a class='learnMore' href='http://petermankiewich.com/impact.html'><u>Learn More</u></a>","","","",""];

	var H_0, H_1, H_2, H_3, H_4, H_5, H_6, H_7;
	var D_0, D_1, D_2, D_3, D_4, D_5, D_6, D_7;
	
	H_0 = "Hello, I'm Peter Mankiewich";
	H_1 = "Software and Web Development Intern";
	H_2 = "Vice President of Marketing";
	H_3 = "President, Young Entrepreneurs Organization";
	H_4 = "Web and Business Development Intern";
	H_5 = "Web Development Teaching Assistant";
	H_6 = "Ithaca College Startup Idea Demo Day";
	H_7 = "Fiverr Seller";
	
	
	
	D_0 = "My name is Peter Mankiewich, and I enjoy combining Business and Computer Science to create projects that are effective and high tech. I love business and entrepreneurship, as well as web design and programming. I also enjoy designing graphics, videos and promotional materials using Adobe Creative Cloud. I study my passion at Ithaca College, and incorporate my studies into projects and learning outside of class.";
	
	D_1 = "Interned at Disability Reinsurance Management Services where I worked on an Agile Software Development Team and worked to redesign, rebuild, and test the Corporate Website.";
	
	D_2 = "Works As the Vice President of Marketing for IC Impact, a student run sustainability based club at Ithaca College. As a club, we focus on bringing guest speakers to campus, and jumpstarting events and workshops that contribute to a more sustainable campus and community.";
	
	D_3 = "President of the Young Entrepreneurs Organization, an on-campus club in which we mentor our club members to become successful and professional entrepreneurs. Responsibilities include planning and managing club meetings, networking with speakers and alumni, and planning events and off campus trips";
	
	D_4 = "Worked at Manor Trade Development Corporation in New York City, developing a lead generation and affiliate website designed to gain sales for the company. The internship involved working in an office environment and collaborating with a team to develop business models and buyer funnels for each website. We used the WordPress platform to develop the websites.";
	
	D_5 = "Working as a teaching assistant for Introduction to Website Development at Ithaca Collge.  Class time and lab hours are spent helping students with their web programming projects and assignments.";
	
	D_6 = "Pitched an eBay application designed to streamline the process of selling products in bulk on eBay. I developed a slide deck, performed research on the target market, and pitched the idea in a four-minute presentation. I won a cash prize to further the business idea.";
	
	D_7 = "Worked as a seller on Fiverr.com for about two years selling eBay related services including SEO optimization and product descriptions. I also branched out and worked on video and graphics design projects. I used Adobe Premiere Pro, After Effects, Illustrator, and Photoshop to create client projects. I made over 400 sales while maintaining a 100% positive feedback, and gained level 2 seller status.";
	

	var right = $(".right-nav");
	var left = $(".left-nav");
	
	var aheader = [H_0,H_1,H_2,H_3,H_4, H_5, H_6, H_7];
	
	var adesc = [D_0,D_1,D_2,D_3,D_4, D_5, D_6, D_7];
	
	var aimage = ["images/FrontPortrait_BW.png", "images/DRMS.jpg","images/impact.png", "images/YEOLogo-01.png", "images/nyc.jpg", "images/codeimage-edit.png", "images/Startup_demo_day.jpeg", "images/fiverr.png"];
	
	var aCircle = [];
	
	//initially set image
	$(".image-target").css("bottom", "0px");
	$(".image-target").css("left", "-100px");
	$(".image-target").css("position", "absolute");
	
	if($(window).width()>=766){
		$(".image-target").css("width","800px");
	}
	else if($(window).width()<=767){
		$(".image-target").css("width","400px");
	}
	
	//LOAD ACIRCLE ARRAY
	for (var temp = 0; temp < aheader.length; temp++){
			aCircle[temp] = $(".circle"+temp);
			$(".circle"+temp).css("cursor", "pointer");
		}

	//LEFT ARROW CLICK
	$(left).click(function () {
		downArrow();
	});
	//RIGHT ARROW CLICK
	$(right).click(function () {
		upArrow();
	});

	//CHANGE DISPLAY ON CIRCLE CLICK
	$(".circle0").click(function () {
		num = -1;
		downArrow();
	});
	$(".circle1").click(function () {
		num = 0;
		downArrow();
	});
	$(".circle2").click(function () {
		num = 1;
		downArrow();
	});
	$(".circle3").click(function () {
		num = 2;
		downArrow();
	});
	$(".circle4").click(function () {
		num = 3;
		downArrow();
	});
	$(".circle5").click(function () {
		num = 4;
		downArrow();
	});
	$(".circle6").click(function () {
		num = 5;
		downArrow();
	});
	$(".circle7").click(function () {
		num = 6;
		downArrow();
	});
//-----------------------------------------------------
	
//---------------KEYBOARD CHANGES--------------
	$(document).keydown(function(e){
		var x = e.keyCode;
		if (x === 40) {
			 downArrow();     
		}
		else if (x === 37) {
			 downArrow();     
		}
		else if (x === 38) {
			 upArrow();     
		}
		else if (x === 39) {
			 upArrow();     
		}
	});
	
	
	
//------------------ARROW HOVER CHANGES-------------------------
$(".right-nav").hover(function () {
	
	$(".up").css("stroke", "#2F323A");
	
});
$(".right-nav").mouseleave(function () {
	
	$(".up").css("stroke", "#00b5ac");
	
});
$(".left-nav").hover(function () {
	
	$(".down").css("stroke", "#2F323A");
	
});
$(".left-nav").mouseleave(function () {
	
	$(".down").css("stroke", "#00b5ac");
	
});	
//-------------------------------------------

//---------COLUMNS 100% height-----------------
	var totalHeight = $(window).height();
	
	$(".heightSet").css("height", totalHeight + "px");
	$(".heightSet-nav").css("height", totalHeight + "px");

	$(window).resize(function () {
		
		var totalHeight = $(window).height();
		
		$(".heightSet").css("height", totalHeight + "px");
		$(".heightSet-nav").css("height", totalHeight + "px");
		});
		
		//call function for text write on
		myLoop();

//-------------------------------------------




//-----------FUNCTIONS--------------------------------

function fadeItIn(){
	$(".header-target").css("opacity","1");
	$(".description-target").css("opacity","1");
	$(".image-target").css("opacity", "1");
	$(".learnMore").css("opacity", "1");
	$(".background-color-container").css("opacity", "1");

}
function fadeItOut(){
	$(".header-target").css("opacity","0");
	$(".description-target").css("opacity","0");
	$(".image-target").css("opacity", "0");
	$(".background-color-container").css("opacity", "0");
}

	//LEFT ARROW CLICK FUNCTION
	function upArrow(){
		right.css("pointer-events","none");
		if(num === 0){
			num=aheader.length-1;
		}
		else{
			num=num-1;
		}
		fadeItOut();
		setTimeout(function(){
			header.text(aheader[num]);
			description.text(adesc[num]);
			description.append(learnMore[num]);
			image.attr("src", aimage[num]);
			if (num===0){
				$(".image-target").css("bottom", "0px");
				$(".image-target").css("left", "-100px");
				$(".image-target").css("position", "absolute");
				$(".image-target").removeClass("img-fluid");
				if($(window).width()>=766){
					$(".image-target").css("width","800px");
				}
				else if($(window).width()<=767){
					$(".image-target").css("width","400px");
				}
			}
			else{
				$(".image-target").css("bottom", "auto");
				$(".image-target").css("left", "auto");
				$(".image-target").css("position", "static");
				$(".image-target").addClass("img-fluid");
			}
		}, 500);
		setTimeout(function(){ fadeItIn(); }, 500);
		right.css("pointer-events","auto");

		//CIRCLE CHANGES
		for (temp = 0; temp < aheader.length; temp++){
			if (temp === num){
				aCircle[temp].addClass("fa-circle").removeClass("fa-circle-o");
			}
			else{
				aCircle[temp].addClass("fa-circle-o").removeClass("fa-circle");
			}
		}
	}
	//DOWN ARROW CLICK FUNCTION
	function downArrow() {
		right.css("pointer-events","none");
		if(num === aheader.length-1){
			num=0;
		}
		else{
			num=num+1;
		}
		aheader[0]="Hello, I'm Peter Mankiewich";
		fadeItOut();
		setTimeout(function(){
			header.text(aheader[num]);
			description.text(adesc[num]);
			description.append(learnMore[num]);
			image.attr("src", aimage[num]);
			if (num===0){
				$(".image-target").css("bottom", "0px");
				$(".image-target").css("left", "-100px");
				$(".image-target").css("position", "absolute");
				$(".image-target").removeClass("img-fluid");
				if($(window).width()>=766){
					$(".image-target").css("width","800px");
				}
				else if($(window).width()<=767){
					$(".image-target").css("width","400px");
				}
			}
			else{
				$(".image-target").css("bottom", "auto");
				$(".image-target").css("left", "auto");
				$(".image-target").css("position", "static");
				$(".image-target").addClass("img-fluid");
			}
		}, 500);
		setTimeout(function(){ fadeItIn(); }, 500);
		right.css("pointer-events","auto");
		

		//CIRCLE CHANGES
		for (temp = 0; temp < aheader.length; temp++){
			if (temp === num){
				aCircle[temp].addClass("fa-circle").removeClass("fa-circle-o");
			}
			else{
				aCircle[temp].addClass("fa-circle-o").removeClass("fa-circle");
			}
		}
	}

//---------------FRONT PAGE WRITE ON------------------

	var input = "Hello, I'm Peter Mankiewich";
	var alength = input.length;
	var text = "";
	var i = 0;                    							 

	function myLoop () {    
		if (num !== 0){
			return;
		}
	   setTimeout(function () { 							
		 text = text + input.substring(i,i+1);
		 $(".header-target").text(text); 					
		  i++;                    						 
		  if (i < alength) {        					    
			 myLoop();             						
		  }                        						
	   }, 100);
	}
	});

//---------------------------------