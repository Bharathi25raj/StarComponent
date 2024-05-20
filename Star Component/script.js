let stars = document.querySelectorAll('.star');
let star_container = document.querySelector('.star-container');
let rating = document.querySelector('.rating');
let prevClicked;

star_container.addEventListener('click', function(e){
    if(e.target.classList.contains('star')){
        
        removeFromClass(stars.length);

        let pos = e.target.dataset.pos;
        prevClicked = pos;

        addToClass(pos);

        rating.innerText = "Rating : " + pos;
    }
})


star_container.addEventListener('mouseover', function(e){
    if(e.target.classList.contains('star')){

        removeFromClass(stars.length);

        let pos = e.target.dataset.pos;

        addToClass(pos);
    }
})

star_container.addEventListener('mouseout', function(e){
    if(e.target.classList.contains('star')){

        removeFromClass(stars.length);

        addToClass(prevClicked);
    }    
})


function addToClass(n){
    for(let i = 0; i < n; i++){
        stars[i].classList.add('active');
    }
}

function removeFromClass(n){
    for(let i = 0; i < n; i++){
        stars[i].classList.remove('active');
    }
}