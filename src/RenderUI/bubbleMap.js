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
        const gridPos = [[5,15],[5,55],[35,0], [35,70],[60,60],[60,10]]
        const gridColor = ["#89023E", "#418A01", "#018A73", "#009C5E", "#418A01", "#AD5400"]
        var bContent = "<div class='bubble'style='top:"+gridPos[index][0]+"%;right:"+gridPos[index][1]+"%;"
        bContent = bContent + "background-color:"+gridColor[index]+";'"
        bContent = bContent + "id='"+topic+"'>" 
        bContent = bContent + "<p>"+topic+"</p>"
        bContent = bContent + '</div>'
        return bContent;
    }
    #coreBubble(){
        var bContent = "<div class='bubble' id='coreBubble' style='top:35%;right:35%'>"
        bContent = bContent + "<p> Core Values </p>"
        bContent = bContent+ "</div>"
        return bContent
    }
}
export {BubbleMap};