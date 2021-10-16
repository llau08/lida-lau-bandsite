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
heading1.innerText = 'DATE';
let heading2 = document.createElement('th');
heading2.innerText = 'VENUE';
let heading3 = document.createElement('th');
heading3.innerText = 'LOCATION';

tHead.appendChild(thRow);
thRow.appendChild(heading1);
thRow.appendChild(heading2);
thRow.appendChild(heading3);

// TABLE BODY //
let tBody = document.createElement('tbody');
showsTable.appendChild(tBody);

  for (let i = 0; i < tix.length; i++) {
    let tRow = document.createElement('tr');
    tRow.classList.add('shows__row');
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



const completeTR = document.querySelectorAll('.shows__row');

for (let i = 0; i < completeTR.length; i++) {
  completeTR[i].addEventListener("click", (event) => {
    for (let j = 0; j < completeTR[i].cells.length; j++){
      completeTR[i].cells[j].classList.toggle('selected')
    }
  })
}
