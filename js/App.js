let canvas = document.querySelector('.canvas');

class Canvas{
    constructor(){
        this.circles = [];
        this.widthCanvas = canvas.clientWidth;
        this.heigthCanvas = canvas.clientHeight;
        this.colorLimit = {
            red : 2,
            blue : 3,
            yellow : 3,
            green : 1
        }
        this.difficult = 10;
    }
    renderCircle(){
        this.randomCoord(this.difficult)
        this.circles.forEach(elem => {
            let newDiv = document.createElement('div');
            newDiv.classList.add('block')
            newDiv.style.top = `${elem.y}px` ?? `${350}px`;
            newDiv.style.left = `${elem.x}px` ?? `${300}px`;
            newDiv.style.backgroundColor = `#${elem.bg}`
            canvas.appendChild(newDiv);
        })
    }
    randomCoord(nroC){
        for (let i = 0; i < nroC; i++) {
            let widthRandom = Math.floor(Math.random() * (this.widthCanvas - 40)),
            heigthRandom = Math.floor(Math.random() * (this.heigthCanvas - 40));
            this.circles.push({x: widthRandom, y: heigthRandom, bg: this.colormapping()})
        }
    }
    colormapping(){
        let colors = [
            "D61C4E", //Red
            "FAD923", //Yellow
            "4E944F" //Grenn
        ]
        return colors[`${Math.floor(Math.random() * colors.length)}`];
    }
}

let classCanvas = new Canvas();
classCanvas.renderCircle()
console.log(classCanvas.circles);