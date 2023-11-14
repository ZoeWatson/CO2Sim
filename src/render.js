const path = require('path')
import { BubbleMap } from "./RenderUI/bubbleMap.js";
import { PopUpMenu } from "./RenderUI/popUpMenu.js";
import { TopicContent } from "./RenderUI/topicContent.js";
import { ResultsContent } from "./RenderUI/resultsContent.js";

import { EnergyData } from "./TopicData/energyData.js";
import { ResidentialData } from "./TopicData/residentialData.js";
import { TravelData } from "./TopicData/travelData.js";
import { FoodData } from "./TopicData/foodData.js";
import { LandData } from "./TopicData/landUseData.js";
import { IndustryData } from "./TopicData/industryData.js";

import { globalVaraibles } from "./TopicData/globalVaraibles.js";



var topicsData = {
 //"Travel": TravelData,
 // "Food":  FoodData,
  "Energy": EnergyData,
  //"Industry": IndustryData,
  "LandData": LandData,
 //"Residential": ResidentialData
}
const topics = Object.keys(topicsData)

const bubbleMap = new BubbleMap(topics);
const popUpMenu = new PopUpMenu();
const topicContent = new TopicContent(topics, topicsData);

const resultsContent = new ResultsContent(topics, topicsData)

for (let i = 0; i < topics.length; i++){
  document.getElementById(topics[i]).addEventListener('click', () => {
    popUpMenu.open(); topicContent.open(topics[i], topicContent);
  });
}
document.getElementById('closePopUpMenu').addEventListener('click', () =>  {topicContent.save(topicContent); popUpMenu.close()});
document.getElementById('results').addEventListener('click', () =>  {
  topicContent.save(topicContent); popUpMenu.open(); 
  resultsContent.open(resultsContent, topicContent, globalVaraibles);
});



/*

*/
