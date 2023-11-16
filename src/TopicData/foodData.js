const FoodInfo = "this is infomation about food"
const Rice = {"Title": "Rice", "Range": {"Min": 0,"Max":200}, "Default":100,   "CO2Muitiplyer":2263410000/100} 
const Shrimp = {"Title": "Farmed Shrimp", "Range": {"Min": 0,"Max":200}, "Default":100,   "CO2Muitiplyer":159894000/100} 
const Goat = {"Title":"Goat","Range":{"Min": 0,"Max":200}, "Default":100,  "CO2Muitiplyer":20000000/100}
const Buffalo = {"Title":"Buffalo","Range":{"Min": 0,"Max":200}, "Default":100,  "CO2Muitiplyer":410000000/100}
const Sheep = {"Title":"Sheep","Range":{"Min": 0,"Max":200}, "Default":100,  "CO2Muitiplyer":450000000/100}
const Chicken = {"Title":"Chicken","Range":{"Min": 0,"Max":200}, "Default":100,  "CO2Muitiplyer":930000000/100}
const Pork = {"Title":"Pork","Range":{"Min": 0,"Max":200}, "Default":100,  "CO2Muitiplyer":1200000000/100}
const Beef = {"Title":"Beef","Range":{"Min": 0,"Max":200}, "Default":100,  "CO2Muitiplyer":4300000000/100}
const Milk  = {"Title":"Milk","Range":{"Min": 0,"Max":200}, "Default":100,  "CO2Muitiplyer":1600000000/100}
const Eggs = {"Title":"Eggs","Range":{"Min": 0,"Max":200}, "Default":100,  "CO2Muitiplyer":280000000/100}
const Cheese  = {"Title":"Cheese","Range":{"Min": 0,"Max":200}, "Default":100,  "CO2Muitiplyer":532080000/100}
const Chocolate  = {"Title": "Chocolate", "Range": {"Min": 0,"Max":200}, "Default": 100,  "CO2Muitiplyer": 235000000/100}  
const Coffee  = {"Title": "Coffee", "Range": {"Min": 0,"Max":200}, "Default": 100,  "CO2Muitiplyer": 293190000/100}  
const PalmOil  = {"Title": "Palm Oil", "Range": {"Min": 0,"Max":200}, "Default": 100,  "CO2Muitiplyer": 538740000/100}  

const FoodPolicies = [Rice, Goat, Beef,Pork,Shrimp, Buffalo,Sheep, Chicken, Milk, Eggs,Cheese,Chocolate,Coffee, PalmOil]

var FoodData = { "TopicInfo": FoodInfo, "Policies" : FoodPolicies}
export {FoodData};
