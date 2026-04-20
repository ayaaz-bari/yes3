for(let x = 0; x < 3; x++){
    console.log(x)
}

for(let y = 0; y <= 10; y=y+2){
    console.log(y)
}

for(let j = 1; j <= 9; j=j+2){
    console.log(j)
}

for(let y = 0; y <= 10; y++){
if (y % 2 == 0)
    console.log(y)}

for(let y = 0; y <= 10; y++){
if (y % 2 == 1)
    console.log(y)}


let fruits = ['mango', 'blueberry', 'watermelon', 'banana'];

fruits.map((item) => {
    console.log(item);
});


let numbers = [ 2, 4 , 6 , 8];

numbers.map((item) => {
    console.log(item + 1);
});
  



let count = 0;


function increment() {
    count++;
    document.querySelector('h1').innerHTML = count
}


function decrement() {
    if(count > 0)
    count--;
    document.querySelector('h1').innerHTML = count
}










