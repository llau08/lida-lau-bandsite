const apiURL = "https://project-1-api.herokuapp.com/";
const apiKey = "1158e45f-b3ed-4a56-852a-8d3d3cc13661";

axios.get(`${apiURL}comments/?api_key=${apiKey}`).then(response =>{
    console.log(response);
    // for (let i=0; i < response.data.length; i++){
    //     displayComment(response.data[i]);
    // };

    for (let i=response.data.length -1; i >= 3; i--){
        console.log(i);
        displayComment(response.data[i]);
    }
    for (let i=0; i <= 2; i++){
        displayComment(response.data[i]);
    }
});

const commentBox = document.querySelector('.convo__comments');
const commentTextBox = document.getElementById('comment');
const commentNameBox = document.getElementById('name');

// let comments = [{
//     name: 'Connor Walton',
//     date: '02/17/2021',
//     note: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
// },
// {
//     name: 'Emilie Beach',
//     date: '01/09/2021',
//     note: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
// },
// {
//     name: 'Miles Acosta',
//     date: '12/20/2020',
//     note: "I can't stop listening. Every time I hear one of their songs-the vocals-it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
// }];

function displayComment(comm){
const singleComm = document.createElement('article');
singleComm.classList.add('convo__indv-box');
commentBox.appendChild(singleComm);

// //IMAGE BOX//
const commImg = document.createElement('div');
commImg.classList.add('convo__img-box');
singleComm.appendChild(commImg);

//ADD IMAGE TO IMG BOX//
const avatar = document.createElement('div');
avatar.classList.add('convo__avatar');
commImg.appendChild(avatar);

//THAT BOX THAT HOLDS THE NAME/DATE/TEXT TOGETHER//
const innerCommBox = document.createElement('div');
innerCommBox.classList.add('convo__sub-box')
singleComm.appendChild(innerCommBox);

//NAME & DATE BOX//
const commHead = document.createElement('div');
commHead.classList.add('convo__indv-head');
innerCommBox.appendChild(commHead);

////INNER COMMENT TXT//
const commTxt = document.createElement('div');
commTxt.classList.add('convo__txt');
innerCommBox.appendChild(commTxt);

//INNER COMMENT P TAGS//
const pName = document.createElement('p');
pName.classList.add('convo__comm-name')
commHead.appendChild(pName);
pName.innerText = comm.name;

const pDate = document.createElement('p');
pDate.classList.add('convo__comm-date')
commHead.appendChild(pDate);
pDate.innerText = changeDate(comm.timestamp);

const pTxt = document.createElement('p');
pTxt.classList.add('convo__comm-txt')
commTxt.appendChild(pTxt);
pTxt.innerText = comm.comment;
}



// for (let i=0; i < comments.length; i++){
//     displayComment(comments[i]);
// };

function changeDate(timestamp){
    let today = new Date(Number.parseInt(timestamp));

    let numMonth = today.getMonth() + 1;
    let numDay = today.getDate();
    let numYear = today.getFullYear();

    if (numMonth <= 9) {
        numMonth = '0' + numMonth;
    };

    if (numDay <= 9) {
        numDay = "0" + numDay;
    }

    today = numMonth + "/" + numDay + "/" + numYear; 
    return today
}

const form = document.querySelector('.convo__form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // let today = new Date();
    // let numMonth = today.getMonth() + 1;
    // let numDay = today.getDate();
    // let numYear = today.getFullYear();

    // if (numMonth <= 9) {
    //     numMonth = '0' + numMonth;
    // };

    // if (numDay <= 9) {
    //     numDay = "0" + numDay;
    // }

    // today = numMonth + "/" + numDay + "/" + numYear; 

    const newComm = {
        name: event.target.name.value,
        // date: today,
        comment: event.target.comment.value
    };

    axios.post(`${apiURL}comments/?api_key=${apiKey}`, newComm)
      .then(function (response) {
        console.log(response);
      })
      .then (function (response){
        axios.get(`${apiURL}comments/?api_key=${apiKey}`).then(response =>{
            console.log(response.data.length -1);
            for (let i=response.data.length -1; i >= 3; i--){
                console.log(i);
                displayComment(response.data[i]);
            }
            for (let i=0; i <= 2; i++){
                displayComment(response.data[i]);
            }
      })
    })
      .catch(function (error) {
        console.log(error);
      });
    // comments.unshift(newComm);
    commentBox.innerHTML = "";

    // for (let i=0; i < comments.length; i++){
    //     displayComment(comments[i]);}
    form.reset();
})

//Click on the box and get rid of value//
commentTextBox.addEventListener("click", () => {
    commentTextBox.innerText = "";
})

