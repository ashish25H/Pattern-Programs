
//    *   
//   ***  
//  ***** 
// *******
//  *****
//   ***
//    *

let patString = "";
let n = 7;
let k=0;

for(let i=1; i<=n; i++){
    if(i<=4){
        k++;
    }else{
        k--;
    }
    for(let j=1; j<=n; j++){
        if(j>=5-k && j<=k+3){
            patString += "*";
            
        }else{
            patString += " ";
        }
    }
    patString += "\n";
}

console.log(patString);

