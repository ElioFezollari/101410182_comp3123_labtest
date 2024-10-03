// Simple function that takes a mixed array and returns a promise that is either resolved or rejected. It is rejected when the array doesnt contain any words
// It is rsolved if the type of at least 1 element is a string. I use a filter array method to store it in wordarray, and it filters by typeofelement is equal to string
// if the length of new arra is more than 0 then it is resolved else it is rejected 
const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
            let wordArray = mixedArray.filter((element) => {
                if(typeof element == "string"){
                    return element  
                }
            })
            .map((element)=>{
                if(typeof element == "string"){
                    return element.toLowerCase()
                }
            })
            
            if (wordArray.length > 0) {
                resolve(wordArray);
            } else {
                reject("The array doesnt contain any words!");
            }
        
    });
};

mixedArray=[2,3]
mixedArray2 =["Pizza",10,true,25,false,"Wings"]


lowerCaseWords(mixedArray).then((resolvedArray)=>{console.log(resolvedArray)}).catch((e)=>console.log(e))
lowerCaseWords(mixedArray2).then((resolvedArray)=>{console.log(resolvedArray)}).catch((e)=>console.log(e))