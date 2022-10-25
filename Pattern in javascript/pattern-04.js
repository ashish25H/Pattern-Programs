

// ******
// *    *
// *    *
// *    *
// *    *
// ******


let patString = "";
let n=6;
for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(i===1 || i===n || j===1 || j===n){
            patString += "*";
        }else{
            patString += " ";
        }
    }
    patString += "\n";
}


console.log(patString);