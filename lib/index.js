const data = require("./investing")



data.get_history("GGAL","NASDAQ",20,x=>{
	maker(x)
});


function maker(d){
	// sort by time.
	

	console.log(d)
}


