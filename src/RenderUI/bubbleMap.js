class BubbleMap{
    constructor(topics){
        this.containter = document.getElementById("bubbleMap");
        this.topics = topics;
        this.#print()
    }

    #print(){
        var bubbleMapContent =""
        bubbleMapContent = bubbleMapContent+ this.#coreBubble()
        for (const index in this.topics){
            bubbleMapContent = bubbleMapContent+ this.#bubble(this.topics[index], index) 
        }
        this.containter.innerHTML= bubbleMapContent
    }
    #bubble(topic,index){
        const gridPos = [[10,10],[10,60],[35,0], [35,70],[60,60],[60,10]]
        var bContent = "<div class='bubble'style='top:"+gridPos[index][0]+"%;right:"+gridPos[index][1]+"%'"
        bContent = bContent + "id='"+topic+"'>" 
        bContent = bContent + "<p>"+topic+"</p>"
        bContent = bContent + '</div>'
        return bContent;
    }
    #coreBubble(){
        var bContent = "<div class='bubble' id='coreBubble' style='top:35%;right:35%'>"
        bContent = bContent + "Core Values: Current Co2 410ppm;"
        bContent = bContent+ "</div>"
        return bContent
    }
}
export {BubbleMap};