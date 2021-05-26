let drawing = [];
fillVar = 255;
function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        fillVar = 0;
        console.log(0);
    }
    if (keyCode === LEFT_ARROW) {
        fillVar = 255;
        console.log(255);
    }
}

let sketch = function (p) {
    p.x = 100;
    p.y = 100;

    p.setup = function () {
        p.canvasCustomize = p.createCanvas(320, 320);
        p.canvasCustomize.parent('customize');
        p.background(51);

        const saveButton = select('#saveButton');
        saveButton.mousePressed(saveDrawing);
    }



    p.draw = function () {
        p.background(0);

        if (mouseIsPressed) {
            // for (let i = 0; i < drawing.length; i++) {
            //     if (drawing[i].x === round(p.mouseX / 20) * 20 &&
            //         drawing[i].y === round(p.mouseY / 20) * 20) {
            //         drawing.splice(i, 1); NE RADI NE ZNAM ZASTO
            //     }
            // }
            let point = {
                x: round(p.mouseX / 20) * 20,
                y: round(p.mouseY / 20) * 20
            }
            drawing.push(point);
            p.fill(fillVar)

        }

        for (let i = 0; i < drawing.length; i++) {
            p.noStroke()
            p.square(drawing[i].x, drawing[i].y, 20);
        }
    }
}

function saveDrawing() {
    const ref = database.ref('drawings');
    const data = {
        name: "NAME",
        drawing: drawing
    }
    ref.push(drawing);
}

let myp5 = new p5(sketch);

let x = 100;
let y = 100;

// if neki iz niza ima koordinate kao izbrisi taj iz niza
// for (let i = 0; i < drwaing.len; i++) {
//     if (drwaing[i].x === round(p.mouseX / 20) * 20 && drawing[i].y === round(p.mouseY / 20) * 20) 
// }
//
//
//