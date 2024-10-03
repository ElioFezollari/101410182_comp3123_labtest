const resolvedPromise = (message) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`message: ${message}`)
        }, 500);
    })
}

const rejectPromise = (messageError) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            try{
                reject(`error message: ${messageError}`)
            }
            catch(e){
                console.error(e)
            }
        }, 500);
    })
}

resolvedPromise("This promise will resolve in0.5 seconds!")
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error))

rejectPromise("This promise will reject in 0.5 seconds!")
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error))
