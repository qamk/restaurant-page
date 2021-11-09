export default createMenu = (root) => {
  const mainElement = document.createElement('main');
  const menuSection = document.createElement('section');
  const articleElement = document.createElement('article');
  const textContainer = document.createElement('div');
  const paraElement = document.createElement('p');
  const footnoteElement = document.createElement('p');

  root.appendChild(mainElement);
    mainElement.appendChild(menuSection);
      menuSection.appendChild(articleElement);
        articleElement.appendChild(textContainer);
          textContainer.appendChild(paraElement);
            textContainer.appendChild(footnoteElement);

  articleElement.classList = 'menu-container';
  textContainer.classList = 'menu-text-container';
  paraElement.innerHTML = "Seabass with a side of chips in draupnir sauce (get more than your money's worth 9 days after your first visit!)\t150 gold\nRoasted vegetables & halloumi on Gungnir\t300 gold\nSeasonal fruit served in Hringhorni (a replica obviously)\t900 gold"
  footnoteElement.classList = 'footnote';
  footnoteElement.innerHTML = 'Prices are not inflation-adjusted. You must manually convert using year of Ragnarok as a base year!'
}