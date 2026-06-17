// Cart Counter

let count = 0;

const cartButtons = document.querySelectorAll(".cartBtn");

const cart = document.getElementById("count");

cartButtons.forEach(btn=>{

btn.addEventListener("click",function(){

count++;
cart.style.transform="scale(1.4)";

setTimeout(()=>{

cart.style.transform="scale(1)";

},300);

cart.innerText=count;

this.innerHTML="✓ Added";

this.style.background="green";

this.disabled=true;

});

});


// Show Details

const detailBtns=document.querySelectorAll(".detailsBtn");

detailBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

const details=btn.previousElementSibling;

if(details.style.display=="block"){

details.style.display="none";

btn.innerHTML="Show Details";

}

else{

details.style.display="block";

btn.innerHTML="Hide Details";

}

});

});


// Contact Form

const form=document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You! Your message has been sent successfully.");

form.reset();

});
// Search Product

const search=document.getElementById("searchInput");

search.addEventListener("keyup",()=>{

let value=search.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

})

});
// Top Button

let topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

})

};
// Category Filter

// Category Filter

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filterValue = button.dataset.filter;

        productCards.forEach(card => {

            if (filterValue === "all") {

                card.style.display = "";

            }

            else if (card.classList.contains(filterValue)) {

                card.style.display = "";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});