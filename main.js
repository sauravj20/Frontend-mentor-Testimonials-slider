var personDetails = [
  {
    introduction: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
    name: "Tanya Sinclair",
    jobDescription: "UX Engineer",
    imgUrl: "images/image-tanya.jpg"
  },
  {
    introduction: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    name: "John Tarkpor",
    jobDescription: "Junior Front-end Developer",
    imgUrl: "images/image-john.jpg"
  }
]

function setInitialImage() {
  var image = document.getElementById("personImage");
  image.src = personDetails[0].imgUrl
}

setInitialImage();