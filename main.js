// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.querySelector('#modal')
modal.setAttribute('class', 'hidden');

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll('span.like-glyph')
  console.log(hearts)

  for (const heart of hearts){
    heart.addEventListener('click', (e) => {
      mimicServerCall()
      .then(() => {
        if (heart.innerHTML == EMPTY_HEART) {
          heart.innerHTML = FULL_HEART
          heart.setAttribute('class', 'activated-heart')
        } else {
          heart.innerHTML = EMPTY_HEART
          heart.className = "like-glyph"
        }
      })
      .catch(error => {
        modal.classList.remove("hidden");
        const modalMessage = document.querySelector("#modal-message")
        modalMessage.innerText = error
        setTimeout(() => {
          modal.setAttribute('class', 'hidden')
        }, 5000)
      })
    })
  }

})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
