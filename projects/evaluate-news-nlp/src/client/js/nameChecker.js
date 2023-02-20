

function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou",
        "Fatima Alotaibi"
    ]

    if (names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}
function getData() {
    let formText = document.getElementById('name').value
    let model = 'Restaurants'
    var https = require('follow-redirects').https;
   // var fs = require('fs');
    var options = {
        'method': 'POST',
        'hostname': 'api.meaningcloud.com',
        'path': `/sentiment-2.1?key=${API_KEY}&lang=en&txt=${formText}&model=${model}`,
        'headers': {
        },
        'maxRedirects': 20
    };

    var req = https.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });

        res.on("error", function (error) {
            console.error(error);
        });
    });

    req.end()
   
}
export { checkForName, getData }
