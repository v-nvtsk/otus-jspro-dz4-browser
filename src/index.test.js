import { getPath } from './index';

describe('getPath', () => {
  let container;

  beforeAll(() => {
    container = document.createElement('div');
    container.innerHTML = `
      <div class="parent-with-id" id="unique-id">
        <div class="child"></div>
        <div class="child special"></div>
      </div>
      <div class="parent">
        <div class="child"></div>
        <div class="child special"></div>
      </div>
    `;
    document.body.appendChild(container);
  });

  afterAll(() => {
    document.body.removeChild(container);
  });

  test('should return selector with id', () => {
    const element = document.getElementById('unique-id');
    const selector = getPath(element);
    expect(document.querySelector(selector)).toBe(element);
  });

  test('should return selector with class and nth-of-type', () => {
    const element = container.querySelector('.parent .special');
    const selector = getPath(element);
    expect(document.querySelector(selector)).toBe(element);
  });

  test('should return selector without id but with classes and nth-of-type', () => {
    const element = container.querySelector('.parent .child');
    const selector = getPath(element);
    expect(document.querySelector(selector)).toBe(element);
  });

  test('should return selector with parent with id and with classes and nth-of-type', () => {
    const element = container.querySelector('.parent-with-id .child');
    const selector = getPath(element);
    expect(document.querySelector(selector)).toBe(element);
  });

  test('should return null on not existing element', () => {
    const selector = getPath(null);
    expect(document.querySelector(selector)).toBeNull();
  });
});
