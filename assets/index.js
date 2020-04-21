$(document).ready(function () {
  const farmers = $("#farmers > tbody");
  const personalData = $("#personal-data");

  function viewParty(party) {
    personalData.children(".personal-data-name").text(party.Name);
    personalData.children(".personal-data-type").text(party.Type);
    personalData.children(".personal-data-location").text(party.Country);
  }

  function addParty(party) {
    farmers.append(`
            <tr class="table-row table-row-default">
                <td class="name">${party.Name}</td>
                <td class="type">${party.Type}</td>
                <td class="location">${party.Country}</td>
                <td class="remove">
                    <div class="remove-img"></div>
                </td>
            </tr>`);
    $("#farmers > tbody > tr:last").click(function () {
      viewParty(party);
    });
  }

  getParties().then((parties) => {
    parties.map(addParty);
  });
});
