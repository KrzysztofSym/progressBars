let percent = document.querySelector(".percent");
let percent2 = document.querySelector(".percent-indicator");
let counter = 0;

setTimeout(progress, 2000);
   function progress() {setInterval(() => {
if (counter == 100) {
    clearInterval; 
} else {
    counter += 1;
    percent.innerHTML = `${counter}%`;
    percent2.innerHTML = `${counter}%`;
}
}, 10);
   }