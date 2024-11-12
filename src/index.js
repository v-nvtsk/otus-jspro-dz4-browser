export function getPath(element) {
  if (!(element instanceof Element)) return null;
  let elem = element

  const path = [];
  while (elem) {
    if (elem.id) {
      path.unshift(`#${elem.id}`);
      break;
    }

    let selector = elem.tagName.toLowerCase();

    if (elem.className) {
      const classList = Array.from(elem.classList);
      selector += `.${classList.join('.')}`;
    }

    const currentElement = elem;
    const siblingElements = Array.from(elem.parentNode.children)
      .filter(sibling => sibling.tagName === currentElement.tagName);

    if (siblingElements.length > 1) {
      const index = siblingElements.indexOf(elem);
      selector += `:nth-of-type(${index + 1})`;
    }

    path.unshift(selector);
    elem = elem.parentElement;
  }

  return path.join(' > ');
}
