// defining the interface objects for the projectItems
// JSDoc comment
document.addEventListener("DOMContentLoaded", () =>{
  const slideContainer = document.querySelector<HTMLDivElement>(".card-container");
  const prevButton = document.querySelector<HTMLButtonElement>(".bottom-btn1"); // Targeting the buttons
  const nextButton = document.querySelector<HTMLButtonElement>(".bottom-btn2");

  /**
 * Interface for classes that represent a project.
 */
interface ProjectItem {
  title: string;
  description: string;
  tag: string;
  imgSrc: string;
}

// This is the data contained in the project one as displayed on the html

const mockProject:ProjectItem[]=[
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
  }];


    // Clear the slide container
  slideContainer.innerHTML = '';


  // Function to create a card element for each project
  function createCard(project: ProjectItem) {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = project.imgSrc;
    image.alt = project.title;

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    cardContent.innerHTML = `
      <button>${project.tag}</button>
      <h4>${project.title}</h4>
      <p>${project.description}</p>
    `;

    card.appendChild(image);
    card.appendChild(cardContent);

    return card;
  }

  // Append each project as a card to the slide container
  mockProject.forEach(project => {
    const card = createCard(project);
    slideContainer.appendChild(card);
  });

  const slides = document.querySelectorAll<HTMLDivElement>('.card');
  let index = 0;

  function showSlide(index: number) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = '0.3';
      slides[i].classList.remove('active');
    }
    slides[index].style.opacity = '1';
    slides[index].classList.add('active');
    if (slideContainer) {
      slideContainer.style.transform = `translateX(-${index * 100}%)`;
    }
  }

  prevButton?.addEventListener('click', () => {
    index--;
    if (index < 0) {
      index = slides.length - 1;
    }
    showSlide(index);
  });

  nextButton?.addEventListener('click', () => {
    index++;
    if (index >= slides.length) {
      index = 0;
    }
    showSlide(index);
  });

  showSlide(index);
});







//   mockProject.forEach((project) =>{
//   const image=document.getElementById('card1');
//   const imageContent=document.getElementById('card-content')
// //image in card 
//   image.innerHTML = `<img src=${project.imgSrc} />`
// // writtings below the image
//   imageContent.innerHTML= `<button>${project.tag}</button><h4>${project.title}</h4><p>${project.description}</p>` 
//   })

//   const slides = document.querySelectorAll<HTMLDivElement>(".card"); // Targeting the projects container
//   const slideContainer = document.querySelector<HTMLDivElement>(".card-container");
//   const prevButton = document.querySelector<HTMLButtonElement>('.bottom-btn1');
//   const nextButton = document.querySelector<HTMLButtonElement>('.bottom-btn2');

//   let index: number = 0;
//  // Get references to the elements
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
