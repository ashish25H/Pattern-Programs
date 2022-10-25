
// ******
//  *****
//   ****
//    ***
//     **
//      *


let patternString = "";
let n = 30;

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){

        if(j>=i && j<=n){
            patternString += "*";
        }else{
            patternString += " ";
        }
    }
    patternString += "\n";
}


console.log(patternString);

           