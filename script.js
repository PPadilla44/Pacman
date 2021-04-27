console.log("WORKING")

var sidelength = (Math.floor(Math.random()*30)+10);
var map = [sidelength][sidelength];
function buildMap(){
//size of the map

console.log(sidelength);
// this will loop through each row
// i[j,j,j,j,j,j] i=0
// i[j,j,j,j,j,j]
// i[j,j,j,j,j,j]
// i[j,j,j,j,j,j]
// i[j,j,j,j,j,j] i= sidelength

    for(var i = 0; i <= sidelength; i++){
        if (i===0 | i===sidelength){
            for(var j = 0; j <= sidelength; j++){
               // map[j].push(1);
            }
        }
        else if (i!==0 & i!==sidelength){
            for(var j = 0; j <= sidelength; j++){
                if(j===0 | j ===sidelength){
                 //   map[j].push(1);
                }
                else if (j!= 0 & j!== sidelength){
                   // map[j].push(Math.floor(Math.random()*3)+2);
                }
            }
        }
    }
}
console.log(map);

buildMap();

var pacman = {
    x: 1,
    y: 1,
}

function drawPacman() {
    
    document.getElementById("pacman")

    }


//movement pacman
document.onkeydown = function(e) {
    
    if(e.keyCode == 37) {
        //LEFT
        setInterval(function() {
            keepMoving(37);
        }, 100);       
    } else if(e.keyCode == 39) {
        //RIGHT
        setInterval(function() {
            keepMoving(39);
        }, 100);
    } else if(e.keyCode == 38) {
        //UP
        pacman.y++;
    } else if(e.keyCode == 40) {
        //DOWN
        pacman.y++;
    }
}


function stopMovin() {
    clearInterval(moving)
}
function keepMoving(direction) {
    if(direction == 37) {
        pacman.x--;
        console.log(pacman.x)
        if(pacman.x > 0) {
        }
        } else if(direction == 39) {
            pacman.x++;
            console.log(pacman.x);
        }
}


function game() {
    
    drawPacman();

}