export default function ContentItem(item) {
  console.log(item);
  const div_element = document.createElement("div");
  const h1_element = document.createElement("h1");
  h1_element.textContent = item.title;
  div_element.appendChild(h1_element);
  return div_element;
}
