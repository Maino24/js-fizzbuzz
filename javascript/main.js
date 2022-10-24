let container = document.getElementById(`container`)

/* ciclo for */
for(let i = 1; i < 101; i++){
    let divOne = document.createElement(`div`)
    divOne.classList.add(`box-js`)
    console.log(i)

    /* scrivo le condizioni */

    if((i % 3 === 0) && (i % 5 === 0)){
        divOne.innerHTML += `FizzBuzz`
        divOne.classList.add(`blue`)
        console.log(`FizzBuzz`)
    }else if(i % 3 === 0){
        divOne.innerText += `Fizz`
        divOne.classList.add(`red`)
        console.log(`Fizz`)
    }else if(i % 5 === 0){
        divOne.innerText += `Buzz`
        divOne.classList.add(`yellow`)
        console.log(`Buzz`)
    }else{
        divOne.innerText += `${i}`
        divOne.classList.add(`lightgreen`)
        console.log(i)
    }


    container.append(divOne)

}

