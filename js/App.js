let canvas = document.querySelector('.canvas');
// Math.floor(Math.random() * (canvas.clientHeight - 40))


// console.log(heigthCanvas, widthCanvas);
// console.log(canvas.clientHeight, canvas.clientWidth);

class Canvas{
    constructor(){
        this.pointsCircle = [];
        this.widthCanvas = canvas.clientWidth;
        this.heigthCanvas = canvas.clientHeight;
        this.colorLimit = {
            red : 2,
            blue : 3,
            yellow : 3,
            green : 1
        }
        this.difficult = 4;
    }
    renderCircle(){
        this.randomCoord(this.difficult)
        this.pointsCircle.forEach(elem => {
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
            this.pointsCircle.push({x: widthRandom, y: heigthRandom, bg: this.randonColor()})
        }
    }
    randonColor(){
        let colors = [
            "C70039", //Rojo
            "4B40FF", //Amarill0
            "DFEF1E", //Azul
            "3AFF1E" //Verde
        ]
        return colors[`${Math.floor(Math.random() * 4)}`];
    }
}

let classCanvas = new Canvas();
classCanvas.renderCircle()
console.log(classCanvas.pointsCircle);