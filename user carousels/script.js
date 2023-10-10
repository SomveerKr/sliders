// const carousel = document.querySelector('.carousel')
// const innerCarousel = document.querySelector('.carousel ol');
// const carouselItems = document.querySelector('.carousel li');

// let pressed = false;
// let startx, x;


// carousel.addEventListener('mousedown', (e) => {
//     pressed = true;
//     startx = e.offsetX - innerCarousel.offsetLeft;
// });

// window.addEventListener('mouseup', (e) => {
//     pressed = false;
// });

// carousel.addEventListener('mousemove', (e) => {
//     if (!pressed) {
//         return;
//     }
//     e.preventDefault();

//     x = e.offsetX;
//     innerCarousel.style.left = `${x - startx}px`;

//     checkBoundary();
// });

// carousel.addEventListener('mouseup', (e) => {
// })

// function checkBoundary() {
//     let outer = carousel.getBoundingClientRect();
//     let inner = innerCarousel.getBoundingClientRect();

//     if (parseInt(innerCarousel.style.left) > 0) {
//         innerCarousel.style.left = '0px';
//     } else if (inner.right < outer.right) {
//         innerCarousel.style.left = `${carouselItems.width}px`;
//     }
// }


// for swiping carousel 
// Select the elements
const cards = document.querySelectorAll("li");
const nextBtn = document.getElementById("carousel-next");
const prevBtn = document.getElementById("carousel-prev");

// Define the current index
let currentIndex = 0;

// Define the update function
function updateCards() {
    console.log(currentIndex)
  // Loop through the cards
  for (let i = 0; i < cards.length; i++) {
    // Check if the card is within the visible range
    if (i >= currentIndex && i < currentIndex + 3) {
      // Show the card
      cards[i].style.display = "block";
    } else {
      // Hide the card
      cards[i].style.display = "none";
    }

    
  }


}

// Define the next function
function nextCard() {


   // Check if the next button should be disabled
   if (currentIndex === cards.length - 3) {
    // Disable the next button
    nextBtn.disabled = true;
    // Change the hover to not-allowed
    nextBtn.style.cursor = "not-allowed";
    
  } else {
    
    // Enable the next button
    nextBtn.disabled = false;
    // Change the hover to default
    nextBtn.style.cursor = "pointer";
    // Increment the current index
    currentIndex++;
  }
  updateCards();
}

// Define the previous function
function prevCard() {

  // Check if the previous button should be disabled
  if (currentIndex === 0) {
    // Disable the previous button
    prevBtn.disabled = true;
    // Change the hover to not-allowed
    prevBtn.style.cursor = "not-allowed";
  } else {
    // Enable the previous button
    prevBtn.disabled = false;
    // Change the hover to default
    prevBtn.style.cursor = "pointer";
      // Decrement the current index
  currentIndex--;
  }
 
  // Update the display of the cards
  updateCards();
}

// Add event listeners to the buttons
nextBtn.addEventListener("click", nextCard);
prevBtn.addEventListener("click", prevCard);

// Call the update function initially
updateCards();
