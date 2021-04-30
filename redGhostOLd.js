if(redGhost.y > attackPoint.y) {
    redMove = setInterval(function(){
            console.log("SHOULD MOVE UP")
            if(world[Math.ceil(redGhost.y) - 1][Math.floor(redGhost.x)] == 0 
            || world[Math.ceil(redGhost.y) - 1][Math.floor(redGhost.x)] == 3 || (redGhost.y < attackPoint.y)){
                clearInterval(redMove);
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