var num = 0;

$(document).ready(function () {
	

	
    var header = $(".header-target");
	var description = $(".description-target");
	var image = $(".image-target");

	var H_0, H_1, H_2, H_3, H_4, H_5;
	var D_0, D_1, D_2, D_3, D_4, D_5;
	
	H_0 = "Hello, I'm Peter Mankiewich";
	H_1 = "Young Entrepreneurs Organization";
	H_2 = "Web and Business Development Intern";
	H_3 = "Web Development Teaching Assistent";
	H_4 = "Ithaca College Startup Idea Demo Day";
	H_5 = "Fiverr Seller";
	
	D_0 = "My name is Peter Mankiewich, and I enjoy combining Business and Computer Science to create projects that are effective and high tech. I love business and entrepreneurship, as well as web design and programming. I also enjoy designing graphics, videos and promotional materials using Adobe Creative Cloud. I study my passion at Ithaca College, and incorporate my studies into projects and learning outside of class.";
	D_1 = "Vice President of Marketing for the Young Entrepreneurs Organization, an on-campus club in which we mentor our club members to become successful and professional entrepreneurs. Responsibilities include managing social media accounts including LinkedIn and Facebook, and using Adobe applications to create imagery.";
	D_2 = "Worked at Manor Trade Development Corporation in New York City, developing a lead generation and affiliate website designed to gain sales for the company. The internship involved working in an office environment and collaborated with a team to develop business modelsand buyer funnels for each website. We used themWordPress platform to develop the websites.";
	D_3 = "Working as a teaching assistant for Introduction to Website Development at ithaca Collge.  Class time and lab hours is spend helping students with their web programming projects and assignments.";
	D_4 = "Pitched an eBay application designed to streamline the process of selling products in bulk on eBay. The pitch required developing a slide deck and preforming research on the target market The idea was pitched in a four-minute presentation A cash prize was won in order to further the business idea.";
	D_5 = "Worked as a seller on Fiverr.com for about two years selling eBay related services including SEO optimization and product descriptions. I also branched out and worked on video and graphics design projects. I used Adobe Premiere Pro, After Effects, Illustrator, and Photoshop to create client projects, and made over 400 sales maintianed a 100% positive feedback, and gained level 2 seller status.";
	
	var right = $(".right-nav");
	var left = $(".left-nav");
	
	var aheader = [H_0,H_1,H_2,H_3,H_4, H_5];
	
	var adesc = [D_0,D_1,D_2,D_3,D_4, D_5];
	
	var aimage = ["images/FrontPortrait_BW.png", "images/websiteLogo-01.png", "", "images/codeimage-edit.png", "images/websiteDemoDayPhoto-01.png", "images/websiteFiverrLogo-01.png"];
	
	var aCircle = [];
	
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
			image.attr("src", aimage[num]);
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
			image.attr("src", aimage[num]);
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