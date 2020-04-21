function sellEgg(id) {
  const price = prompt("Price per unit (£)?", 0.2);
  sellEggs(id, price).then(() => {
    location.reload();
  });
}

$(document).ready(function () {
  const eggs = $("#eggs > tbody");
  const filters = $("#filters");
  const addEgg = $("#add-egg");

  function formatDate(date) {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

    return `${da} ${mo} ${ye}`;
  }

  function listEgg(egg) {
    let button, status;
    switch (egg.status) {
      case "produced":
        status = "new";
        button = `<button class="button-secondary" onclick="inspectEggs('${egg.id}').then(()=>{location.reload();})">Insp</button>`;
        break;
      case "OnSale":
        status = "on sale";
        button = null;
        break;
      case "On inspection":
        status = "pending inspection";
        button = null;
        break;
      case "Certified":
        status = "certified";
        button = `<button class="button-secondary" onclick="sellEgg('${egg.id}')">Mkt</button>`;
        break;
    }

    eggs.append(`
    <tr class="table-row table-row-default" id="egg-${
      egg.id
    }" data-type="${egg.status}">
      <td class="td-farmer">${egg.type}</td>
      <td class="td-farmer">${egg.color}</td>
      <td class="td-farmer">${formatDate(egg.producedDate)}</td>
      <td class="td-farmer">${egg.weight}g</td>
      <td class="td-farmer">${egg.size}</td>
      <td class="td-farmer td-farmer-price">${
        egg.price && `£${egg.price}
      }</td>
      <td class="td-farmer">${status}</td>
      <td class="td-farmer">${button || ""}
      </td>
    </tr>`);
  }

  getEggs().then((farmEggs) => {
    farmEggs.map(listEgg);
    filters.on("click", "> *", function () {
      const dataType = $(this).attr("data-type");
      console.log(dataType);
      if (dataType !== "all") {
        eggs.children().hide();
        eggs.children(`[data-type="${$(this).attr("data-type")}"]`).show();
      } else {
        eggs.children().show();
      }
    });
    addEgg.click(() => {
      const type = $("#species").val();
      const col = $("#color").val();
      const amount = $("#amount").val();
      produceEggs(type, col, amount).then(() => {
        location.reload();
      });
    });
  });
});
