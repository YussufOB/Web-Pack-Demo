import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash now imported for binding this script
  element.innerHTML = _.join(['Welcome our', 'dear student to Webpack Module'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());