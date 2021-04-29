console.log("WORKING")



var tempWorld = [];
var count = 0;

var world = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
    [0,0,0,0,2,0,2,2,2,2,2,2,2,0,2,0,0,0,0],
    [0,0,0,0,2,0,2,0,0,2,0,0,2,0,2,0,0,0,0],
    [2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2],
    [0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
    [0,0,0,0,2,0,2,2,2,2,2,2,2,0,2,0,0,0,0],
    [0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0],
    [0,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

var sidelength = world.length //(Math.floor(Math.random()*30)+20);
var mapDict = {
    0 : 'wall',
    1 : 'free',
    2 : 'coin'
}


console.log(sidelength)



function drawWorld(){
    output = "";
    for (var row = 0; row < sidelength; row++){
        output += "<div class = 'row'>"
            for (var x = 0; x < sidelength; x++){
                output += "<div class = '" + mapDict[world[row][x]] +"'></div>"
            }
            output += "</div>"
    }
    document.getElementById('world').innerHTML = output;
}

drawWorld();



var pacman = {
    x: 9,
    y: 15,
}

function updateMap(){
    if(world[Math.round(pacman.y)][Math.round(pacman.x)] == 2){
        count++;
        document.getElementById("score").innerHTML = count;
    }
    world[Math.round(pacman.y)][Math.round(pacman.x)] = 1;
    drawWorld();
}


//movement pacman
var docPacman = document.getElementById("pacman");

function drawPacman() {
    docPacman.style.top = (pacman.y * 20) + "px";
    docPacman.style.left = (pacman.x * 20) + "px";

}
drawPacman();


var moving;
document.onkeydown = function(e) {

    if(e.keyCode == 37) {
        //LEFT
        pacman.y = Math.round(pacman.y)
        clearInterval(moving)
        docPacman.style.transform = "rotate(180deg)"
        moving = setInterval(function() {
            if(pacman.x % 1 == 0) {
                if(world[pacman.y][pacman.x - 1] == 0) {
                    clearInterval(moving);
                } else {
                    pacman.x-=0.10
                    pacman.x = Math.round(10 * pacman.x) / 10
                }
            } else {
                pacman.x-=0.10;
                pacman.x = Math.round(10 * pacman.x) / 10
            }
        }, 10)
    } 

    if(e.keyCode == 39) {
        //RIGHT
        pacman.y = Math.round(pacman.y)
        clearInterval(moving)
        docPacman.style.transform = "rotate(0deg)"
        moving = setInterval(function() {
            if(pacman.x  % 1 == 0) {
                if(world[pacman.y][pacman.x + 1] == 0) {
                    clearInterval(moving);
                } else{
                    pacman.x+=0.10
                    pacman.x = Math.round(10 * pacman.x) / 10
                }
            } else {
                pacman.x+=0.10;
                pacman.x = Math.round(10 * pacman.x) / 10
            }
        }, 10)
    } 

    if(e.keyCode == 38) {
        //UP
        pacman.x = Math.round(pacman.x)
        clearInterval(moving)
        docPacman.style.transform = "rotate(270deg)"
        moving = setInterval(function() {
            if(pacman.y % 1 == 0) {
                if(world[pacman.y - 1][pacman.x] == 0) {
                    clearInterval(moving);
                } else {
                    pacman.y -= 0.10;
                    pacman.y = Math.round(10 * pacman.y) / 10
                }
            } else {
                pacman.y -= 0.10;
                pacman.y =  Math.round(10 * pacman.y) / 10
            }
        }, 10)
    }

    if(e.keyCode== 40) {
        //DOWN
        pacman.x = Math.round(pacman.x)
        clearInterval(moving)
        docPacman.style.transform = "rotate(90deg)"
        moving = setInterval(function() {
            if(pacman.y % 1 == 0) {
                if(world[pacman.y + 1][pacman.x] == 0) {
                    clearInterval(moving);
                } else {
                    pacman.y+= 0.10;
                    pacman.y = Math.round(10 * pacman.y) / 10
                }
            } else {
                pacman.y+=0.10;
                pacman.y = Math.round(10 * pacman.y) / 10
            }
        }, 10)
    }
}

setInterval(game, 10)
function game() {
    
    updateMap();

    drawPacman();

}