var promise = new Promise( 
    (resolve, reject) =>
    {
    
    let a = 1+2
    if(a == 2){
        resolve(a);
    }
    else{
        reject(a);
    }
});


promise.then((resp) =>{
    console.log("Succeded : "+resp);
}).catch((resp)=>{
    console.log("Failed : "+resp);
})

function successLog (message){
    console.log(message);
}

function errorLog (message){
    console.log(message);
}

function callbackDemo(successCallback, errorCallback){
        let a = 1+2
    if(a == 2){
     successCallback("Callback Succeded");       
    }
    else{
        errorCallback("Callback Failed");           
    }
}

callbackDemo(successLog, errorLog);


function callbackDemoAsPromise(){
    return new Promise ((resolve, reject) =>{
        
        let a = 0+2
    if(a == 2){
     resolve("Promise Succeded");       
    }
    else{
        reject("Promise Failed");           
    }        
        
    })

}

callbackDemoAsPromise().then((message) =>{
   successLog(message);
}).catch((error) =>{
    errorLog(error);
});

const add = new Promise((resolve, reject) =>{
                        resolve("adding 2+3 = "+(2+3))
                        });

const multiply = new Promise((resolve, reject) =>{
                        resolve("multiply 2X3 = "+(2*3))
                        });

const divide = new Promise((resolve, reject) =>{
                        resolve("divide 2/3 = "+(2/3))
                        });

Promise.all([divide,multiply,add]).then((msessage) =>{
    console.log(message);
})


