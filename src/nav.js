// Create nav-bar
const createNavbar = (root) => {
  const listText = ['Home', 'Menu', 'About']
  const headerElement = document.createElement('header');
  const navElement = document.createElement('nav');
  const ulElement = document.createElement('ul');

  root.appendChild(headerElement);
  headerElement.appendChild(navElement);
  navElement.appendChild(ulElement);

  for (let i=0; i<3; i++) {
    const listElement = document.createElement('li');
    listElement.id = listText[i];
    listElement.innerHTML = listText[i];
    ulElement.appendChild(listElement); 
  }

  headerElement.classList = 'navbar-header';
  navElement.classList = 'navbar';
  ulElement.classList = 'navbar-items';

}
export default createNavbar;