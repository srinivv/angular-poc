/*// initialize our App with some Data.
var initApp = {  
  "IsAuthenicated":false,
  "MenuItems" : [
                 {	
                	 "Description": "Menu 1", 
                 },
                 {
                	 "Description": "Menu 2",
                 }                 
                 ]
};
var loginData = {
		"IsAuthenicated":true,	
};
var customerList = {
		 
		};
*//**
 * Create Routes for dummy API exposed
 *//*
exports.createRoutes = function (app) {
	app.get("/api/main/InitializeApplication", function (req, res) {
		res.send(initApp);
	});
	
	app.get("/api/main/AuthenicateUser", function (req, res) {		
		res.send(initApp);
	});
	
	app.get("/api/customers/GetCustomers", function (req, res) {		
		res.send(initApp);
	});
	
	app.post("/api/accounts/Login", function (req, res) {		
		res.send(loginData);
	});	
	
}*/





var detailsJSON = {  
  "IsAuthenicated":true,
  "id" : ''
};


var detailedProfile ={
		"srini" : {"name": "Srini Velusamy","movie" : "Nayagan" , "childhood" : "Agraharam" , "sports" :"Cricket" ,"place" : "Srirangam","music" :"MS Subbulakshmi" ,"moviestar" :"Rajnikanth" },
		"sukiyung" : {"name": "Suki Yang","movie" : "BodyGuard and assassins" , "childhood" : "Shanghai" , "sports" :"Boxing" ,"place" : "Shanghai","music" :"Cantoneses" ,"moviestar" :"Jackie Chan"  },
		"altonm" : {"name": "Alton Mathews","movie" : "Nayagan" , "childhood" : "Agraharam" , "sports" :"Cricket" ,"place" : "Srirangam","music" :"MS Subbulakshmi" ,"moviestar" :"Rajnikanth" },
		"pthiel" : {"name": "Peter Theil","movie" : "Nayagan" , "childhood" : "Agraharam" , "sports" :"Cricket" ,"place" : "Srirangam","music" :"MS Subbulakshmi" ,"moviestar" :"Rajnikanth" },
		"pmanuel" : {"name": "Peter Manuel","movie" : "Nayagan" , "childhood" : "Agraharam" , "sports" :"Cricket" ,"place" : "Srirangam","music" :"MS Subbulakshmi" ,"moviestar" :"Rajnikanth" },
		"mohanreng" : {"name": "MohanRaj Rengananthan","movie" : "Nayagan" , "childhood" : "Agraharam" , "sports" :"Cricket" ,"place" : "Srirangam","music" :"MS Subbulakshmi" ,"moviestar" :"Rajnikanth" },
		"asharma" : {"name": "Amita Sharma","movie" : "Nayagan" , "childhood" : "Agraharam" , "sports" :"Cricket" ,"place" : "Srirangam","music" :"MS Subbulakshmi" ,"moviestar" :"Rajnikanth" },
		"srvelu" : {"name": "Srinivasan Velusamy","movie" : "Nayagan" , "childhood" : "Agraharam" , "sports" :"Cricket" ,"place" : "Srirangam","music" :"MS Subbulakshmi" ,"moviestar" :"Rajnikanth" }
};


var featuredProfiles = [{"id":'srini' , "name" : "Srini Velusamy" ,"cat":"movie" ,"postid":"100","postTitle" : "The Don in Mumbai - Nayagan"},
                        {"id":'sukiyung' , "name" : "Suki" , "cat":"movie" ,"postid":"200","postTitle" : "BodyGuard and assassins"},
                        {"id":'altonm' , "name" : "Alton Mathews","cat":"place" ,"postid":"102","postTitle" : "Ten reasons why you should travel, or why the city is killing your inner creative"},
                        {"id":'pthiel' , "name" : "Peter Thiel" ,"cat":"moviestar" ,"postid":"103","postTitle" : "Feature List"},               
                        ];


var post = {
		"srini_100" : {"username": "Srini Velusamy","userid":"srini","cat":"movie","catTitle" :"Nayagan" , "postTitle" : "The Don in Mumbai - Nayagan" ,"postid" : "100", "imgurl": 'assets/img/seed/srini/movie/profile_pic.jpg'},
		"srini_101" : {"username": "Srini Velusamy","userid":"srini","cat":"place","catTitle" :"Srirangam" , "postTitle" : "Bhoologa Vaikundam" ,"postid" : "101", "imgurl": 'assets/img/seed/srini/place/profile_pic.jpg'},
		"srini_102" : {"username": "Srini Velusamy","userid":"srini","cat":"moviestar","catTitle" :"Rajnikanth" , "postTitle" : "Thalaivaa" ,"postid" : "102", "imgurl": 'assets/img/seed/srini/moviestar/profile_pic.jpg'},
		"srini_103" : {"username": "Srini Velusamy","userid":"srini","cat":"music","catTitle" :"Nightingale of South India" , "postTitle" : "M S Subbulakshmi" ,"postid" : "103", "imgurl": 'assets/img/seed/srini/music/profile_pic.jpg'},
		"srini_104" : {"username": "Srini Velusamy","userid":"srini","cat":"sports","catTitle" :"Cricket" , "postTitle" : "Gentleman's Game" ,"postid" : "104", "imgurl": 'assets/img/seed/srini/sports/profile_pic.jpg'},
		"srini_105" : {"username": "Srini Velusamy","userid":"srini","cat":"childhood","catTitle" :"Agraharam" , "postTitle" : "Childhood Well Spent" ,"postid" : "105", "imgurl": 'assets/img/seed/srini/childhood/profile_pic.jpg'},
		"sukiyung_200" : {"username": "Suki Yang","userid":"sukiyung","cat":"movie","catTitle" :"BodyGuard and assassins" , "postTitle" : "BodyGuard and assassins" ,"postid" : "200", "imgurl": 'assets/img/seed/sukiyung/movie/profile_pic.jpg'},
}


var categoryToPostMapping = {
		"srini_movie" : {"username": "Srini Velusamy","userid":"srini","cat":"movie","catTitle" :"Nayagan" , "postTitle" : "The Don in Mumbai - Nayagan","postid" : '100'},		
		"srini_place" : {"username": "Srini Velusamy","userid":"srini","cat":"place","catTitle" :"Srirangam" , "postTitle" : "Bhoologa Vaikundam","postid" : '101'},
		"srini_moviestar" : {"username": "Srini Velusamy","userid":"srini","cat":"moviestar","catTitle" :"Rajnikanth" , "postTitle" : "Thalaivaa","postid" : '102'},
		"srini_music" : {"username": "Srini Velusamy","userid":"srini","cat":"music","catTitle" :"Nightingale of South India" , "postTitle" : "M S Subbulakshmi","postid" : '103'},
		"srini_sports" : {"username": "Srini Velusamy","userid":"srini","cat":"sports","catTitle" :"Cricket" , "postTitle" : "Gentleman's Game","postid" : '104'},
		"srini_childhood" : {"username": "Srini Velusamy","userid":"srini","cat":"childhood","catTitle" :"Agraharam" , "postTitle" : "Childhood Well Spent","postid" : '105'},
		"sukiyung_movie" : {"username": "Suki Yang","userid":"sukiyung","cat":"movie","catTitle" :"BodyGuard and assassins" , "postTitle" : "BodyGuard and assassins","postid" : '200'},
}

exports.createRoutes = function (app,database) {	
	app.get("/api/GetProfile", function (req, res) {
		//console.log("req.params.id" , req.param('id'));
		res.send(detailedProfile[req.param('id')]);
	});
	app.get("/api/GetProfileCategory", function (req, res) {
		//console.log("req.params.id" , req.param('id'));
		res.send(detailedProfile[req.param('id')]);
	});
	app.get("/api/getFeaturedProfiles", function (req, res) {
		res.send(featuredProfiles);
	});
	app.get("/api/GetPost", function (req, res) {
		res.send(post[req.param('id')]);
	});
	app.get("/api/GetUserCategoryPost", function (req, res) {
		var userid =req.param('id');
		var category =req.param('cat');
		var strBuf = userid +"_" + category;
		//console.log("Result-->" , userid);
		//console.log("Result-->" , category);		
		res.send(categoryToPostMapping[strBuf]);
	});
}











