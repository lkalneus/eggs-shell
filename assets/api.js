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
    if (party == undefined) {party="farm"}
    return fetch(`/api/${party}/getEggs?id=` + id)
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
    .then(function (response) {
        return response.json();
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}

function inspectEggs(id,inspector, farm) {
    if (inspector == undefined) {
        inspector = "Dora"
    }
    if (farm == undefined) {
        farm = "farm"
    }    
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      return fetch(`/api/${farm}/inspect?id=${id}&inspector=${inspector}`, requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function certifyEggs(id, party) {
    if (party == undefined) {
        party = "inspector"
    }
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      return fetch(`/api/${party}/certify?id=${id}`, requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function sellEggs(id, price, party) {
    if (party == undefined) {
        party = "farm"
    }
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      return fetch(`/api/${party}/sell?id=${id}&price=${price}`, requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error)); 
}

function getEggsTokens(party) {
    if (party == undefined) {
        party = "shop"
    }
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      return fetch(`/api/${party}/getEggsToken`, requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));    
}

function giveSomeCash(party, amount) {
    if (party == undefined) {
        party = "shop"
    }
    if (amount == undefined) {
        amount = 100000
    }
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      return fetch(`/api/${party}/getCash?amount=${amount}`, requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));    
}

function buyEggs(id, amount, seller, party) {
    if (party == undefined) {
        party = "shop"
    }
    if (seller == undefined) {
        seller = "Fox"
    }
    if (amount == undefined) {
        amount = 1
    }
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      return fetch(`/api/${party}/deal?id=${id}&seller=${seller}&amount=${amount}`, requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}