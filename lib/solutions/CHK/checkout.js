'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    let fA=0;
    let fB=0;
    let fC=0;
    let fD=0;
    let fO = 0;
    for(var i=0; i<skus.length; i++)
    {
        if (skus.charAt(i) === "A"){
            fA = fA+1;
        } else if (skus.charAt(i) === "B")
        {
            fB = fB+1;
        } else if (skus.charAt(i) === "C")
        {
            fC = fC+1;
        } else if (skus.charAt(i) === "D")
        {
            fD = fD+1;
        } else fO = fO+1;
    }
    if (fO!=0)
    return -1;

    let oA = 0;
    let oB = 0;
    if(oA>3){
    oA = parseInt(fA/3);
    }
    if(oB>2){
    oB = parseInt(fB/2);
    }
    price = 
};