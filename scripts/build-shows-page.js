const apiURL = "https://project-1-api.herokuapp.com/showdates?api_key=value";
const apiKey = "1158e45f-b3ed-4a56-852a-8d3d3cc13661";

axios.get(`${apiURL}comments/?api_key=${apiKey}`).then(response =>{
  console.log(response);

  for (let i = 0; i < response.data.length; i++) {
    console.log(response.data[i]);
    let tRow = document.createElement('tr');
    tRow.classList.add('shows__row');
    let tDates = document.createElement('td');
    tDates.classList.add('shows__dates');
    tDates.innerText = response.data[i].date;
    let tcDate = new Date(Number(response.data[i].date));
    const options = {weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', timeZone: 'America/New_York'};
    tDates.innerText = new Date(Number(response.data[i].date)).toLocaleDateString('en-US', options).replace(/,/g,"");
    let tVenue = document.createElement('td');
    tVenue.innerText = response.data[i].place;
    tVenue.classList.add('shows__venues');
    let tLocation = document.createElement('td');
    tLocation.innerText = response.data[i].location;
    tLocation.classList.add('shows__locations');
    let tButton = document.createElement('button');
    tButton.classList.add('shows__btn')
    tButton.innerText = 'BUY TICKETS';
  
  tBody.appendChild(tRow);
  tRow.appendChild(tDates);
  tRow.appendChild(tVenue);
  tRow.appendChild(tLocation);
  tRow.appendChild(tButton);
}
})

.catch((error) =>{
  console.log(error);
});




const showContainer = document.querySelector('.shows');

//ARRAY OF OBJECTS//
// const tix = [
//   {
//    date: 'Mon Sep 06 2021',
//    venue: 'Ronald Lane',
//    location: 'San Francisco, CA',
//  },
 
//  {
//    date: 'Tues Sept 21 2021',
//    venue: 'Pier 3 East',
//    location: 'San Francisco, CA',
//  },
 
//  {
//    date: 'Fri Oct 15 2021',
//    venue: 'View Lounge',
//    location: 'San Francisco, CA',
//  },
 
//  {
//    date: 'Sat Nov 06 2021',
//    venue: 'Hyatt Agency',
//    location: 'San Francisco, CA',
//  },
 
//  {
//    date: 'Fri Nov 26 2021',
//    venue: 'Moscow Center',
//    location: 'San Francisco, CA',
//  },
 
//  {
//    date: 'Wed Dec 15 2021',
//    venue: 'Press Club',
//    location: 'San Francisco, CA',
//  }]

//h2 SHOWS TITLE//
const showTitle = document.createElement('h2');
showTitle.classList.add('shows__title');
showTitle.innerText = 'Shows';
showContainer.appendChild(showTitle);

//TABLE FOR SHOWS//
  const showsTable = document.createElement('table');
  showsTable.classList.add('shows__table')
  showContainer.appendChild(showsTable);

// TABLE HEADER //
let tHead = document.createElement('thead');
showsTable.appendChild(tHead);

let thRow = document.createElement('tr');
thRow.classList.add('shows__hrow');
let heading1 = document.createElement('th');
heading1.innerText = 'DATE';
let heading2 = document.createElement('th');
heading2.innerText = 'VENUE';
let heading3 = document.createElement('th');
heading3.innerText = 'LOCATION';
let heading4 = document.createElement('th');


tHead.appendChild(thRow);
thRow.appendChild(heading1);
thRow.appendChild(heading2);
thRow.appendChild(heading3);
thRow.appendChild(heading4);

// TABLE BODY //
let tBody = document.createElement('tbody');
showsTable.appendChild(tBody);

  // for (let i = 0; i < tix.length; i++) {
  //   let tRow = document.createElement('tr');
  //   tRow.classList.add('shows__row');
  //   let tDates = document.createElement('td');
  //   tDates.classList.add('shows__dates');
  //   tDates.innerText = tix[i].date;
  //   let tVenue = document.createElement('td');
  //   tVenue.innerText = tix[i].place;
  //   tVenue.classList.add('shows__venues');
  //   let tLocation = document.createElement('td');
  //   tLocation.innerText = tix[i].location;
  //   tLocation.classList.add('shows__locations');
  //   let tButton = document.createElement('button');
  //   tButton.classList.add('shows__btn')
  //   tButton.innerText = 'BUY TICKETS';

    // tBody.appendChild(tRow);
    // tRow.appendChild(tDates);
    // tRow.appendChild(tVenue);
    // tRow.appendChild(tLocation);
    // tRow.appendChild(tButton);
  // }



const completeTR = document.querySelectorAll('.shows__row');

for (let i = 0; i < completeTR.length; i++) {
  completeTR[i].addEventListener("click", (event) => {
    completeTR[i].classList.toggle('selected')
  })
}
