// defining the interface objects for the projectItems
// JSDoc comment
document.addEventListener("DOMContentLoaded", function () {
    var prevButton = document.querySelector(".bottom-btn1"); // Targeting the buttons
    var nextButton = document.querySelector(".bottom-btn2");
    if (prevButton && nextButton) {
        prevButton.addEventListener("click", function () {
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
var projectOne = {
    title: "Introducing conversational learning",
    description: "Eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam dolorem ipsum quia",
    tag: "Education",
    imgSrc: "/assets/images/treeMe.jpg"
};
//looping the data in index.ts
var Project = document.querySelectorAll(".slider-wrap"); // Targeting the projects container
var image = document.getElementById('card1');
var imageContent = document.getElementById('card-content');
image.innerHTML = "<img src=".concat(projectOne.imgSrc, " />");
imageContent.innerHTML = "<button>".concat(projectOne.tag, "</button>");
console.log(imageContent);
console.log(image);
// Get references to the elements
// const slides = document.querySelectorAll<HTMLDivElement>(".card"); // Targeting the projects container
// const slideContainer = document.querySelector<HTMLDivElement>(".card-container");
// let index: number = 0;
// function showSlide(index: number) {
//   for (let i =0; i < slides.length; i++) {
//     slides[i].style.opacity = '0.3';
//     slides[i].classList.remove('active');
//   }
//   slides[index].style.opacity = '1';
//   slides[index].classList.add('active');
//   if (slideContainer) {
//     slideContainer.style.transform = `translateX(-${index * 10}%)`;
//   }
//   }
// prevButton?.addEventListener('click', () => {
//   index--;
//   if (index < 0) {
//     index = slides.length - 1;
//   }
//   showSlide(index);
// });
// nextButton?.addEventListener('click', () => {
//   index++;
//   if (index >= slides.length) {
//     index = 0;
//   }
//   showSlide(index);
// });
// showSlide(index);
// azhar ahmed bot
