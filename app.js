const mainContainer = document.querySelector('.main_container')


const interval = setInterval(appendCircle,500)


let counterOfCircle = 0 ;
const amountOfCircle = 144 ;

function appendCircle (){
    const circle = document.createElement('div')
    circle.classList.add('circle')
    mainContainer.appendChild(circle)
    counterOfCircle +=1;
    if(counterOfCircle === amountOfCircle){
        clearInterval(interval)
    }
}