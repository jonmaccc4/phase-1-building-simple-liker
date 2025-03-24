// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById("modal").classList.add("hidden");

const hearts = document.querySelectorAll(".like-glyph");
hearts.forEach(heart => {
    heart.addEventListener("click", () => {
        // Call the mimicServerCall function
        mimicServerCall()
        .then(() => {
            // Toggle between full and empty heart
            if (heart.innerText === "♡") {
                heart.innerText = "♥";
                heart.classList.add("activated-heart");
            } else {
                heart.innerText = "♡";
                heart.classList.remove("activated-heart");
            }
        })
        .catch((error) => {
            // Display error modal
            const errorModal = document.getElementById("modal");
            errorModal.classList.remove("hidden");
            errorModal.querySelector("#modal-message").innerText = error;
            
            // Hide error modal after 3 seconds
            setTimeout(() => {
                errorModal.classList.add("hidden");
            }, 3000);
        });
    });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
