'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    let fA=0;
    let fB=0;
    let fC=0;
    let fD=0;
    let fE=0;
    let fF=0;
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
        } else if (skus.charAt(i) === "E")
        {
            fE = fE+1;
        } else if (skus.charAt(i) === "F")
        {
            fF = fF+1;
        } else          
            fO = fO+1;
    }
    if (fO!=0)
    return -1;

    let oA1 = 0;
    let oA2 = 0;
    let oB = 0;
    let oE = 0;
    let oF = 0;
    if(fA>=5){
    oA1 = parseInt(fA/5);
    }
    fA = fA - oA1*5;
    if(fA>=3){
        oA2 = parseInt(fA/3);
        }
    fA = fA - oA2*3;

    if(fE>=2){
        oE = parseInt(fE/2);
        }
    fB = fB-oE;
    if (fB<0) {fB=0;}
    if(fB>=2){
    oB = parseInt(fB/2);
    }
    fB = fB - oB*2;
    if (fF>=3)
    {
        oF = parseInt(fF/3);
    }
    fF = fF - oF;
    let price = oA1*200 + oA2*130 + fA*50 + oB*45 + fB*30 + fC*20 + fD*15 + fE*40 + fF*10;
    return price;
};