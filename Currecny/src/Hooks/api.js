async function Apikey() {
    try{
        const Response = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=404c66d7821448e64f7ae6b35254bd36`);
        const data = await Response.json();
        if (Response.status === 200) {console.log("API Key is valid");}else{console.error("API Key is invalid");}   
        return data;
    }catch(error){
        console.error("Error fetching API key:", error);
        return null;
    }
}

export default Apikey;