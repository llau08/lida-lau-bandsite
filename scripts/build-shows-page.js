const showContainer = document.querySelector('.shows');

//ARRAY OF OBJECTS//
const tix = [
  {
   date: 'Mon Sep 06 2021',
   venue: 'Ronald Lane',
   location: 'San Francisco, CA',
 },
 
 {
   date: 'Tues Sept 21 2021',
   venue: 'Pier 3 East',
   location: 'San Francisco, CA',
 },
 
 {
   date: 'Fri Oct 15 2021',
   venue: 'View Lounge',
   location: 'San Francisco, CA',
 },
 
 {
   date: 'Sat Nov 06 2021',
   venue: 'Hyatt Agency',
   location: 'San Francisco, CA',
 },
 
 {
   date: 'Fri Nov 26 2021',
   venue: 'Moscow Center',
   location: 'San Francisco, CA',
 },
 
 {
   date: 'Wed Dec 15 2021',
   venue: 'Press Club',
   location: 'San Francisco, CA',
 }]

//h2 SHOWS TITLE//
const showTitle = document.createElement('h2');
showTitle.classList.add('shows__title');
showTitle.innerText = 'Shows';
showContainer.appendChild(showTitle);

//TABLE FOR SHOWS//
  const showsTable = document.createElement('table');
  showContainer.appendChild(showsTable);

// TABLE HEADER //
let tHead = document.createElement('thead');
showsTable.appendChild(tHead);

let thRow = document.createElement('tr');
let heading1 = document.createElement('th');
heading1.innerText = 'Date';
let heading2 = document.createElement('th');
heading2.innerText = 'Venue';
let heading3 = document.createElement('th');
heading3.innerText = 'Location';

tHead.appendChild(thRow);
thRow.appendChild(heading1);
thRow.appendChild(heading2);
thRow.appendChild(heading3);

// TABLE BODY //
let tBody = document.createElement('tbody');
showsTable.appendChild(tBody);

// let tRow = document.createElement('tr');
// let tDates = document.createElement('td');
// tDates.innerText = tix[0].date;
// let tVenue = document.createElement('td');
// tVenue.innerText = tix[0].venue;
// let tLocation = document.createElement('td');
// tLocation.innerText = tix[0].location;
// let tButton = document.createElement('button');
// tButton.innerText = 'BUY TICKETS';

// tBody.appendChild(tRow);
// tRow.appendChild(tDates);
// tRow.appendChild(tVenue);
// tRow.appendChild(tLocation);
// tRow.appendChild(tButton);

for (let i = 0; i < tix.length; i++){
  let tRow = document.createElement('tr');
  let tDates = document.createElement('td');
  tDates.innerText = tix[i].date;
  let tVenue = document.createElement('td');
  tVenue.innerText = tix[i].venue;
  let tLocation = document.createElement('td');
  tLocation.innerText = tix[i].location;
  let tButton = document.createElement('button');
  tButton.innerText = 'BUY TICKETS';
  tButton.setAttribute("onclick", "location.href='./shows.html';")

  tBody.appendChild(tRow);
  tRow.appendChild(tDates);
  tRow.appendChild(tVenue);
  tRow.appendChild(tLocation);
  tRow.appendChild(tButton);
}



// const completeTable = (obj) => {
//   const tableRow = document.createElement("tr");

//   const tableDate = document.createElement('td');
//   tableDate.innerText = obj.date;
//   tableRow.appendChild(tableDate);

//   const tableVenue = document.createElement('td');
//   tableVenue.innerText = obj.venue;
//   tableRow.appendChild(tableVenue);

//   const tableLocation = document.createElement('td');
//   tableDate.innerText = obj.location;
//   tableRow.appendChild(tableLocation);


//   showsTable.appendChild(tableRow);
// }

// for (let i=0; i < tix.length; i++){
//   completeTable(tix[i]);
// }

// const completeTable = (tix) => {
//   const tableRow = document.createElement("tr");
//   const tableData = document.createElement('td');
//   tableData.innerText = tix.date;
// }
// const tableData = document.createElement('td');
// tableRow.appendChild(tableData);

// ADD TIX CONTENT TO TABLE//
// for (let i = 0; i < tix.length; i++){
  // let tableDate = document.createElement('td');
  // let tableVenue = document.createElement('td');
  // let tableLocation = document.createElement('td');
  // tableDate.innerText = tix[i]['date'];
  // tableVenue.innerText = tix[i]['venue'];
  // tableLocation.innerText = tix[i]['location'];
  // tableRow.appendChild(tableDate, tableRow, tableLocation);
  // completeTable(tableRow, tix[i],'date');
  // completeTable(tableRow, tix[i],'venue');
  // completeTable(tableRow, tix[i],'location');
  // tableRow.appendChild(tableData);
// }

// function completeTable(parent, object, text){
//   let tableInfo = document.createElement('td');
//   tableInfo.innerText= object[text];
//   parent.appendChild(tableInfo);
// }

// for (let i=0; i < tix.length; i++) {
//   let tableRow = document.createElement('tr');
//   showsTable.appendChild(tableRow);
//   let tableData = document.createElement('td');
//   tableRow.appendChild(tableData);
//   let tableInsert= tix[i][date];
//   let tableInsert= tix[i][venue];
//   let tableInsert= tix[i][location];

  // make a row
  // for each row, add x amount of cells (keys)
  //     you have 3 keys (date, venue, location) j = 0, j < 3; j++
  //     make a td = tr.insertCell();
  //     append the cell into the table row (tr)
// };

//TICKET INFO OBJECT//
// const tix = [{
//   date: 'Mon Sep 06 2021',
//   venue: 'Ronald Lane',
//   location: 'San Francisco, CA',
// },

// {
//   date: 'Tues Sept 21 2021',
//   venue: 'Pier 3 East',
//   location: 'San Francisco, CA',
// },

// {
//   date: 'Fri Oct 15 2021',
//   venue: 'View Lounge',
//   location: 'San Francisco, CA',
// },

// {
//   date: 'Sat Nov 06 2021',
//   venue: 'Hyatt Agency',
//   location: 'San Francisco, CA',
// },

// {
//   date: 'Fri Nov 26 2021',
//   venue: 'Moscow Center',
//   location: 'San Francisco, CA',
// },

// {
//   date: 'Wed Dec 15 2021',
//   venue: 'Press Club',
//   location: 'San Francisco, CA',
// }]





//List for all shows//
// const topShowBox = document.createElement('div');
// topShowBox.classList.add('shows__box');
// topShowBox.classList.add('shows__box--top');
// showContainer.appendChild(topShowBox);
// const botShowBox = document.createElement('div');
// botShowBox.classList.add('shows__box');
// botShowBox.classList.add('shows__box--bot');
// showContainer.appendChild(botShowBox);

// top show box features //

// let showFilters = document.createElement('ul');
// topShowBox.appendChild(showFilters);

// let dat = document.createElement('li');
// dat.innerText = 'Date';
// showFilters.appendChild(dat);

// let ven = document.createElement('li');
// ven.innerText = 'Venue';
// showFilters.appendChild(ven);

// let loc = document.createElement('li');
// loc.innerText = 'Location';
// showFilters.appendChild(loc);

// // bottom show box features
// for (let i = 0; i < tix.length; i++) {
//   let showList = document.createElement('ul');
//   showList.classList.add('shows__list');
//   botShowBox.appendChild(showList);
//   // let listDate = document.createElement('li');
//   // let listVenue = document.createElement('li');
//   // let listLocation = document.createElement('li');
//   // listDate.childList.add('list__date');
//   // listDate.innerText = tix[i]['date'];
//   // listVenue.innerText = tix[i]['venue'];
//   // listLocation.innerText = tix[i]['location'];
//   // showList.appendChild(listDate);
//   // showList.appendChild(listVenue);
//   // showList.appendChild(listLocation);
//   makeListItem(showList, tix[i], 'date');
//   makeListItem(showList, tix[i], 'venue');
//   makeListItem(showList, tix[i], 'location');
//   let button = document.createElement('button');
//   button.classList.add('shows__btn');
//   button.innerText = 'BUY TICKETS';
//   showList.appendChild(button);
//   button.setAttribute("onclick", "location.href='./shows.html';")
// }

// function makeListItem(parent, childtype, object, text) {
//   let listChild = document.createElement('li');
//   listChild.classList.add(`shows__${text}`);
//   listChild.innerText = object[text];
//   parent.appendChild(listChild);
// }




