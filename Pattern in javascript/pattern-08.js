

let patString = "";
let n=4;
let k;

for(let i=1; i<=n; i++){
    k=1;
    for(let j=1; j<=n+3; j++){
        if(j>=(n+1)-i && j<=i+3){
            patString += k;
            if(j>=4){
                k--;
            }else{
                k++;
            }
        }else{
            patString += " ";
        }
    }
    patString += "\n";
}

console.log(patString);


