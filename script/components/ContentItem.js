import { SingleItem } from "./SingleItem.js";

export default function ContentItem(item) {
  const div_element = document.createElement("div");
  div_element.classList.add("grid-column");

  const h2_element = document.createElement("h2");
  h2_element.classList.add("subsection-header");
  h2_element.textContent = item.title;
  div_element.appendChild(h2_element);

  const container = document.createElement("ul");
  container.className = "grid-column-container";

  item.data.forEach((element) => {
    const single_item_element = SingleItem({ data: element });
    container.appendChild(single_item_element);
  });

  div_element.appendChild(container);
  return div_element;
}
