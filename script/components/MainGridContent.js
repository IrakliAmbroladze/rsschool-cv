import { MAIN_GRID_CONTENT } from "../constants/content.js";
import ContentItem from "./ContentItem.js";

export const MainGridContent = () => {
  const section_element = document.getElementById("main-grid-content");
  section_element.classList.add("grid");
  MAIN_GRID_CONTENT.map((item) => {
    const div_element = ContentItem(item);
    section_element.appendChild(div_element);
  });
};
