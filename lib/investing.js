const request = require("request")
const url_base= `https://www.investing.com/`
const url_login = `${url_base}members-admin/auth/signInByEmail/`
const url_token = `${url_base}members-admin/auth/getSignInPopUp`

function get_history(ticker,market,dias,cb){

dias=dias>500?500:dias
console.log(`[Investing.com][${market}:${ticker} days:${dias}`)
var pair_interval=86400

var pairs=[
{market:"NASDAQ",ticker:"GGAL",pair_id:32371},
{market:"NASDAQ",ticker:"AAPL",pair_id:6408},
{market:"NASDAQ",ticker:"TSLA",pair_id:13994},
{market:"NASDAQ",ticker:"AMNZ",pair_id:6435},
{market:"NASDAQ",ticker:"AMD",pair_id:8274},
{market:"NASDAQ",ticker:"NVDA",pair_id:6497},
{market:"NASDAQ",ticker:"BABA",pair_id:941155},
{market:"NASDAQ",ticker:"GOOGL",pair_id:6369},
{market:"BCBA",ticker:"BTCUSD",pair_id:945629},
]
try{
var pair= pairs.filter(a=>a.market==market && a.ticker==ticker)[0]
if (pair.length<=0) throw "error:no se ecuentra el par_id"
	var _headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
    'Referer': 'https://www.investing.com/',
    'X-Requested-With': 'XMLHttpRequest'
}
	var link=`https://www.investing.com/common/modules/js_instrument_chart/api/data.php?pair_id=${pair.pair_id}&pair_id_for_news=${pair.pair_id}&chart_type=candlestick&pair_interval=${pair_interval}&candle_count=${dias}&events=yes&volume_series=yes`

request({url: link,method: "get",headers: _headers}, function (err, resp, body) {    
	var datos = JSON.parse(body)
	datos=datos.candles.map(a=>{return {time:Math.trunc(a[0]/1000),open:a[1],high:a[2],low:a[3],close:a[4],volume:a[5]}})
    cb(datos)
})
}catch(err){
	console.log(err)
}
}

module.exports ={get_history}



/*investing.js

sitio:https://www.investing.com/
Grafico de datos ADR en tiempo real correctos. Datos a partir de JSON.

Login:brakdag@gmail.com
password:chinofer12

también necesita de cookies.

form
email: brakdag@gmail.com
password: chinofer12
logintoken: 50c74c0d28c8d3d0594be3fd4c4b1a87
onAuthCompleteAction: {"type":"topBar","location":{"path":"/","search":"","hash":""},"mmID":1}

login
https://www.investing.com/members-admin/auth/signInByEmail/

logout 
https://www.investing.com/members-admin/logout?logoutToken=ea3f022b026cb01922df2ba39e59d857
cookie 

udid=64066cafdb0d4abb5733e9a4fd873c11;
__gads=ID=36385046501f5451:T=1606777118:S=ALNI_MYpOi_N5HquW9T6E1HBOQ2jYy6_ww;
_ga=GA1.2.2075129470.1606777120;
_fbp=fb.1.1606777138953.1982658950;

adBlockerNewUserDomains=1606777114;adFreePromoCookie=7;G_ENABLED_IDPS=google;adFreePromoCookieorange=2;M;protectedMedia=2;

_hjid=482999fc-5a94-4835-9a56-54d8fdfe5fc6;
OptanonAlertBoxClosed=2021-01-08T17:35:44.131Z;
OptanonConsent=isIABGlobal=false&datestamp=Fri Jan 08 2021 14:35:52 GMT-0300 (hora estándar de Argentina)&version=6.7.0&hosts=&landingPath=NotLandingPage&groups=C0001:1,C0002:1,C0003:1,C0004:1&AwaitingReconsent=false&geolocation=AR;
_pbjs_userid_consent_data=3524755945110770;
SideBlockUser=a:2:{s:10:"stack_size";a:1:{s:11:"last_quotes";i:8;}s:6:"stacks";a:1:{s:11:"last_quotes";a:7:{i:0;a:3:{s:7:"pair_ID";s:5:"20982";s:10:"pair_title";s:0:"";s:9:"pair_link";s:24:"/equities/banco-macro-sa";}i:1;a:3:{s:7:"pair_ID";s:3:"504";s:10:"pair_title";s:0:"";s:9:"pair_link";s:20:"/etfs/diamonds-trust";}i:2;a:3:{s:7:"pair_ID";s:5:"26055";s:10:"pair_title";s:0:"";s:9:"pair_link";s:23:"/equities/byggmax-group";}i:3;a:3:{s:7:"pair_ID";s:5:"13304";s:10:"pair_title";s:0:"";s:9:"pair_link";s:24:"/equities/gp-fin-galicia";}i:4;a:3:{s:7:"pair_ID";s:5:"29590";s:10:"pair_title";s:0:"";s:9:"pair_link";s:16:"/equities/ypf-sa";}i:5;a:3:{s:7:"pair_ID";s:4:"6408";s:10:"pair_title";s:0:"";s:9:"pair_link";s:28:"/equities/apple-computer-inc";}i:6;a:3:{s:7:"pair_ID";s:5:"32371";s:10:"pair_title";s:0:"";s:9:"pair_link";s:41:"/equities/grupo-financiero-galicia-sa-adr";}}}};
 _gid=GA1.2.699064652.1614699014; 
OB-USER-TOKEN=922532e8-989b-4865-989a-d62acdc8132e;
editionPostpone=1614818767131;
_VT_content_2436855_2=1;
PHPSESSID=h1rpr57jdm1717ujcec9p521gs;
StickySession=id.52532013618.506.www.investing.com; 
logglytrackingsession=ed87d7b3-c68c-4207-8d7a-17a0c99d2953;
SKpbjs-id5id={"created_at":"2021-01-06T18:10:48Z","id5_consent":true,"original_uid":"ID5-ZHMOJQ58Mx9agtp9cG4Q2WfJZzxh0kXxbnGoxEl7fw","universal_uid":"ID5-ZHMOmoJYDQLSjL1IXLf6K-TpnjYvZhjiS2MehbAkGw","signature":"ID5_ARqZt4J-W9-F8duuyS25fyBnCWBHXoC7W_Zq2yo5FcpfvEdGV7zDCa_y72GTEUvOG6NvF-KgYIg0_vn-Jj-ZcNI","link_type":2,"cascade_needed":true}; 
SKpbjs-id5id_last=Fri, 05 Mar 2021 13:48:57 GMT;
SKpbjs-unifiedid={"TDID":"2f98f8b7-22b5-4aff-ac9c-9732fa26c040","TDID_LOOKUP":"TRUE","TDID_CREATED_AT":"2021-02-05T13:48:46"};
SKpbjs-unifiedid_last=Fri, 05 Mar 2021 13:48:57 GMT; G_AUTHUSER_H=0; r_p_s_n=1; comment_notification_203736965=1; adsFreeSalePopUpf155af85372f01090d7092111d35bf0c=1; gtmFired=OK; adsFreeSalePopUp=2; id5id.1st_212_nb=2; geoC=AR; smd=64066cafdb0d4abb5733e9a4fd873c11-1615030158; outbrain_cid_fetch=true; _gat=1; _gat_allSitesTracker=1; ses_id=Zyk+f25hNj4ydjk/YTAxM2AyYj5jZzI2NT1lYDs5YXc5LWJsMWY0cj8wOXc1NmF9MmQ+PTVjZTcwNGE+NzBlMWc3PmtuajZtMmA5Z2FmMWVgY2I6Y2EyZjVmZWU7P2FuOTxiPDE/NGc/YDllNWphajIgPiI1cWV0MGJhMTd2ZSJnaD5/bj42ajJgOTZhNDE0YGdiMWNmMjc1N2UwOzhheTly; nyxDorf=ODw+ajFuPnw1Z2xiNXhkZzFmMGJjejU2MTliZw==


*/
///investigación


/*
var token 
var cookie=["adBlockerNewUserDomains=1606777114","adFreePromoCookie=7","G_ENABLED_IDPS=google","adFreePromoCookieorange=2","M","protectedMedia=2"]


getToken(t =>token=t)


var headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0'
   , 'Content-Type': 'application/x-www-form-urlencoded'
  };
*/
/* getToken, retorna el token para el longin.
*/
/*
function getToken(cb){
	var link = url_token
	request({url:link,method:'get',headers:headers},function(err,res,body){
		var searchstr="$('#logintoken').val(window['"
		var start =body.indexOf(searchstr)+searchstr.length
		var end = body.indexOf("']",start+1)
		var token = body.substring(start,end)
	//console.log(start,end,token,token.length,body)
	cb(token)
	})
}

function login(cb) {
	var form = {
		"email": "brakdag@gmail.com",
		"password": "chinofer12",
		"logintoken": token
	}
	request({url:url_login,method:'post',form:form,headers:headers},function(err,res,body){
	

	cookie = cookie.concat(res.toJSON().headers['set-cookie']).filter(a=>a.indexOf("deleted")==-1)
	headers.Cookie=cookie
	cb(res.toJSON())
	})
}

function getCookie(){
	return cookie
}*/
