const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
            let wordArray = mixedArray.filter((element) => {
                if(typeof element == "string"){
                    return element
                }
            });
            
            if (wordArray.length > 0) {
                resolve(wordArray);
            } else {
                reject("The array doesnt contain any words!");
            }
        
    });
};

mixedArray=[2,3]

lowerCaseWords(mixedArray).then((resolvedArray)=>{console.log(resolvedArray)}).catch((e)=>console.log(e))