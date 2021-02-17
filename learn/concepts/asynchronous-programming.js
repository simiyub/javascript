async function displayDataWithTryCatch(){
    
    try{
        const wes = await axios.get("http://localhost:3001/users/wes");
        console.log(wes);
    }
    catch(err){
        console.log(err);
}
}

async function displayDataWithHigherOrderFunc(){
        const wes = await axios.get("http://localhost:3001/users/wes");  
    
} 

function handleError(fn){
    return function(...params){
        return fn(...params).catch(function(err){
            console.error("This is the error", err)
        })
    }
}

router.get('/orders',handleError(getOrders));

async function loadData(){
    const wes = await axios.get('...');
}
loadData.catch(dealWithErrors);