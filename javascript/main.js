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






i=``


for (let i = 1; i<=100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
 
     console.log ('FizzBuzz')
    

    }
 
    else if (i % 3 === 0){
     console.log ('Fizz')
    }
 
    else if (i % 5 === 0 ) {
     console.log ('Buzz')
    }
 
    else {
     console.log (i)
    }
 }

 document.getElementById(`list`).innerHTML = `${i}`