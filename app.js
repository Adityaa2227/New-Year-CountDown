let days=document.querySelector("#day");
let hours=document.querySelector("#hour");
let min=document.querySelector("#minute");
let yr=document.querySelector(".year");
let sec=document.querySelector("#second");
const today = new Date();
const year = today.getFullYear();


yr.innerText=year+1;
const newyear=new Date(`Jan 1,${year+1} 00:00:00`).getTime();


updateCountdown();
function updateCountdown() {
  const now = new Date().getTime();
  const gap = newyear - now;

let second=1000;
let minute=second*60;
let hour= minute*60;
let day=hour*24;


let d=Math.floor(gap/day);
let h=Math.floor((gap%day)/hour);
let m=Math.floor((gap%hour)/minute);
let s=Math.floor((gap%minute)/second);


days.innerText=d;
hours.innerText=h;
min.innerText=m;
sec.innerText=s;

setTimeout(updateCountdown, 1000);

}


