var discount = document.querySelector('#discount');
var currentDate = new Date();
var currentmonth = currentDate.getMonth() + 1;

if (currentmonth <=6) {
  console.log('6')
  discount.innerHTML = `
  <p style="font-size:300%;">Jan-Jun 15% for customers who wear something orange</p>
  `
} else if (currentmonth >=7) {
  console.log('7')
  discount.innerHTML = `
  <p style="font-size:200%;">Jul-Dec 15% for customers who wear something green</p>
  `
}
