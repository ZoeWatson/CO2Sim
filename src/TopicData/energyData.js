// Energy is constructed through energy sources 
// Policy Name - Value Range (Energy produced) - Current Value (Energy Produced) tWh - Co2 Produced per  tonne
const EnergyInfo = "this is infomation about energy"
const BioPower = {"Title":"Biomass","Range":{"Min": 0, "Max":20000}, "Default":151, "CO2Muitiplyer":53000}
const Coal = {"Title":"Coal", "Range":{"Min": 0, "Max":20000}, "Default":5624, "CO2Muitiplyer":1001000}
const Geothermal = {"Title":"Geothermal", "Range":{"Min": 0, "Max":20000}, "Default":151, "CO2Muitiplyer":37000}
const Hydropower = {"Title":"Hydropower", "Range":{"Min": 0,"Max":20000}, "Default": 1417, "CO2Muitiplyer":21000}
const NaturalGas = {"Title":"NaturalGas", "Range":{"Min": 0,"Max":20000}, "Default":4942, "CO2Muitiplyer":486000}
const Nuclear = {"Title":"Nuclear", "Range":{"Min": 0, "Max":20000}, "Default": 840, "CO2Muitiplyer":13000}
const Oil = {"Title":"Oil", "Range":{"Min": 0, "Max":20000}, "Default":6642, "CO2Muitiplyer":840000}
const Photovoltaics = {"Title":"Photovoltaics", "Range":{"Min": 0, "Max":20000}, "Default":216, "CO2Muitiplyer":43000}
const ConcentratingSolar = {"Title":"Concentrating Solar Power", "Range":{"Min": 0, "Max":20000}, "Default":216, "CO2Muitiplyer":280000}
const LandWind = {"Title":"Land Based Wind", "Range":{"Min": 0, "Max":20000},  "Default":344, "CO2Muitiplyer":120000}
const SeaWind = {"Title":"Offshore Wind", "Range":{"Min": 0, "Max":20000},  "Default": 344, "CO2Muitiplyer":190000}
const EnergyPolicies = [BioPower, Coal, Geothermal, Hydropower, NaturalGas, Nuclear, Oil, Photovoltaics, ConcentratingSolar, LandWind, SeaWind]

var EnergyData = { "TopicInfo": EnergyInfo, "Policies" : EnergyPolicies}
export {EnergyData};

/*
// Sources 
// Default values
https://ourworldindata.org/grapher/electricity-production-by-source  
https://ourworldindata.org/energy-mix 
// solar/wind - split in half-> need to check if reasnable 
// bio/geo - split in half "other" -> need to check if reasnable 
// units are incorect but ratios seem to be ok

Range
https://ourworldindata.org/grapher/electricity-demand?tab=table
28,527 TWh energy demand 2022
https://www.anthropocenemagazine.org/howmuchenergy/
1,077,480 TWh energy demand by 2100
So a good range is 0 - 20,000 
// Co2 Production 
https://www.energy.gov/eere/wind/articles/how-wind-can-help-us-breathe-easier
Sea wind: 19000 Tonnes/tWh
Land Wind: 12000 Tonnes/tWh
Hydropower: 21000 Tonnes/tWh
Geothermal: 37000 Tonnes/tWh
Concentrating Solar Power: 28000 Tonnes/tWh
Photovoltaics: 43000 Tonnes/tWh
BioPower: 52000 Tonnes/tWh
Nuclear: 13000  Tonnes/tWh
Natural Gas: 486000  Tonnes/tWh
Oil: 840000  Tonnes/tWh
Coal: 1001000  Tonnes/tWh
*/