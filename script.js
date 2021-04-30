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
    [0,0,0,0,2,0,0,0,1,0,1,0,0,0,2,0,0,0,0],
    [0,0,0,0,2,0,1,1,1,1,1,1,1,0,2,0,0,0,0],
    [0,0,0,0,2,0,1,1,1,1,1,1,1,0,2,0,0,0,0],
    [2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,2,2],
    [0,0,0,0,2,0,1,1,1,1,1,1,1,0,2,0,0,0,0],
    [0,0,0,0,2,0,1,1,1,1,1,1,1,0,2,0,0,0,0],
    [0,0,0,0,2,0,1,0,0,0,0,0,1,0,2,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,0,2,2,2,2,2,1,2,2,2,2,2,0,2,2,0],
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
    2 : 'coin',
    3: 'ghost-wall',
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

    if(e.keyCode == 37 || e.keyCode == 39) 


    if(e.keyCode == 37) {
        //LEFT
        pacman.y = Math.round(pacman.y)
        clearInterval(moving)
        docPacman.style.transform = "rotate(180deg)"
        moving = setInterval(function() {
            if(pacman.y == 9 && pacman.x ==0){
                pacman.x = 18;
            }
            if(pacman.x % 1 == 0) {
                if(world[pacman.y][pacman.x - 1] == 0 || world[pacman.y][pacman.x - 1] == 3) {
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
            if(pacman.y == 9 && pacman.x == 18) {
                pacman.x = 0;
            }
            if(pacman.x  % 1 == 0) {
                if(world[pacman.y][pacman.x + 1] == 0 || world[pacman.y][pacman.x + 1] == 3) {
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
        clearInterval(moving);
        docPacman.style.transform = "rotate(270deg)"
        moving = setInterval(function() {
            if(pacman.y % 1 == 0) {
                if(world[pacman.y - 1][pacman.x] == 0 || world[pacman.y - 1][pacman.x] == 3) {
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
                if(world[pacman.y + 1][pacman.x] == 0 || world[pacman.y + 1][pacman.x] == 3) {
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



var blueGhost =  {
    x: 1,
    y: 19,
}

var greenGhost =  {
    x: 17,
    y: 1,
}

var yellowGhost =  {
    x: 17,
    y: 19,
}

var redGhost =  {
    x: 1,
    y: 1,
}


function drawGhost(docGhost, Ghostmov) {
    var drawGhost = document.getElementById(docGhost);

    drawGhost.style.top = (Ghostmov.y * 20) + "px";
    drawGhost.style.left = (Ghostmov.x * 20) + "px";
}

function drawAllGhost() {
    drawGhost("ghostred",redGhost);
    drawGhost("ghostyellow", yellowGhost);
    drawGhost("ghostgreen", greenGhost);
    drawGhost("ghostblue", blueGhost);
}
drawAllGhost();


var redMove;
function moveAllGhost(ghost) {
    
    if(ghost.y < pacman.y) {
        if(world[Math.round(ghost.y)+1][Math.round(ghost.x)] != 0 &&
        world[Math.round(ghost.y)+1][Math.round(ghost.x)] != 3){
            ghost.y++;
        } 
    }
    
    if(ghost.x < pacman.x) {
        if(world[Math.round(ghost.y)][Math.round(ghost.x)+1] != 0 &&
        world[Math.round(ghost.y)][Math.round(ghost.x)+1] != 3){
                ghost.x++;
            }
        }
    
    if(ghost.y > pacman.y) {
        if(world[Math.round(ghost.y)-1][Math.round(ghost.x)] != 0 &&
        world[Math.round(ghost.y)-1][Math.round(ghost.x)] != 3){

            ghost.y--;
        }
    }

    if(ghost.x > pacman.x) {
        if(world[Math.round(ghost.y)][Math.round(ghost.x)-1] != 0 &&
        world[Math.round(ghost.y)][Math.round(ghost.x)-1] != 0){

            ghost.x--;
        }
    }
  

}
var ghostMove = setInterval(function() {
    moveAllGhost(redGhost);
    moveAllGhost(yellowGhost);
    moveAllGhost(blueGhost);
    moveAllGhost(greenGhost);
},400)


var fps = setInterval(game, 1000/60)
function game() {
    
    updateMap();

    drawPacman();

    drawAllGhost();


    die(redGhost);
    die(blueGhost);
    die(yellowGhost);
    die(greenGhost);

    resGhost(redGhost,blueGhost);
    resGhost(redGhost,yellowGhost);
    resGhost(redGhost,greenGhost);;
    resGhost(blueGhost,yellowGhost);
    resGhost(blueGhost,greenGhost);
    resGhost(yellowGhost,greenGhost);

   

    if(count == 158) {
        clearInterval(fps);
        var victory = document.getElementById("victory");
        victory.style.visibility = "visible"
    }

}



function die(Ghost) {
    if(pacman.x == Ghost.x && pacman.y == Ghost.y) {
        clearInterval(fps);
        var victory = document.getElementById("gameover");
        victory.style.visibility = "visible"
    }
}
function resGhost(Ghost1, Ghost2) {
    if(Ghost1.x == Ghost2.x && Ghost1.y == Ghost2.y) {
        Ghost1.x = 9;
        Ghost1.y = 9;
    }
}
