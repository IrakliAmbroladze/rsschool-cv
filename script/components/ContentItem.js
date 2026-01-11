import { SingleItem } from "./SingleItem.js";

export default function ContentItem(item) {
  const div_element = document.createElement("div");
  div_element.classList.add("grid-column");
  const h2_element = document.createElement("h2");
  h2_element.classList.add("subsection-header");
  h2_element.textContent = item.title;
  div_element.appendChild(h2_element);
  const single_item_element = SingleItem({ data: item.data[1] });
  div_element.appendChild(single_item_element);
  return div_element;
}
