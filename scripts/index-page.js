const commentBox = document.querySelector('.convo__comments');

let comments = [{
    name: 'Connor Walton',
    date: '02/17/2021',
    note: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
},
{
    name: 'Emilie Beach',
    date: '01/09/2021',
    note: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
},
{
    name: 'Miles Acosta',
    date: '12/20/2021',
    note: 'I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.'
}];

function displayComment(comm){
const singleComm = document.createElement('article');
commentBox.appendChild(singleComm);

//IMAGE//
const commImg = document.createElement('div');
commImg.classList.add('convo__img');
singleComm.appendChild(commImg);

//NAME & DATE BOX//
const commHead = document.createElement('div');
commHead.classList.add('convo__indv-head');
singleComm.appendChild(commHead);

////INNER COMMENT TXT//
const commTxt = document.createElement('div');
commTxt.classList.add('convo__txt');
singleComm.appendChild(commTxt);

//INNER COMMENT P TAGS//
const pName = document.createElement('p');
commHead.appendChild(pName);
pName.innerText = comm.name;

const pDate = document.createElement('p');
commHead.appendChild(pDate);
pDate.innerText = comm.date;

const pTxt = document.createElement('p');
commTxt.appendChild(pTxt);
pTxt.innerText = comm.note;
}

for (let i=0; i < comments.length; i++){
    displayComment(comments[i]);
};



