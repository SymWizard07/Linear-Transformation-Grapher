JXG.Options.point.snapToGrid = true;
JXG.Options.point.snapSizeX = 0.1;
JXG.Options.point.snapSizeY = 0.1;

const board = JXG.JSXGraph.initBoard('jxgbox', {
    boundingbox: [-5, 5, 5, -5], axis: true
});

var determinant = 0;
var A = board.create('point', [0, 1]);
var B = board.create('point', [1, 1]);
var C = board.create('point', [0, 0]);
var D = board.create('point', [1, 0]);

var quad = board.create('polygon', [A, B, D, C]);

quad.setProperty({
    fillColor: 'lightblue',
    fillOpacity: 0.5,
    borders: {
        strokeColor: 'black',
        strokeWidth: 2,
        dash: 0
    }
});

var linearTransform = [
    [1.0, 0.0],
    [0.0, 1.0]
];

function applyTransformation() {
    A.moveTo([A.X() * linearTransform[0][0] + A.Y() * linearTransform[0][1], A.Y() * linearTransform[1][0] + A.Y() * linearTransform[1][1]]);
    B.moveTo([B.X() * linearTransform[0][0] + B.Y() * linearTransform[0][1], B.Y() * linearTransform[1][0] + B.Y() * linearTransform[1][1]]);
    C.moveTo([C.X() * linearTransform[0][0] + C.Y() * linearTransform[0][1], C.Y() * linearTransform[1][0] + C.Y() * linearTransform[1][1]]);
    D.moveTo([D.X() * linearTransform[0][0] + D.Y() * linearTransform[0][1], D.Y() * linearTransform[1][0] + D.Y() * linearTransform[1][1]]);

    det();
    board.update();
}

function resetUnitSquare() {
    A.moveTo([0, 1]);
    B.moveTo([1, 1]);
    C.moveTo([0, 0]);
    D.moveTo([1, 0]);
}

function det() {
    determinant = linearTransform[0][0]*linearTransform[1][1] - linearTransform[0][1]*linearTransform[1][0];
    document.getElementById("det").textContent = "Determinant = " + determinant;
}


window.onload = function () {
    document.querySelector(".A").value = 1;
    document.querySelector(".B").value = 0;
    document.querySelector(".C").value = 0;
    document.querySelector(".D").value = 1;
};