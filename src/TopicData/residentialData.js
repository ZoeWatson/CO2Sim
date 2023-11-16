
// Policy Name - Value Range (Energy produced) - Current Value (Energy Produced) TWh - Co2 Produced per TWh Tonne 
/*
Install a Heat Pump
Passive House buildings
Insulation 
Gas stove ban
Residential space (apartment vs mansion) 
Appliance efficiency 
Light efficiency 
Smaller houses use less energy. Average household energy use is highest in single-family houses (80.85 million BTU), followed by mobile homes (61.3 million BTU), apartments with 2-4 units (53.5 million BTU), and apartments with 5+ units in the building (33.7 million BTU).11
*/
// refrigeration
const ResidentialInfo = "this is infomation about residental and comerical  sources"
const FastFashion  = {"Title": "Fast Fashion", "Range": {"Min": 0,"Max":200}, "Default": 100,  "CO2Muitiplyer": 1200000000/100}  
const BitCoin  = {"Title": "BitCoin", "Range": {"Min": 0,"Max":200}, "Default": 100,  "CO2Muitiplyer": 85890000/100}  
const Refrigeration = {"Title":"Refrigeration","Range":{"Min": 0, "Max":200}, "Default":100, "CO2Muitiplyer": 455951050/100}
const Laundry = {"Title":"Laundry","Range":{"Min": 0, "Max":200}, "Default":100, "CO2Muitiplyer": 247515/100}

const ResidentialPolicies = [Refrigeration, Laundry, BitCoin, FastFashion]

var ResidentialData = { "TopicInfo": ResidentialInfo, "Policies" : ResidentialPolicies}
export {ResidentialData};

/*
refrigeration: chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://bigee.net/media/filer_public/2012/12/04/bigee_doc_2_refrigerators_freezers_worldwide_potential_20121130.pdf
https://css.umich.edu/publications/factsheets/sustainability-indicators/carbon-footprint-factsheet
BitCoin: https://unu.edu/press-release/un-study-reveals-hidden-environmental-impacts-bitcoin-carbon-not-only-harmful-product#:~:text=Bitcoin%20mining%20emitted%20over%2085.89,warming%20below%202%20degrees%20Celsius.
Fashion: https://carbonliteracy.com/fast-fashions-carbon-footprint/
Laundry:https://earth911.com/home-garden/reducing-washer-and-dryer-environmental-impacts
https://www.statista.com/statistics/1168557/washing-machines-and-dryers-unit-sales-worldwide/
https://climate.mit.edu/explainers/heating-and-cooling
gas stove:"Natural gas appliances contribute about half a tonne per year to a household's greenhouse gas emissions"
 https://www.bchydro.com/content/dam/BCHydro/customer-portal/documents/news-and-features/home-on-the-range-report.pdf
 https://www.statista.com/topics/2183/ranges-ovens-and-microwaves/
 */