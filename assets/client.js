$(document).ready(function () {
  const farmers = $("#farmers > tbody");

  getParties().then((parties) => {
    parties.forEach((p) => {
      farmers.append(`
            <tr class="table-row table-row-default">
                <td class="name">${p.Name}</td>
                <td class="type">${p.Type}</td>
                <td class="location">${p.Country}</td>
                <td class="remove">
                    <div class="remove-img"></div>
                </td>
            </tr>`);
    });
  });
});
