function component() {
  let element = document.createElement('div');
  element.innerHTML = 'Hello, Webpack Number 2!';
  return element;
}

document.body.appendChild(component());