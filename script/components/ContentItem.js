export default function ContentItem(item) {
  const div_element = document.createElement("div");
  div_element.classList.add("grid-column");
  const h2_element = document.createElement("h2");
  h2_element.classList.add("subsection-header");
  h2_element.textContent = item.title;
  div_element.appendChild(h2_element);
  return div_element;
}
