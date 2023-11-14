
const LandInfo = "this is infomation about land"
const SlashAndBurn = {"Title": "Slash and Burn", "Range": {"Min": 0,"Max":250}, "Default":100,  "effect":{"Energy Production": 1}}  
const Forestation = {"Title":"Biomass","Range":{"Min": 0, "Max":250}, "Default":100, "effect":{"Energy Production": 1}}
const LandPolicies = [SlashAndBurn, Forestation]

var LandData = { "TopicInfo": LandInfo, "Policies" : LandPolicies}
export {LandData};

/*
ccc
*/