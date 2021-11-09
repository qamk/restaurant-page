// Create nav-bar
export default createNavbar = (root) => {
  const headerElement = document.createElement('header');
  const navElement = document.createElement('nav');
  const ulElement = document.createElement('ul');

  root.appendChild(headerElement);
  headerElement.appendChild(navElement);
  navElement.appendChild(ulElement);

  for (let i=0; i<3; i++) {
    const listElement = document.createElement('li');
    ulElement.appendChild(listElement); 
  }

  headerElement.classList = 'navbar-header';
  navElement.classList = 'navbar';
  ulElement.classList = 'navbar-items';

}
