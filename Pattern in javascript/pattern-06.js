    //      *    
    //     * *   
    //    * * *  
    //   * * * *
    //  * * * * *

let patString = "";
let n = 5;
let check = true;

for(let i=1; i<=n; i++){
    for(let j=1; j<=n+4; j++){
        if(j>=(n+1)-i && j<=i+4 && check){
            patString += "*";
            check = false;
        }else{
            patString += " ";
            check = true;
        }
    }
    patString += "\n";
}

console.log(patString);


