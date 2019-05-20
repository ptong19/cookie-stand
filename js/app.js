'use strict';


var fNPike = document.getElementById('fstandpike')

var seaT = document.getElementById('airPort')

function getRandomArbitrary(min, max) {

    var answer = Math.floor(Math.random() * (max - min) + min);
    // console.log(answer + 'cookies'); 
    return answer;
  }

var customerPerh = [ '6am', '7am', '8am', '9am', '10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


var loCation = [
    {

        location: '1St and Pike',
        mincus: 23,
        maxcus:65,
        avgcookie: 6.3,
        random: getRandomArbitrary,
    },

    {   location: 'SeaTac Airport',
        mincus:3,
        maxcus:24,
        avgcookie:1.2,
        random: getRandomArbitrary,
    
    }
]
 
for (var i=0; i < customerPerh.length; i++){
    var reSult = customerPerh[i] +  '  ' + Math.floor(loCation[0].random(loCation[0].mincus,loCation[0].maxcus));
    var liEl = document.createElement('li');
    liEl.textContent = reSult + ' '+ 'cookies';
    fstandpike.appendChild(liEl);
    console.log(`${reSult}  cookies`);
    // customerPerh[0] ='6am 23 cookies';
}

for (var i=0; i < customerPerh.length; i++){
    var reSult = customerPerh[i] +  '  ' + Math.floor(loCation[1].random(loCation[1].mincus,loCation[1].maxcus));
    var liEl = document.createElement('li');
    liEl.textContent = reSult + ' '+ 'cookies';
    airPort.appendChild(liEl);
    console.log(`${reSult}  cookies`);
    // customerPerh[0] ='6am 23 cookies';
}


// for(var i = 0; i < myPets.length; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = myPets[i].name;
//     petList.appendChild(liEl);
//   }
// var liEl = document.createElement('li');
// liEl.textContent = customerPerh[i].random;

// // console.log(firstAndPike.random);
// var reSult = string+ ' ' + 'cookies';
// var liEl = document.createElement('li');
// liEl.textContent = reSult;
// fstandpike.appendChild(liEl);

// liEl = document.createElement('il');
// liEl.textContent = reSult;
// fstandpike.appendChild(liEl);



var firstAndPike ={
    mincus: 23,
    maxcus:65,
    avgcookie: 6.3,
    random: getRandomArbitrary,
}     



var seaTac = {
    mincus:3,
    maxcus:24,
    avgcookie:1.2,
    random: getRandomArbitrary

}

var seatleCenter = {
    mincus : 11,
    maxcus : 38,
    avgcookie : 3.7,
    random: getRandomArbitrary
}

var capiTol = {
    mincus : 20,
    maxcus : 38,
    avgcookie : 2.3,
    random: getRandomArbitrary
}

var alKi = {
    mincus : 2,
    maxcus : 16,
    avgcookie :4.6,
    random: getRandomArbitrary
}







firstAndPike.random(firstAndPike.mincus, firstAndPike.maxcus)
getRandomArbitrary(firstAndPike.mincus,firstAndPike.maxcus)
seaTac.random(seaTac.mincus, seaTac.maxcus)
