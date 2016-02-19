var app = angular.module('myApp',['members']);

app.controller('BaseController', ['$http', function($http) {
	
	this.current = '';
	this.reverse = false;
	
	this.sortBy = function(type){
		//this.current = type;
		
		var c = this.current;
		var ri;
		if(c == type){
			this.reverse = !this.reverse;
			ri = (this.reverse)? 'Reversed' : 'not Reversed';
		}
		else{
			ri = 'Not Reversed';
			this.reverse = false;
		}
		this.current = type;
		
		//console.log(type);
		
		event.preventDefault();
		
		
	}
	
	/*
	this.newSort = function(type){
		var c = this.current;
		var ri;
		if(c == type){
			this.reverse = !this.reverse;
			ri = (this.reverse)? 'Reversed' : 'not Reversed';
		}
		else{
			ri = 'Not Reversed';
			this.reverse = false;
		}
		this.current = type;
		document.getElementById('revIndicator').innerHTML = ri;
	};*/
	
	
	/*this.members = [];
    var _this = this;
	
	//this.members = theMembers;
	
	
	
	
	
	

    $http.get('/bigProject1/js/congress.json')
        .success(function(data) {
            console.log(data);
            console.log(this);
            _this.members = data;
			
        })
        .error(function(msg) {
            console.log("This request failed.\n" + msg);
        });*/

    /*this.isBlueSteel = function(player) {
        return (player.minutes < 15);
    }

    this.isEveryone = function() {
        return true;
    }

    this.isStarter = function(player) {
        return (player.minutes > 100);
    }*/
}]);




var theMembers = [
	{
		"state" : "Alabama",
		"name" : "Jeff Sessions",
		"bio" : "Jeff Sessions was born in Selma, Alabama on December 24, 1946, and grew up in Hybart (pronounced Hib-ert), the son of a country store owner. Growing up in the country, Sessions was instilled with the core values – honesty, hard work, belief in God and parental respect – that define him today. In 1964, he Jeff Sessions became an Eagle Scout and has received the Distinguished Eagle Scout Award. After attending school in nearby Camden, Sessions worked his way through Huntingdon College in Montgomery, graduating with a Bachelor of Arts degree in 1969. He received a Juris Doctorate degree from the University of Alabama in 1973.Jeff Sessions, the young man. Sessions served in the United States Army Reserve from 1973 to1986 ultimately attaining the rank of Captain. He still considers that period to be one of the most rewarding chapters of his life.",
		"photo" : "",
		"party" : "Republican",
		"contested" : false,
		"candidates" : [

		]



	},
	{"state" : "Alabama",
		"name" : "Richard Shelby",
		"bio" : "Senator Richard first elected to the Senate in 1986.He is the Chairman of the Banking, Housing, and Urban Affairs Committee. He also serves on the Senate Appropriations Committee and the Committee on Rules and Administration.Senator Shelby believes that a smaller government is more effective and has long opposed government bailouts.  He is a stalwart supporter of Second Amendment rights and has worked tirelessly to bring jobs and economic growth to Alabama.  He has introduced a flat tax in every Congress since his election to the U.S. Senate, as well as a Balanced Budget amendment to the Constitution.",
		"photo" : "",
		"party" : "Republican",
		"contested" : true,
		"candidates" : [
			{
				"name" : "Charles Nana",
				"bio" : "Charles Nana has dedicated his career to making things better for the less privileged in his communities as well as companies he associated with. Though he has become a recognized name in the business transformation and process improvement industry, Charles has built a reputation as a tireless fighter for the most vulnerable members of his communities.Charles was born in Cameroon, West Africa to parents Nanda, a home maker and Tchienkou, a printing press technician. He is the 1st of 14 children and also the very first to obtain a college degree in his family. He migrated to the United States with only $428 in his pocket, but today, those $428 have translated into hundreds of thousands of dollars in real estate and heavy machinery investments as well as a decent education: Bachelor’s degree in Mechanical Engineering from Howard University, Masters degree in Biomedical Engineering from Catholic University of America and an International MBA degree in Analytical Finance and Strategic Management from the University of Chicago, Booth School of Business. Charles is married to Florence and they have three sons, Nanda, Wanci and Kedy.",
				"photo" : "",
				"party" : "Democrat"
			},
			{
				"name" : "Ron Crumpton",
				"bio" : "Ron Crumpton is a 47-year-old father of one.After becoming disabled and unable to continue his career in landscaping and irrigation services, Ron entered college at Jeff State Junior College and continued to the University of Alabama at Birmingham in order to obtain the job skills necessary to remain a productive member of society.",
				"photo" : "",
				"party" : "Democrat"
			},
			{
				"name" : "John Martin",
				"bio" : "I will work diligently to support our curent laws, establish an efficient budget, and move the power base back to Alabama.",
				"photo" : "",
				"party" : "Republican"	
			},
			{
				"name" : "Shadrack McGill",
				"bio" : "My faith is the driving force in my life, and I am seeking this seat because I feel the Lord calling me to do so. I refuse to sit idly by and see the values that were foundational to this country and are at the core of the faith shared by so many Alabamians assaulted and undermined in Washington. As Senator, I will fight for religious liberty, the Right to Life, traditional marriage, and work to return this country to the God who has blessed us throughout our history. For the sake of our children and grandchildren, this kind of bold leadership is needed if we hope to leave them a country we could recognize.",
				"photo" : "",
				"party" : "Republican" 
			},
			{
				"name" : "Jonathan McConnell",
				"bio" : "He's a veteran of the Iraq war, a small business owner, a proponent of term limits and a Washington outsider who disdains career politicians, as he calls one of his Republican primary opponents ",
				"photo" : "",
				"party" : "Republican"
			},
			{
				"name" : "Marcus Bowman",
				"bio" : "Marcus Bowman has a Masters degree in Public Policy (MPP), educated in the U.S. Constitution with a strict constructionist perspective (limited judicial interpretation). He gained specific knowledge of the federal legislative process in school and as a political analyst.",
				"photo" : "",
				"party" : "Republican"
			}


		]

	},
	{
		"state" : "Alaska",
		"name" : "Daniel Sullivan",
		"photo" : "",
		"party" : "Republican",
		"contested" : false,
		"candidates" : [

		]



	},
	{
		"state" : "Alaska",
		"name" : "Lisa Murkowski",
		"photo" : "",
		"party" : "Republican",
		"contested" : true,
		"candidates" : [

		]



	},
	{
		"state" : "",
		"name" : "",
		"photo" : "",
		"party" : "",
		"contested" : "",
		"candidates" : [

		]



	},
	{
		"state" : "Arizona",
		"name" : "Jeff Flake",
		"photo" : "",
		"party" : "Republican",
		"contested" :false ,
		"candidates" : [

		]



	},
	{
		"state" : "Arizona",
		"name" : "John McCain",
		"photo" : "",
		"party" : "Republican",
		"contested" : true,
		"candidates" : [
			{
				"name" : "Ann Kirkpatrick",
				"bio" : "Arizona born and raised, Ann Kirkpatrick resides in Flagstaff, and her earliest roots are found in Eastern Arizona on the White Mountain Apache Nation. Her father ran a general store and her mother was a schoolteacher. Ann graduated from Blue Ridge High School in the White Mountains and then worked her way through the University of Arizona, earning a bachelor's degree and then a law degree there.",
				"photo" : "",
				"party" : "Democrat"
			},
			{
				"name" : "Alex Meluskey",
				"bio" : "I am running for the United States Senate here in Arizona because as a citizen I am gravely concerned with the lack of direction, lack of principles and lack of citizen representation in our country.  I am in a unique position which enables me to shift my business interests into the hands of others focusing my energies on giving others like me a voice I feel we do not have.  I see too few leaders in Washington standing up for the people. The people deserve leaders who will be direct with where they stand on issues and what they plan to do. After that, the leaders must be accountable to their promises. I will be direct, I will be honest and I will be accountable to the people for my promises.",
				"photo" : "",
				"party" : "Republican"
			},
			{
				"name" : "Kelli Ward",
				"bio" : "It has been my life’s honor to represent the people of Arizona’s Fifth Legislative District as their senator. I understand and truly appreciate the trust and support they have given me to do what is right. But when I look at what’s happening in our federal government, I know Arizonans need new representation in the U.S. Senate, and that’s why I’m running.",
				"photo" : "",
				"party" : "Republican"
			},
			{
				"name" : "J.L. Mealer",
				"bio":"John Lewis Mealer is an Arizona born and raised life-long tinkerer and mechanic turned engineer and developer. After spending 25 years researching Arizona for clean industrial development and having party-politics shut him down time after time, John opted to run for Governor and repair what the parties have destroyed. Now that Governor Ducey has taken his place in the state house, JL is aiming for US Senate in 2016. It’s long past time that John McCain retires and Mealer feels he is best suited to take the seat. ",
				"photo" : "",
				"party" : "Americans Elect of Arizona"
			},
			{
				"name" : "Kyrsten Sinema",
				"bio":"Sinema is committed to helping our country return to the values that make America great—the same values that have guided her life so far: hard work, access to public education, fairness and opportunity.  Sinema takes her passion and talent into the 113th Congress, serving Arizona's Ninth Congressional District.  She has been to appointed to House Committee on Financial Services.  ",
				"photo" : "",
				"party" : "Democrat"
			},
			{
				"name" : "David Schweikert",
				"bio" : "David Schweikert is serving his third term in the United States Congress.  He holds a seat on the Financial Services Committee, Joint Economic Committee, Co-Chairs the Valley Fever Task force with House Majority Leader Kevin McCarthy, and is the Republican Co-Chair of both the Tunisia Caucus as well as the Caucus on Access to Capital & Credit.",
				"photo" : "",
				"party" : "Republican"
			},


		]



	},




];



var datas = [
		{
			first: "Brice",
			last: "Johnson",
			position: "F",
			height: "6-9",
			year: "SR",
			images: [
				"http://img.bleacherreport.net/img/images/photos/002/646/125/hi-res-164351660-brice-johnson-of-the-north-carolina-tar-heels_crop_north.jpg?w=630&h=420&q=75",
				"http://img.bleacherreport.net/img/images/photos/003/069/345/hi-res-586176cb4267aeca5d0d1e400905324e_crop_north.jpg?w=630&h=420&q=75",
			],
			games: 15,
			minutes: 384,
			fieldGoals: 93,
			fieldGoalsAttempted: 150,
			twoPoints: 93,
			twoPointsAttempted: 150,
			threePoints: 0,
			threePointsAttempted: 0,
			freeThrows: 43,
			freeThrowsAttempted: 51,
			offensiveRebounds: 33,
			defensiveRebounds: 113,
			assists: 19,
			steals: 13,
			blocks: 15,
			turnovers: 16,
			fouls: 42,
			points: 229
		},
		{
			first: "Justin",
			last: "Jackson",
			position: "F",
			height: "6-8",
			year: "SO",
			images: [
			],
			games: 15,
			minutes: 424,
			fieldGoals: 79,
			fieldGoalsAttempted: 157,
			twoPoints: 67,
			twoPointsAttempted: 109,
			threePoints: 12,
			threePointsAttempted: 48,
			freeThrows: 28,
			freeThrowsAttempted: 39,
			offensiveRebounds: 25,
			defensiveRebounds: 37,
			assists: 51,
			steals: 13,
			blocks: 7,
			turnovers: 20,
			fouls: 29,
			points: 198
		},
		{
			first: "Joel",
			last: "Berry",
			position: "G",
			height: "6-0",
			year: "SO",
			images: [
			],
			games: 15,
			minutes: 456,
			fieldGoals: 65,
			fieldGoalsAttempted: 151,
			twoPoints: 41,
			twoPointsAttempted: 86,
			threePoints: 24,
			threePointsAttempted: 65,
			freeThrows: 34,
			freeThrowsAttempted: 42,
			offensiveRebounds: 9,
			defensiveRebounds: 36,
			assists: 65,
			steals: 21,
			blocks: 2,
			turnovers: 31,
			fouls: 33,
			points: 188
		},
		{
			first: "Isaiah",
			last: "Hicks",
			position: "F",
			height: "6-8",
			year: "JR",
			images: [
			],
			games: 15,
			minutes: 282,
			fieldGoals: 54,
			fieldGoalsAttempted: 78,
			twoPoints: 54,
			twoPointsAttempted: 78,
			threePoints: 0,
			threePointsAttempted: 0,
			freeThrows: 37,
			freeThrowsAttempted: 48,
			offensiveRebounds: 27,
			defensiveRebounds: 33,
			assists: 14,
			steals: 8,
			blocks: 8,
			turnovers: 14,
			fouls: 36,
			points: 145
		},
		{
			first: "Marcus",
			last: "Paige",
			position: "Guard",
			height: "6-1",
			year: "SR",
			images: [
				"https://blog-blogmediainc.netdna-ssl.com/upload/SportsBlogcom/54607/0714741001427212108_filepicker.jpg",
				"http://sports.cbsimg.net/images/visual/whatshot/0324_UNC-Paige_inside.jpg",
				"http://thrownawaytoworthy.com/wp-content/uploads/2014/11/paige.jpg"
			],
			games: 9,
			minutes: 260,
			fieldGoals: 45,
			fieldGoalsAttempted: 90,
			twoPoints: 26,
			twoPointsAttempted: 45,
			threePoints: 19,
			threePointsAttempted: 45,
			freeThrows: 24,
			freeThrowsAttempted: 30,
			offensiveRebounds: 3,
			defensiveRebounds: 20,
			assists: 32,
			steals: 8,
			blocks: 4,
			turnovers: 6,
			fouls: 11,
			points: 133
		},
		{
			first: "Nate",
			last: "Britt",
			position: "G",
			height: "6-1",
			year: "JR",
			images: [
			],
			games: 15,
			minutes: 274,
			fieldGoals: 38,
			fieldGoalsAttempted: 93,
			twoPoints: 21,
			twoPointsAttempted: 52,
			threePoints: 17,
			threePointsAttempted: 41,
			freeThrows: 19,
			freeThrowsAttempted: 24,
			offensiveRebounds: 5,
			defensiveRebounds: 21,
			assists: 26,
			steals: 8,
			blocks: 0,
			turnovers: 15,
			fouls: 16,
			points: 112
		},
		{
			first: "Kennedy",
			last: "Meeks",
			position: "F",
			height: "6-9",
			year: "JR",
			images: [
			],
			images: [
				"http://i.imgur.com/I6VPCtp.jpg",
				"http://www.rantsports.com/ncaa-basketball/files/2014/01/kennedy-meeks.jpg",
			],
			games: 9,
			minutes: 220,
			fieldGoals: 47,
			fieldGoalsAttempted: 79,
			twoPoints: 47,
			twoPointsAttempted: 79,
			threePoints: 0,
			threePointsAttempted: 0,
			freeThrows: 17,
			freeThrowsAttempted: 24,
			offensiveRebounds: 19,
			defensiveRebounds: 48,
			assists: 14,
			steals: 13,
			blocks: 12,
			turnovers: 16,
			fouls: 24,
			points: 111
		},
		{
			first: "Theo",
			last: "Pinson",
			position: "G",
			height: "6-6",
			year: "SO",
			images: [
			],
			games: 15,
			minutes: 321,
			fieldGoals: 28,
			fieldGoalsAttempted: 69,
			twoPoints: 14,
			twoPointsAttempted: 35,
			threePoints: 14,
			threePointsAttempted: 34,
			freeThrows: 27,
			freeThrowsAttempted: 40,
			offensiveRebounds: 17,
			defensiveRebounds: 41,
			assists: 50,
			steals: 8,
			blocks: 8,
			turnovers: 23,
			fouls: 25,
			points: 97
		},
		{
			first: "Joel",
			last: "James",
			position: "F",
			height: "6-10",
			year: "SR",
			images: [
			],
			games: 15,
			minutes: 165,
			fieldGoals: 17,
			fieldGoalsAttempted: 42,
			twoPoints: 17,
			twoPointsAttempted: 42,
			threePoints: 0,
			threePointsAttempted: 0,
			freeThrows: 10,
			freeThrowsAttempted: 18,
			offensiveRebounds: 19,
			defensiveRebounds: 29,
			assists: 0,
			steals: 1,
			blocks: 5,
			turnovers: 10,
			fouls: 24,
			points: 44
		},
		{
			first: "Luke",
			last: "Maye",
			position: "F",
			height: "6-7",
			year: "FR",
			images: [
			],
			games: 14,
			minutes: 100,
			fieldGoals: 8,
			fieldGoalsAttempted: 21,
			twoPoints: 7,
			twoPointsAttempted: 17,
			threePoints: 1,
			threePointsAttempted: 4,
			freeThrows: 3,
			freeThrowsAttempted: 8,
			offensiveRebounds: 16,
			defensiveRebounds: 15,
			assists: 4,
			steals: 1,
			blocks: 2,
			turnovers: 3,
			fouls: 13,
			points: 20
		},
		{
			first: "Kenny",
			last: "Williams",
			position: "G",
			height: "6-3",
			year: "FR",
			images: [
			],
			games: 12,
			minutes: 64,
			fieldGoals: 6,
			fieldGoalsAttempted: 16,
			twoPoints: 6,
			twoPointsAttempted: 7,
			threePoints: 0,
			threePointsAttempted: 9,
			freeThrows: 2,
			freeThrowsAttempted: 2,
			offensiveRebounds: 1,
			defensiveRebounds: 4,
			assists: 4,
			steals: 3,
			blocks: 0,
			turnovers: 0,
			fouls: 4,
			points: 14
		},
		{
			first: "Kanler",
			last: "Coker",
			position: "G",
			height: "6-4",
			year: "JR",
			images: [
			],
			games: 8,
			minutes: 10,
			fieldGoals: 1,
			fieldGoalsAttempted: 4,
			twoPoints: 1,
			twoPointsAttempted: 2,
			threePoints: 0,
			threePointsAttempted: 2,
			freeThrows: 0,
			freeThrowsAttempted: 0,
			offensiveRebounds: 0,
			defensiveRebounds: 3,
			assists: 1,
			steals: 0,
			blocks: 0,
			turnovers: 0,
			fouls: 1,
			points: 2
		},
		{
			first: "Spenser",
			last: "Dalton",
			position: "G",
			height: "6-3",
			year: "SR",
			images: [
			],
			games: 8,
			minutes: 10,
			fieldGoals: 1,
			fieldGoalsAttempted: 6,
			twoPoints: 1,
			twoPointsAttempted: 1,
			threePoints: 0,
			threePointsAttempted: 5,
			freeThrows: 0,
			freeThrowsAttempted: 0,
			offensiveRebounds: 1,
			defensiveRebounds: 1,
			assists: 0,
			steals: 0,
			blocks: 0,
			turnovers: 1,
			fouls: 1,
			points: 2
		},
		{
			first: "Stilman",
			last: "White",
			position: "G",
			height: "6-0",
			year: "JR",
			images: [
			],
			games: 8,
			minutes: 13,
			fieldGoals: 1,
			fieldGoalsAttempted: 4,
			twoPoints: 1,
			twoPointsAttempted: 4,
			threePoints: 0,
			threePointsAttempted: 0,
			freeThrows: 0,
			freeThrowsAttempted: 0,
			offensiveRebounds: 2,
			defensiveRebounds: 2,
			assists: 1,
			steals: 0,
			blocks: 0,
			turnovers: 1,
			fouls: 2,
			points: 2
		},
		{
			first: "Justin",
			last: "Coleman",
			position: "G",
			height: "6-2",
			year: "SR",
			images: [
			],
			games: 5,
			minutes: 7,
			fieldGoals: 0,
			fieldGoalsAttempted: 0,
			twoPoints: 0,
			twoPointsAttempted: 0,
			threePoints: 0,
			threePointsAttempted: 0,
			freeThrows: 1,
			freeThrowsAttempted: 2,
			offensiveRebounds: 0,
			defensiveRebounds: 0,
			assists: 0,
			steals: 0,
			blocks: 0,
			turnovers: 1,
			fouls: 1,
			points: 0
		},
		{
			first: "Toby",
			last: "Egbuna",
			position: "F",
			height: "6-4",
			year: "SR",
			images: [
			],
			games: 8,
			minutes: 10,
			fieldGoals: 0,
			fieldGoalsAttempted: 5,
			twoPoints: 0,
			twoPointsAttempted: 2,
			threePoints: 0,
			threePointsAttempted: 3,
			freeThrows: 0,
			freeThrowsAttempted: 0,
			offensiveRebounds: 0,
			defensiveRebounds: 2,
			assists: 0,
			steals: 1,
			blocks: 0,
			turnovers: 1,
			fouls: 1,
			points: 0
		}
	];