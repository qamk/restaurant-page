const createAbout = (root) => {
  const mainElement = document.createElement('main');
  const aboutSection = document.createElement('section');
  const aboutContainer = document.createElement('div');
  const aboutTitle = document.createElement('h2');
  const aboutPara = document.createElement('p');

  const contactContainer = document.createElement('div');
  const contactTitle = document.createElement('h2');
  const contactPara = document.createElement('p');
  
  aboutSection.classList = 'about-section';

  aboutTitle.innerHTML = 'About Us';
  aboutPara.innerHTML = 'We are a restaurant dedicated to bringing the mythological to life in the form of impossible-to-imagine and affordable food';

  contactTitle.innerHTML = 'Contact Us';
  contactPara.innerHTML = "We don't have a physical address just yet but you can reach us through Heimdall. You'll know it's him.";

  root.appendChild(mainElement);
  mainElement.appendChild(aboutSection);
  aboutSection.appendChild(aboutTitle);
  aboutSection.appendChild(aboutContainer);
    aboutContainer.appendChild(aboutPara);
  aboutSection.appendChild(contactTitle);
  aboutSection.appendChild(contactContainer);
    contactContainer.appendChild(contactPara);

}
export default createAbout;