
/* car use: number of
   commuting
   multizoning
   wlakable cities
   public tranportation 
   electirc cars
   not preportianl to miles travled
   bus v car 
*/
const TravelInfo = "this is infomation about Transit"
const PassengerPlanes = {"Title":"Passenger Flights","Range":{"Min": 0, "Max":200}, "Default":100, "CO2Muitiplyer": 751680000/100}
const FreightPlanes = {"Title":"Freight Flights","Range":{"Min": 0, "Max":200}, "Default":100, "CO2Muitiplyer": 176320000/100}
const Trains = {"Title":"Rail Trips","Range":{"Min": 0, "Max":200}, "Default":100, "CO2Muitiplyer": 80000000/100}
const FreightRoad = {"Title":"Freight Road Trips","Range":{"Min": 0, "Max":200}, "Default":100, "CO2Muitiplyer": 2352000000/100}
const PassengerRoad = {"Title":"Passenger Road Trips","Range":{"Min": 0, "Max":200}, "Default":100, "CO2Muitiplyer": 3608000000/100}
const Shipping = {"Title":"Shipping","Range":{"Min": 0, "Max":200}, "Default":100, "CO2Muitiplyer": 848000000/100}
const Pipelines = {"Title":"Pipelines","Range":{"Min": 0, "Max":200}, "Default":100, "CO2Muitiplyer": 176000000/100}


const TravelPolicies = [PassengerRoad,FreightRoad, Trains, PassengerPlanes, FreightPlanes, Shipping,Pipelines]

var TravelData = { "TopicInfo": TravelInfo, "Policies" : TravelPolicies}
export {TravelData};

/*
sources 
https://ourworldindata.org/co2-emissions-from-transport
Planes: 
Cars:
Bus: 
Train: 
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