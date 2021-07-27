// Defining text characters for the empty and full activated-hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

/* Invoke mimicServerCall to simulate making a server request
When the "server" returns a failure status:
Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
Display the error modal by removing the .hidden class
Display the server error message in the modal
Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
When the "server" returns a success status:
Change the activated-heart to a full activated-heart
Add the .activated-activated-heart class to make the activated-heart appear red */


// Your JavaScript code goes here!
const likes = document.querySelectorAll('li.like');
for (let like of likes) {
  like.addEventListener('click',function(event){
    fillLike(event);
  })
};

function fillLike(event) {
  const postLike = event.target;
  if (postLike.innerText == EMPTY_HEART) {
    const serverResponse = mimicServerCall()
      .then(function (response) {
        postLike.classList.remove('hidden');
        postLike.innerText = FULL_HEART;
        postLike.classList.add("activated-heart");
      })
      .catch(function(response){
        const modal= document.querySelector('#modal');
        modal.classList.remove("hidden");
        modal.innerText = response;
        setTimeout(function() {
          modal.classList.add("hidden")
        },3000);
      })
  } else {
    postLike.innerText = EMPTY_HEART;
    postLike.classList.remove("activated-heart");
  }
};



  //------------------------------------------------------------------------------
  // Don't change the code below: this function mocks the server response
  //------------------------------------------------------------------------------

  function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        let isRandomFailure = Math.random() < .2
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
};
