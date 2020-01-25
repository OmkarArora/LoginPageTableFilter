let tableDivElement = document.querySelector(".info-div");

fetch("../data/MOCK_DATA.json")
  .then(function(response) {
    return response.json();
  })
  .then(data => createTable(data));

const createTable = data => {
  const tableEntries = data.map(
    obj =>
      `<tr><td>${obj.id}</td><td>${obj.city}</td><td>${obj.phone}</td><td>${obj.state}</td><td>${obj.country}</td></tr>`
  );
  const tableTag = `<table class="info-table">
    <tr>
    <th>ID</th>
    <th>City</th>
    <th>Phone</th>
    <th>State</th>
    <th>Country</th>
    </tr>
    ${tableEntries.join("")}
    </table>`;
  //console.log(tableTag);
  tableDivElement.innerHTML = tableTag;
};

const searchTable = () => {
  let filterType = document.getElementsByTagName("select")[0].value;
  let filter = document.getElementById("searchInput").value.toUpperCase();
  let tableElement = document.querySelector(".info-table");
  let tableRow = tableElement.getElementsByTagName("tr");

  //reset all table rows before next search
  for (let i = 1; i < tableRow.length; i++) {
    tableRow[i].style.display = "";
  }

  for (let i = 1; i < tableRow.length; i++) {
    //i=0 contains th, dont need that

    //check City
    //let tableData = tableRow[i].getElementsByTagName("td")[1];
    //0-ID, 1-City, 2-Phone, 3-State, 4-Country
    //check first occurence of filter in columnValue
    if (filterType === "All") {
      if (
        tableRow[i]
          .getElementsByTagName("td")[0]
          .textContent.toUpperCase()
          .indexOf(filter) > -1 ||
        tableRow[i]
          .getElementsByTagName("td")[1]
          .textContent.toUpperCase()
          .indexOf(filter) > -1 ||
        tableRow[i]
          .getElementsByTagName("td")[2]
          .textContent.toUpperCase()
          .indexOf(filter) > -1 ||
        tableRow[i]
          .getElementsByTagName("td")[3]
          .textContent.toUpperCase()
          .indexOf(filter) > -1 ||
        tableRow[i]
          .getElementsByTagName("td")[4]
          .textContent.toUpperCase()
          .indexOf(filter) > -1
      ) {
        tableRow[i].style.display = "";
      } else {
        tableRow[i].style.display = "none";
      }
    } else if (filterType === "ID") {
      if (
        tableRow[i]
          .getElementsByTagName("td")[0]
          .textContent.toUpperCase()
          .indexOf(filter) > -1
      ) {
        tableRow[i].style.display = "";
      } else {
        tableRow[i].style.display = "none";
      }
    } else if (filterType === "City") {
      if (
        tableRow[i]
          .getElementsByTagName("td")[1]
          .textContent.toUpperCase()
          .indexOf(filter) > -1
      ) {
        tableRow[i].style.display = "";
      } else {
        tableRow[i].style.display = "none";
      }
    } else if (filterType === "Phone") {
      if (
        tableRow[i]
          .getElementsByTagName("td")[2]
          .textContent.toUpperCase()
          .indexOf(filter) > -1
      ) {
        tableRow[i].style.display = "";
      } else {
        tableRow[i].style.display = "none";
      }
    } else if (filterType === "State") {
      if (
        tableRow[i]
          .getElementsByTagName("td")[3]
          .textContent.toUpperCase()
          .indexOf(filter) > -1
      ) {
        tableRow[i].style.display = "";
      } else {
        tableRow[i].style.display = "none";
      }
    } else if (filterType === "Country") {
      if (
        tableRow[i]
          .getElementsByTagName("td")[4]
          .textContent.toUpperCase()
          .indexOf(filter) > -1
      ) {
        tableRow[i].style.display = "";
      } else {
        tableRow[i].style.display = "none";
      }
    } else {
      //no other possibility
    }
  }
};
