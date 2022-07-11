const canvas = document.querySelector('.canvas');

class Canvas{
    constructor(){
        this.widthCanvas = canvas.clientWidth;
        this.heigthCanvas = canvas.clientHeight;
        this.circlesData = [];
        this.colorCircleAttributes = [
            {color: "D61C4E", limit: 4}, //red
            {color: "FAD923", limit: 2}, //yellow
            {color: "4E944F", limit: 2} //green
        ]
        this.difficult = this.colorCircleAttributes.reduce((total, item) => total + item.limit, 0); //*Min = 8//
    }   
    renderCircle(){
        this.createRandomCircle(this.difficult)
        this.circlesData.forEach(elem => {
            let newDiv = document.createElement('div');
            newDiv.classList.add('block')
            newDiv.style.top = `${elem.y}px` ?? `${350}px`;
            newDiv.style.left = `${elem.x}px` ?? `${300}px`;
            newDiv.style.backgroundColor = `#${elem.bg}`
            canvas.appendChild(newDiv);
        })
    }
    createRandomCircle(nroC){
        for (let i = 0; i < nroC; i++) {
            let widthRandom = Math.floor(Math.random() * (this.widthCanvas - 40)),
            heigthRandom = Math.floor(Math.random() * (this.heigthCanvas - 40));
            this.circlesData.push({x: widthRandom, y: heigthRandom, bg: this.colorMapping(i) ?? "000000"})
        }
    }
    colorMapping(i){
        let colorBack;
        if (i < this.colorCircleAttributes[0].limit) {
            colorBack = "D61C4E";
        }else if(i < (this.colorCircleAttributes[0].limit + this.colorCircleAttributes[1].limit)){
            colorBack = "FAD923";
        }else{
            colorBack = "4E944F";
        }
        return colorBack;
    }
}

const classCanvas = new Canvas();
classCanvas.renderCircle()
console.log(classCanvas.circlesData);