const showContainer = document.querySelector('.shows');


let tix = [{
  // tix[0]['date']
  date: 'Mon Sep 06 2021',
  venue: 'Ronald Lane',
  location: 'San Francisco, CA',
},

{
  // tix[1]
  date: 'Tues Sept 21 2021',
  venue: 'Pier 3 East',
  location: 'San Francisco, CA',
},

{
  // tix[2]
  date: 'Fri Oct 15 2021',
  venue: 'View Lounge',
  location: 'San Francisco, CA',
},

{
  // tix[3]
  date: 'Sat Nov 06 2021',
  venue: 'Hyatt Agency',
  location: 'San Francisco, CA',
},

{
  // tix[4]
  date: 'Fri Nov 26 2021',
  venue: 'Moscow Center',
  location: 'San Francisco, CA',
},

{
  // tix[5]
  date: 'Wed Dec 15 2021',
  venue: 'Press Club',
  location: 'San Francisco, CA',
}]

//List for all shows//
const topShowBox = document.createElement('div');
topShowBox.classList.add('shows__box');
topShowBox.classList.add('shows__box--top');
showContainer.appendChild(topShowBox);
const botShowBox = document.createElement('div');
botShowBox.classList.add('shows__box');
botShowBox.classList.add('shows__box--bot');
showContainer.appendChild(botShowBox);

// top show box features //
let showTitle = document.createElement('h2');
showTitle.classList.add('shows__title');
showTitle.innerText = 'Shows';
topShowBox.appendChild(showTitle);

let showFilters = document.createElement('ul');
topShowBox.appendChild(showFilters);

let dat = document.createElement('li');
dat.innerText = 'Date';
showFilters.appendChild(dat);

let ven = document.createElement('li');
ven.innerText = 'Venue';
showFilters.appendChild(ven);

let loc = document.createElement('li');
loc.innerText = 'Location';
showFilters.appendChild(loc);

// bottom show box features
for (let i = 0; i < tix.length; i++) {
  let showList = document.createElement('ul');
  showList.classList.add('shows__list');
  botShowBox.appendChild(showList);
  // let listDate = document.createElement('li');
  // let listVenue = document.createElement('li');
  // let listLocation = document.createElement('li');
  // listDate.childList.add('list__date');
  // listDate.innerText = tix[i]['date'];
  // listVenue.innerText = tix[i]['venue'];
  // listLocation.innerText = tix[i]['location'];
  // showList.appendChild(listDate);
  // showList.appendChild(listVenue);
  // showList.appendChild(listLocation);
  makeListItem(showList, tix[i], 'date');
  makeListItem(showList, tix[i], 'venue');
  makeListItem(showList, tix[i], 'location');
  let button = document.createElement('button');
  button.classList.add('shows__btn');
  button.innerText = 'BUY TICKETS';
  showList.appendChild(button);
  button.setAttribute("onclick", "location.href='./shows.html';")
}

function makeListItem(parent, object, text) {
  let listChild = document.createElement('li');
  listChild.classList.add(`shows__${text}`);
  listChild.innerText = object[text];
  parent.appendChild(listChild);
}






