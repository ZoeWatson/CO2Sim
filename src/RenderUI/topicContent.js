class TopicContent{
    constructor(topics, topicsData){
        var content = {}
        for (var topic of topics){
            content[topic] = this.#createContent(topicsData[topic])
        }
        this.content = content
    }

    open(topic, topicContent){
        document.getElementById("popUpTitle").innerHTML = topic;
        document.getElementById("mainContent").innerHTML = topicContent.content[topic]
    }

    save(topicContent){
        const topic = document.getElementById("popUpTitle").innerHTML
        if(topic in topicContent.content){
            const newpolicies = document.getElementsByClassName('policyValues')
            for (let i = 0; i < newpolicies.length; i++){
                newpolicies[i].defaultValue = newpolicies[i].value
            }
            topicContent.content[topic] = document.getElementById("mainContent").innerHTML 
        }
    }

    #createContent(topicData){
        const policies = topicData["Policies"]
        var content = "<p>"+topicData["TopicInfo"]+"</p>"
        if(topicData["KeyVaraibles"] != null){
            for(var key of topicData["KeyVaraibles"]){
                content = content +"<p>"+key["Title"] +": "+key["Value"]+ "</p>"
            }
        }
        for (var policy of policies){
            content = content+'<p>'+policy["Title"]+'</p>'
            content = content+'<input type="range" min="'+policy["Range"]["Min"]+'" max="'+policy["Range"]["Max"]+'"'
            content = content+'value="'+policy["Default"]+'" class="policyValues" id="'+policy["Title"]+'"'
            content = content+ 'oninput="document.getElementById(\'value'+policy["Title"]+'\').innerHTML = this.value">';
            content = content+'<p id="value'+policy["Title"]+'" >'+policy["Default"]+' </p>'
        }
        return content
    }    
  }
export {TopicContent};