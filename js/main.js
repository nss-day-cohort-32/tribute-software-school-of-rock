const header = document.querySelector('header'),
  footer = document.querySelector('footer'),
  navItems = [{
      "href": "/",
      "title": "Home"
    },
    {
      "href": "career.html",
      "title": "Career"
    },
    {
      "href": "personal.html",
      "title": "Personal"
    },
    {
      "href": "newsfeed.html",
      "title": "News Feed"
    }
  ];

const socialItems = [{
  "href": "https://www.facebook.com/carlossantana/",
    "iconName": "logo-facebook"
  },
  {
    "href": "https://twitter.com/santanacarlos?lang=en",
    "iconName": "logo-twitter"
  },
  {
    "href": "https://www.santana.com/",
    "iconName": "cloudy"
  },
  {
    "href": "https://www.youtube.com/user/santanaofficial",
    "iconName": "logo-youtube"
  }
  
];



//  Create the Header
var div = addHTMLElement('div', header, '', ['flex-container', 'header-container']);
addHTMLElement('h1', div, "Carlos Santana");
var nav = addHTMLElement('nav', div, '', ["topNav"]);
navItems.forEach(item => {
  addLink(item, nav);
});



//  Create the footer
footer.classList.add('flex-container');
var copy = document.createElement('span');
copy.innerHTML = '&copy;2019 Software School of Rock';
footer.appendChild(copy);

addHTMLElement('h4', footer, 'Connect with Carlos:');
var ul = addHTMLElement('ul', footer, '', ['flex-container']);
socialItems.forEach(item => {
  addSocialLink(item, ul);
})



show();

function show() {
  titleBox = document.querySelector('.overlay');
  titleBox.style.opacity = '1';
}

function addLink(linkObject, parent) {
  var link = document.createElement('a');
  link.href = linkObject.href;
  link.text = linkObject.title;
  parent.appendChild(link);
  return link;
}


function addHTMLElement(htmlTag, parent, htmlContent, classArray) {
  htmlElement = document.createElement(htmlTag);
  htmlElement.textContent = htmlContent;
  if (classArray !== undefined) {
    classArray.forEach(htmlClass => {
      htmlElement.classList.add(htmlClass);
    });
  }

  parent.appendChild(htmlElement);
  return htmlElement;
}


function addSocialLink(linkObject, parent) {
  var li = addHTMLElement('li', parent);
  var anchor = document.createElement('a');
  anchor.href = linkObject.href;
  li.appendChild(anchor);
  var icon = addHTMLElement('ion-icon',anchor);
  icon.setAttribute('name',linkObject.iconName);


}

