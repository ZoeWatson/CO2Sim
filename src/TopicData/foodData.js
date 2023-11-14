
// Energy is constructed through energy sources 
// Policy Name - Value Range (Energy produced) - Current Value (Energy Produced) TWh - Co2 Produced per TWh Tonne 
/*
Info: Energy Needs, how we get energy. 
Fusion research 
Global energy demand grew by 2.9% in 2018 and in a business as usual scenario, by 2040 global energy consumption will reach 740 million terajoules - equivalent to an additional 30 percent growth. 
Energy need : 580 million terajoules.
Coal -> runs out 

*/
const EnergyInfo = "this is infomation about energy"
//[{"CO2Muitiplyer" : 5}]
const Biofuels = {"Title": "Biofuels", "Range": {"Min": 0,"Max":2777}, "Default":1199, "effect":{"Energy Production": 1}}  
const Biomass = {"Title":"Biomass","Range":{"Min": 0, "Max":178898}, "Default":11111, "effect":{"Energy Production": 1}}
const Coal = {"Title":"Coal", "Range":{"Min": 0, "Max":237935}, "Default":44854, "effect":{"Energy Production": 1}}
const Geothermal = {"Title":"Geothermal", "Range":{"Min": 0, "Max":17889}, "Default":2413, "effect":{"Energy Production": 1}}
const Hydropower = {"Title":"Hydropower", "Range":{"Min": 0,"Max":178898.675}, "Default":11299, "effect":{"Energy Production": 1}}
const NaturalGas = {"Title":"NaturalGas", "Range":{"Min": 0,"Max":178898.675}, "Default":39413, "effect":{"Energy Production": 1}}
const Nuclear = {"Title":"Nuclear", "Range":{"Min": 0, "Max":178898.675}, "Default":6702, "effect":{"Energy Production": 1}}
const Oil = {"Title":"Oil", "Range":{"Min": 0, "Max":178898.675}, "Default":52969, "effect":{"Energy Production": 1}}
const Solar = {"Title":"Solar", "Range":{"Min": 0, "Max":178898.675}, "Default":3448, "effect":{"Energy Production": 1}}
const Wind = {"Title":"Wind", "Range":{"Min": 0, "Max":178898},  "Default":5487, "effect":{"Energy Production": 1}}
const EnergyPolicies = [Biofuels, Biomass, Coal, Geothermal, Hydropower, NaturalGas, Nuclear, Oil, Solar, Wind ]

//const CarbonTax 

var FoodData = { "TopicInfo": EnergyInfo, "Policies" : EnergyPolicies}
export {FoodData};

/*
// the source of my lies
https://ourworldindata.org/grapher/electricity-production-by-source
https://ourworldindata.org/grapher/electricity-demand
https://www.theworldcounts.com/challenges/climate-change/energy/global-energy-consumption
https://ourworldindata.org/energy-mix 
https://www.theworldcounts.com/challenges/climate-change/energy/global-energy-consumption 
In particular, the tax is associated with an estimated long-run 19% decrease in transportation-related emissions including personal vehicle traffic (when using difference-in-differences), and an average reduction of 5% when using synthetic control.

https://link.springer.com/article/10.1007/s10640-022-00679-w#:~:text=In%20particular%2C%20the%20tax%20is,5%25%20when%20using%20synthetic%20control.

https://ourworldindata.org/grapher/per-capita-co2-by-fuel
*/