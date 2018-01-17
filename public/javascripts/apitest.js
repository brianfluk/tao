console.log("API Request");
let request = require('request');

let app_id = "0d389b44";
let app_key = '4d2516aa8f65093027ef9b69f041f220';
let language = 'en';
let word = 'Ace';
let url = "https://od-api.oxforddictionaries.com:443/api/v1/entries/" + language
    + '/' + word.toLowerCase();
var options = {
    url: url,
    headers: {
        'app_id': app_id,
        'app_key': app_key
    }
}
console.log("set up");
request.get(options, function(error, response, body){
    console.log("request started...");
    if (error) {
        console.log("error");
        return error;
    }
    if (response.statusCode == 200){
        console.log("success200");
        let info = JSON.parse(body);
        if (info) {
            console.log('Definition of', info['results'][0]['word'],': ');
            console.log(info['results'][0].lexicalEntries);
            for (entry in info.results[0].lexicalEntries){
                console.log(entry);
            }
        }
    } else {
        console.log("unsuccessful");
    }
});
