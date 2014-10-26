/*
From the Hymn, My Faith Has Found a Resting Place - https://www.hymnal.net/en/hymn/h/330
Let's do a function that does not take in any argument or "plea"
*/

function myFaith(){
	//does not take in any argument
	if(arguments.length > 0){
		if(argument[0] == "plea"){
			return {
				message: "I need no other argument, I need no other plae",
				url: "https://www.hymnal.net/en/hymn/h/330"
			}
		}
		return {
			message: "I need no other argument",
			url: "https://www.hymnal.net/en/hymn/h/330"
		}
	}else{
		return {
			message: "Glad you know I need no other argument :)",
			url: "https://www.hymnal.net/en/hymn/h/330"
		}
	}
}

myFaith("plea");

myFaith("argument");

myFaith();


