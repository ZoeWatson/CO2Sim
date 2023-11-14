
/* car use: number of
   train use:
   bus use:
   THis is for canada 
*/
const TravelInfo = "this is infomation about Transit"
const Commuting  = {"Title": "Work From Home", "Range": {"Min": 0,"Max":2777}, "Default":100, "effect":{"Car Use":-1, "Bus Use": -1}}  
const MultiZoning  = {"Title":"MultiZoning","Range":{"Min": 0, "Max":178898}, "Default":11111, "effect":{"Car Use":-1}}
const WalkableCities  = {"Title":"Walkable Cities", "Range":{"Min": 0, "Max":237935}, "Default":44854, "effect":{"Car Use":-1}}
const Train = {"Title":"Train", "Range":{"Min": 0, "Max":17889}, "Default":2413, "effect":{"Car Use":-1, "Train Use": 1}}
const Bus = {"Title":"Bus", "Range":{"Min": 0,"Max":178898.675}, "Default":11299, "effect":{"Car Use":-1, "Bus Use": 1}}
const ElectricCars = {"Title":"Electric Cars", "Range":{"Min": 0,"Max":178898.675}, "Default":39413,"effect":{"Energy Need": 1, "Car Use":-1}}

const TravelPolicies = [Commuting, MultiZoning, WalkableCities, Train, Bus, ElectricCars ]

var TravelData = { "TopicInfo": TravelInfo, "Policies" : TravelPolicies}
export {TravelData};

/*
sources 
13.2 million Canadians commute to work via car 24.5 minutes in May 2023
1.6 million people public transit 42.2 minutes.
 https://www150.statcan.gc.ca/n1/daily-quotidien/230822/dq230822b-eng.htm

emmsiion factor per km 
Rail 0.1 Car  0.2 Foot  0.0 Bus 0.1

Commuting - range = 0 to total commuting traffic
mutlizoning - range = 0 to total driving for nessiectiys 1/2
walable cities = 0 to total driving for nessiectiys 1/2
train = 0 - total trips
bus = 0- total trips 
electric cars - replace cars with electricty 

 chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://ghgprotocol.org/sites/default/files/2022-12/Chapter7.pdf
*/