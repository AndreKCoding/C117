array=['caneta','papel','livro','garrafa','xícara','computador'];
var randomNumber = Math.floor((Math.random() * array.length));
sketch = array[randomNumber];

console.log(randomNumber);
console.log(sketch);

document.getElementById("esboço").innerHTML = "Esboço a Ser Desenhado: " + sketch;

var timerCounter = 0;
var timerCheck = 0;

var drawSketch = "";
var answerHolder = "";

var score = 0;

function setup()
{
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}