$(document).ready(function () {
    const farmers = document.querySelector("#farmers > tbody")
    getParties().then(parties => {
        console.log({ parties, farmers })

    })
});