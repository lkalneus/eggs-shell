$(document).ready(function () {
  const farmers = $("#farmers > tbody");
  const filters = $("#filters");
  const personalData = $("#personal-data");
  const farmLink = $("#to-farm");
  farmLink.hide();
  function viewParty(party) {
    personalData.children(".personal-data-name").text(party.Name);
    personalData.children(".personal-data-type").text(party.Type);
    personalData.children(".personal-data-location").text(party.Country);
    if (party.Type === "farm") {
      farmLink.show();
    }
  }

  function addParty(party) {
    farmers.append(`
            <tr class="table-row table-row-default" data-type="${party.Type}">
                <td class="name">${party.Name}</td>
                <td class="type">${party.Type}</td>
                <td class="location">${party.Country}</td>
            </tr>`);
    $("#farmers > tbody > tr:last").click(function () {
      viewParty(party);
    });
  }

  getParties().then((parties) => {
    parties.map(addParty);
    filters.on("click", "> *", function () {
      const dataType = $(this).attr("data-type");
      if (dataType !== "all") {
        farmers.children().hide();
        farmers.children(`[data-type="${$(this).attr("data-type")}"]`).show();
      } else {
        farmers.children().show();
      }
    });
  });
});
