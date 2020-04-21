function getParties() {
    return fetch(`/api/farm/helloAll`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            return json
        });
}

function getFarm() {
    return fetch(`/api/farm/hello`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            return json
        });
}

function getInspector() {
    return fetch(`/api/inspector/hello`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            return json
        });
}

function getShop() {
   return fetch(`/api/shop/hello`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            return json
        });
}

function getEggs(party) {
    if (party == undefined) {party="farm"}
    return fetch(`/api/${party}/getEggs`).then(function (response) {
        return response.json();
    })
        .then(function (json) {
            console.log(json);
            return json
        });
}

function getEggsByID(party, id) {
    return fetch(`/api/party/getEggs?id=` + id)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            return json
        });
}

function produceEggs(type, color, amount) {
    var urlencoded = new URLSearchParams();

    var requestOptions = {
    method: 'POST',
    body: urlencoded,
    redirect: 'follow'
    };

    return fetch(`/api/farm/produceEggs?type=${type}&color=${color}&amount=${amount}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}