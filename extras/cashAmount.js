// var cashAmount = class CashAmount {

class CashAmount {
  constructor(start) {
    this.start = start;
  }
  //Also Assuming in Tests, that totalAsPennies is meant 
  //totalInPennies
  totalInPennies() {
    var balance = this.start * 100;
    return balance;
  }

  addDoubleAmount(input) {
    var x = this.totalInPennies();
    var y = input * 100;
    var z = x + y;
    var v = z / 100;
    this.start = v;
    // console.log('First a', a);
    // console.log(this.start);
    //this would be in decimal form
  }

  //Difficult; Do last
  quantityOfEachDenomination() {
    var x, a, b, c, d, e, f, g, h, i, j;
    var x = this.start;
    if ((x/100) > 0) {
        a = Math.floor(x / 100);
        x = x % 100;
    } 
    if ((x/50) > 0) {
        b = Math.floor(x / 50);
        x = x % 50;
    } 
    if ((x/20) > 0) {
        c = Math.floor(c / 20);
        x = x % 20;
    } 
    if ((x/10) > 0) {
        d = Math.floor(d / 10);
        x = x % 10;
    } 
    if ((x/5) > 0) {
        e = Math.floor(x / 5);
        x = x % 5;
    } 
    if ((x/1) > 0) {
        f = Math.floor(x / 1);
        x = x % 1;
    } 
    if ((x/0.25) > 0) {
        g = Math.floor(x / 0.25);
        x = x % 0.25;
    } 
    if ((x/0.1) > 0) {
        h = Math.floor(x / 0.1);
        x = x % 0.1;
    } 
    if ((x/0.05) > 0) {
        i = Math.floor(x / 0.05);
        x = x % 0.05;
    } 
    if ((x/0.01) > 0) {
        j = Math.floor(x / 0.01);
        x = x % 0.01;
    } 
    
    var split = {
      'hundreds': a,
      'fifties': b,
      'twenties': c,
      'tens': d,
      'fives': e,
      'ones': f,
      'quarters': g,
      'dimes': h,
      'nickels': i,
      'pennies': j
    };
    // console.log(split);
    return split;
  }

  toDouble() {
    return this.start;
    // var temp = this.start / 100;
    // return temp;
  }

  toDoubleString() {
    var n = this.toDouble();
    return n.toString();
  };
};

/***
//make class called CashAmount, accepts double values

MDN Resources:
https://www.w3schools.com/jsref/jsref_parsefloat.asp
***/