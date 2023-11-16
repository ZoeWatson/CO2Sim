
const LandInfo = "this is infomation about land"
const SlashAndBurn = {"Title": "Slash and Burn", "Range": {"Min": 0,"Max":200}, "Default": 100,  "CO2Muitiplyer": 241000000/100}  
const Afforestation = {"Title":"Afforestation","Range":{"Min": 0, "Max":200}, "Default":0, "CO2Muitiplyer": -3700000000/100}
const Deforestation = {"Title":"Deforestation","Range":{"Min": 0, "Max":200}, "Default":100, "CO2Muitiplyer": 3700000000/100}
const LandPolicies = [SlashAndBurn, Afforestation, Deforestation]

var LandData = { "TopicInfo": LandInfo, "Policies" : LandPolicies}
export {LandData};

/*
The mean CO2 emitted
annually from slash-and-burn agriculture in America, Asia and Africa had been estimated at 295, 241 and 205
Tg, respectively (Silva et al., 2011).
file:///C:/Users/zwzwa/Downloads/570-Article%20Text-1615-1-10-20200920.pdf

his	could	sequester	at	least	3.7	GtCO2	per	year	for	decades.	[Source	IPCC	SR15	Report	8	October	2018	Chapter	4	page	4-47]	
chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://unfccc.int/sites/default/files/resource/GCA_2019_02_15_N0CO2_org.pdf
*/