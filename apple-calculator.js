let number = "";
let result = "";
function calculate(params){
    let signs = []
    for(let count = 0; count<params.length;count++){
        if(checkSign)signs.push(params[count])
    }
    console.log(signs)
}
function checkSign(params){
        if(params === '+') return true;
        if(params === '-') return true;
        if(params === '*') return true;
        if(params === '/') return true;
        if(params === '%') return true;

    return false;
}