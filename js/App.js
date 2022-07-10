let canvas = document.querySelector('.canvas');
// Math.floor(Math.random() * (canvas.clientHeight - 40))


// console.log(heigthCanvas, widthCanvas);
// console.log(canvas.clientHeight, canvas.clientWidth);

class Circle{
    RenderCircle(RandonColor, nroC){
        for (let i = 0; i < nroC; i++) {
            let widthCanvas = Math.floor(Math.random() * (canvas.clientWidth - 40)),
            heigthCanvas = Math.floor(Math.random() * (canvas.clientHeight - 40));
            let newDiv = document.createElement('div');
            newDiv.classList.add('block');
            newDiv.style.top = `${heigthCanvas}px`; 
            newDiv.style.left = `${widthCanvas}px`;
            newDiv.style.backgroundColor = `#${RandonColor()}`;
            canvas.appendChild(newDiv);
        }
    }
    RandonColor(){
        let colors = {
            0: "C70039",
            1: "4B40FF",
            2: "DFEF1E",
            3: "3AFF1E"
        }
        return colors[`${Math.floor(Math.random() * 4)}`];
    }
    olpElements(){
        
    }
}

let circle = new Circle();
circle.RenderCircle(circle.RandonColor, 8);