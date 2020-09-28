'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    let fE=0;
    let fN=0;
    let fR=0;
    let fOthers = 0;
    let sum = 0;
    let fS = 0;
    let fT = 0;
    let fX = 0;
    let fY = 0;
    let fZ = 0;
    let oP3 = 0;
    for(var i=0; i<skus.length; i++)
    {
        if (skus.charCodeAt(i) < 65 || skus.charCodeAt(i) > 90){
           fOthers = fOthers + 1;
        }
    }
    if (fOthers!=0)
    return -1;

    for(var i=0; i<skus.length; i++)
    {
        if (skus.charAt(i) === "E"){
            fE = fE+1;
        } else if (skus.charAt(i) === "N")
        {
            fN = fN+1;
        } else if (skus.charAt(i) === "R")
        {
            fR = fR+1;
        } else if (skus.charAt(i) === "S")
        {
            fS = fS+1;
        } else if (skus.charAt(i) === "T")
        {
            fT = fT+1;
        } else if (skus.charAt(i) === "X")
        {
            fX = fX+1;
        } else if (skus.charAt(i) === "Y")
        {
            fY = fY+1;
        } else if (skus.charAt(i) === "Z")
        {
            fZ = fZ+1;
        }
    }

    let fSTY = 0;
    let tOferte = 0;
    fSTY = fS + fT + fY;
    if(fZ>=3)
    {
        let oZ = 0;
        oZ = parseInt(fZ/3);
        tOferte = tOferte+oZ;
        fZ = fZ%3;
    }
    if(fZ+fSTY>=3)
    {
        let oSTY = 0;
        oSTY = parseInt((fSTY+fZ)/3);
        tOferte = tOferte+oSTY;
        fSTY = (fZ+fSTY)%3;
        fZ = 0;
    }
    if(fZ+fSTY+fX>=3)
    {
        let oX = 0;
        oX = parseInt((fZ+fSTY+fX)/3);
        tOferte = tOferte+oX;
        fX = (fZ+fSTY+fX)%3;
        fZ = 0;
    }

    sum = sum+fZ*21 + fSTY*20+fX*17;
    sum = sum+tOferte*45;



    for(var i=65; i<=90; i++)
    {
        let fLetter = 0;
        let oL1 = 0;
        let oL2 = 0;
        for(var j=0; j<skus.length; j++)
        {
            if (skus.charAt(j) === String.fromCharCode(i)){
                fLetter = fLetter + 1;
            }
        }

            if (i===65){
                if(fLetter>=5){
                oL1 = parseInt(fLetter/5);
                }
                fLetter = fLetter - oL1*5;
                if(fLetter>=3){
                    oL2 = parseInt(fLetter/3);
                    }
                fLetter = fLetter - oL2*3; 
                sum = sum+oL1*200+oL2*130+fLetter*50;
            } //A
            if (i===66){ 
                fLetter = fLetter - parseInt(fE/2);
                if (fLetter < 0) {fLetter=0;}
                if(fLetter>=2){
                    oL1 = parseInt(fLetter/2);
                    }
                fLetter = fLetter - oL1*2;
                sum = sum+oL1*45 + fLetter * 30;
            } //B
            if (i===67){ 
                sum = sum+fLetter*20
            } //C
            if (i===68){ 
                sum = sum+fLetter*15
            } //D
            if (i===69){ 
                sum = sum+fLetter*40
            } //E
            if (i===70){ 
                if (fLetter>=3)
                {
                    oL1 = parseInt(fLetter/3);
                }
                fLetter = fLetter - oL1;
                sum = sum+fLetter*10;
            } //F
            if (i===71){ 
                sum = sum+fLetter*20;
            } //G
            if (i===72){ 
                if(fLetter>=10){
                    oL1 = parseInt(fLetter/10);
                    }
                    fLetter = fLetter - oL1*10;
                    if(fLetter>=5){
                        oL2 = parseInt(fLetter/5);
                        }
                    fLetter = fLetter - oL2*5; 
                    sum = sum+oL1*80+oL2*45+fLetter*10;
            } //H
            if (i===73){ 
                sum = sum+fLetter*35;
            } //I
            if (i===74){ 
                sum = sum+fLetter*60;
            } //J
            if (i===75){ 
                if(fLetter>=2){
                    oL1 = parseInt(fLetter/2);
                }
                fLetter = fLetter - oL1*2;
                sum = sum+oL1*120 + fLetter*70;
            } //K
            if (i===76){ 
                sum = sum + fLetter*90;
            } //L
            if (i===77){ 
                fLetter = fLetter - parseInt(fN/3);
                if (fLetter < 0) {fLetter=0;}
                sum = sum + fLetter * 15;
            } //M
            if (i===78){ 
                sum = sum+fLetter*40;
            } //N
            if (i===79){ 
                sum = sum+fLetter*10;
            } //O
            if (i===80){ 
                if(fLetter>=5){
                    oL1 = parseInt(fLetter/5);
                }
                fLetter = fLetter - oL1*5;
                sum = sum+oL1*200 + fLetter*50;
            } //P
            if (i===81){ 
                fLetter = fLetter - parseInt(fR/3);
                if (fLetter < 0) {fLetter=0;}
                if(fLetter>=3){
                    oL1 = parseInt(fLetter/3);
                    }
                fLetter = fLetter - oL1*3;
                sum = sum+oL1*80 + fLetter * 30;
            } //Q
            if (i===82){ 
                sum = sum+fLetter*50;
            } //R
            // if (i===83){ 
            //     sum = sum+fLetter*20;
            // } //S
            // if (i===84){ 
            //     sum = sum+fLetter*20;
            // } //T
            if (i===85){ 
                if (fLetter>=4)
                {
                    oL1 = parseInt(fLetter/4);
                }
                fLetter = fLetter - oL1;
                sum = sum+fLetter*40;
            } //U
            if (i===86){ 
                if(fLetter>=3){
                    oL1 = parseInt(fLetter/3);
                    }
                    fLetter = fLetter - oL1*3;
                    if(fLetter>=2){
                        oL2 = parseInt(fLetter/2);
                        }
                    fLetter = fLetter - oL2*2; 
                    sum = sum+oL1*130+oL2*90+fLetter*50;
            } //V
            if (i===87){ 
                sum = sum+fLetter*20;
            } //W
            // if (i===88){ 
            //     sum = sum+fLetter*17;
            // } //X
            // if (i===89){ 
            //     sum = sum+fLetter*20;
            // } //Y
            // if (i===90){ 
            //     sum = sum+fLetter*21;
            // } //Z

    }

    return sum;
}