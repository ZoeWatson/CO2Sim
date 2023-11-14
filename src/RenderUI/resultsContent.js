class ResultsContent{
    constructor(topics, topicsData){
        this.topics = topics
        this.topicsData = topicsData
        this.title = "results" 
        this.defaultYear = 1
        this.defaultCo2tones = 10000// this.#caculateDefaultCO2tonnes() // APE MONKEY
        this.defaultCo2ppm = this.#convertCO2tonnesToppm(this.defaultCo2tones) // https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide

        this.CurrentGlobalCO2ppm = 416.06;
        this.PreIndustrialGlobalCO2ppm = 280;
        this.DefaultRiseCo2ppm  =  2.13
        this.CO2RiseNotCapturedBySimPerYearInppm = this.DefaultRiseCo2ppm-this.defaultCo2ppm; // the Co2 not accounted for in the sim
        if(this.CO2RiseNotCapturedBySim < 0){
            console.log("Warning: default CO2 levels in Sim are larger than expected global rise")
        }
        this.forcingConstant = 3.8
        this.climateSensitivity = 0.8

        this.newCo2perYearinTonnes = 0
    }
    #convertCO2tonnesToppm(co2InTonnes){
        const co2inGigatones = co2InTonnes/1000000000 
        return co2inGigatones/7.8
    }
    #caculateDefaultCO2tonnes(){
        var defaultCo2 = 0
        //for (var topic of this.topics){
             const DefaultPolices = this.topicsData['Energy']["Policies"]
             for (let index = 0; index < DefaultPolices.length; index++){
                 defaultCo2 = defaultCo2 + DefaultPolices[index]["Default"]*DefaultPolices[index]["CO2Muitiplyer"]
             }
       // }
        return defaultCo2
    }
    #calulateCo2Forcing(newCO2PerYearInppm, year){
        const SimulatedCO2RiseByYearInppm = (newCO2PerYearInppm+this.CO2RiseNotCapturedBySimPerYearInppm)*year
        const SimulatedGlobalCO2ppm = (SimulatedCO2RiseByYearInppm+this.CurrentGlobalCO2ppm)
        return (Math.log(SimulatedGlobalCO2ppm/this.PreIndustrialGlobalCO2ppm)/Math.LN2) * this.forcingConstant
    }
    #calulateTempChange(forcing){
        return this.climateSensitivity*forcing
    }
    #generateChangedPoliciesArray(NewPolicyData){
        var changedPolicies = []
        for (var topic of this.topics){
            const NewPolicies = NewPolicyData[topic]
            const DefaultPolices = this.topicsData[topic]["Policies"]
             for (let index = 0; index < DefaultPolices.length; index++){
                const defaultValue = DefaultPolices[index]["Default"]
                const newVaule = NewPolicies[index]["Value"]
                 if(defaultValue!= newVaule){
                    changedPolicies.push({
                        "Title": NewPolicies[index]["Title"], 
                        "Value": newVaule,
                        "Change": newVaule-defaultValue
                    })
                 }
             }
        }
        return changedPolicies 
    }
    #caculateChangeinCO2PerYearinTonnes(NewPolicyData){
        var newCo2perYearinTonnes = 0
        //for (var topic of this.topics){
            // CAR USE+GLOBALS
            const Policies = NewPolicyData['Energy']
             for (let index = 0; index < Policies.length; index++){
                const CO2Muitiplyer = this.topicsData['Energy']["Policies"][index]["CO2Muitiplyer"]
                const Co2PerPolicy =  Policies[index]["Value"] * CO2Muitiplyer
                newCo2perYearinTonnes = newCo2perYearinTonnes + Co2PerPolicy
             }
        //}
        return newCo2perYearinTonnes
    }
    #getUpdatedPolicyDataFromHTML(topicContent){
        var newPolicyData = {}
        for (var topic of this.topics){
            var placerholder = document.createElement('div');
            placerholder.innerHTML = topicContent.content[topic];
            const Policies = placerholder.getElementsByClassName('policyValues')
            var policyArray = []
            for (let index = 0; index < Policies.length; index++){
                policyArray.push({ "Title" :  Policies[index].id, "Value": Policies[index].value})
            }
            newPolicyData[topic] = policyArray
        }
        return newPolicyData   
    }

    open(resultsContent, topicContent, GlobalVaraibles){
        document.getElementById("popUpTitle").innerHTML = resultsContent.title;
        const results = resultsContent.createContent(topicContent, GlobalVaraibles)
        document.getElementById("mainContent").innerHTML = results 
        
        document.getElementById('yearSlider').addEventListener('input', () =>  {
            resultsContent.updateResults(resultsContent, document.getElementById('yearSlider').value)
          });
    }

    createContent(topicContent, globalVaraibles){
        const NewPolicyData = this.#getUpdatedPolicyDataFromHTML(topicContent)
        const ChangedPolicies = this.#generateChangedPoliciesArray(NewPolicyData)

        var content = '<div>'
        for(let index = 0; index < ChangedPolicies.length; index++){
            const Title = ChangedPolicies[index]["Title"]
            const Value = ChangedPolicies[index]["Value"]
            const Change = ChangedPolicies[index]["Change"]
            content = content+'<p>Title:'+Title+' Value:'+Value+' Change:'+Change+' </p>'
        }
        content = content+'</div>'
        globalVaraibles = this.updateGlobalVaraibles(NewPolicyData)
        const names = Object.keys(globalVaraibles)
        for(var name of names){
             content = content +"<p>"+name+": "+globalVaraibles[name]+ "</p>"
        }
  
        const newCo2perYearinTonnes = globalVaraibles["CO2 Production"]//this.#caculateChangeinCO2PerYearinTonnes(NewPolicyData)
        content = content+'<div> <p> Co2 in Tonnes Per Year:'+newCo2perYearinTonnes+' </p> '
        this.newCo2perYearinTonnes = newCo2perYearinTonnes
        
        const TemperatureChange = this.calculateResults(newCo2perYearinTonnes, this.defaultYear)
        content = content+'<p id="tempChange"> Temperature Change'+TemperatureChange+'</p> </div>'

        content = content+'<p>Year</p>'
        content = content+'<input type="range" min="1" max="100" value="1" id="yearSlider"'
        content = content+ 'oninput="document.getElementById(\'valueYearSlider\').innerHTML = this.value">'
        content = content+'<p id="valueYearSlider" >1 </p>'

        return content
    }
    
    updateGlobalVaraibles(NewPolicyData){
        var newGlobalVaraibles = {} 
        for (var topic of this.topics){
            const DefaultPolices = this.topicsData[topic]["Policies"]
            const NewPolicies = NewPolicyData[topic]
            for(var index = 0; index < DefaultPolices.length; index++){
                const effects = Object.keys(DefaultPolices[index]["effect"])
                for (var effect of effects){
                    const changeRate = DefaultPolices[index]["effect"][effect]
                    const newValue = parseInt(NewPolicies[index]["Value"])
                    const change =  newValue * changeRate
                    if(newGlobalVaraibles[effect] != null){
                        newGlobalVaraibles[effect] = newGlobalVaraibles[effect] + change
                    }else{
                        newGlobalVaraibles[effect] = change
                    }
                }
            }

        }
        
       return newGlobalVaraibles
    }
   
    updateResults(resultsContent, year){
        const NewTemperature = resultsContent.calculateResults(resultsContent.newCo2perYearinTonnes, year)
        document.getElementById("tempChange").innerHTML = 'Temperature Change'+NewTemperature
    }
    
    calculateResults(newCo2perYearinTonnes, year){
        const newCO2PerYearInppm = this.#convertCO2tonnesToppm(newCo2perYearinTonnes)
        const forcing = this.#calulateCo2Forcing(newCO2PerYearInppm, year)
        return this.#calulateTempChange(forcing)
    }
}
export {ResultsContent};