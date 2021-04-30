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
    [0,0,0,0,2,0,1,3,3,1,3,3,1,0,2,0,0,0,0],
    [2,2,2,2,2,1,1,3,1,1,1,3,1,1,2,2,2,2,2],
    [0,0,0,0,2,0,1,3,3,3,3,3,1,0,2,0,0,0,0],
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
    x: 8,
    y: 9,
}

var greenGhost =  {
    x: 9,
    y: 9,
}

var yellowGhost =  {
    x: 10,
    y: 9,
}

var redGhost =  {
    x: 9,
    y: 8,
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

var attackPoint = {
    x: pacman.x,
    y: pacman.y,
}

//use pacmans last postition to create point to follow
var target;
function targetPosition(){
    target = setInterval(function() {
        attackPoint.x = Math.round(pacman.x);
        attackPoint.y = Math.round(pacman.y);
        console.log(attackPoint)
    }, 1000)
}
targetPosition();

var redMove;
function moveRedGhost() {
    
    if(redGhost.y > attackPoint.y) {
            redMove = setInterval(function(){
                    console.log("SHOULD MOVE UP")
                    if(world[Math.ceil(redGhost.y) - 1][Math.floor(redGhost.x)] == 0 
                    || world[Math.ceil(redGhost.y) - 1][Math.floor(redGhost.x)] == 3 || (redGhost.y < attackPoint.y)){
                        clearInterval(redMove);
                        console.log("RED")
                        if(redGhost.x < attackPoint.x) {
                            redMove = setInterval(function(){
                                console.log("SHOULD MOVE RIGHT")
                                if(world[Math.floor(redGhost.y)][Math.floor(redGhost.x)+1] == 0 
                                || world[Math.floor(redGhost.y)][Math.floor(redGhost.x) + 1] == 3 || (redGhost.x > attackPoint.x)){
                                    clearInterval(redMove) 
                                } else{    
                                    redGhost.x+=0.10;
                                    redGhost.x = Math.round(10 * redGhost.x) / 10
                                }
                            },100)
                        }

                    } else{    
                        redGhost.y-=0.10;
                        redGhost.y = Math.round(10 * redGhost.y) / 10

                    }
                },100)
            }


    if(redGhost.y < attackPoint.y) {
        redMove = setInterval(function(){
                console.log("SHOULD MOVE DOWN")

                if(world[Math.floor(redGhost.y) + 1][Math.floor(redGhost.x)] == 0 
                || world[Math.floor(redGhost.y) + 1][Math.floor(redGhost.x)] == 3 || (redGhost.y > attackPoint.y)){
                    clearInterval(redMove) 
                    moveRedGhost()
                } else{    
                    redGhost.y+=0.10;
                    redGhost.y = Math.round(10 * redGhost.y) / 10
                }
            },100)
        }
}

    moveRedGhost();
            


var fps = setInterval(game, 10)
function game() {
    
    updateMap();

    drawPacman();

    drawAllGhost();

    if(pacman.x == redGhost.x && pacman.y == redGhost.y) {
        clearInterval(fps)
    }
}