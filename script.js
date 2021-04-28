console.log("WORKING")

var sidelength = 30//(Math.floor(Math.random()*80)+50);

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
    world[pacman.y][pacman.x] = 1;
    drawWorld();
}


var pacman = {
    x: Math.floor(sidelength/2),
    y: Math.floor(sidelength/2),
}

console.log(pacman.x);
console.log(pacman.y);

var docPacman = document.getElementById("pacman");

console.log(docPacman);

function drawPacman() {
    docPacman.style.top = (pacman.y * 20) + "px";
    docPacman.style.top = ((pacman.y * 20) + .25) + "px";
    docPacman.style.top = ((pacman.y * 20) + .5) + "px";
    docPacman.style.top = ((pacman.y * 20) + .75) + "px";

    docPacman.style.left = (pacman.x *20) + "px";
    docPacman.style.left = ((pacman.x *20) +.25) + "px";
    docPacman.style.left = ((pacman.x * 20) + .5) + "px";
    docPacman.style.left = ((pacman.x * 20) + .75) + "px";

}



    world[pacman.y][pacman.x] = 0;
    drawPacman();


    var moving;
    //movement pacman
document.onkeydown = function(e) {
    
    if(e.keyCode == 37) {
        //LEFT
        stopMovin();
        docPacman.style.transform = "rotate(180deg)"
        moving = setInterval(keepMoving,100,37);
        console.log(e.keyCode)  
    } if(e.keyCode == 39) {
        //RIGHT
        stopMovin();
        docPacman.style.transform = "rotate(0deg)"
        moving = setInterval(keepMoving,100,39);
        console.log(e.keyCode)
    } else if(e.keyCode == 38) {
        //DOWN
        stopMovin();
        docPacman.style.transform = "rotate(270deg)"
        moving = setInterval(keepMoving,100,38);
        console.log(e.keyCode)
    } else if(e.keyCode== 40) {
        //UP
        stopMovin();
        docPacman.style.transform = "rotate(90deg)"
        moving = setInterval(keepMoving,100,40);
        console.log(e.keyCode)
    }
}


function stopMovin() {
    clearInterval(moving);
}

//world [Y-VALUE] [X-VALUE]
function keepMoving(direction) {
    if(direction == 37) {
        if(world[pacman.y][pacman.x-1] == 0) {
            stopMovin();
            console.log("stopped x: " + pacman.x);
        } else {
            pacman.x--;
            console.log("x: " + pacman.x);
        }
    }  if(direction == 39) {
        if(world[pacman.y][pacman.x+1] == 0) {
            stopMovin();
            console.log("stopped x: " + pacman.x);
        } else {
            pacman.x++;
            console.log("x: " + pacman.x);
        }
    }  if(direction == 38) {
        if(world[pacman.y-1][pacman.x] == 0) {
            stopMovin();
            console.log("stopped y: " + pacman.x);

        } else {
            pacman.y--;
            console.log("y: " + pacman.y);
        }
    }  if(direction == 40) {
        if(world[pacman.y+1][pacman.x] == 0) {
            stopMovin();
            console.log("stopped y: " + pacman.y);

        } else {
            pacman.y++;
            console.log("y: " + pacman.y);
        }
    }
    updateMap();
}

setInterval(game, 10)
function game() {
    
    //drawWorld();
    world[pacman.y][pacman.x] = 1;
    drawPacman();
//  

}
