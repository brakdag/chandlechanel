const data = require("./investing")


function loadData(ticker,market,l,cb){
data.get_history(ticker,market,l,x=>{cb(x)})
}


function maker(ticker,market,l,cb){
	loadData(ticker,market,l,cb=>{	
	// sort by time.
	x=x.sort((a,b)=>a.time-b.time)
	cb(x)
});








}

module.exports = {maker}

