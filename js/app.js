'use strict';


var fNPike = document.getElementById('fstandpike');

var seaT = document.getElementById('airPort');

function getRandomArbitrary(min, max) {

  var answer = Math.floor(Math.random() * (max - min)+ min);
  // console.log(answer + 'cookies');
  return answer;
}


//   Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) * this.salesAverage + this.minCustomers);
// need an array to hold the hrs
var customerPerhr = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];

// object literal (multiple) for each store
//  Min customers per hr
// max 
// average cooker per customer
// an array of customer each hr based on the min and the max
// random number between the min and the ma
// an arry of cookies sold each hr
// multiply customers each hr by thr average cookies sales per customer
// render tje to the dom
//  total cookies for the day
var loCation = [
  {
     
    name: 'Pikes Place',
    minCustomersEachHour: 23,
    maxCustomersEachHour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay: 0,
    calcCustomersEachHour: function(){
      for(var i = 0; i < customerPerhr.length; i++){
        this.customersEachHour.push(getRandomCustomer(this.minCustomersEachHour, this.maxCustomersEachHour));
      }
    },
    
    calcCookiesEachHour: function(){
      this.calcCustomersEachHour();
      for(var i = 0; i < customerPerhr.length; i++){
        var oneHourOfCookies = Math.ceil(this.customersEachHour[i]*this.averageCookiesPerCustomer);
    
        this.cookiesEachHour.push(oneHourOfCookies);
    
        this.totalCookiesForTheDay += oneHourOfCookies;
      }
    },
      
    render: function(){
      this.calcCookiesEachHour();
    
      for(var i = 0; i < customerPerhr.length; i++){
        // create an element, give it content, attach it to the DOM
        // 6am: 45 cookies
        var liEl = document.createElement('li');
        liEl.textContent = `${customerPerhr[i]}: ${this.cookiesEachHour[i]} cookies`;
    
        fNPike.appendChild(liEl);
      }
    
      liEl = document.createElement('li');
      liEl.textContent = `Total: ${this.totalCookiesForTheDay} cookies`;
      fNPike.appendChild(liEl);
    }
  },

  

  { name: 'SeaTac Airport',
    minCustomersEachHour: 3,
    maxCustomersEachHour: 24,
    averageCookiesPerCustomer: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay: 0,
    calcCustomersEachHour: function(){
      for(var i = 0; i < customerPerhr.length; i++){
        this.customersEachHour.push(getRandomCustomer(this.minCustomersEachHour, this.maxCustomersEachHour));
      }
    },
    
    calcCookiesEachHour: function(){
      this.calcCustomersEachHour();
    
      for(var i = 0; i < customerPerhr.length; i++){
        var oneHourOfCookies = Math.ceil(this.customersEachHour[i]*this.averageCookiesPerCustomer);
    
        this.cookiesEachHour.push(oneHourOfCookies);
    
        this.totalCookiesForTheDay += oneHourOfCookies;
      }
    },
      
    render: function(){
      this.calcCookiesEachHour();
    
      for(var i = 0; i < customerPerhr.length; i++){
        // create an element, give it content, attach it to the DOM
        // 6am: 45 cookies
        var liEl = document.createElement('li');
        liEl.textContent = `${customerPerhr[i]}: ${this.cookiesEachHour[i]}  cookies`;
    
        seaT.appendChild(liEl);
      }
    
      liEl = document.createElement('li');
      liEl.textContent = `Total: ${this.totalCookiesForTheDay}  cookies`;
      seaT.appendChild(liEl);
    }

  },

  {
    location: 'Seattle Center',
    mincus : 11,
    maxcus : 38,
    avgcookie : 3.7,
    random: getRandomArbitrary,

  }






];


loCation[0].render();

loCation[1].render();

// var hourlySales = [];
// var saleTotal = 0;
// for (var i=0; i < customerPerh.length; i++){
  
//   var reSult = Math.floor(loCation[0].random(loCation[0].mincus,loCation[0].maxcus));
//   //   hourlySales.push(i);
//   var randomCook = customerPerh[i] + '  ' + reSult;
//   //   hourlySales.push(i);
  
// //   for(var j = 0; j < customerPerh.length; j++){
//     saleTotal += reSult;
    
//     console.log('Your sum is ' + saleTotal);

  
//   var liEl = document.createElement('li');
//   liEl.textContent = randomCook +' '+ '  cookies';
//   fstandpike.appendChild(liEl);
//   console.log(`${reSult}  cookies`);
//   // customerPerh[0] ='6am 23 cookies';

// }
// console.log('onetime answer: ' + saleTotal ); 
// var cookiesTotal = document.createElement('li');
// cookiesTotal.textContent = 'Total ' +saleTotal ;
// fstandpike.appendChild(cookiesTotal);






// helper function

//  from MDN math.random()
function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}