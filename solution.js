// Your code here
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
        let i;
        let addedBinary = "";
        let extra = "";
        if (binaryStr1.length > binaryStr2.length){
            i = binaryStr1.length -1
        } else {i = binaryStr2.length - 1};
        while (i>=0){
            if (binaryStr1[i] == 0 && binaryStr2[i]==0 && extra==0){
                addedBinary = 0 + addedBinary;
                extra = 0;
            } else if (((binaryStr1[i] == 1 && binaryStr2[i]==0) || 
                        (binaryStr1[i] == 0 && binaryStr2[i]==1)) && extra == 0){
                addedBinary = 1 + addedBinary;
                extra =0;
            } else if (binaryStr1[i] == 1 && binaryStr2[i]==1 && extra == 1){
                addedBinary = 1 + addedBinary;
                extra = 1;
            } else {
                addedBinary = 0 + addedBinary;
                extra = 1;
            }
            i--;
        }
        return addedBinary;
    }
    return binaryStrAddition (myBinaryStr1, myBinaryStr2);
}

binaryAddition(20,22);
// Be sure it's the cleanest code you can write!