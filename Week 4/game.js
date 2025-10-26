//#region Yesterday

console.log("hello world!")

var canvas = document.querySelector("Canvas")
var ctx = canvas.getContext("2d")


var person ={
    first: "Veja",
    last: "Feliz"

    ,firstAndLastName: function()
    {
        alert("My name is: "+ this.first + this.last)
    }
}

console.log(person.first)

var square ={
    x: 500,
    y: 500,
    width: 100,
    height: 100,
    color: "blue"
}

var copy = square;
copy.x = 200;

ctx.fillStyle = square.color 
ctx.fillRect(square.x,square.y,square.width,square.height)

//For loops

for(var i = 0; i < 20; i++)
{
    console.log(2 * i)
}

for(var s = 0; s < 20; s++)
{
    ctx.fillStyle = "magenta"
    ctx.fillRect(s * 5 * (20/2), s, 20, 20)
}

// Adding to the array
var colors = []
colors[0] = "red"
colors[1] = "blue"
colors[2] = "green"

// Predefined array
var person =["veja", "Slade", "Caitlynn"]



console.log(colors[1])

colors[4]="purple"
console.log(colors[4])
console.log(colors[3])

var twodArray=[
    [1,1,1,1,1,1,1,1],
    [2,2,2,2,2,2,2,2],
    [3,3,3,3,3,3,3,3],
    [4,4,4,4,4,4,4,4]
]

//All arrays have a length parameter attached to them, which 
//tells the proggrammer how big the array is
for(var x = 0; x < twodArray.length; x++)
{
    //accessing the value withn the array
    console.log(twodArray[x])
}

// double for loop
for(var xCord = 0; xCord<twodArray.length; xCord++)
{
    for(var yCord = 0; yCord < 8; yCord++)
    {
        console.log(twodArray[xCord][yCord])
    }
}

//While loop!

var whileInt= 0;
while(whileInt < 20 * 4)
{
    whileInt++;
    console.log(whileInt)
}


// bad practice example, will take up ram 

//var badpractice = "dont do this"
//while(true)
   // {
    //    console.log(badpractice)
  //  }

//#endregion

var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

var timer = setInterval(main, 1000/60)

var x = 50;
var y = canvas.height / 2
var w = 100; 
var h = 100;
var moveAmountX = 10;
var moveAmountY = 10;

var jimmyTheBox = new gameObject(canvas)
jimmyTheBox.width = 100;
jimmyTheBox.height = 100;
jimmyTheBox.x = 72;
jimmyTheBox.y = 84;

var paulTheBox = new gameObject(canvas)
paulTheBox.width = 50;
paulTheBox.height = 50;
paulTheBox.x = canvas.width /2;
paulTheBox.y = canvas.height /2;


//Main fucntion
function main()
{
    //Clea canvas

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //update our objects position
    x += moveAmountX;
    y += moveAmountY;

    //Draw obj
    ctx.fillStyle = "pink"

    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.fill();

    if(x > canvas.width - 50)
    {
        moveAmountX *= -1
    }


    if(y > 50)
    {
        moveAmountY *= -1
    }

    if(x < 50)
    {
        moveAmountX *= -1
    }
    
    
    if(y < canvas.width - 50)
    {
        moveAmountY *= -1
    }


    
}

