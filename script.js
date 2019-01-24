console.log("JS connected");
//random tag button 
const tagButton = ['food','burger','fries','ice cream','cookies'];
const buttonNum = [0,1,2,3];
let randomPopular = [];
let randomBtn = [];
//query form
const form = document.getElementById('query-form');
//text input field
const query = document.getElementById('query');
const list = document.getElementById('list-data');
//get button id from html
const ButtonOne = document.getElementById('onebtn');
const ButtonTwo= document.getElementById('twobtn');
const ButtonThree = document.getElementById('threebtn');
const ButtonFour= document.getElementById('fourbtn');




var codes = randomSelect();
randomButton(codes[0], codes[1], codes[2], codes[3]);
getTaggedPhotos(randomTag())


function randomSelect(){
    let i = buttonNum.length;
    let index;

    while(i--){
        index = Math.floor(Math.random()*(i+1));
        randomBtn.push(buttonNum[index]);
        buttonNum.splice(index,1);
    }
    console.log(randomBtn);
    return [randomBtn[0], randomBtn[1], randomBtn[2], randomBtn[3]]
}

function randomButton(randomNum, randomNum2, randomNum3, randomNum4){

    let i = tagButton.length;
    let index = 0;

    while(i--){
        index = Math.floor(Math.random()*(i+1));
        randomPopular.push(tagButton[index]);
        tagButton.splice(index,1);
    }
    console.log(randomPopular);
    console.log("Button Index: ", randomPopular[0]);

    ButtonOne.innerHTML = randomPopular[randomNum];
    ButtonTwo.innerHTML = randomPopular[randomNum2];
    ButtonThree.innerHTML = randomPopular[randomNum3]; 
    ButtonFour.innerHTML = randomPopular[randomNum4];
}

function randomTag() {
    let i = tagButton.length;
    let index = 0;

    while(i--){
        index = Math.floor(Math.random()*(i+1));
        randomPopular.push(tagButton[index]);
        tagButton.splice(index,1);
    }
    console.log("Picture Index: ", randomPopular[0]);
    
    return randomPopular[0];
}


//set onsubmit for search pictures
// form.onsubmit = function(event){
//     event.preventDefault();

//     //get value in input field
//     const queryTerm = query.value;
//     console.log(queryTerm);

//     getTaggedPhotos(queryTerm);
// }


function getTaggedPhotos(tagName){
fetch('https://api.tumblr.com/v2/tagged?tag=' + tagName + '&api_key=BVQoMRlv3bhREnrDnBCRG8QzkJW2GwRMCmk9TgSwOz8gNxhzQH')
.then(function(response){
    return response.json();
})
.then(function(result){

    //clear list tak campur dengan tag nama lain mcm ajing campur food
    list.innerHTML = '';
    const items = result.response;
    let masonry ;


//for each item,add image to list
   for (let i = 0; i < items.length; i++) {
    const item = items[i] ;

    if (item.photos != undefined){
        //create li and img to append
    const altSizes = item.photos[0].alt_sizes;
    const imgSrc = altSizes[altSizes.length - 3].url;
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.onload = function(){
        masonry.layout();
    }

    const li = document.createElement('li');
    li.appendChild(img);
    // li.innerHTML = imgSrc;

    list.appendChild(li);
       }
   }
   
   //initialize masonry after list has loaded
    masonry = new Masonry(list,{
    itemSelector : 'li',
    // columnWidth: 200,
    gutterWidth: 8,
});

//run layout
masonry.layout();
})

.catch (function(err){
    window.alert('Hey ,seem like the Tumblr API is down, please try again later');
    console.log('message:',err);
})
}

ButtonOne.onclick = function(){
    if(ButtonOne.innerHTML==randomPopular[0]){
        alert("What a fantastic choice!!! its CORRECT");        
    }
    else{
        alert("Wrong answer heh");  
    }
    location.reload();
} 

ButtonTwo.onclick = function(){
    if(ButtonTwo.innerHTML==randomPopular[0]){
        alert("What a fantastic choice!!! its CORRECT");        
    }
    else{ 
        alert("Wrong answer heh"); 
    }
    location.reload();
} 

ButtonThree.onclick = function(){
    if(ButtonThree.innerHTML==randomPopular[0]){
        alert("What a fantastic choice!!! its CORRECT");        
    }
    else{ 
        alert("Wrong answer heh");  
    }
    location.reload();
} 

ButtonFour.onclick = function(){
    if(ButtonFour.innerHTML==randomPopular[0]){
        alert("What a fantastic choice!!! its CORRECT");        
    }
    else{ 
        alert("Wrong answer heh");  
    }
    location.reload();
}






