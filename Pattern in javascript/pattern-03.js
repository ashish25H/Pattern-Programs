
//    *   
//   ***
//  *****
// *******
let pattString = "";
let n = 4;

for(let i=1; i<=n; i++){
    for(let j=1; j<=7; j++){

        if(j>=5-i && j<= i+3){
            pattString += "*";
        }else{
            pattString += " ";
        }
    }
    pattString += "\n";
}

console.log(pattString);

