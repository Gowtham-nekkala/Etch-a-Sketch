const container = document.querySelector(".container");
const button = document.getElementById("resize");

function Creategrid(size){
    container.innerHTML = "";
    const squaresize = 960/size;
    for(let i = 0;i<size*size;i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squaresize}px`;
        square.style.height = `${squaresize}px`;

        square.addEventListener('mousemove',()=>{
            square.style.backgroundColor = '#000000';
        });

        container.appendChild(square);
    }
}

button.addEventListener('click',() => {
    const size = parseInt(prompt('Enter no.of boxes(max = 100)'));

    if(size>0 && size<=100){
        Creategrid(size);
    }
    else{
        alert('Invalid!!!')
    }
});

Creategrid(18);