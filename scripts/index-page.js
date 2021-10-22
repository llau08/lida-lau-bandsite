const apiURL = "https://project-1-api.herokuapp.com/";
const apiKey = "1158e45f-b3ed-4a56-852a-8d3d3cc13661";

axios.get(`${apiURL}comments/?api_key=${apiKey}`).then(response =>{

    response.data.forEach((element, index) => {
        if (index <= 2) {
            console.log(element);
            displayOriginalComment(element);
        } else {
            console.log(element);
            displayNewComment(element);
        }
    }) 
}).catch(function (error) {
    console.log(error);
  });
const commentBox = document.querySelector('.convo__comments');
const commentTextBox = document.getElementById('comment');
const commentNameBox = document.getElementById('name');


function displayComment(comm, singleComm) {

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

function displayOriginalComment(comm) {
    const singleComm = document.createElement('article');
    singleComm.classList.add('convo__indv-box');
    commentBox.appendChild(singleComm);
    commentBox.appendChild(singleComm);
    displayComment(comm, singleComm);
}

function displayNewComment(comm) {
    const singleComm = document.createElement('article');
    singleComm.classList.add('convo__indv-box');
    commentBox.appendChild(singleComm);
    commentBox.prepend(singleComm);
    displayComment(comm, singleComm);
}


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
    const newComm = {
        name: event.target.name.value,
        comment: event.target.comment.value
    };

    axios.post(`${apiURL}comments/?api_key=${apiKey}`, newComm)
      .then(function (response) {
        console.log(response);
      })
      .then (function (response){
        axios.get(`${apiURL}comments/?api_key=${apiKey}`).then(response =>{
            response.data.forEach((element, index) => {
                if (index <= 2) {
                    console.log(element);
                    displayOriginalComment(element);
                } else {
                    console.log(element);
                    displayNewComment(element);
                }

      })
    })
      .catch(function (error) {
        console.log(error);
      });

    commentBox.innerHTML = "";
    form.reset();
})


//Click on the box and get rid of value//
commentTextBox.addEventListener("click", () => {
    commentTextBox.innerText = "";
})
})