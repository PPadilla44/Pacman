console.log("WORKING")

var sidelength = 8 //(Math.floor(Math.random()*30)+10);

var tempWorld = [];
var world = [];

console.log(sidelength)


function buildMap(){
// this will loop through each row
// i[j,j,j,j,j,j] i=0
// i[j,j,j,j,j,j]
// i[j,j,j,j,j,j]
// i[j,j,j,j,j,j]
// i[j,j,j,j,j,j] i= sidelength
    for( let i = 0; i < sidelength; i++) {
        for( let j = 0; j < sidelength ; j++) {
            if(i==0 || i == sidelength-1) {
                tempWorld.push(1);
            } else {
                if(j==0 || j == sidelength-1) {
                    tempWorld.push(1)
                } else {
                    tempWorld.push(0)
                }
            }
        }
    }
    while(tempWorld.length > 0) {
        let temp;
        temp = tempWorld.splice(0,sidelength);
        world.push(temp)
    }
    console.table(world);
}


var mapDict = {
    0 : 'free',
    1 : 'wall',
    2 : 'coin'
}

var pacman = {
    x: 1,
    y: 1,
}

function drawPacman() {
    
    document.getElementById("pacman")

    }

    var moving;
    //movement pacman
document.onkeydown = function(e) {
    
    if(e.keyCode == 37) {
        //LEFT
        stopMovin();
        moving = setInterval(keepMoving,100,37);  
    } if(e.keyCode == 39) {
        //RIGHT
        stopMovin();
        moving = setInterval(keepMoving,100,39);
    } else if(e.keyCode == 38) {
        //DOWN
        stopMovin();
        moving = setInterval(keepMoving,100,38);
    } else if(e.keyCode == 40) {
        //UP
        stopMovin();
        moving = setInterval(keepMoving,100,40);
    }
}


function stopMovin() {
    clearInterval(moving);
    console.log("STOPPED")
}


function keepMoving(direction) {
    if(direction == 37) {
        if(world[pacman.y][pacman.x-1] != 1) {
            stopMovin();
            console.log("stopped x: " + pacman.x);
        } else {
            pacman.x--;
            console.log("x: " + pacman.x);
        }
    }  if(direction == 39) {
        if(pacman.x + 1 > sidelength - 2) {
            stopMovin();
            console.log("stopped x: " + pacman.x);

        } else {
            pacman.x++;
            console.log("x: " + pacman.x);
        }
    }  if(direction == 38) {
        if( pacman.y - 1 < 1) {
            stopMovin();
            console.log("stopped y: " + pacman.x);

        } else {
            pacman.y--;
            console.log("y: " + pacman.y);
        }
    }  if(direction == 40) {
        if(pacman.y + 1 > sidelength - 2) {
            stopMovin();
            console.log("stopped y: " + pacman.y);

        } else {
            pacman.y++;
            console.log("y: " + pacman.y);
        }
    }
}


function game() {
// drawPacman();

    buildMap();



}

game();