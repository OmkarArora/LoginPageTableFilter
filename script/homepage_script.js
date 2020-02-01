let tableDivElement = document.querySelector(".info-div");
let cityArray = [];
let stateArray = [];
let countryArray = [];
const cityFilter = document.getElementById("cityFilter");
const stateFilter = document.getElementById("stateFilter");
const countryFilter = document.getElementById("countryFilter");
const modal = document.getElementById("modalPopUp");
const modalSpan = document.getElementsByClassName("close-modal")[0];

const setUpPage = () => {
  fetch("../data/MOCK_DATA.json")
    .then(function(response) {
      return response.json();
    })
    .then(data => {
      createTable(data);
      createDropDown(data);
    });
};

const createDropDown = data => {
  //get unique data
  data.forEach(element => {
    if (cityArray.indexOf(element.city) == -1) cityArray.push(element.city);
    if (stateArray.indexOf(element.state) == -1) stateArray.push(element.state);
    if (countryArray.indexOf(element.country) == -1)
      countryArray.push(element.country);
  });
  cityArray.sort();
  stateArray.sort();
  countryArray.sort();
  let cityOptions = cityArray.map(city => `<option>${city}</option>`);
  cityOptions = `<option>All</option>` + cityOptions.join("");
  cityFilter.innerHTML = cityOptions;
  let stateOptions = stateArray.map(state => `<option>${state}</option>`);
  stateOptions = `<option>All</option>` + stateOptions.join("");
  stateFilter.innerHTML = stateOptions;
  let countryOptions = countryArray.map(
    country => `<option>${country}</option>`
  );
  countryOptions = `<option>All</option>` + countryOptions.join("");
  countryFilter.innerHTML = countryOptions;
};

const createTable = data => {
  //11console.log(data);
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
  const cityFilterValue = cityFilter.value.toUpperCase();
  const stateFilterValue = stateFilter.value.toUpperCase();
  const countryFilterValue = countryFilter.value.toUpperCase();
  //let filter = document.getElementById("searchButton").value.toUpperCase();
  let tableElement = document.querySelector(".info-table");
  let tableRow = tableElement.getElementsByTagName("tr");

  //reset all table rows before next search
  for (let i = 1; i < tableRow.length; i++) {
    tableRow[i].style.display = "";
  }
  let dataCount = tableRow.length;
  let hideCount = 0;

  for (let i = 1; i < tableRow.length; i++) {
    let city = tableRow[i]
      .getElementsByTagName("td")[1]
      .textContent.toUpperCase();
    let state = tableRow[i]
      .getElementsByTagName("td")[3]
      .textContent.toUpperCase();
    let country = tableRow[i]
      .getElementsByTagName("td")[4]
      .textContent.toUpperCase();

    let cityFlag = false;
    let stateFlag = false;
    if (cityFilterValue !== "ALL") {
      if (city.indexOf(cityFilterValue) > -1) tableRow[i].style.display = "";
      else {
        tableRow[i].style.display = "none";
        hideCount++;
        cityFlag = true;
      }
    }
    if (stateFilterValue !== "ALL" && !cityFlag) {
      if (state.indexOf(stateFilterValue) > -1) tableRow[i].style.display = "";
      else {
        tableRow[i].style.display = "none";
        hideCount++;
        stateFlag = true;
      }
    }
    if (countryFilterValue !== "ALL" && !cityFlag && !stateFlag) {
      if (country.indexOf(countryFilterValue) > -1)
        tableRow[i].style.display = "";
      else {
        tableRow[i].style.display = "none";
        hideCount++;
      }
    }
  }
  console.log(hideCount);
  console.log(dataCount);
  if (hideCount === dataCount - 1) {
    displayPopUp();
  }
};

const displayPopUp = () => {
  modal.style.display = "block";
};
modalSpan.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
