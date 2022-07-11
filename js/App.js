const canvas = document.querySelector('.canvas');

class Canvas{
    constructor(){
        this.circles = [];
        this.widthCanvas = canvas.clientWidth;
        this.heigthCanvas = canvas.clientHeight;
        this.colors = [
            {red: "D61C4E", limit: 3},
            {yellow: "FAD923", limit: 2},
            {green: "4E944F", limit: 2}
        ]
        this.difficult = 8; //min = 8
    }
    renderCircle(){
        this.createRandomCircle(this.difficult)
        this.circles.forEach(elem => {
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
            this.circles.push({x: widthRandom, y: heigthRandom, bg: this.colorMapping() ?? "000000"})
        }
    }
    colorMapping(){
        
    }
}

const classCanvas = new Canvas();
classCanvas.renderCircle()
console.log(classCanvas.circles);