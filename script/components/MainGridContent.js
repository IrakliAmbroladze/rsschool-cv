import ContentItem from "./ContentItem.js";

export const MainGridContent = () => {
  const section_element = document.getElementById("main-grid-content");
  section_element.classList.add("grid");
  section_element.textContent = "test connecting to js";
  const div_element = ContentItem();
  section_element.appendChild(div_element);
};
