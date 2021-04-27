console.log("WORKING")

var sidelength = 8 //(Math.floor(Math.random()*30)+10);
var row = [];
var map = [];
var col = [];
console.log(sidelength)
var arry = [
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],   
    [1,0,0,0,1],
    [1,1,1,1,1],
];
console.log(arry)

function buildMap(){
// this will loop through each row
// i[j,j,j,j,j,j] i=0
// i[j,j,j,j,j,j]
// i[j,j,j,j,j,j]
// i[j,j,j,j,j,j]
// i[j,j,j,j,j,j] i= sidelength
    for(let j = 0; j < sidelength; j++) {
        row.push(1);
    }
    console.log(row);
    for(let j = 0; j < sidelength; j++) {
        if(j == 0 || j == sidelength-1) {
            col.push(1);
        } else{
            col.push(0);
        }
    }

    for(let i = 0; i < sidelength; i ++){
        if(i == 0 || i == sidelength-1){
            map.push(row)
        } else {
            map.push(col)
        }
    }
    // for(var i = 0; i < sidelength; i++) {
    //     if(i == 0 || i == sidelength-1) {
    //         col.push(1);
    //         console.log(col)
    //     } else{
    //         col.push(0);
    //         console.log(col)

    //     }
    //     map.push(col);

    //     if(i==0 || i == sidelength-1){
    //         map[i] = row;
    //     }  
    // }
}




var mapDict = {
    0 : 'free',
    1 : 'wall',
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
        if(map[pacman.y][pacman.x-1] != 1) {
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
    console.table(map)
    
    map[2][2] = 9

    console.table(map)

    console.table(arry)
    
    arry[2][2] = 9

    console.table(arry)
    



}

game();