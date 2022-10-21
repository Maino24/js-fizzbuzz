

i = ``

for (let i = 1; i < 101; i++){



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

    
    
}


console.log(i)


document.getElementById(`number`).innerHTML = `${i}`
