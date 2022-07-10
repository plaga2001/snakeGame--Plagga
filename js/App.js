let canvas = document.querySelector('.canvas');
// Math.floor(Math.random() * (canvas.clientHeight - 40))


// console.log(heigthCanvas, widthCanvas);
// console.log(canvas.clientHeight, canvas.clientWidth);

class Canvas{
    constructor(){
        let pointsCircle = [];
        this.widthCanvas = canvas.clientWidth;
        this.heigthCanvas = canvas.clientHeight;
        this.colorLimit = {
            red : 2,
            blue : 3,
            yellow : 3,
            green : 1
        }
    }
    renderCircle(nroC){
        for (let i = 0; i < nroC; i++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('block');
            newDiv.style.top = `${this.randomPositionHeigth()}px`; 
            newDiv.style.left = `${this.randonPositionWidth()}px`;
            newDiv.style.backgroundColor = `#${this.randonColor()}`;
            canvas.appendChild(newDiv);
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
    randonPositionWidth(){
        return Math.floor(Math.random() * (this.widthCanvas - 40));
    }
    randomPositionHeigth(){
        return Math.floor(Math.random() * (this.heigthCanvas - 40));
    }
}

let classCanvas = new Canvas();
classCanvas.renderCircle(10)