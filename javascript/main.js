let numberOne = document.getElementById(`number`);
let cont = document.getElementById(`container`);


/* ciclo for */

for(let i = 1; i < 101; i++){

    console.log(i)

    /* scrivo le condizioni */

    if((i % 3 === 0) && (i % 5 === 0)){
        console.log(`FizzBuzz`)
    }else if(i % 3 === 0){
        console.log(`Fizz`)
    }else if(i % 5 === 0){
        console.log(`Buzz`)
    }else{
        console.log(i)
    }




}