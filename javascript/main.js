/*

i = ``



for ( i = 1; i < 101; i++){
    console.log(i)
    if(i % 3 === 0){
        i = `Fizz`
        console.log(i)
    }else if(i % 5 === 0){
        i = `Buzz`
        console.log(i)
    }else if((i % 3 === 0) && (i % 5 === 0)){
        i = `FizzBuzz`
        console.log(i)
    }else{
        i
        console.log(i)
    }



}*/





let divNumero = document.getElementById(`number`);


for (let i = 1; i<=100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
 
     console.log (`FizzBuzz`)
     
     let stringa = `${i}`;
    divNumero.innerHTML += stringa;

    }
 
    else if (i % 3 === 0){
     console.log ('Fizz')
     
     let stringa = `${i}`;
    divNumero.innerHTML += stringa;
    }
 
    else if (i % 5 === 0 ) {
     console.log ('Buzz')
     
     let stringa = `${i}`;
    divNumero.innerHTML += stringa;
    }
 
    else {
     console.log (i)
     let stringa = `${i}`;
    divNumero.innerHTML += stringa;
    }

 }

