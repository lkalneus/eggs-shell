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
    return fetch(`/api/${party}/getEggs?id=${id}`).then(function (response) {
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