document.getElementById('search-word')
    .addEventListener('keyup', function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById('search-button').click();
    }
});

let request = require('request');

function getDef(word) {
    let query = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/';
    request.get(query, function(error, response, body) {
        if (error) {
            return error;
        }
        if (response.statusCode === 200) {
            let fullData = JSON.parse(body);
            if (fullData.data) {
                alert(data);
            }
        } else {
            alert('no data');
        }
    })
}

// function searchDef(searchWord1) {
//     const url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/';
//     const language = 'en/';
//     const word = searchWord1.toLowerCase();
//     const app_id = '0d389b44';
//     const app_key = '4d2516aa8f65093027ef9b69f041f220';
//     document.getElementById('def-title').innerHTML = word;
//     document.getElementById('def-body').innerHTML = 'definition of ' + word;
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById('def-title').innerHTML += ' xhr' + this.status;
//         } else {
//             // alert('xhr didnt get shit');
//             document.getElementById('def-body').innerHTML += ' xhr: status: ' + this.status 
//             + ' readystate: ' + this.readyState + '<br>';
//         }
//     }
//     xhr.open('GET', url + language + word);
//     xhr.setRequestHeader('app_id', app_id);
//     xhr.setRequestHeader('app_key', app_key);
//     xhr.setRequestHeader('Accept', 'application/json');
//     xhr.send();

//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//         //    alert('got shit'); 
//             document.getElementById('def-body').innerHTML += ' xhttp: status: ' + this.status 
//             + ' readystate: ' + this.readyState + '<br>';
//         } else {
//             // alert('xhttp didnt get shit. readystate');
//             document.getElementById('def-body').innerHTML += ' xhttp: status: ' + this.status 
//             + ' readystate: ' + this.readyState + '<br>';
//         }
//     };
//     xhttp.open('GET', 'http://www.google.ca');
//     xhttp.send();

//     // trying a local (same-origin) request
//     var xhrlocal = new XMLHttpRequest();
//     xhrlocal.open('GET', 'localhost:3000/index', true);
//     xhrlocal.send();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById('def-body').innerHTML = 'xhrlocal: status: ' 
//             + xhrlocal.status + 'readyState: ' + xhrlocal.readyState + '<br>';
//         } else {
//             document.getElementById('def-body').innerHTML = 'xhrlocal: status: ' 
//             + xhrlocal.status + 'readyState: ' + xhrlocal.readyState + '<br>'
//             + xhr.responseType;
//         }
//     };
    


// }