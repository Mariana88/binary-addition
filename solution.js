// Your code here
function convertToBinaryStr (num){
    let hP = 0;
    let numStr = '';
    while (num - Math.pow(2, hP) >= 0){
        hP++;
    }
    while (hP>=0){
        if (num - Math.pow(2, hP) >=0){
        numStr = numStr + 1;
        num = num - Math.pow(2, hP);
        } else {
        numStr = numStr + 0;
        }
        hP--;
    }
    return numStr;
}

function binaryStrAddition (binaryStr1, binaryStr2){
    let addedBinary = "";
    let extra = 0;
    let i= binaryStr1.length - 1;
    let j= binaryStr2.length -1;
    while (i>=0 || j>=0){
        if ((binaryStr1[i] == 0 || binaryStr1[i] == undefined) && (binaryStr2[j]==0 || binaryStr2[j] == undefined) && extra==0){
            addedBinary = 0 + addedBinary;
            extra = 0;
        } else if ((((binaryStr1[i] == 1 && (binaryStr2[j]==0 || binaryStr2[j]==undefined))|| 
                    ((binaryStr1[i] == 0 || binaryStr1[i]==undefined) && binaryStr2[j]==1)) && extra == 0) ||
                    ((binaryStr1[i]==0 || binaryStr1[i]==undefined) && (binaryStr2[j]==0 || binaryStr2[j]==undefined) && extra==1)){
            addedBinary = 1 + addedBinary;
            extra =0;
        } else if (binaryStr1[i] == 1 && binaryStr2[j]==1 && extra == 1){
            addedBinary = 1 + addedBinary;
            extra = 1;
        } else {
            addedBinary = 0 + addedBinary;
            extra = 1;
        }
        i--;
        j--;
    }
    if (extra == 1){
        addedBinary = 1 + addedBinary;
    }
    return addedBinary;
}


function binaryAddition (num1, num2){

    let myBinaryStr1 = convertToBinaryStr(num1);
    let myBinaryStr2 = convertToBinaryStr(num2);
    return binaryStrAddition (myBinaryStr1, myBinaryStr2);
}


/* With functions inside of each other
function binaryAddition (num1, num2){
    function convertToBinaryStr (num){
        let hP = 0;
        let numStr = '';
        while (num - Math.pow(2, hP) >= 0){
            hP++;
        }
        while (hP>=0){
            if (num - Math.pow(2, hP) >=0){
            numStr = numStr + 1;
            num = num - Math.pow(2, hP);
            } else {
            numStr = numStr + 0;
            }
            hP--;
        }
        return numStr;
    }
    let myBinaryStr1 = convertToBinaryStr(num1);
    let myBinaryStr2 = convertToBinaryStr(num2);
    function binaryStrAddition (binaryStr1, binaryStr2){
        let addedBinary = "";
        let extra = 0;
        let i= binaryStr1.length - 1;
        let j= binaryStr2.length -1;
        while (i>=0 || j>=0){
            if ((binaryStr1[i] == 0 || binaryStr1[i] == undefined) && (binaryStr2[j]==0 || binaryStr2[j] == undefined) && extra==0){
                addedBinary = 0 + addedBinary;
                extra = 0;
            } else if ((((binaryStr1[i] == 1 && (binaryStr2[j]==0 || binaryStr2[j]==undefined))|| 
                        ((binaryStr1[i] == 0 || binaryStr1[i]==undefined) && binaryStr2[j]==1)) && extra == 0) ||
                        ((binaryStr1[i]==0 || binaryStr1[i]==undefined) && (binaryStr2[j]==0 || binaryStr2[j]==undefined) && extra==1)){
                addedBinary = 1 + addedBinary;
                extra =0;
            } else if (binaryStr1[i] == 1 && binaryStr2[j]==1 && extra == 1){
                addedBinary = 1 + addedBinary;
                extra = 1;
            } else {
                addedBinary = 0 + addedBinary;
                extra = 1;
            }
            i--;
            j--;
        }
        if (extra == 1){
            addedBinary = 1 + addedBinary;
        }
        return addedBinary;
    }
    return binaryStrAddition (myBinaryStr1, myBinaryStr2);
}
*/

// Be sure it's the cleanest code you can write!