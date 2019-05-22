'use strict';


var fNPike = document.getElementById('fstandpike');

var seaT = document.getElementById('airPort');

function getRandomArbitrary(min, max) {

  var answer = Math.floor(Math.random() * (max - min)+ min);
  // console.log(answer + 'cookies');
  return answer;
}


//   Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) * this.salesAverage + this.minCustomers);

var customerPerh = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];


var loCation = [
  {

    location: '1St and Pike',
    mincus: 23,
    maxcus:65,
    avgcookie: 6.3,
    random: getRandomArbitrary,
  },

  { location: 'SeaTac Airport',
    mincus:3,
    maxcus:24,
    avgcookie:1.2,
    random: getRandomArbitrary,

  },

  {
    location: 'Seattle Center',
    mincus : 11,
    maxcus : 38,
    avgcookie : 3.7,
    random: getRandomArbitrary,

  }






];

// var hourlySales = [];
var saleTotal = 0;
for (var i=0; i < customerPerh.length; i++){
  
  var reSult = Math.floor(loCation[0].random(loCation[0].mincus,loCation[0].maxcus));
  //   hourlySales.push(i);
  var randomCook = customerPerh[i] + '  ' + reSult;
  //   hourlySales.push(i);
  
//   for(var j = 0; j < customerPerh.length; j++){
    saleTotal += reSult;
    
    console.log('Your sum is ' + saleTotal);

  
  var liEl = document.createElement('li');
  liEl.textContent = randomCook +' '+ '  cookies';
  fstandpike.appendChild(liEl);
  console.log(`${reSult}  cookies`);
  // customerPerh[0] ='6am 23 cookies';

}
console.log('onetime answer: ' + saleTotal ); 
var cookiesTotal = document.createElement('li');
cookiesTotal.textContent = 'Total ' +saleTotal ;
fstandpike.appendChild(cookiesTotal);


// var sum = 0;

// for(var i = 0; i < customerPerh.length; i++){
//   sum = sum + reSult /*random number*/;
// console.log(sum);
// }


// for (var i=0; i < customerPerh.length; i++){
//   var reSult = customerPerh[i] + '  ' + Math.floor(loCation[1].random(loCation[1].mincus,loCation[1].maxcus));
//   var liEl = document.createElement('li');
//   liEl.textContent = reSult + ' '+ 'cookies';
//   airPort.appendChild(liEl);
//   console.log(`${reSult}  cookies`);
//   // customerPerh[0] ='6am 23 cookies';
// }


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
};



var seaTac = {
  mincus:3,
  maxcus:24,
  avgcookie:1.2,
  random: getRandomArbitrary

};

var seatleCenter = {
  mincus : 11,
  maxcus : 38,
  avgcookie : 3.7,
  random: getRandomArbitrary
};

var capiTol = {
  mincus : 20,
  maxcus : 38,
  avgcookie : 2.3,
  random: getRandomArbitrary
};

var alKi = {
  mincus : 2,
  maxcus : 16,
  avgcookie :4.6,
  random: getRandomArbitrary
};







firstAndPike.random(firstAndPike.mincus, firstAndPike.maxcus);
getRandomArbitrary(firstAndPike.mincus,firstAndPike.maxcus);
seaTac.random(seaTac.mincus, seaTac.maxcus);