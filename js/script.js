(function($) { 
"use strict";

/*================================================================= 
    pre loader 
==================================================================*/
$('.js-preloader').preloadinator({
  animation: 'fadeOut',
  animationDuration: 400
});


/*================================================================= 
   Particle for hero area
==================================================================*/

const colors = ["#d20962", "#0ebeff", "#7ac143", "#00a78e", "#00bce4", "8e43e7", "005be2"];
const numBalls = 30;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.getElementById("hero-area").append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };
  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});


/*================================================================= 
    Portfolio data and render helpers
==================================================================*/
const portfolioItems = [
  {
    id: 'presido',
    slug: 'presido',
    modalId: 'portfolioModalPresido',
    carouselId: 'carouselPresido',
    category: 'Mobile Game',
    title: 'Presido',
    tags: ['game-dev', 'mobile'],
    thumb: 'image/portfolio/presido_banner.png',
    buttonHtml: '<i class="bi bi-plus-lg"></i>View Project',
    modalTitle: 'Presido (2026)',
    links: [
      { text: 'Play Store Link (published)', href: 'https://play.google.com/store/apps/details?id=com.Fotisia.presido' },
      { text: 'App Store Link (published)', href: 'https://apps.apple.com/us/app/presido/id6762066716' }
    ],
    description: 'An infinite runner game developed in Unity3d, where players control a character running through a procedurally generated cityscape, dodging obstacles and collecting power-ups. The game feature presidential candidates as runners and political-themed obstacles, with vibrant graphics and addictive gameplay that keeps players engaged as they strive for high scores.',
    meta: [
      { label: 'Project Type', value: 'Mobile Game' },
      { label: 'Duration', value: '3 months' },
      { label: 'Task', value: '3d modelling, c# programming' },
      { label: 'Tools', value: 'Unity3d, Autodesk Maya, Photoshop, C#' }
    ],
    slides: [
      { type: 'iframe', src: 'https://www.youtube.com/embed/RWQkKoHTexI?controls=0', title: 'Presido' },
      { type: 'image', src: 'image/portfolio/presido_1.PNG', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/presido_2.PNG', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/presido_3.PNG', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/presido_4.PNG', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/presido_5.PNG', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/presido_6.PNG', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/presido_7.PNG', alt: 'portfolio image' }
    ]
  },
  {
    id: 'boju-boju',
    slug: 'Boju Boju',
    modalId: 'portfolioModalBojuBoju',
    carouselId: 'carouselBojuBoju',
    category: 'Mobile Game',
    title: 'Boju Boju',
    tags: ['game-dev', 'mobile'],
    thumb: 'image/boju-boju/hero.PNG',
    buttonHtml: '<i class="bi bi-plus-lg"></i>View Project',
    modalTitle: 'Boju Boju (2026)',
    links: [
      { text: 'Download APK (published)', href: 'https://boju-boju.netlify.app' }
      // { text: 'Play Store Link (published)', href: 'https://play.google.com/store/apps/details?id=com.Fotisia.boju_boju' },
      // { text: 'App Store Link (published)', href: 'https://apps.apple.com/us/app/boju-boju/id6762066716' }
    ],
    description: 'Boju Boju is a famous nigerian hide and seek game playeed in the rural areas. This is a mobile game adaptation of the traditional game, where players take turns hiding and seeking in a virtual environment. The game features a multiplayer, immersive gameplay, and a variety of hiding spots and obstacles that challenge players to outsmart their opponents.',
    meta: [
      { label: 'Project Type', value: 'Mobile Game' },
      { label: 'Duration', value: '6 months' },
      { label: 'Task', value: '3d modelling, c# programming' },
      { label: 'Tools', value: 'Unity3d, Autodesk Maya, Photoshop, C#' }
    ],
    slides: [
      { type: 'iframe', src: 'https://www.youtube.com/embed/IWRQnVjrjxM?controls=0', title: 'Boju Boju' },
      { type: 'image', src: 'image/boju-boju/hero.PNG', alt: 'portfolio image' },
      { type: 'image', src: 'image/boju-boju/hero2.PNG', alt: 'portfolio image' },

    ]
  },
  {
    id: 'cantaball',
    slug: 'cantaball',
    modalId: 'portfolioModalCantaBall',
    carouselId: 'carouselCantaBall',
    category: 'Mobile Game',
    title: 'Canta Ball',
    tags: ['game-dev', 'mobile'],
    thumb: 'image/cantaball/cantaball.jpg',
    buttonHtml: '<i class="bi bi-plus-lg"></i>View Project',
    modalTitle: 'Canta Ball (2025)',
    links: [
      { text: 'WebGL Link (published)', href: 'https://canta-ball.netlify.app/' }
    ],
    description: 'Canta Ball is a Finger Soccer game where players select their team and formation of choice and take turns in the pitch hitting the ball with the goal of scoring the opponent.',
    meta: [
      { label: 'Project Type', value: 'Mobile Game' },
      { label: 'Duration', value: '5 months' },
      { label: 'Task', value: '3d modelling, c# programming' },
      { label: 'Tools', value: 'Unity3d, Autodesk Maya, Photoshop, C#' }
    ],
    slides: [
      { type: 'iframe', src: 'https://www.youtube.com/embed/Y_i8eA-LR1s?controls=0', title: 'Canta Ball' }
    ]
  },
  {
    id: 'scribe',
    slug: 'scribe',
    modalId: 'portfolioModalScribe',
    carouselId: 'carouselScribe',
    category: 'The Scribe',
    title: 'AI Writing Assistant',
    tags: ['fullstack'],
    thumb: 'image/scribe/scribe.png',
    buttonHtml: '<i class="bi bi-plus-lg"></i>View Project',
    modalTitle: 'The Scribe',
    links: [
      { text: 'Web Demo (Link)', href: 'https://scribe-frontend-psi.vercel.app/' }
    ],
    description: 'The Scribe is a web-based AI writing assistant purpose-built for Christian authors, specifically apostolic, prophetic, and Spirit-filled ministry voices. It guides authors through a structured interview to capture their theological voice, then generates full manuscript drafts in their exact style. There should be an integrated AI assistant to the app in a creative and functional way.',
    meta: [
      { label: 'Project Type', value: 'Fullstack Development' },
      { label: 'Duration', value: '2 weeks' },
      { label: 'Task', value: 'AI, fullstack development, programming' },
      { label: 'Tools', value: 'RAG, Node.js, PGvector, Postgresql, React, Typescript, GCP' }
    ],
    slides: [
      { type: 'image', src: 'image/scribe/scribe.png', alt: 'portfolio image 3' },
      { type: 'image', src: 'image/scribe/scribe-editor.png', alt: 'portfolio image' },
      { type: 'image', src: 'image/scribe/scribe-profile.png', alt: 'portfolio image 1' },
      { type: 'image', src: 'image/scribe/scribe-swagger.png', alt: 'portfolio image 2' }
    ]
  },
  {
    id: 'fotisia-web',
    slug: 'fotisia-web',
    modalId: 'portfolioModalFotisiaWeb',
    carouselId: 'carouselFotisiaWeb',
    category: 'Company Website (next.js)',
    title: 'Gamified Edtech learning platform.',
    tags: ['application', 'frontend'],
    thumb: 'image/fotisia/thumb.png',
    buttonHtml: '<i class="bi bi-plus-lg"></i>View Project',
    modalTitle: 'Fotisia (2024)',
    links: [
      { text: 'Link (published)', href: 'https://clinquant-pika-30f41d.netlify.app' }
    ],
    description: 'Fotisia is an edtech gamified platform that offers bitesize learning modules for career development. The app provides interactive lessons, quizzes, and challenges to help users acquire new skills and advance their careers in a fun and engaging way. With a focus on user experience and gamification, Fotisia aims to make learning enjoyable and effective for professionals looking to upskill.',
    meta: [
      { label: 'Project Type', value: 'Static Website' },
      { label: 'Duration', value: '2 weeks' },
      { label: 'Task', value: 'Frontend' },
      { label: 'Tools', value: 'NextJS, TailwindCSS' }
    ],
    slides: [
      { type: 'iframe', src: 'https://www.youtube.com/embed/b_cvbHJC1pI', title: 'Fotisia' },
      { type: 'image', src: 'image/fotisia/banner.png', alt: 'portfolio image' }
    ]
  },
  {
    id: 'drawpro',
    slug: 'drawpro',
    modalId: 'portfolioModalDrawPro',
    carouselId: 'carouselDrawPro',
    category: 'Simple Drawing Tool',
    title: 'Draw Pro',
    tags: ['frontend'],
    thumb: 'image/drawpro.png',
    buttonHtml: '<i class="bi bi-plus-lg"></i>View Project',
    modalTitle: 'Draw Pro (Simple drawing application)',
    links: [
      { text: 'Web Demo (Link)', href: 'https://pro-draw-ten.vercel.app/' }
    ],
    description: 'Turn simple drawings into realistic rendering using state of the art AI models.',
    meta: [
      { label: 'Project Type', value: 'Frontend' },
      { label: 'Duration', value: '5 days' },
      { label: 'Task', value: 'Design, Frontend, programming' },
      { label: 'Tools', value: 'Nextjs, Typescript/Javascript' }
    ],
    slides: [
      { type: 'iframe', src: 'https://www.youtube.com/embed/4mbJ3WHOuRA?controls=0', title: 'Draw Pro' }
    ]
  },
  {
    id: 'lux',
    slug: 'lux',
    modalId: 'portfolioModalLux',
    carouselId: 'carouselLux',
    category: 'WebGL / Three.js',
    title: 'Fashion Store (3D AR)',
    shortDescription: 'Rendering luxury fashion products using 3D GLB assets and Three.JS library.',
    tags: ['frontend'],
    thumb: 'image/lux.PNG',
    buttonHtml: 'View Project',
    modalTitle: '3D, WebGL, Three.Js',
    links: [
      { text: 'Web Demo (Link)', href: 'https://luxe-ar.netlify.app/' }
    ],
    description: 'Rendering fashion products using 3D GLB assets and Three.JS library.',
    meta: [
      { label: 'Project Type', value: 'WebGL Store' },
      { label: 'Duration', value: '1 weeks' },
      { label: 'Task', value: '3d modelling, programming' },
      { label: 'Tools', value: 'Three.js, GSAP, Autodesk Maya, Photoshop, Typescript/Javascript' }
    ],
    slides: [
      { type: 'iframe', src: 'https://www.youtube.com/embed/fP33YX8Ftak?controls=0', title: 'Fashion Store' },
      { type: 'image', src: 'image/lux.PNG', alt: 'portfolio image' }
    ]
  },
  {
    id: 'redemption',
    slug: 'redemption',
    modalId: 'portfolioModalRedemption',
    carouselId: 'carouselRedemption',
    category: 'Game Development',
    title: 'Redemption (Unity3D)',
    shortDescription: 'A third person shooter game developed in Unity3D, featuring realistic graphics.',
    tags: ['game-dev'],
    thumb: 'image/portfolio/red_2.jpg',
    buttonHtml: 'View Project',
    modalTitle: 'Redemption (2019)',
    links: [
      { text: 'Link (unpublished)', href: 'https://x.com/DeoEdoh/status/1253668170927349761?s=20' }
    ],
    description: 'A third person shooter game developed in Unity3d, where players is a soldier tasked with saving villages from boko haram terrorists in Nigeria. The game features realistic graphics, immersive gameplay, and a compelling storyline that highlights the bravery and resilience of the Nigerian military.',
    meta: [
      { label: 'Project Type', value: 'Mobile Game' },
      { label: 'Duration', value: '6 months' },
      { label: 'Task', value: '3d modeling, c# programming' },
      { label: 'Tools', value: 'Unity3d, Autodesk Maya, Photoshop, C#' }
    ],
    slides: [
      { type: 'iframe', src: 'https://www.youtube.com/embed/SjOPq9ev9RA', title: 'Redemption' },
      { type: 'image', src: 'image/portfolio/red_3.jpg', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/red_1.jpg', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/red_2.jpg', alt: 'portfolio image' }
    ]
  },
  {
    id: 'buggy',
    slug: 'buggy',
    modalId: 'portfolioModalBuggy',
    carouselId: 'carouselBuggy',
    category: 'Game Development',
    title: 'MultiPlayer Demo (WebGL)',
    shortDescription: 'A multiplayer WebGL demo game built with Unity3D C# and Photon PUN 2.',
    tags: ['game-dev'],
    thumb: 'image/buggy_2.PNG',
    buttonHtml: 'View Project',
    modalTitle: 'Multiplayer WebGL',
    links: [
      { text: 'Link', href: 'https://multiplayer-demo.netlify.app' }
    ],
    description: 'A multiplayer WebGL demo game built with unity3d c# and pun 2.',
    meta: [
      { label: 'Project Type', value: 'WebGL Game' },
      { label: 'Duration', value: '2 weeks' },
      { label: 'Task', value: '3d modelling, c# programming' },
      { label: 'Tools', value: 'Unity3d, Autodesk Maya, Photoshop, C#' }
    ],
    slides: [
      { type: 'iframe', src: 'https://www.youtube.com/embed/lLTKjIt5SRo', title: 'Multiplayer WebGL' },
      { type: 'image', src: 'image/buggy.PNG', alt: 'portfolio image' },
      { type: 'image', src: 'image/buggy_2.PNG', alt: 'portfolio image' }
    ]
  },
  {
    id: 'fotisia-app',
    slug: 'fotisia-app',
    modalId: 'portfolioModalFotisiaApp',
    carouselId: 'carouselFotisiaApp',
    category: 'Mobile Development (Flutter)',
    title: 'Fotisia: Edtech Platform',
    shortDescription: 'An edtech gamified platform offering bitesize learning modules for career development.',
    tags: ['application', 'mobile', 'fullstack'],
    thumb: 'image/portfolio/fotisia_11.jpg',
    buttonHtml: 'View Project',
    modalTitle: 'Fotisia (2024)',
    links: [
      { text: 'Link (published)', href: 'https://clinquant-pika-30f41d.netlify.app' }
    ],
    description: 'Fotisia is an edtech gamified platform that offers bitesize learning modules for career development. The app provides interactive lessons, quizzes, and challenges to help users acquire new skills and advance their careers in a fun and engaging way. With a focus on user experience and gamification, Fotisia aims to make learning enjoyable and effective for professionals looking to upskill.',
    meta: [
      { label: 'Project Type', value: 'Mobile App' },
      { label: 'Duration', value: '7 months' },
      { label: 'Task', value: 'Frontend, Backend, Cloud (GCP)' },
      { label: 'Tools', value: 'Flutter, NodeJs, GCP, AI, NextJS' }
    ],
    slides: [
      { type: 'iframe', src: 'https://www.youtube.com/embed/L61NkA7A5cU?controls=0', title: 'Fotisia Flutter' },
      { type: 'image', src: 'image/portfolio/fotisia_1.png', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/fotisia_7.jpg', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/fotisia_8.jpg', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/fotisia_11.jpg', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/fotisia_2.png', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/fotisia_3.png', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/fotisia_5.jpg', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/fotisia_6.jpg', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/fotisia_9.jpg', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/fotisia_10.jpg', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/fotisia_12.jpg', alt: 'portfolio image' }
    ]
  },
  {
    id: 'deities',
    slug: 'deities',
    modalId: 'portfolioModalDeities',
    carouselId: 'carouselDeities',
    category: '3D Modelling',
    title: 'African Mythology Game',
    shortDescription: 'Detailed 3D models for an African Mythology Game, inspired by traditional folklore.',
    tags: ['3d'],
    thumb: 'image/portfolio/daities/amadioha_2.png',
    buttonHtml: 'View Project',
    modalTitle: 'African Deities Game (Under Development)',
    links: [],
    description: '3D models for an African Mythology Game, featuring detailed character designs inspired by traditional African folklore and mythology. The models are created with a focus on cultural authenticity and artistic expression, bringing to life the rich tapestry of African deities and mythical creatures in a visually stunning and immersive gaming experience.',
    meta: [
      { label: 'Project Type', value: '3D Modelling' },
      { label: 'Duration', value: '3 weeks' },
      { label: 'Task', value: 'Modelling, Texturing, Rigging' },
      { label: 'Tools', value: 'Autodesk Maya, Photoshop' }
    ],
    slides: [
      { type: 'image', src: 'image/portfolio/daities/amadioha_2.png', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/daities/ala.png', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/daities/ogun.png', alt: 'portfolio image' }
    ]
  },
  {
    id: 'runner',
    slug: 'runner',
    modalId: 'portfolioModalRunner',
    carouselId: 'carouselRunner',
    category: '3D Modelling',
    title: 'Infinite Runner Assets',
    shortDescription: 'Stylized 3D models for an infinite runner game with vibrant colors and playful designs.',
    tags: ['3d'],
    thumb: 'image/portfolio/runner/candidates.png',
    buttonHtml: 'View Project',
    modalTitle: 'Stylized Modelling (2026)',
    links: [],
    description: 'Stylized 3D models for an infinite runner game, featuring exaggerated proportions, vibrant colors, and whimsical designs that create a playful and visually striking aesthetic. These models are crafted to enhance the game\'s fun and engaging atmosphere, making them perfect for a lighthearted gaming experience.',
    meta: [
      { label: 'Project Type', value: '3D Modelling' },
      { label: 'Duration', value: '6 weeks' },
      { label: 'Task', value: 'Modelling, Texturing, Rigging' },
      { label: 'Tools', value: 'Autodesk Maya, Photoshop' }
    ],
    slides: [
      { type: 'image', src: 'image/portfolio/runner/tinubu.png', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/runner/atiku.png', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/runner/obi.png', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/runner/police.png', alt: 'portfolio image' },
      { type: 'image', src: 'image/portfolio/runner/vdm.png', alt: 'portfolio image' }
    ]
  }
];

function renderPortfolioItems() {
  const $grid = $('.grid');
  const $modals = $('#portfolio-modals');
  $grid.html(portfolioItems.map(createPortfolioItemHTML).join(''));
  $modals.html(portfolioItems.map(createPortfolioModalHTML).join(''));
}

function createPortfolioItemHTML(item) {
  return `
    <div class="col-lg-4 col-md-6 grid-item ${item.tags.join(' ')}">
      <div class="box">
        <img src="${item.thumb}" alt="portfolio image">
        <div class="box-content">
          <span class="category">${item.category}</span>
          <h3 class="title">${item.title}</h3>
          ${item.shortDescription ? `<p class="mt-2" style="font-size: 14px; opacity: 0.9;">${item.shortDescription}</p>` : ''}
        </div>
        <div class="icon-box"><a href="/#" data-bs-toggle="modal" data-bs-target="#${item.modalId}">${item.buttonHtml}</a></div>
      </div>
    </div>
  `;
}

function renderPortfolioLinks(links) {
  if (!links || !links.length) {
    return '';
  }
  return `<div class="d-flex gap-2">${links.map(link => `<a href="${link.href}" target="${link.target || '_blank'}" class="btn btn-primary">${link.text}</a>`).join('')}</div>`;
}

function createPortfolioCarouselSlides(item) {
  return item.slides.map((slide, index) => {
    const active = index === 0 ? ' active' : '';
    if (slide.type === 'iframe') {
      return `
        <div class="carousel-item${active}">
          <iframe width="560" height="315" src="${slide.src}" title="${slide.title || item.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      `;
    }
    return `
      <div class="carousel-item${active}">
        <img src="${slide.src}" alt="${slide.alt || item.title}">
      </div>
    `;
  }).join('');
}

function createPortfolioModalHTML(item) {
  return `
    <div class="modal fade" id="${item.modalId}" tabindex="-1" aria-labelledby="${item.modalId}" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-body">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x"></i></button>
            <div class="row item-content">
              <div class="col-xl-12">
                <div id="${item.carouselId}" class="carousel slide" data-bs-ride="false">
                  <div class="carousel-inner">
                    ${createPortfolioCarouselSlides(item)}
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#${item.carouselId}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#${item.carouselId}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="col-xl-8">
                <div class="content-wrapper">
                  <h2 class="item-title">${item.modalTitle}</h2>
                  ${renderPortfolioLinks(item.links)}
                  <p>${item.description}</p>
                </div>
              </div>
              <div class="col-xl-4">
                <div class="meta-wrapper">
                  <ul class="item-meta">
                    ${item.meta.map(meta => `<li>${meta.label}: <span class="meta-value">${meta.value}</span></li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

renderPortfolioItems();

/*================================================================= 
    Isotope initialization 
==================================================================*/
var $grid = $('.grid').isotope({
  // options
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
}); 

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

/* checking active filter */
// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
var buttonGroup = buttonGroups[i];
radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
buttonGroup.addEventListener( 'click', function( event ) {
// only work with buttons
if ( !matchesSelector( event.target, 'button' ) ) {
  return;
}
buttonGroup.querySelector('.active').classList.remove('active');
event.target.classList.add('active');
});
}


/*================================================================= 
    Testimonial carousel
==================================================================*/
const swiper = new Swiper('.swiper', {
  // Optional parameters
  breakpoints: {
    1200:{
      slidesPerView: 3,
    },
    992:{
      slidesPerView: 2, 
    },
    576:{
      slidesPerView: 1
    },
   },
  //slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  autoplay: {
     delay: 5000,
   },
   

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

});


/*================================================================= 
    Partner carousel
==================================================================*/
const swiper2 = new Swiper('.partnerCarousel', {
  // Optional parameters
  breakpoints: {
    1200:{
      slidesPerView: 6,
    },
    992:{
      slidesPerView: 4, 
    },
    576:{
      slidesPerView: 3
    },
    320:{
      slidesPerView: 2
    },
   },
  //slidesPerView: 6,
  spaceBetween: 24,
  loop: true,
  autoplay: {
     delay: 5000,
   },

});


/*================================================================= 
    Map
==================================================================*/
var map = L.map('mapwrapper').setView([9.0578, 7.4951], 12);

// Using CartoDB Voyager tiles (High performance/Clearer for urban areas)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

var greenIcon = L.icon({
    iconUrl: "image/location.png",
    iconSize: [48, 48],
    iconAnchor: [24, 48] // Ensures the tip of the icon is at the coordinate
});

L.marker([9.0578, 7.4951], {icon: greenIcon}).addTo(map);


/*================================================================= 
    Navbar fixed top
==================================================================*/
$(document).ready(function () {

    var menu = $('.site-header nav');
    var origOffsetY = $('.hero-area').height();

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.site-header nav').addClass('fixed-top');
            
        } else {
            $('.site-header nav').removeClass('fixed-top');
           
        }
    }

    document.onscroll = scroll;

});


/*================================================================= 
    Contact form 
==================================================================*/
$(function() {
    // Here is the form
    var form = $('#fungi-contact');

    // Getting the messages div
    var formMessages = $('.form-message p');


    // Setting up an event listener for the contact form
  $(form).submit(function(event) {
      // Stopping the browser to submit the form
      event.preventDefault();
      
      // Serializing the form data
    var formData = $(form).serialize();

    // Submitting the form using AJAX
    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    }).done(function(response) {
      
        // Making the formMessages div to have the 'success' class
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Setting the message text
        $(formMessages).text(response);

        // Clearing the form after successful submission 
        $('#inputName').val('');
        $('#inputEmail').val('');
        $('#inputPhone').val('');
        $('#inputMessage').val('');
    }).fail(function(data) {
      
        // Making the formMessages div to have the 'error' class
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Setting the message text
        if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
    });

  });

});

/*================================================================= 
    Animating numbers
==================================================================*/
$('.counter').counterUp({
    delay: 10,
    time: 3000
});


/*================================================================= 
    Progress bar animation
==================================================================*/
var waypoint = new Waypoint({
  element: document.getElementById('skill-section'),
  handler: function() {
    $('.progress .progress-bar').css("width",function() {
      return $(this).attr("aria-valuenow") + "%";
  })
  },
  //offset: 'bottom-in-view',
  offset: 700,
})


/*================================================================= 
    Animate on scroll initialization
==================================================================*/
AOS.init({
  once: true,
});

/*================================================================= 
    Stop YouTube iframe when modal is closed or carousel slides
==================================================================*/
function stopIframes(container) {
    var $iframe = $(container).find('iframe');
    if ($iframe.length) {
        $iframe.each(function() {
            var src = $(this).attr('src');
            $(this).attr('src', '');
            $(this).attr('src', src);
        });
    }
}

$('.modal').on('hidden.bs.modal', function () {
    stopIframes(this);
});

$('.carousel').on('slide.bs.carousel', function () {
    stopIframes(this);
});

})(jQuery);
