# Реализация функции для поиска уникального CSS-селектора

## Описание
Разработана функция `getPath()` для определения уникального CSS-селектора HTML-элемента в документе. Селектор, возвращаемый функцией, совместим с `document.querySelector()` и гарантирует, что вызов `document.querySelectorAll()` с этим селектором найдет только исходный элемент.

## Ключевые особенности
- **Алгоритм** обеспечивает генерацию селектора, который однозначно идентифицирует элемент в структуре документа.
- **Пример использования:**
  ```javascript
  const element = document.querySelector('ul li:first-child');
  const selector = getPath(element); // => "body div.someclass ul li:first-child"
  console.log(document.querySelector(selector) === element); // true
