const joinConvo = document.querySelector('.convo');
const convoForm = document.querySelector('.convo__form');
const topConvoBox = document.createElement('div');
topConvoBox.classList.add('convo__box');
topConvoBox.classList.add('convo__box--top');
convoForm.appendChild(topConvoBox);

//BIG BOX//
const botConvoBox = document.createElement('div');
botConvoBox.classList.add('convo__box');
botConvoBox.classList.add('convo__box--bot');
convoForm.appendChild(botConvoBox);

//COMMENT BOX//
const commentBox = document.createElement('div');
commentBox.classList.add('convo__sub-box');
botConvoBox.appendChild(commentBox);

//COMMENT TWEET BOX//
const tweetBox = document.createElement('div');
tweetBox.classList.add('convo__tweet');
commentBox.appendChild(tweetBox);

const nameDate = document.createElement('div');
nameDate.classList.add('convo__sub-info');
tweetBox.appendChild(nameDate);

//IMG BOX//
const botConvoImg = document.createElement('div');
botConvoImg.classList.add('convo__avatar');
commentBox.appendChild(botConvoImg);


//STUFF IN THE JOIN CONVERSATION SECTION//
let convoTitle = document.createElement('h2');
joinConvo.prepend(convoTitle);
convoTitle.innerText = 'Join the Conversation';

let convoImg = document.createElement('img');
convoImg.setAttribute("src","../assets/images/Mohan-muruge.jpg")
convoImg.alt = "avatar"
convoForm.prepend(convoImg);

let convoButton = document.createElement('button');
convoButton.setAttribute("onclick", "location.href='../styles/shows.html';")
convoButton.innerText = "Button";
convoForm.appendChild(convoButton);


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
}]

