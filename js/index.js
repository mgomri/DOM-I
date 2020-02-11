const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },

  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },

  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },

  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },


  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },

};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const links = document.querySelectorAll('nav a');
links[0].innerHTML = siteContent['nav']['nav-item-1'];
links[1].innerHTML = siteContent['nav']['nav-item-2'];
links[2].innerHTML = siteContent['nav']['nav-item-3'];
links[3].innerHTML = siteContent['nav']['nav-item-4'];
links[4].innerHTML = siteContent['nav']['nav-item-5'];
links[5].innerHTML = siteContent['nav']['nav-item-6'];

const navigation = document.querySelector('nav');

const last = document.createElement('a');
last.textContent = "last";
last.style.color = 'red';

navigation.appendChild(last);

const first = document.createElement('a');
first.textContent = "first";
navigation.prepend(first);
first.style.color = "red";



// document.nav.appendChild(newLinkOne);

links.forEach(link => {
  link.style.color = "green";
});

const codeSnippet = document.getElementById('cta-img');
// codeSnippet.setAttribute('src', siteContent["cta"]["img-src"]);
codeSnippet.src = siteContent['cta']['img-src'];

document.getElementsByTagName('h1')[0].innerHTML = siteContent['cta']['h1'];
document.getElementsByTagName('button')[0].innerHTML = siteContent['cta']['button'];

const hFour = document.getElementsByTagName('h4');
hFour[0].innerHTML = siteContent["main-content"]["features-h4"];
hFour[1].textContent = siteContent["main-content"]["about-h4"];
hFour[2].textContent = siteContent["main-content"]["services-h4"];
hFour[3].textContent = siteContent["main-content"]["product-h4"];
hFour[4].textContent = siteContent["main-content"]["vision-h4"];
hFour[5].textContent = siteContent["contact"]["contact-h4"];


const mainContents = document.querySelectorAll('.main-content p');
mainContents[0].innerHTML = siteContent['main-content']['features-content'];
mainContents[1].innerHTML = siteContent['main-content']["about-content"];
mainContents[2].textContent = siteContent['main-content']["services-content"];
mainContents[3].textContent = siteContent['main-content']["product-content"];
mainContents[4].textContent = siteContent['main-content']["vision-content"];

const middleImage = document.querySelector('#middle-img');
middleImage.src = siteContent["main-content"]["middle-img-src"];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].innerHTML = siteContent["contact"]["address"];
contactInfo[1].innerHTML = siteContent["contact"]["phone"];
contactInfo[2].innerHTML = siteContent["contact"]["email"];

const footers = document.querySelector('footer p');
footers.textContent = siteContent["footer"]["copyright"];



//stretch goal.
const btn = document.createElement('button');
btn.textContent = "RED BACKGROUND";
document.body.appendChild(btn);
btn.style.backgroundColor = 'RED';
btn.style.display = "block";
btn.style.margin = " 2rem auto";
btn.style.height = "3rem";
// btn.style.width = "10rem";
btn.addEventListener("click", function () {
  document.querySelector('button').style.backgroundColor = 'red'
});