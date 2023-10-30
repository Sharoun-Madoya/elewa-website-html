// defining the interface objects for the projectItems
// JSDoc comment
document.addEventListener("DOMContentLoaded", function () {
    var prevButton = document.querySelector(".bottom-btn1"); // Targeting the buttons
    var nextButton = document.querySelector(".bottom-btn2");
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function () {
            showSlide(0);
        });
        nextButton.addEventListener('click', function () {
            showSlide(3);
        });
    }
});
// This is the data contained in the project one as displayed on the html
var mockProject = [
    {
        title: "Introducing conversational learning",
        description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
        tag: "Education",
        imgSrc: "/assets/images/book2.jpg"
    },
    {
        title: "Content Development for a sustainable future",
        description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
        tag: "Environment",
        imgSrc: "/assets/images/environment.jpg"
    },
    {
        title: "Largescale training for healthcare professionals",
        description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
        tag: "Healthcare",
        imgSrc: "/assets/images/doctor.jpeg"
    },
    {
        title: "Introducing conversational learning",
        description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
        tag: "Education",
        imgSrc: "/assets/images/treeMe.jpg"
    },
    {
        title: "Introducing conversational learning",
        description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
        tag: "Education",
        imgSrc: "/assets/images/education.jpg"
    }
];
mockProject.forEach(function (project) {
    var image = document.getElementById('card1');
    var imageContent = document.getElementById('card-content');
    //image in card 
    image.innerHTML = "<img src=".concat(project.imgSrc, " />");
    // writtings below the image
    imageContent.innerHTML = "<button>".concat(project.tag, "</button><h4>").concat(project.title, "</h4><p>").concat(project.description, "</p>");
});
var slides = document.querySelectorAll(".card"); // Targeting the projects container
var slideContainer = document.querySelector(".card-container");
var prevButton = document.querySelector('.bottom-btn1');
var nextButton = document.querySelector('.bottom-btn2');
var index = 0;
// Get references to the elements
function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0.3';
        slides[i].classList.remove('active');
    }
    slides[index].style.opacity = '1';
    slides[index].classList.add('active');
    if (slideContainer) {
        slideContainer.style.transform = "translateX(-".concat(index * 10, "%)");
    }
}
prevButton === null || prevButton === void 0 ? void 0 : prevButton.addEventListener('click', function () {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    showSlide(index);
});
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener('click', function () {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    showSlide(index);
});
showSlide(index);
// const projectOne: ProjectItem = {
//   title: "Introducing conversational learning",
//   description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
//   tag: "Education",
//   imgSrc: "/assets/images/treeMe.jpg"
// }
// //looping the data in index.ts
// const Project= document.querySelectorAll<HTMLDivElement>(".slider-wrap"); // Targeting the projects container
// const image=document.getElementById('card1');
// const imageContent=document.getElementById('card-content')
// image.innerHTML = `<img src=${projectOne.imgSrc} />`
// imageContent.innerHTML= `<button>${projectOne.tag}</button><h4>${projectOne.title}</h4><p>${projectOne.description}</p>`
