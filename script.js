console.log("WORKING")

var sidelength = 20//(Math.floor(Math.random()*80)+50);

var tempWorld = [];
var world = [];

var mapDict = {
    0 : 'wall',
    1 : 'free',
    2 : 'coin'
}


console.log(sidelength)


function buildMap(){
// this will loop through each row
// i[j,j,j,j,j,j] i=0
// i[j,j,j,j,j,j]
// i[j,j,j,j,j,j]
// i[j,j,j,j,j,j]
// i[j,j,j,j,j,j] i= sidelength
var output = "";
    for( let i = 0; i < sidelength; i++) {
        for( let j = 0; j < sidelength ; j++) {
            if(i==0 || i == sidelength-1) {
                tempWorld.push(0);
            } else {
                if(j==0 || j == sidelength-1) {
                    tempWorld.push(0)
                } else {
                    tempWorld.push(Math.floor(Math.random()*2)+1);
                }
            }
        }
    }
    while(tempWorld.length > 0) {
        let temp;
        temp = tempWorld.splice(0,sidelength);
        world.push(temp)
    }
    console.table(world)
}

buildMap();

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

function updateMap(){
    world[Math.round(pacman.y)][Math.round(pacman.x)] = 1;
    drawWorld();
}

var pacman = {
    x: sidelength/2,
    y: sidelength/2,
}


var docPacman = document.getElementById("pacman");

function drawPacman() {
    docPacman.style.top = (pacman.y * 20) + "px";
    docPacman.style.left = (pacman.x * 20) + "px";

}
drawPacman();


//movement pacman

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
    
    //drawWorld();
    updateMap();

    drawPacman();

}
