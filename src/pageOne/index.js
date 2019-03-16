function component() {
  let element = document.createElement('div');
  element.innerHTML = 'Hello, Webpack Number 1!';
  return element;
}

document.body.appendChild(component());