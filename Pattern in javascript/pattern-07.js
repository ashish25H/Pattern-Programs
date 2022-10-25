// *********
// **** ****
// ***   ***
// **     **
// *       *


let patString = "";
let n=5;

for(let i=1; i<=n; i++){
    for(let j=1; j<=n+4; j++){
        if(j<=(n+1)-i || j>=i+4){
            patString += "*";
        }else{
            patString += " ";
        }
    }
    patString += "\n";
}

console.log(patString);




