const featuredCards = document.querySelector('.featured-speaker');

const cards = [
  {
    title: 'Hamid Karzai',
    image: './images/Karzai.png',
    shortDescription: 'The fourth president of Afghanistan',
    longDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    title: 'Abdullah Abdullah',
    image: './images/Abdulah.png',
    shortDescription: 'Lorem ipsum dolor, sit amet.',
    longDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    title: 'Mohammad Mohaqiq',
    image: './images/Mohaqiq.png',
    shortDescription: 'Lorem ipsum dolor, sit amet.',
    longDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    title: 'Abdul Rashid Dostom',
    image: './images/Dostom.png',
    shortDescription: 'Lorem ipsum dolor, sit amet.',
    longDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    title: 'Abdul Rab Sayaf',
    image: './images/Sayaf.png',
    shortDescription: 'Lorem ipsum dolor, sit amet.',
    longDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    title: 'Ata Mohammad Noor',
    image: './images/Noor.png',
    shortDescription: 'Lorem ipsum dolor, sit amet.',
    longDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
];

// eslint-disable-next-line no-return-assign
cards.map((projects) => (featuredCards.innerHTML += `<div class="featured-card col-md-5 m-md-4">
      <div  class="row justify-content-center">
         <div class="col-4 col-md-3 mx-md-5">
          <img src="${projects.image}" alt="Hamid Karzai photo" />
         </div>
         <div class="col-7 p-2 mb-5">
         <h3 class="f-heading">${projects.title}</h3>
         <p class="featured-p1">${projects.shortDescription}</p>
         <p class="featured-p2">${projects.longDescription}</p>
         </div>
        </div>
    </div>
      `
));
