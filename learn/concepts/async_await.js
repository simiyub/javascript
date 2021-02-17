function makeRequest(location){
    return new Promise((resolve, reject) =>{
        console.log("Making request to "+location)
        if(location === "Google"){
            resolve("Google says hi");
        }
        else{
            reject("We can only talk to Google");
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) =>{
        console.log("Processing response")
        resolve("Extra Information: "+response);
    })
}

makeRequest("Apple").then(response =>{
    
    console.log("Response received")
    return processRequest(response);
}).then( processedResponse =>{
    console.log(processedResponse)
}).catch(error =>{
    console.log(error)
})

//With async await
//Errors caught in try catch

async function doWork(name){
    try{
    const response = await makeRequest(name);
    console.log("Response received for doWork")
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
}catch(error){
    console.log("An error occured")
    console.log(error);
}
}

doWork("Amazon");
console.log("\n");
doWork("Google");