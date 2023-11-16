
// disposable, AI, local shipping
//Appliance efficiency Light efficiency building Insulation efficiency Product Miles 

const IndustryInfo = "this is infomation about Industry sources"
const Steal = {"Title": "Steal Production", "Range": {"Min": 0,"Max":200}, "Default":100,   "CO2Muitiplyer":2240746307/100}  
const Concrete = {"Title":"Concrete Production","Range":{"Min": 0,"Max":200}, "Default":100,  "CO2Muitiplyer":18000000000/100}
const Glass = {"Title":"Glass Production","Range":{"Min": 0,"Max":200}, "Default":100,  "CO2Muitiplyer":95000000/100}
const Plastic = {"Title":"Plastic Production","Range":{"Min": 0,"Max":200}, "Default":100,  "CO2Muitiplyer":1800000000/100}
const Aluminium  = {"Title":"Aluminium Production","Range":{"Min": 0,"Max":200}, "Default":100,  "CO2Muitiplyer":270000000/100}


const IndustryPolicies = [Steal, Concrete, Glass, Plastic, Aluminium]

var IndustryData = { "TopicInfo": IndustryInfo, "Policies" : IndustryPolicies}
export {IndustryData};

/*
info:https://www.unep.org/news-and-stories/press-release/co2-emissions-buildings-and-construction-hit-new-high-leaving-sector
Steal: https://bellona.org/news/fossil-fuels/2019-03-is-steel-stealing-our-future
concerte : https://www.nature.com/articles/d41586-021-02612-5
Glass: https://www.statista.com/statistics/1071205/carbon-dioxide-emissions-from-glass-production-worldwide/
Plastic: https://www.oecd.org/environment/plastics/increased-plastic-leakage-and-greenhouse-gas-emissions.htm
Aluminium: https://www.iea.org/energy-system/industry/aluminium
*/
