var map = [];
var arry = [];

for(var i = 0; i < 5 ; i++) {
    if(i == 0 || i ==4) {
        arry.push(1);
    } else{
        arry.push(0);
    }
        map.push(arry);
        if(i==0 || i== 4){
            map[[i][0]] = [1,1,1,1,1];
        }  
}

console.log(map);

