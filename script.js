console.log("WORKING")

var sidelength = (Math.floor(Math.random()*30)+10);
var row = [];
var map = [];
var col = [];
console.log(sidelength)
function buildMap(){
// this will loop through each row
// i[j,j,j,j,j,j] i=0
// i[j,j,j,j,j,j]
// i[j,j,j,j,j,j]
// i[j,j,j,j,j,j]
// i[j,j,j,j,j,j] i= sidelength
    for(let j = 0; j < sidelength; j++) {
        col.push(1);
    }
    for(var i = 0; i < sidelength; i++) {
        if(i == 0 || i == sidelength-1) {
            row.push(1);
        } else{
            row.push(0);
        }
        map.push(row);
        if(i==0 || i == sidelength-1){
                map[[i][0]] = col;
        }  
    }

//     for(var i = 0; i < sidelength; i++) {
//         for(var j = 0; j <= sidelength; j++) {
//             if(i==0 || i== sidelength  || j==0 || j == sidelength){
//                 row[j] = 1;
//                 }
//             else {
//                 row[j] = 0;
//             }
//         }
//         map[i] = row;
//     }
// }
}



buildMap();
console.log(map);

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
        console.log("LEFT")
        if(pacman.x <= 1) {
            stopMovin();
        } else {
            pacman.x--;
            console.log(pacman.x);
        }
    }  if(direction == 39) {
        console.log("RIGHT")
        if(pacman.x >= sidelength-1) {
            stopMovin();
        } else {
            pacman.x++;
            console.log(pacman.x);
        }
    }if(direction == 38) {
        console.log("DOWN")
        if(pacman.y <= 1) {
            stopMovin();
        } else {
            pacman.y--;
            console.log(pacman.y);
        }
    }  if(direction == 40) {
        console.log("UP")
        if(pacman.y >= sidelength-1) {
            stopMovin();
        } else {
            pacman.y++;
            console.log(pacman.y);
        }
    }
}


function game() {
    
    drawPacman();

}