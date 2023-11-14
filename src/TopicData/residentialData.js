
// Policy Name - Value Range (Energy produced) - Current Value (Energy Produced) TWh - Co2 Produced per TWh Tonne 
/*
Install a Heat Pump
Passive House buildings
Insulation 
Gas stove ban
Residential space (apartment vs mansion) 
Appliance efficiency 
Light efficiency 

*/
const ResidentialInfo = "this is infomation about residental sources"
const HeatPump = {"Title": "Heat Pump", "Range": {"Min": 0,"Max":100}, "Default":50,  "effect":{"Energy Need": 1}}  
const PassiveHousing = {"Title":"Passive Housing","Range":{"Min": 0,"Max":100}, "Default":50,  "effect":{"Energy Need": 1}}
const GasStoveBan = {"Title":"Gas Stove Ban", "Range":{"Min": 0,"Max":67980000}, "Default":67980000,  "effect":{"CO2 Production": 0.5}}
const ResidentialSpace = {"Title":"Residential space", "Range":{"Min": 0,"Max":100}, "Default":50,  "effect":{"Energy Need": 1}}
const ApplianceEfficiency = {"Title":"Appliance efficiency", "Range":{"Min": 0,"Max":100}, "Default":50,  "effect":{"Energy Need": 1}}
const LightEfficiency = {"Title":"Light efficiency", "Range":{"Min": 0,"Max":100}, "Default":50,  "effect":{"Energy Need": 1}}
const Insulation = {"Title":"Insulation", "Range":{"Min": 0,"Max":100}, "Default":50,  "effect":{"Energy Need": 1}}
const Citysprawl = {"Title":"Citysprawl", "Range":{"Min": 0,"Max":100}, "Default":50,  "effect":{"Energy Need": 1}}

const ResidentialPolicies = [HeatPump, PassiveHousing, GasStoveBan, ResidentialSpace, ApplianceEfficiency, LightEfficiency, Insulation, Citysprawl]

var ResidentialData = { "TopicInfo": ResidentialInfo, "Policies" : ResidentialPolicies}
export {ResidentialData};

/*
gas stove:"Natural gas appliances contribute about half a tonne per year to a household's greenhouse gas emissions"
 https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/news-and-features/home-on-the-range-report.pdf
 https://www.statista.com/topics/2183/ranges-ovens-and-microwaves/
 */