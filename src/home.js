const createHome = (root) => {
  const mainElement = document.createElement('main');
  const sectionElement = document.createElement('section');

  root.appendChild(mainElement);
  mainElement.appendChild(sectionElement);

  sectionElement.classList = 'section home-section';

  for (let i=0; i<3; i++) {
    const articleElement = document.createElement('article');
    const figureElement = document.createElement('figure');
    const captionContainer = document.createElement('div');
    const paraElement = document.createElement('p');

    articleElement.classList = 'card';
    captionContainer.classList = 'card-caption';

    sectionElement.appendChild(articleElement);
      articleElement.appendChild(figureElement);
    articleElement.appendChild(captionContainer);
      captionContainer.appendChild(paraElement);

    paraElement.id = `home-text-${i}`;
  }

  const firstText = document.getElementById('home-text-0');
  const secondText = document.getElementById('home-text-1');
  const thirdText = document.getElementById('home-text-2');

  firstText.innerHTML = 'Delectable starters';
  secondText.innerHTML = 'Unimaginable and legendary mains';
  thirdText.innerHTML = 'Magical desserts';

}
export default createHome;